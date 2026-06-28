import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, MessageCircle, ArrowUp } from "lucide-react";
import { portfolioData } from "../data";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        return savedTheme === "dark";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  const links = ["About", "Skills", "Experience", "Projects", "Education", "Achievements", "Contact"];

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      let current = "";
      const sections = ['hero', ...links.map(l => l.toLowerCase())];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDark = () => setIsDark(!isDark);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#F8FAFC]/90 dark:bg-[#080809]/80 backdrop-blur-xl border-b border-[#E2E8F0] dark:border-white/5 py-2" : "bg-transparent py-4"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <span className="font-extrabold text-2xl text-[#0F172A] dark:text-white cursor-pointer transition-transform hover:scale-105 active:scale-95" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {portfolioData.personal.name.split(' ')[1]}<span className="text-[#2563EB] dark:text-[#D4FF00]">.dev</span>
          </span>

          <div className="hidden md:flex space-x-2 lg:space-x-4 items-center bg-[#FFFFFF]/80 dark:bg-[#121214]/80 px-5 py-2 rounded-full border border-[#E2E8F0]/80 dark:border-white/5 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
            {links.map((link) => {
              const isActive = activeSection === link.toLowerCase();
              return (
                <button
                  key={link}
                  onClick={() => scrollToSection(link)}
                  className={`text-sm font-bold px-4 py-1.5 rounded-full transition-all relative ${isActive ? "text-[#2563EB] dark:text-[#D4FF00]" : "text-[#475569] hover:text-[#2563EB] dark:text-[#86868B] dark:hover:text-[#D4FF00] hover:bg-[#F1F5F9] dark:hover:bg-[#080809]"}`}
                >
                  {link}
                  {isActive && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#2563EB] dark:bg-[#D4FF00] rounded-full shadow-[0_0_8px_rgba(212,255,0,0.8)]" />}
                </button>
              );
            })}
            <div className="w-px h-6 bg-[#E2E8F0] dark:bg-white/10 mx-2"></div>
            <button onClick={toggleDark} className="p-2 rounded-full hover:bg-[#F1F5F9] dark:hover:bg-[#080809] text-[#0F172A] dark:text-white transition-colors active:scale-90" aria-label="Toggle Theme">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <button onClick={toggleDark} className="p-2.5 rounded-full bg-[#FFFFFF]/80 dark:bg-[#121214]/80 border border-[#E2E8F0] dark:border-white/5 text-[#0F172A] dark:text-white shadow-sm active:scale-95" aria-label="Toggle Theme">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="bg-[#FFFFFF]/80 dark:bg-[#121214]/80 border border-[#E2E8F0] dark:border-white/5 text-[#0F172A] dark:text-white p-2.5 rounded-xl shadow-sm active:scale-95" aria-label="Menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#F8FAFC]/95 dark:bg-[#080809]/95 backdrop-blur-2xl border-b border-[#E2E8F0] dark:border-white/5 shadow-2xl px-6 pt-4 pb-6 space-y-2 absolute w-full left-0 origin-top animate-in slide-in-from-top-4">
          {links.map((link) => (
            <button key={link} onClick={() => scrollToSection(link)} className={`block w-full text-left px-5 py-4 text-lg font-bold rounded-xl transition-colors ${activeSection === link.toLowerCase() ? "text-[#2563EB] bg-[#2563EB]/10 dark:text-[#D4FF00] dark:bg-[#D4FF00]/10" : "text-[#0F172A] hover:text-[#2563EB] hover:bg-[#FFFFFF] dark:text-white dark:hover:bg-[#121214]"}`}>
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-transparent border-t border-[#E2E8F0] dark:border-white/5 py-12 relative z-10 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <p className="text-gray-600 dark:text-[#86868B] font-medium mb-6">
          © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-blue-600 dark:hover:text-[#D4FF00] transition-all hover:-translate-y-1">LinkedIn</a>
          <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-[#D4FF00] transition-all hover:-translate-y-1">GitHub</a>
          <a href={`mailto:${portfolioData.personal.email}`} className="text-gray-500 hover:text-blue-600 dark:hover:text-[#D4FF00] transition-all hover:-translate-y-1">Email</a>
        </div>
      </div>
    </footer>
  );
}


export function WhatsAppButton() {
  const url = `https://wa.me/${portfolioData.personal.whatsapp}?text=${encodeURIComponent("Hello I found your portfolio and would like to discuss an opportunity.")}`;
  return (
    <a href={url} target="_blank" rel="noreferrer" className="fixed bottom-6 left-6 md:left-auto md:right-6 z-40 bg-[#25D366] hover:bg-[#1EBE5D] text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110 active:scale-95 group" aria-label="Message on WhatsApp">
      <MessageCircle size={28} className="group-hover:animate-pulse" />
    </a>
  );
}

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-24 right-6 z-40 bg-gray-800 hover:bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white p-3 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95 hidden md:flex items-center justify-center"
      aria-label="Back to Top"
    >
      <ArrowUp size={24} />
    </button>
  )
}

export function Background() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-100 dark:opacity-0 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:32px_32px] opacity-0 dark:opacity-100 transition-opacity duration-500" />

      {/* Mobile-friendly fallback gradient fade overlay */}
      <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/70" />

      {/* Dynamic Glow */}
      <div
        className="absolute w-[800px] h-[800px] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 hidden md:block will-change-transform"
        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
      />
    </div>
  );
}
