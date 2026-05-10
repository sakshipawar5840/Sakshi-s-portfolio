import { motion } from 'motion/react';
import { Server, Layout, ShieldCheck, Database } from 'lucide-react';

const highlights = [
  { icon: <Server className="text-cyan-400" />, title: "Backend Development", desc: "Building robust, scalable architectures with Java and Spring Boot." },
  { icon: <Layout className="text-purple-400" />, title: "Full Stack Engineering", desc: "Connecting secure backends with responsive React.js frontends." },
  { icon: <Database className="text-blue-400" />, title: "REST API Design", desc: "Designing clean, documented, and efficient RESTful services." },
  { icon: <ShieldCheck className="text-green-400" />, title: "Secure Authentication", desc: "Implementing JWT and Spring Security for protected endpoints." },
];

export default function About() {
  return (
    <section className="py-20 relative" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">About <span className="text-cyan-400">Me</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-slate-300 text-lg leading-relaxed"
          >
            <p>
              I am a passionate <strong className="text-white">Java Full Stack Developer</strong> focused on building secure, scalable, and modern web applications. With a strong foundation in backend engineering and practical experience in frontend development, I bridge the gap between complex server logic and intuitive user interfaces.
            </p>
            <p>
              My approach to software development centers around clean architecture, efficient REST API design, and robust authentication systems. I thrive on solving practical problems and transforming requirements into production-ready code.
            </p>
            <p>
              Having hands-on project and internship experience, I am well-versed in the complete software development lifecycle and am ready to contribute to real-world software engineering teams.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 rounded-2xl hover:bg-slate-800/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
