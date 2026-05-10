import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Terminal, Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    // Check initial theme
    if (document.documentElement.classList.contains('light-mode')) {
      setIsLightMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isLightMode) {
      document.documentElement.classList.remove('light-mode');
      setIsLightMode(false);
    } else {
      document.documentElement.classList.add('light-mode');
      setIsLightMode(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Active section highlighting
      const sections = ['about', 'skills', 'projects', 'hire-me', 'experience', 'contact'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 200)) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Why Hire Me', href: '#hire-me' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-300 ${isScrolled ? 'glass-panel shadow-lg shadow-black/20' : 'bg-transparent'}`}>
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all">
              S
            </div>
            <span className="font-display font-bold text-lg tracking-tight">Sakshi's <span className="text-cyan-400">Portfolio</span></span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className={`text-sm font-medium transition-colors ${isActive ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-400'}`}
                >
                  {link.name}
                </a>
              );
            })}
            
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-cyan-400 transition-colors"
              aria-label="Toggle theme"
            >
              {isLightMode ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <a href="#contact" className="px-4 py-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500 hover:text-slate-950 transition-all text-sm font-semibold flex items-center gap-2">
              <Terminal size={16} />
              Hire Me
            </a>
          </nav>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-300 hover:text-cyan-400 transition-colors"
            >
              {isLightMode ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button className="text-slate-300 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-4 right-4 mt-2 glass-panel rounded-2xl p-4 flex flex-col gap-4 shadow-2xl"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a 
                key={link.name} 
                href={link.href} 
                className={`font-medium p-2 rounded-lg transition-colors ${isActive ? 'text-cyan-400 bg-white/5' : 'text-slate-300 hover:text-cyan-400 hover:bg-white/5'}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            );
          })}
        </motion.div>
      )}
    </header>
  );
}
