import { motion, useMotionValue, useSpring, useTransform, animate } from "motion/react";
import React, { useEffect, useRef, useState, ReactNode } from "react";

// Magnetic Button
export function MagneticButton({ children, className = "", onClick, href }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const middleX = clientX - (rect.left + rect.width / 2);
    const middleY = clientY - (rect.top + rect.height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative inline-block cursor-pointer ${className}`}
      onClick={onClick}
    >
      {href ? <a href={href} className="flex w-full h-full justify-center items-center">{children}</a> : children}
    </motion.div>
  );
}

// Tilt Card
export function TiltCard({ children, className = "" }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      className={`perspective-1000 ${className}`}
    >
      <div style={{ transform: "translateZ(20px)" }} className="h-full w-full">
         {children}
      </div>
    </motion.div>
  );
}

// CountUp
export function CountUp({ to, suffix = "", className = "" }: any) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const target = parseFloat(to.replace(/[^0-9.]/g, '')) || 0;
  const actualSuffix = to.replace(/[0-9.]/g, '') || suffix;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
       if(entries[0].isIntersecting) {
           const controls = animate(0, target, {
              duration: 2,
              ease: "easeOut",
              onUpdate: (v) => setCount(Math.floor(v))
           });
           return () => controls.stop();
       }
    }, { threshold: 0.5 });
    if(ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref} className={className}>{count}{actualSuffix}</span>;
}

export function TechTicker({ tools }: { tools: string[] }) {
    const duplicated = [...tools, ...tools, ...tools, ...tools];
    return (
        <div className="overflow-hidden w-full py-8 relative my-8">
            <div className="absolute inset-0 z-10 w-full pointer-events-none bg-gradient-to-r from-[#F8FAFC] via-transparent to-[#F8FAFC] dark:from-[#020617] dark:to-[#020617]" />
            <div className="flex animate-ticker gap-12 w-fit">
                {duplicated.map((t, i) => (
                    <span key={i} className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#0F172A] to-[#2563EB]/80 dark:from-[#E2E8F0] dark:to-[#60A5FA]/80 opacity-80 whitespace-nowrap px-4 tracking-wider">
                        {t}
                    </span>
                ))}
            </div>
        </div>
    )
}
