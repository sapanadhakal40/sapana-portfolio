
import { Github, Linkedin, Mail } from 'lucide-react';


const Home = () => {
    const featuredProjects = [
        {
          title: "Featured Project 1",
          description: "A brief overview of this featured project and its key highlights.",
          technologies: ["React", "Express", "Tailwind CSS","PostgreSQL"],
          image: "/images/project-1.png",
          githubLink: "https://github.com/sapanadhakal40/restaurant-service",
        },
        {
          title: "Featured Project 2",
          description: "Another great project with a short description and focus areas.",
          technologies: ["Flask", "MYSQL","Javascript", "Tailwind CSS"],
          image: "/images/project-2.png",
          githubLink: "https://github.com/sapanadhakal40/friends-journal-hub",
        },
      ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 dark:text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Sapana Dhakal</span>
          </h1>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
            Frontend Developer passionate about creating beautiful and responsive web applications
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/sapanadhakal40" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://www.linkedin.com/in/sapana-dhakal-a97434221/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="mailto:sapna.dhakal40@gmail.com"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </section>




{/* Featured Projects Section */}
<section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-2"
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/api/placeholder/400/320";
                      target.onerror = null;
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Frontend', skills: ['React', 'Javascript','TypeScript', 'Tailwind CSS'] },
              { title: 'Backend', skills: ['Flask', 'Express', 'MYSQL', 'PostgreSQL','PHP'] },
              { title: 'Tools', skills: ['Git', 'VS Code', 'Vercel'] }
            ].map((category) => (
              <div key={category.title} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 dark:text-white">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;



// import React from 'react';
// import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

// const Home = () => {
//   return (
//     <div className="min-h-screen pt-16">
//       {/* Hero Section */}
//       <section className="h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 dark:text-white">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <h1 className="text-5xl font-bold mb-6">
//             Hi, I'm <span className="text-blue-600 dark:text-blue-400">Sapana Dhakal</span>
//           </h1>
//           <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
//             Frontend Developer passionate about creating beautiful and responsive web applications
//           </p>
//           <div className="flex justify-center space-x-6">
//             <a 
//               href="https://github.com/sapanadhakal40" 
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
//             >
//               <Github size={28} />
//             </a>
//             <a 
//               href="https://www.linkedin.com/in/sapana-dhakal-a97434221/" 
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
//             >
//               <Linkedin size={28} />
//             </a>
//             <a 
//               href="mailto:your.email@example.com"
//               className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
//             >
//               <Mail size={28} />
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="py-20 bg-white dark:bg-gray-900">
//         <div className="max-w-4xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">About Me</h2>
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <p className="text-gray-600 dark:text-gray-300">
//                 Hi there! I'm a passionate frontend developer with a keen eye for design and a love for creating intuitive user experiences. I specialize in building modern web applications using React and TypeScript.
//               </p>
//               <p className="text-gray-600 dark:text-gray-300">
//                 When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing.
//               </p>
//             </div>
//             <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
//               <h3 className="text-xl font-semibold mb-4 dark:text-white">Quick Facts</h3>
//               <ul className="space-y-3 text-gray-600 dark:text-gray-300">
//                 <li>🎓 Computer Science Graduate</li>
//                 <li>💻 Frontend Development Enthusiast</li>
//                 <li>🌱 Always Learning New Technologies</li>
//                 <li>🤝 Open for Collaboration</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Experience & Education Section */}
//       <section className="py-20 bg-gray-50 dark:bg-gray-800">
//         <div className="max-w-4xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Experience & Education</h2>
//           <div className="space-y-12">
//             {/* Experience */}
//             <div>
//               <h3 className="text-2xl font-semibold mb-6 dark:text-white">Experience</h3>
//               <div className="space-y-8">
//                 <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
//                   <div className="flex justify-between items-start mb-4">
//                     <div>
//                       <h4 className="text-xl font-semibold dark:text-white">Frontend Developer</h4>
//                       <p className="text-gray-600 dark:text-gray-300">Company Name</p>
//                     </div>
//                     <span className="text-sm text-gray-500 dark:text-gray-400">2022 - Present</span>
//                   </div>
//                   <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
//                     <li>Developed responsive web applications using React and TypeScript</li>
//                     <li>Collaborated with design team to implement pixel-perfect UI</li>
//                     <li>Improved application performance by 40%</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
            
//             {/* Education */}
//             <div>
//               <h3 className="text-2xl font-semibold mb-6 dark:text-white">Education</h3>
//               <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
//                 <div className="flex justify-between items-start mb-4">
//                   <div>
//                     <h4 className="text-xl font-semibold dark:text-white">Bachelor of Science in Computer Science</h4>
//                     <p className="text-gray-600 dark:text-gray-300">University Name</p>
//                   </div>
//                   <span className="text-sm text-gray-500 dark:text-gray-400">2018 - 2022</span>
//                 </div>
//                 <p className="text-gray-600 dark:text-gray-300">
//                   Relevant coursework: Web Development, Data Structures, Algorithms, Database Systems
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Featured Projects Preview */}
//       <section className="py-20 bg-white dark:bg-gray-900">
//         {/* ... (keep your existing projects section) ... */}
//       </section>

//       {/* Skills Section */}
//       <section className="py-20 bg-gray-50 dark:bg-gray-800">
//         {/* ... (keep your existing skills section) ... */}
//       </section>
//     </div>
//   );
// };

// export default Home;