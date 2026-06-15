/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { StrictMode } from 'react';
import { Navbar, Footer, WhatsAppButton, Background, BackToTop } from './components/Layout';
import { Hero, About, Skills, Experience, Projects, Contributions, Resume, Contact } from './components/Sections';
import { ScrollProgress } from './components/Animations';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen relative selection:bg-blue-600 selection:text-white dark:selection:bg-blue-500">
      <Background />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1 w-full mt-14">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contributions />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
