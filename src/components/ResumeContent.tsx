import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export default function ResumeContent({ id = "resume-content" }: { id?: string }) {
  return (
    <div id={id} className="max-w-3xl mx-auto bg-white p-6 sm:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-sm border border-slate-200 text-slate-800 font-sans selection:bg-cyan-200">
      {/* Header Section */}
      <div className="text-center mb-8 border-b-2 border-slate-800 pb-6">
        <h1 className="text-3xl font-bold text-slate-900 uppercase tracking-widest mb-1">Sakshi Pawar</h1>
        <h2 className="text-lg text-slate-600 font-medium tracking-wide mb-4 italic">Java Full Stack Developer</h2>
        
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-slate-700">
          <span className="flex items-center gap-1"><Phone size={14}/> +91-9673259294</span>
          <span className="hidden sm:inline text-slate-300">|</span>
          <span className="flex items-center gap-1"><Mail size={14}/> sakshipawar5840@gmail.com</span>
          <span className="hidden sm:inline text-slate-300">|</span>
          <span className="flex items-center gap-1"><Linkedin size={14}/> LinkedIn</span>
          <span className="hidden sm:inline text-slate-300">|</span>
          <span className="flex items-center gap-1"><Github size={14}/> GitHub</span>
        </div>
        <div className="flex items-center justify-center gap-1 text-sm text-slate-700 mt-2">
          <MapPin size={14} /> Pune, Maharashtra
        </div>
      </div>

      {/* Summary */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-2 border-b border-slate-300 pb-1">Summary</h3>
        <p className="text-sm text-slate-800 leading-relaxed text-justify">
          Results-driven <strong>Java Full Stack Developer</strong> with experience in designing and developing scalable web applications using <strong>Java, Spring Boot, Hibernate, React.js, and MySQL</strong>. Proficient in <strong>RESTful API development, microservices architecture, and secure authentication using JWT and Spring Security</strong>. Experienced in <strong>AWS cloud deployment</strong>, Agile methodologies, and building high-performance, user-centric applications.
        </p>
      </div>

      {/* Technical Skills */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-2 border-b border-slate-300 pb-1">Technical Skills</h3>
        <ul className="text-sm text-slate-800 space-y-1">
          <li><span className="mr-2 text-slate-400">•</span><strong>Programming Languages:</strong> Java, JavaScript, C, C++</li>
          <li><span className="mr-2 text-slate-400">•</span><strong>Frontend Technologies:</strong> HTML5, CSS3, Bootstrap, React.js</li>
          <li><span className="mr-2 text-slate-400">•</span><strong>Backend Technologies:</strong> Spring Boot, Spring MVC, Hibernate, Servlets</li>
          <li><span className="mr-2 text-slate-400">•</span><strong>API Development:</strong> RESTful APIs, Microservices Architecture, API Integration</li>
          <li><span className="mr-2 text-slate-400">•</span><strong>Security:</strong> JWT Authentication, Spring Security</li>
          <li><span className="mr-2 text-slate-400">•</span><strong>Database Management:</strong> MySQL, JDBC</li>
          <li><span className="mr-2 text-slate-400">•</span><strong>Core Concepts:</strong> Object-Oriented Programming (OOP), MVC Architecture</li>
          <li><span className="mr-2 text-slate-400">•</span><strong>Tools & Platforms:</strong> Git, GitHub, Maven, Postman</li>
          <li><span className="mr-2 text-slate-400">•</span><strong>Cloud & Deployment:</strong> AWS EC2, AWS S3</li>
        </ul>
      </div>

      {/* Projects */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-3 border-b border-slate-300 pb-1">Projects</h3>
        
        <div className="mb-5">
          <div className="flex justify-between items-baseline">
            <h4 className="font-bold text-slate-900 text-base">RecruitEase – HR Recruitment Portal</h4>
            <span className="text-sm text-slate-600 font-medium whitespace-nowrap ml-4">Jan 2026</span>
          </div>
          <p className="text-sm text-slate-500 mb-2 italic">Tools: React.js, Spring Boot, RESTful APIs, Hibernate, MySQL</p>
          <ul className="text-sm text-slate-800 space-y-1">
            <li className="flex items-start"><span className="mr-2 text-slate-400 mt-0.5">•</span><span>Developed a full-stack recruitment platform improving hiring workflow efficiency by <strong>30%</strong></span></li>
            <li className="flex items-start"><span className="mr-2 text-slate-400 mt-0.5">•</span><span>Designed and implemented <strong>12+ RESTful APIs</strong> for job posting and candidate tracking</span></li>
            <li className="flex items-start"><span className="mr-2 text-slate-400 mt-0.5">•</span><span>Integrated <strong>role-based authentication</strong> using Spring Security and JWT to enhance security</span></li>
          </ul>
        </div>

        <div className="mb-5">
          <div className="flex justify-between items-baseline">
            <h4 className="font-bold text-slate-900 text-base">EduManage – Institute Management System</h4>
            <span className="text-sm text-slate-600 font-medium whitespace-nowrap ml-4">Dec 2025</span>
          </div>
          <p className="text-sm text-slate-500 mb-2 italic">Tools: React.js, Spring Boot, Hibernate, MySQL</p>
          <ul className="text-sm text-slate-800 space-y-1">
            <li className="flex items-start"><span className="mr-2 text-slate-400 mt-0.5">•</span><span>Built a full-stack institute management system handling student, trainer, and course modules</span></li>
            <li className="flex items-start"><span className="mr-2 text-slate-400 mt-0.5">•</span><span>Developed <strong>10+ RESTful APIs</strong> implementing CRUD operations using MVC architecture</span></li>
            <li className="flex items-start"><span className="mr-2 text-slate-400 mt-0.5">•</span><span>Implemented <strong>role-based access control</strong> using Spring Security for secure data management</span></li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between items-baseline">
            <h4 className="font-bold text-slate-900 text-base">PaySecure India – Online Payment System</h4>
            <span className="text-sm text-slate-600 font-medium whitespace-nowrap ml-4">Nov 2025</span>
          </div>
          <p className="text-sm text-slate-500 mb-2 italic">Tools: Spring Boot, RESTful APIs, MySQL</p>
          <ul className="text-sm text-slate-800 space-y-1">
            <li className="flex items-start"><span className="mr-2 text-slate-400 mt-0.5">•</span><span>Designed and developed a secure online payment system using Java and Spring Boot</span></li>
            <li className="flex items-start"><span className="mr-2 text-slate-400 mt-0.5">•</span><span>Implemented <strong>JWT-based authentication and authorization</strong> for secure transactions</span></li>
            <li className="flex items-start"><span className="mr-2 text-slate-400 mt-0.5">•</span><span>Applied encryption techniques to ensure data security and transaction integrity</span></li>
          </ul>
        </div>
      </div>

      {/* Experience */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-3 border-b border-slate-300 pb-1">Experience</h3>
        
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
          <h4 className="font-bold text-slate-900 text-base">Software Engineer Intern – Cravita Technologies</h4>
          <span className="text-sm text-slate-600 font-medium whitespace-nowrap sm:ml-4">July 2025 – Jan 2026</span>
        </div>
        <ul className="text-sm text-slate-800 space-y-1 mt-2">
          <li className="flex items-start"><span className="mr-2 text-slate-400 mt-0.5">•</span><span>Developed and optimized backend services using <strong>Java, Spring Boot, and RESTful APIs</strong></span></li>
          <li className="flex items-start"><span className="mr-2 text-slate-400 mt-0.5">•</span><span>Integrated MySQL database using Hibernate ORM for efficient data handling</span></li>
          <li className="flex items-start"><span className="mr-2 text-slate-400 mt-0.5">•</span><span>Conducted API testing using Postman, reducing bugs by <strong>25%</strong></span></li>
          <li className="flex items-start"><span className="mr-2 text-slate-400 mt-0.5">•</span><span>Deployed applications on AWS EC2, ensuring scalability and high availability</span></li>
        </ul>
      </div>

      {/* Key Achievements */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-2 border-b border-slate-300 pb-1">Key Achievements</h3>
        <ul className="text-sm text-slate-800 space-y-1">
          <li className="flex items-start"><span className="mr-2 text-slate-400 mt-0.5">•</span><span>Developed and deployed <strong>3+ full-stack applications</strong> using Java and React</span></li>
          <li className="flex items-start"><span className="mr-2 text-slate-400 mt-0.5">•</span><span>Designed <strong>20+ RESTful APIs</strong> across multiple projects</span></li>
          <li className="flex items-start"><span className="mr-2 text-slate-400 mt-0.5">•</span><span>Implemented secure authentication systems using JWT and Spring Security</span></li>
        </ul>
      </div>

      {/* Education */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-3 border-b border-slate-300 pb-1">Education</h3>
        
        <div className="mb-3">
          <div className="flex justify-between items-baseline">
            <h4 className="font-bold text-slate-900 text-base">Bachelor of Computer Application (BCA)</h4>
            <span className="text-sm text-slate-600 font-medium whitespace-nowrap ml-4">2022 – 2025</span>
          </div>
          <p className="text-sm text-slate-700">Savitribai Phule Pune University</p>
        </div>

        <div>
          <div className="flex justify-between items-baseline">
            <h4 className="font-bold text-slate-900 text-base">Higher Secondary Certificate (HSC)</h4>
            <span className="text-sm text-slate-600 font-medium whitespace-nowrap ml-4">2021 – 2022</span>
          </div>
          <p className="text-sm text-slate-700">Maharashtra State Board</p>
        </div>
      </div>

      {/* Certifications */}
      <div>
        <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-2 border-b border-slate-300 pb-1">Certifications</h3>
        <ul className="text-sm text-slate-800 space-y-1">
          <li className="flex items-start"><span className="mr-2 text-slate-400 mt-0.5">•</span><span>Java Full Stack Development</span></li>
          <li className="flex items-start"><span className="mr-2 text-slate-400 mt-0.5">•</span><span>Spring Boot & Hibernate</span></li>
          <li className="flex items-start"><span className="mr-2 text-slate-400 mt-0.5">•</span><span>AWS Cloud Fundamentals</span></li>
        </ul>
      </div>
    </div>
  );
}
