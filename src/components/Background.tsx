import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isDark, setIsDark] = useState(false);

  const { scrollYProgress } = useScroll();

  // Parallax y-axis shift for the grid pattern to give a layered feel
  const gridY = useTransform(scrollYProgress, [0, 1], ["0px", "-150px"]);

  // Background geometric shapes rotation and scale transitions based on scroll depth
  const shapeScale1 = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const shapeScale2 = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const shapeRotate1 = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const shapeRotate2 = useTransform(scrollYProgress, [0, 1], [0, -90]);

  // Fade out geometric shapes slightly as we scroll down to avoid background clutter
  const shapesOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.05]);
  const canvasOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.15]);

  useEffect(() => {
    const checkTheme = () => setIsDark(document.documentElement.classList.contains('dark'));
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: {x: number, y: number, vx: number, vy: number, radius: number}[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const numParticles = Math.min(Math.floor((canvas.width * canvas.height) / 18000), 100);
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 0.5
        });
      }
    };

    const draw = () => {
      if(!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const color = isDark ? 'rgba(212, 255, 0, 0.3)' : 'rgba(37, 99, 235, 0.4)';
      const lineColor = isDark ? '212, 255, 0' : '37, 99, 235';
      
      ctx.fillStyle = color;
      
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Mouse attraction
        const dx = mousePos.x - p.x;
        const dy = mousePos.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 180) {
           p.x += dx * 0.015;
           p.y += dy * 0.015;
           
           ctx.beginPath();
           ctx.strokeStyle = `rgba(${lineColor}, ${0.2 * (1 - dist/180)})`;
           ctx.lineWidth = 1;
           ctx.moveTo(p.x, p.y);
           ctx.lineTo(mousePos.x, mousePos.y);
           ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize, { passive: true });
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos, isDark]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#F8FAFC] dark:bg-[#080809] transition-colors duration-1000">
      <motion.div 
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"
        style={{ 
          y: gridY,
          transform: `translate(${mousePos.x * -0.01}px, ${mousePos.y * -0.01}px)`
        }}
      />
      
      {/* Floating geometric shapes (Scroll-linked Parallax & Scale shifts) */}
      <motion.div 
        style={{ scale: shapeScale1, rotate: shapeRotate1, opacity: shapesOpacity }}
        className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] border border-[#2563EB]/10 dark:border-[#D4FF00]/5 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[2px]" 
      />
      <motion.div 
        style={{ scale: shapeScale2, rotate: shapeRotate2, opacity: shapesOpacity }}
        className="absolute bottom-[20%] right-[10%] w-[30vw] h-[30vw] max-w-[300px] max-h-[300px] border border-[#14B8A6]/10 dark:border-[#F5F5F7]/5 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[2px]" 
      />

      <motion.div style={{ opacity: canvasOpacity }} className="absolute inset-0">
        <canvas ref={canvasRef} className="w-full h-full" />
      </motion.div>

      {/* Cursor Spotlight */}
      <div 
        className="absolute w-[600px] h-[600px] bg-[#2563EB]/[0.05] dark:bg-[#D4FF00]/[0.02] rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 will-change-transform hidden md:block"
        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
      />
    </div>
  );
}
