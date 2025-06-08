import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Cloud, Brain, Smartphone } from 'lucide-react';

const skillsData = [
  {
    category: 'Frontend Development',
    icon: Code,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Next.js', 'TailwindCSS', 'Framer Motion', 'shadcn/ui'],
  },
  {
    category: 'Backend Development',
    icon: Server,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    skills: ['Node.js', 'Express.js', 'Python (Flask/Django)', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'Databases',
    icon: Database,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Supabase', 'Firebase'],
  },
  {
    category: 'DevOps & Cloud',
    icon: Cloud,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    skills: ['Git', 'Docker', 'AWS', 'Google Cloud', 'Vercel', 'Netlify'],
  },
  {
    category: 'Problem Solving & Algorithms',
    icon: Brain,
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    skills: ['Data Structures', 'Algorithm Design', 'Competitive Programming', 'LeetCode'],
  },
  {
    category: 'Mobile Development',
    icon: Smartphone,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    skills: ['React Native', 'Flutter', 'Swift (Basic)', 'Kotlin (Basic)'],
  },
];

const Skills = () => {
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
            My <span className="gradient-text">Expertise</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A collection of my technical skills and tools I'm proficient with.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((categoryItem, index) => {
            const Icon = categoryItem.icon;
            return (
              <motion.div
                key={categoryItem.category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass rounded-2xl p-8 hover-lift flex flex-col ${categoryItem.bgColor}`}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-full mr-4 ${categoryItem.bgColor} border border-white/10`}>
                    <Icon className={`w-8 h-8 ${categoryItem.color}`} />
                  </div>
                  <h2 className={`text-2xl font-bold ${categoryItem.color}`}>{categoryItem.category}</h2>
                </div>
                
                <ul className="space-y-3 flex-grow">
                  {categoryItem.skills.map((skill) => (
                    <motion.li 
                      key={skill}
                      whileHover={{ x: 5, color: 'hsl(var(--primary))' }}
                      className="flex items-center text-gray-300 transition-colors duration-200"
                    >
                      <div className={`w-2 h-2 rounded-full mr-3 ${categoryItem.color.replace('text-', 'bg-')}`} />
                      {skill}
                    </motion.li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-4 border-t border-white/10">
                  <p className="text-sm text-gray-500 italic">
                    Continuously learning and expanding my skill set.
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;