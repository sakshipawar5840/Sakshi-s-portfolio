import { motion } from 'motion/react';
import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  return (
    <section className="py-20 relative bg-slate-900/20 border-y border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Education */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <GraduationCap size={24} />
              </div>
              <h2 className="text-2xl font-display font-bold">Education</h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-6 rounded-2xl border-l-4 border-l-cyan-500"
            >
              <h3 className="text-xl font-bold text-white mb-1">Bachelor of Computer Application (BCA)</h3>
              <p className="text-lg text-cyan-400 mb-4">Savitribai Phule Pune University</p>
              <div className="flex items-center justify-between text-sm text-slate-400 font-medium">
                <span>CGPA: <strong className="text-white">6.49</strong></span>
                <span>2022 – 2025</span>
              </div>
            </motion.div>
          </div>

          {/* Certifications */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                <Award size={24} />
              </div>
              <h2 className="text-2xl font-display font-bold">Certifications</h2>
            </motion.div>

            <div className="grid gap-4">
              {[
                "Java Full Stack Development",
                "Spring Boot and Hibernate",
                "AWS Cloud Fundamentals",
                "Artificial Intelligence Basics"
              ].map((cert, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-panel p-4 rounded-xl flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                  <span className="text-slate-200 font-medium">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
