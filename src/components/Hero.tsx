import { motion } from 'motion/react';
import { ArrowRight, Terminal, Code2, Database, Server, ChevronRight, Eye } from 'lucide-react';
import { useEffect, useState } from 'react';
import resumePdf from '../assets/Sakshi_Pawar_Resume.pdf';
import ResumeModal from './ResumeModal';

const roles = [
  "Java Developer",
  "Full Stack Developer",
  "Spring Boot Developer",
  "Backend Engineer"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-mono mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Open to Work
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight mb-4">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Sakshi Pawar</span>
            </h1>
            
            <div className="h-10 mb-6 flex items-center justify-center gap-2 text-2xl sm:text-3xl font-bold text-slate-200">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-white"
              >
                {roles[roleIndex]}
              </motion.span>
              <span className="animate-pulse text-cyan-500">_</span>
              <span className="ml-2">🚀</span>
            </div>

            <p className="text-xl text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto">
              Building Scalable & Modern Web Applications
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a href="#projects" className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                View Projects <ArrowRight size={18} />
              </a>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 rounded-xl glass-panel hover:bg-white/5 text-white font-semibold transition-all flex items-center gap-2"
              >
                <Eye size={18} /> View Resume
              </button>
              <a href="#contact" className="px-6 py-3 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white transition-all font-semibold flex items-center gap-2">
                Contact Me
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Code2 size={16} />
                </div>
                3+ Major Projects
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <Server size={16} />
                </div>
                20+ REST APIs
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Database size={16} />
                </div>
                Spring Security + JWT
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
