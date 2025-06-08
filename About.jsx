
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Heart, Code, Coffee } from 'lucide-react';

const About = () => {
  const interests = [
    { icon: Code, title: 'Programming', description: 'Passionate about clean code and innovative solutions' },
    { icon: Coffee, title: 'Problem Solving', description: 'Love tackling complex challenges with creative approaches' },
    { icon: Heart, title: 'Open Source', description: 'Contributing to the developer community' },
  ];

  const timeline = [
    {
      year: '2021',
      title: 'Started CSE Journey',
      description: 'Began Computer Science & Engineering at SUST',
      icon: GraduationCap,
    },
    {
      year: '2022',
      title: 'First Programming Contest',
      description: 'Participated in university programming competitions',
      icon: Code,
    },
    {
      year: '2023',
      title: 'Tech Community Involvement',
      description: 'Joined various tech communities and started contributing',
      icon: Heart,
    },
    {
      year: '2024',
      title: 'Advanced Projects',
      description: 'Working on complex web applications and mobile apps',
      icon: Coffee,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Get to know more about my journey, interests, and what drives my passion for technology
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass rounded-2xl p-8 hover-lift">
              <h2 className="text-2xl font-bold text-white mb-6">Personal Information</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Education</p>
                    <p className="text-white font-semibold">CSE at SUST, Bangladesh</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-semibold">Bangladesh</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Status</p>
                    <p className="text-white font-semibold">Student & Developer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="glass rounded-2xl p-8 hover-lift">
              <h2 className="text-2xl font-bold text-white mb-6">My Story</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm Shourov, a passionate Computer Science student at Shahjalal University of Science and Technology (SUST) in Bangladesh. My journey into the world of technology began with curiosity and has evolved into a deep passion for creating innovative solutions.
                </p>
                <p>
                  As a tech enthusiast, I'm constantly exploring new technologies, frameworks, and methodologies. I believe in the power of code to solve real-world problems and make a positive impact on society.
                </p>
                <p>
                  When I'm not coding, you'll find me participating in programming contests, contributing to open-source projects, or learning about the latest trends in software development.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Interests & Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="glass rounded-2xl p-8 hover-lift">
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="w-full h-64 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl overflow-hidden"
                >
                  <img  
                    className="w-full h-full object-cover" 
                    alt="Shourov working on computer programming"
                   src="https://images.unsplash.com/photo-1634835855106-f4f0dc8279ca" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
              </div>
            </div>

            {/* Interests */}
            <div className="glass rounded-2xl p-8 hover-lift">
              <h2 className="text-2xl font-bold text-white mb-6">What I Love</h2>
              <div className="space-y-4">
                {interests.map((interest, index) => {
                  const Icon = interest.icon;
                  return (
                    <motion.div
                      key={interest.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/5 transition-all duration-300"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{interest.title}</h3>
                        <p className="text-gray-400 text-sm">{interest.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">My Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.2 }}
                    className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`w-5/12 ${isEven ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover-lift">
                        <div className="text-blue-400 font-bold text-lg mb-2">{item.year}</div>
                        <h3 className="text-white font-semibold text-xl mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>
                    
                    <div className="w-2/12 flex justify-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center relative z-10">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="w-5/12" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
