import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Project Manager",
    text: "Sakshi delivered the project before the deadline with great quality. Her understanding of Spring Boot and backend architecture is exceptional.",
    rating: 5
  },
  {
    name: "Priya Desai",
    role: "Senior Frontend Developer",
    text: "Working with Sakshi was a breeze. Her REST APIs were well-documented, secure, and perfectly integrated with our React frontend.",
    rating: 5
  },
  {
    name: "Amit Verma",
    role: "Tech Lead",
    text: "A fast learner and a great team player. Sakshi writes clean, maintainable code and always focuses on scalable solutions.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 relative" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Client <span className="text-cyan-400">Testimonials</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">What people say about my work and dedication.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-3xl border border-slate-700/50 relative group hover:-translate-y-2 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 text-cyan-500/20 w-12 h-12 group-hover:text-cyan-500/40 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} size={16} className="fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-slate-300 mb-8 relative z-10 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
