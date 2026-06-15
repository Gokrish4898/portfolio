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

  const links = ["About", "Skills", "Experience", "Projects", "Contributions", "Resume", "Contact"];

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-800 py-2" : "bg-transparent py-4"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <span className="font-bold text-xl text-gray-800 dark:text-gray-100 cursor-pointer transition-transform hover:scale-105 active:scale-95" onClick={() => window.scrollTo({top: 0, behavior:'smooth'})}>
            {portfolioData.personal.name.split(' ')[0]}<span className="text-blue-600">.dev</span>
          </span>
          
          <div className="hidden md:flex space-x-2 lg:space-x-4 items-center bg-gray-50/50 dark:bg-gray-800/50 px-4 py-1.5 rounded-full border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-md shadow-sm">
            {links.map((link) => {
              const isActive = activeSection === link.toLowerCase();
              return (
                <button 
                  key={link} 
                  onClick={() => scrollToSection(link)} 
                  className={`text-sm font-medium px-3 py-1.5 rounded-full transition-all relative ${isActive ? "text-blue-600 dark:text-blue-400" : "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-gray-700/50"}`}
                >
                  {link}
                  {isActive && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full" />}
                </button>
              );
            })}
            <div className="w-px h-5 bg-gray-300 dark:bg-gray-600 mx-1"></div>
            <button onClick={toggleDark} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors active:scale-90" aria-label="Toggle Theme">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button onClick={toggleDark} className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 active:scale-95" aria-label="Toggle Theme">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-2 rounded-md active:scale-95" aria-label="Menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 shadow-lg px-4 pt-2 pb-4 space-y-1 absolute w-full left-0 origin-top animate-in slide-in-from-top-2">
          {links.map((link) => (
            <button key={link} onClick={() => scrollToSection(link)} className={`block w-full text-left px-4 py-3 text-base font-medium rounded-md transition-colors ${activeSection === link.toLowerCase() ? "text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"}`}>
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
    <footer className="bg-transparent border-t border-gray-200/50 dark:border-gray-800/50 py-12 relative z-10 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <p className="text-gray-600 dark:text-gray-400 font-medium mb-6">
          © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-blue-600 transition-all hover:-translate-y-1">LinkedIn</a>
          <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-all hover:-translate-y-1">GitHub</a>
          <a href={`mailto:${portfolioData.personal.email}`} className="text-gray-500 hover:text-blue-600 transition-all hover:-translate-y-1">Email</a>
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
  
  if(!isVisible) return null;
  
  return (
      <button 
         onClick={() => window.scrollTo({top:0, behavior:'smooth'})}
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
