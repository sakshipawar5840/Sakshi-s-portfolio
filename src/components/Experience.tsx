import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <section className="py-20 relative" id="experience">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Professional <span className="text-cyan-400">Experience</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative pl-8 md:pl-0">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 transform -translate-x-1/2"></div>
          <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-slate-800 ml-3.5"></div>

          {/* Experience Item */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative md:w-1/2 md:pr-12 md:ml-auto md:pl-12"
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-0 top-6 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center transform -translate-x-1/2 md:-translate-x-1/2 z-10">
              <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
            </div>

            <div className="glass-card p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/30 transition-colors relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Briefcase size={20} className="text-cyan-400" />
                  Junior Software Engineer Intern
                </h3>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium">
                  <Calendar size={14} /> 2025 - 2026 (Present)
                </span>
              </div>
              <h4 className="text-lg font-medium text-cyan-400 mb-6">Cravita Technologies India Pvt. Ltd.</h4>
              
              <ul className="space-y-3">
                {[
                  "Developed backend modules using Java and Spring Boot",
                  "Built and tested REST APIs",
                  "Integrated MySQL database using Hibernate ORM",
                  "Worked on CRUD operations and backend logic",
                  "Tested APIs using Postman",
                  "Used Git for version control",
                  "Assisted in AWS EC2 deployment"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
