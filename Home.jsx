
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/shourov', label: 'GitHub', color: 'text-gray-300 hover:text-gray-100' },
    { icon: Linkedin, href: 'https://linkedin.com/in/shourov', label: 'LinkedIn', color: 'text-blue-400 hover:text-blue-300' },
    { icon: Twitter, href: 'https://twitter.com/shourov', label: 'Twitter', color: 'text-sky-400 hover:text-sky-300' },
    { icon: Instagram, href: 'https://instagram.com/shourov', label: 'Instagram', color: 'text-pink-500 hover:text-pink-400' },
  ];

  const contactDetails = [
    { icon: Mail, text: 'sagormodak19@gmail.com', color: 'text-red-400' },
    { icon: Phone, text: '01760992962', color: 'text-green-400' },
    { icon: MapPin, text: 'SUST, Bangladesh', color: 'text-yellow-400' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 md:pt-16 pb-10">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-blue-400 font-mono text-lg"
            >
              Hello, I'm
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold text-white leading-tight"
            >
              <span className="gradient-text">Shourov</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl lg:text-3xl text-gray-300 font-light"
            >
              CSE Student & Tech Enthusiast
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-400 leading-relaxed max-w-lg"
            >
              Passionate Computer Science student at SUST, Bangladesh. Building innovative solutions 
              and exploring the endless possibilities of technology.
            </motion.p>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-3"
          >
            {contactDetails.map((detail, index) => {
              const Icon = detail.icon;
              return (
                <p key={index} className="flex items-center space-x-3 text-gray-300">
                  <Icon className={`w-5 h-5 ${detail.color}`} />
                  <span>{detail.text}</span>
                </p>
              );
            })}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/projects">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                View My Work
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 w-4 h-4" />
              Download CV
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex space-x-4"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center hover:border-white/30 transition-all duration-300"
                  title={social.label}
                >
                  <Icon className={`w-6 h-6 ${social.color}`} />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right Content - Animated Avatar */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Animated rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-80 h-80 border-2 border-blue-500/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 w-72 h-72 border-2 border-purple-500/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 w-64 h-64 border-2 border-pink-500/20 rounded-full"
            />
            
            {/* Profile Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative z-10 w-64 h-64 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center overflow-hidden shadow-2xl"
            >
              <img  
                className="w-full h-full object-cover rounded-full" 
                alt="Shourov - CSE Student and Tech Enthusiast"
               src="https://storage.googleapis.com/hostinger-horizons-assets-prod/00a40da5-6eb0-43dc-830d-e7dfd00ab865/6716d0e958f906f9e4066ec6d3ab94b6.jpg" />
            </motion.div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/20 backdrop-blur-sm rounded-full flex items-center justify-center"
            >
              <span className="text-2xl">💻</span>
            </motion.div>
            
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 backdrop-blur-sm rounded-full flex items-center justify-center"
            >
              <span className="text-2xl">🚀</span>
            </motion.div>
            
            <motion.div
              animate={{ y: [-5, 15, -5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 -right-8 w-12 h-12 bg-pink-500/20 backdrop-blur-sm rounded-full flex items-center justify-center"
            >
              <span className="text-xl">⚡</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
