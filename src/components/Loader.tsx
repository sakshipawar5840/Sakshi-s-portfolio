import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800); // Wait a bit after reaching 100%
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 2;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative flex flex-col items-center">
        {/* Circular Progress & Outer glowing rings */}
        <div className="relative w-48 h-48 flex items-center justify-center mb-12 mt-6">
          {/* SVG Circular Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 z-20 overflow-visible">
            <circle
              cx="96"
              cy="96"
              r="92"
              fill="none"
              stroke="rgba(30, 41, 59, 0.5)"
              strokeWidth="2"
            />
            <motion.circle
              cx="96"
              cy="96"
              r="92"
              fill="none"
              stroke="url(#progress-gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ strokeDasharray: "578 578", strokeDashoffset: 578 }}
              animate={{ strokeDashoffset: 578 - (578 * progress) / 100 }}
              transition={{ ease: "easeOut" }}
              className="drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"
            />
            <defs>
              <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
          </svg>

          {/* Progress Value Text */}
          <div className="absolute -bottom-8 font-mono text-cyan-400 text-sm tracking-wider font-semibold flex items-center justify-center w-full">
            {Math.min(progress, 100)}%
          </div>

          {/* Spinning Rings */}
          <div className="absolute inset-4">
            <motion.div className="absolute inset-0 rounded-full border border-slate-800" />
            <motion.div 
              className="absolute inset-0 rounded-full border-t border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.5)]"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, ease: "linear", repeat: Infinity }}
            />
            <motion.div className="absolute inset-2 rounded-full border border-slate-800" />
            <motion.div 
              className="absolute inset-2 rounded-full border-b border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.4)]"
              initial={{ rotate: 360 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 3, ease: "linear", repeat: Infinity }}
            />
          </div>

          {/* Center Logo/Initial */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold text-5xl shadow-[0_0_30px_rgba(6,182,212,0.6)]"
          >
            <motion.div
               animate={{ rotateY: [0, 360] }}
               transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
            >
              S
            </motion.div>
          </motion.div>
        </div>

        {/* Text Details */}
        <div className="flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold text-white tracking-wider mb-2 mt-4"
          >
            SAKSHI <span className="text-cyan-400">PAWAR</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-slate-400 text-sm uppercase tracking-[0.3em]"
          >
            Portfolio Experience
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
