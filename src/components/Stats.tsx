import { motion } from 'motion/react';

const stats = [
  { value: "3+", label: "Major Projects Completed" },
  { value: "20+", label: "REST APIs Designed" },
  { value: "100%", label: "Secure Authentication" },
  { value: "Full", label: "Stack Experience" },
];

export default function Stats() {
  return (
    <section className="py-12 relative border-y border-slate-800/50 bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-slate-800/50">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center px-4"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-slate-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
