/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { Navbar, Footer, WhatsAppButton, BackToTop } from './components/Layout';
import { AppleBackground } from './components/AppleBackground';
import { Hero, About, Skills, Experience, Projects, Education, Achievements, Contact } from './components/Sections';
import { ScrollProgress } from './components/Animations';
import Lenis from 'lenis';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    let frameId: number;
    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative bg-[#F8FAFC] dark:bg-[#080809] transition-colors duration-500">
      <AppleBackground />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1 w-full mt-14">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}

