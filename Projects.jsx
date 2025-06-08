import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const projectData = [
  {
    title: 'AI Powered Chatbot',
    description: 'An intelligent chatbot leveraging NLP to provide seamless user interactions and support.',
    imagePlaceholder: 'AI chatbot interface with conversation bubbles',
    techStack: ['React', 'Node.js', 'Python', 'AWS'],
    githubLink: '#',
    liveLink: '#',
  },
  {
    title: 'E-commerce Platform',
    description: 'A full-featured online store with product listings, cart functionality, and secure payments.',
    imagePlaceholder: 'E-commerce website homepage with product grid',
    techStack: ['Next.js', 'Supabase', 'Stripe', 'TailwindCSS'],
    githubLink: '#',
    liveLink: '#',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets with various chart types.',
    imagePlaceholder: 'Dashboard with charts and graphs displaying data',
    techStack: ['D3.js', 'React', 'Firebase', 'Material UI'],
    githubLink: '#',
    liveLink: '#',
  },
  {
    title: 'Mobile Task Manager',
    description: 'A cross-platform mobile app for organizing tasks and boosting productivity.',
    imagePlaceholder: 'Mobile app screen showing a list of tasks',
    techStack: ['React Native', 'GraphQL', 'SQLite', 'Expo'],
    githubLink: '#',
    liveLink: '#',
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            My <span className="gradient-text">Creations</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of projects I've built, demonstrating my skills and passion for development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 hover-lift flex flex-col"
            >
              <div className="relative w-full h-48 bg-slate-700 rounded-lg mb-6 overflow-hidden">
                <img  
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                  alt={project.title + " project image"}
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
              
              <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-blue-400 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-500/10 text-blue-300 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4 mt-auto">
                <Button 
                  variant="outline" 
                  className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white w-full"
                  onClick={() => window.open(project.githubLink, "_blank")}
                >
                  <Github className="mr-2 w-4 h-4" /> GitHub
                </Button>
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white w-full"
                  onClick={() => window.open(project.liveLink, "_blank")}
                >
                  <ExternalLink className="mr-2 w-4 h-4" /> Live Demo
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;