import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Phone, MessageCircle, MapPin, ExternalLink } from 'lucide-react';

const contactMethods = [
  {
    icon: <Phone size={24} />,
    title: "Phone",
    value: "+91 9673259294",
    link: "tel:+919673259294",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    hover: "group-hover:bg-blue-500 group-hover:text-slate-900"
  },
  {
    icon: <MessageCircle size={24} />,
    title: "WhatsApp",
    value: "Chat with me",
    link: "https://wa.me/919673259294",
    color: "text-green-400",
    bg: "bg-green-500/10",
    hover: "group-hover:bg-green-500 group-hover:text-slate-900"
  },
  {
    icon: <Mail size={24} />,
    title: "Email",
    value: "sakshipa5688@gmail.com",
    link: "mailto:sakshipa5688@gmail.com",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    hover: "group-hover:bg-cyan-500 group-hover:text-slate-900"
  },
  {
    icon: <Linkedin size={24} />,
    title: "LinkedIn",
    value: "sakshipawar88",
    link: "https://linkedin.com/in/sakshipawar88",
    color: "text-blue-500",
    bg: "bg-blue-600/10",
    hover: "group-hover:bg-blue-600 group-hover:text-white"
  },
  {
    icon: <Github size={24} />,
    title: "GitHub",
    value: "sakshipawar5840",
    link: "https://github.com/sakshipawar5840",
    color: "text-slate-300",
    bg: "bg-slate-700/50",
    hover: "group-hover:bg-slate-200 group-hover:text-slate-900"
  }
];

export default function Contact() {
  return (
    <section className="py-24 relative bg-slate-900/50 border-t border-slate-800/50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-mono mb-6 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            Available for Hiring
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Let's Connect and <span className="text-cyan-400">Build Something Amazing</span></h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I'm currently looking for new opportunities as a Java Full Stack Developer.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactMethods.map((method, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <a 
                href={method.link}
                target={method.link.startsWith('http') ? "_blank" : undefined}
                rel={method.link.startsWith('http') ? "noopener noreferrer" : undefined}
                className="glass-card p-6 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300 border border-slate-700/50 hover:border-cyan-500/30 h-full relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-800/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className={`w-16 h-16 rounded-2xl ${method.bg} flex items-center justify-center ${method.color} ${method.hover} transition-all duration-300 mb-4 shadow-lg relative z-10`}>
                  {method.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 relative z-10">{method.title}</h3>
                <p className="text-slate-400 font-medium group-hover:text-cyan-300 transition-colors relative z-10 flex items-center gap-2">
                  {method.value}
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-2 group-hover:ml-0" />
                </p>
              </a>
            </motion.div>
          ))}
          
          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center border border-slate-700/50 h-full relative overflow-hidden">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4 shadow-lg">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Location</h3>
              <p className="text-slate-400 font-medium">Pune, Maharashtra, India</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
