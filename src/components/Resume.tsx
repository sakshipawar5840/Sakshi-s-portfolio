import { motion } from 'motion/react';
import { FileText, Eye } from 'lucide-react';
import resumePdf from '../assets/Sakshi_Pawar_Resume.pdf';
import { useState } from 'react';
import ResumeModal from './ResumeModal';

export default function Resume() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 relative" id="resume">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12 rounded-3xl border border-cyan-500/30 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"></div>
          
          <div className="relative z-10">
            <div className="w-20 h-20 mx-auto bg-slate-900 rounded-2xl flex items-center justify-center mb-6 shadow-xl border border-slate-700">
              <FileText size={40} className="text-cyan-400" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Ready for a deeper dive?</h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Want a quick overview of my skills, projects, and experience? Download my resume to see how I can add value to your engineering team.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-lg transition-all shadow-[0_0_20px_rgba(0,0,0,0.2)] hover:-translate-y-1"
              >
                <Eye size={24} />
                View Online
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
