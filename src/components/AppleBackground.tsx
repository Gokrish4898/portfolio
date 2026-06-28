import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AppleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = ["hero", "about", "skills", "projects", "experience", "education", "achievements", "contact"];
    const backgroundLayers = gsap.utils.toArray<HTMLElement>(".bg-slide-layer");

    if (backgroundLayers.length === 0) return;

    // Set initial states: Hero (layer 0) is fully visible, subsequent layers are positioned offset below
    gsap.set(backgroundLayers.slice(1), { yPercent: 100 });

    sections.forEach((sectionId, index) => {
      const sectionEl = document.getElementById(sectionId);
      if (!sectionEl || index === 0) return;

      // ScrollTrigger slides the corresponding background layer up as the section enters the bottom of the viewport
      ScrollTrigger.create({
        trigger: sectionEl,
        start: "top bottom",
        end: "top top",
        scrub: true,
        animation: gsap.to(backgroundLayers[index], {
          yPercent: 0,
          ease: "none",
        }),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#080809]">
      {/* Background slide layers */}
      {/* Layer 0: Hero (Mesh dark glow) */}
      <div className="bg-slide-layer absolute inset-0 z-[0] bg-gradient-to-b from-[#080809] to-[#121214] opacity-100" />
      {/* Layer 1: About (Deep charcoal mesh) */}
      <div className="bg-slide-layer absolute inset-0 z-[1] bg-gradient-to-b from-[#121214] to-[#161619] opacity-100" />
      {/* Layer 2: Skills (Technical dark blue matrix glow) */}
      <div className="bg-slide-layer absolute inset-0 z-[2] bg-gradient-to-b from-[#161619] to-[#0A0F1D] opacity-100" />
      {/* Layer 3: Projects (Clean cyber dark) */}
      <div className="bg-slide-layer absolute inset-0 z-[3] bg-gradient-to-b from-[#0A0F1D] to-[#111625] opacity-100" />
      {/* Layer 4: Experience (Heavy luxury grey) */}
      <div className="bg-slide-layer absolute inset-0 z-[4] bg-gradient-to-b from-[#111625] to-[#18181B] opacity-100" />
      {/* Layer 5: Education (Royal slate blue subtle gradient) */}
      <div className="bg-slide-layer absolute inset-0 z-[5] bg-gradient-to-b from-[#18181B] to-[#0E172C] opacity-100" />
      {/* Layer 6: Achievements (Platinum dark gold mesh) */}
      <div className="bg-slide-layer absolute inset-0 z-[6] bg-gradient-to-b from-[#0E172C] to-[#1C1A14] opacity-100" />
      {/* Layer 7: Contact (Space Black) */}
      <div className="bg-slide-layer absolute inset-0 z-[7] bg-gradient-to-b from-[#1C1A14] to-[#080809] opacity-100" />
      
      {/* Global subtle grid overlay to preserve developer portfolio feel */}
      <div className="absolute inset-0 z-[8] opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
    </div>
  );
}
