import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with React and Node.js',
    image: 'src/components/ecommerce3-1.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', ],
    liveUrl: 'https://ecommercesatya.netlify.app/',
    githubUrl: 'https://github.com/satyakumarch/ECommerce',
  },
  {
    title: 'Food website application',
    description: 'A collaborative food website application with real-time updates',
    image: 'src/components/a14783f4-fe49-4c87-ad29-bb97d9b612e6-cover.png',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    liveUrl: 'https://foodhub975.netlify.app/',
    githubUrl: 'https://github.com/satyakumarch/FoodHub',
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather forecasting application with interactive maps',
    image: 'src/components/unnamed.png',
    technologies: ['React', 'OpenWeather API', 'Mapbox'],
    liveUrl: 'https://wldweatherapp.netlify.app/',
    githubUrl: 'https://github.com/satyakumarch/weather',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Featured Projects
        </h2>
        <p className="text-indigo-200 text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent works that showcase my skills and expertise
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-indigo-500/20"
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-indigo-200 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-indigo-500/20 text-indigo-200 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-300 hover:text-white transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-300 hover:text-white transition-colors"
                  >
                    <Github size={16} className="mr-1" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;