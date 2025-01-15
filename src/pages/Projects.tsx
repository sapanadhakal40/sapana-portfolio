
import React from 'react';
import { Github} from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Project 1",
      description: "The Friends Memoirs Hub is a full-stack web application that allows users to track and document their friendship milestones. Users can create, read, update, and delete friendship memories, view important dates, and reflect on shared experiences over time.",
      technologies: ["HTML", "Javascript", "Tailwind CSS", "Flask", "SQLite"],
      githubLink: "https://github.com/sapanadhakal40/friends-journal-hub",
   
      image: "/images/Project-2.1.png" 
     
    },
    {
      title: "Project 2",
      description: "The Food Delivery App is a full-stack restaurant service application that provides a seamless experience for both users and restaurant owners. The app allows users to browse the menu, place orders. The admin dashboard allows restaurant owners to manage menu items, track orders.",
      technologies: ["React", "Javascript", "Express", "Tailwind CSS", "PostgreSQL"],
      githubLink: "https://github.com/sapanadhakal40/restaurant-service",

      image: "/images/project-1.png" 
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-10 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h1 className="text-4xl font-bold text-center mb-12 dark:text-white">My Projects</h1>
        <div className="grid gap-y-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6 ">
                <div className="h-64 md:h-auto">
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
                
                <div className="p-6 flex flex-col justify-between">
                <div className="flex-grow">
                    
                  <h2 className="text-2xl font-bold mb-4 dark:text-white">{project.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                   
                  </div>
                </div>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default Projects;