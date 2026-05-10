import { motion } from 'motion/react';
import { BookOpen, Cpu, Cloud, Zap, Layers } from 'lucide-react';

const learning = [
  { icon: <Layers size={18} />, text: "Advanced Spring Boot Concepts" },
  { icon: <Cpu size={18} />, text: "Microservices Architecture" },
  { icon: <BookOpen size={18} />, text: "System Design Basics" },
  { icon: <Cloud size={18} />, text: "Cloud Deployment Practices" },
  { icon: <Zap size={18} />, text: "Backend Performance Optimization" },
];

export default function Learning() {
  return (
    <section className="py-20 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-3xl border border-slate-700/50"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">Currently <br/><span className="text-cyan-400">Learning</span></h2>
              <p className="text-slate-400 text-sm">Always upgrading my skills to build better software.</p>
            </div>
            <div className="md:w-2/3 w-full">
              <div className="flex flex-wrap gap-3">
                {learning.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-sm font-medium"
                  >
                    <span className="text-cyan-400">{item.icon}</span>
                    {item.text}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
