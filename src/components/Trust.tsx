import { motion } from 'motion/react';
import { Code, Lock, Lightbulb, Target } from 'lucide-react';

const traits = [
  { icon: <Code />, title: "Clean Backend Logic", desc: "Writing maintainable, modular, and well-documented Java code." },
  { icon: <Lock />, title: "Secure Full Stack", desc: "Prioritizing data security, JWT auth, and safe API endpoints." },
  { icon: <Lightbulb />, title: "Industry-Ready Mindset", desc: "Continuously learning and adapting to modern software practices." },
  { icon: <Target />, title: "Problem Solving", desc: "Approaching complex bugs with a structured and analytical mindset." },
];

export default function Trust() {
  return (
    <section className="py-20 relative bg-slate-900/30 border-y border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What I <span className="text-cyan-400">Bring</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Professional traits that make me a reliable addition to your team.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {traits.map((trait, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-6 rounded-2xl text-center group hover:bg-slate-800/50 transition-colors"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform shadow-lg">
                {trait.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{trait.title}</h3>
              <p className="text-sm text-slate-400">{trait.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
