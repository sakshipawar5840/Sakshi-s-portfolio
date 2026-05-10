import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Download } from 'lucide-react';
import resumePdf from '../assets/Sakshi_Pawar_Resume.pdf';
import ResumeContent from './ResumeContent';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" style={{ perspective: '1000px' }}>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotateX: 10, y: 20 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, rotateX: -10, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-slate-100 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-800"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-300 bg-slate-200">
              <h3 className="text-lg font-semibold text-slate-800">Sakshi_Pawar_Resume.pdf</h3>
              <div className="flex items-center gap-2">
                <a
                  href={resumePdf}
                  download="Sakshi_Pawar_Resume.pdf"
                  className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-300 rounded-lg transition-colors"
                  title="Download"
                >
                  <Download size={20} />
                </a>
                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-300 rounded-lg transition-colors"
                  title="Open in new tab"
                >
                  <ExternalLink size={20} />
                </a>
                <button
                  onClick={onClose}
                  className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-300 rounded-lg transition-colors"
                  title="Close"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            
            {/* Body - HTML Resume rendering */}
            <div className="flex-1 w-full bg-slate-100 relative overflow-y-auto px-4 py-8 sm:px-6 md:px-12 font-sans selection:bg-cyan-200">
              <ResumeContent id="resume-content-modal" />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
