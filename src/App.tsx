/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyHireMe from './components/WhyHireMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Experience from './components/Experience';
import Education from './components/Education';
import Resume from './components/Resume';
import Trust from './components/Trust';
import Testimonials from './components/Testimonials';
import Learning from './components/Learning';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import BackgroundGrid from './components/BackgroundGrid';
import Loader from './components/Loader';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-cyan-500/30 font-sans">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <div key="content">
            <BackgroundGrid />
            <ScrollProgress />
            <Navbar />
            <main className="relative z-10">
              <Hero />
              <About />
              <WhyHireMe />
              <Skills />
              <Projects />
              <Stats />
              <Testimonials />
              <Experience />
              <Education />
              <Resume />
              <Trust />
              <Learning />
              <Contact />
            </main>
            <Footer />
            <BackToTop />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
