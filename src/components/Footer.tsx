import { Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-800/50 bg-slate-950 text-center relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Terminal size={20} className="text-cyan-500" />
          <span className="font-display font-bold text-xl">Sakshi's <span className="text-cyan-400">Portfolio</span></span>
        </div>
        <p className="text-slate-400 text-sm mb-2">Java Full Stack Developer</p>
        <p className="text-slate-500 text-xs font-mono">
          Built with React, Tailwind, and a passion for clean code.
        </p>
        <div className="mt-6 text-slate-600 text-xs">
          &copy; {new Date().getFullYear()} Sakshi Pawar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
