import { motion, useScroll, useSpring } from "motion/react";
import { ReactNode, Key } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  key?: Key | null;
}

export function FadeIn({ children, delay = 0, className = "" }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerCard({ children, delay = 0, className = "" }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.4, delay }}
      className={`transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 origin-left bg-[#2563EB] dark:bg-[#D4FF00] z-[60]"
      style={{ scaleX }}
    />
  );
}

import { useRef } from "react";
import { useTransform } from "motion/react";

export function ScrollScrubImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0.1, 0.55], [0.75, 1.05]);
  const clipPath = useTransform(
    scrollYProgress,
    [0.1, 0.55],
    [
      "inset(15% 15% 15% 15% round 24px)",
      "inset(0% 0% 0% 0% round 0px)"
    ]
  );

  return (
    <div ref={containerRef} className={`relative overflow-hidden w-full h-full ${className}`}>
      <motion.img
        style={{ scale, clipPath }}
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

export const staggerItem = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15
    }
  }
};

