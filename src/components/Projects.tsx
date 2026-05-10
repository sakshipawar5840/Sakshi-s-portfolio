import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, Code2, Globe } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: "RecruitEase – HR Recruitment Portal",
    impact: "Built a secure recruitment platform with scalable backend workflows.",
    businessValue: "Streamlined the hiring process by reducing manual screening time and centralizing candidate tracking.",
    desc: "A full-stack HR recruitment portal built for managing job postings, candidate workflows, and secure role-based access.",
    tech: ["Java", "Spring Boot", "React.js", "Hibernate", "MySQL", "Spring Security", "JWT"],
    features: [
      "Developed 12+ REST APIs",
      "Role-based authentication",
      "Candidate and recruiter workflow management",
      "Full-stack architecture"
    ],
    github: "https://github.com/sakshipawar5840/recruitease",
    live: "#",
    color: "from-blue-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "EduManage – Institute Management System",
    impact: "Designed a full-stack management system with structured academic workflows.",
    businessValue: "Improved administrative efficiency by digitizing student records and automating course management.",
    desc: "A role-based institute management system for managing students, trainers, and courses.",
    tech: ["Spring Boot", "React.js", "MySQL", "REST APIs"],
    features: [
      "Developed 10+ REST APIs",
      "CRUD operations",
      "Role-based access",
      "Course and user management"
    ],
    github: "https://github.com/sakshipawar5840/EduManage",
    live: "#",
    color: "from-purple-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "AnnySMusic – Artist Portfolio Website",
    impact: "Built a responsive business-focused portfolio with admin and booking features.",
    businessValue: "Enhanced online presence and client engagement, leading to increased booking inquiries for the artist.",
    desc: "A responsive artist portfolio and booking management platform.",
    tech: ["HTML5", "CSS3", "JavaScript", "Node.js", "MySQL"],
    features: [
      "Responsive UI",
      "Admin authentication",
      "Booking management functionality",
      "User-friendly design"
    ],
    github: "https://github.com/sakshipawar5840/AnnySMusic",
    live: "#",
    color: "from-emerald-500 to-teal-500",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "PaySecure India – Smart Digital Banking System",
    impact: "Built a secure banking application with real-world fintech features.",
    businessValue: "Ensured secure transactions and user trust through robust fraud detection, real-time analytics, and JWT authentication.",
    desc: "A full-stack secure banking application simulating digital banking features like secure login, money transfers, and transaction tracking.",
    tech: ["Java", "Spring Boot", "React.js", "MySQL", "Tailwind CSS", "Spring Security"],
    features: [
      "JWT Auth & Role-based Access",
      "Secure Money Transfers",
      "Fraud Detection System",
      "Analytics Dashboard"
    ],
    github: "https://github.com/sakshipawar5840/paysecure-india",
    live: "#",
    color: "from-indigo-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Projects() {
  return (
    <section className="py-20 relative" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Featured <span className="text-cyan-400">Projects</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Real-world applications showcasing my full-stack capabilities.</p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-card rounded-3xl overflow-hidden border border-slate-700/50 group hover:border-cyan-500/30 transition-all duration-300 shadow-lg hover:shadow-[0_0_40px_rgba(6,182,212,0.1)]"
            >
              <div className="grid lg:grid-cols-12 gap-0">
                {/* Project Visual */}
                <div className={`lg:col-span-5 relative overflow-hidden bg-gradient-to-br ${project.color} p-8 flex items-center justify-center min-h-[300px]`}>
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
                  <div className="relative z-10 w-full max-w-sm rounded-xl shadow-2xl overflow-hidden transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-500 border border-white/10 bg-slate-900">
                    <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/80 border-b border-white/5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="relative aspect-video w-full bg-slate-800">
                      <img 
                        src={project.image} 
                        alt={`${project.title} screenshot`} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:col-span-7 p-8 lg:p-10 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-cyan-400 text-xs font-bold tracking-wider uppercase mb-4">
                    <Code2 size={14} /> Featured Project
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-cyan-400 font-medium mb-4">{project.impact}</p>
                  
                  <div className="mb-4 p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/10">
                    <p className="text-sm text-slate-300 italic">
                      <span className="font-semibold text-cyan-400 not-italic mr-2">💡 Problem Solved:</span>
                      {project.businessValue}
                    </p>
                  </div>

                  <p className="text-slate-400 mb-6 leading-relaxed">{project.desc}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">Key Features</h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {project.features.map((feat, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t, j) => (
                      <span key={j} className="px-3 py-1 text-xs font-mono rounded-md bg-slate-800 text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mt-auto">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white font-semibold hover:bg-slate-700 hover:border-slate-600 transition-all hover:-translate-y-0.5"
                    >
                      <Github size={18} /> Repository
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
