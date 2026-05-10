import { motion } from 'motion/react';
import { Lightbulb, Zap, Users, Code, ArrowRight, Mail } from 'lucide-react';

const reasons = [
  { 
    icon: <Lightbulb className="text-yellow-400" size={28} />,
    title: "Problem Solver", 
    desc: "I break down complex problems into manageable, logical steps to build efficient solutions." 
  },
  { 
    icon: <Zap className="text-cyan-400" size={28} />,
    title: "Fast Learner", 
    desc: "Adaptable and quick to grasp new technologies, frameworks, and business domains." 
  },
  { 
    icon: <Users className="text-purple-400" size={28} />,
    title: "Team Player", 
    desc: "Excellent communicator who thrives in collaborative, agile team environments." 
  },
  { 
    icon: <Code className="text-green-400" size={28} />,
    title: "Clean Code", 
    desc: "Committed to writing maintainable, scalable, and well-documented code following best practices." 
  },
];

const stats = [
  { value: "5+", label: "Projects Completed" },
  { value: "100+", label: "DSA Problems Solved" },
  { value: "Strong", label: "in Java & Web Dev" },
];

export default function WhyHireMe() {
  return (
    <section className="py-24 relative bg-slate-950 border-y border-slate-800/50" id="hire-me">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Why <span className="text-cyan-400">Hire Me?</span></h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            I focus on building efficient, scalable, and user-friendly solutions. Here is what I bring to your engineering team.
          </p>
        </motion.div>

        {/* 4 Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-3xl border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-800/80 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{reason.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 rounded-3xl text-center border border-slate-700/50"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-10 md:p-16 text-center border border-cyan-500/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Work Together</h3>
            <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
              I am actively looking for full-time roles where I can contribute to impactful projects and grow as a developer.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contact" className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-lg transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:-translate-y-1">
                Hire Me <ArrowRight size={20} />
              </a>
              <a href="#contact" className="px-8 py-4 rounded-xl glass-panel hover:bg-white/10 text-white font-bold text-lg transition-all flex items-center gap-2 border border-slate-600 hover:border-slate-400 hover:-translate-y-1">
                Contact Me <Mail size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
