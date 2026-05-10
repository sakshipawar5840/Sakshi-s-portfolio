import { motion } from 'motion/react';

const skillCategories = [
  {
    title: "Backend & Frameworks",
    skills: ["Core Java", "Spring Boot", "Spring MVC", "Hibernate", "JSP", "Servlets"]
  },
  {
    title: "API & Security",
    skills: ["REST APIs", "Microservices", "Spring Security", "JWT Authentication"]
  },
  {
    title: "Frontend Development",
    skills: ["React.js", "JavaScript (ES6)", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"]
  },
  {
    title: "Database & Cloud",
    skills: ["MySQL", "JDBC", "AWS EC2", "AWS S3"]
  },
  {
    title: "Tools & Version Control",
    skills: ["Git", "GitHub", "Maven", "Postman", "VS Code"]
  },
  {
    title: "Core Concepts",
    skills: ["OOP", "Data Structures", "Collections", "Exception Handling", "JPA", "SDLC", "Agile"]
  }
];

export default function Skills() {
  return (
    <section className="py-20 relative" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Technical <span className="text-cyan-400">Arsenal</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-500/30 transition-colors"
            >
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <span 
                    key={j} 
                    className="px-3 py-1.5 text-sm font-medium rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
