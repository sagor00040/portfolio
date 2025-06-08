
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      localStorage.setItem('contactFormSubmission', JSON.stringify(formData));
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast({
        title: "Message Sent! 🚀",
        description: "Thanks for reaching out, Shourov! I'll get back to you soon.",
        variant: "default",
        className: "bg-gradient-to-r from-green-500 to-emerald-600 border-green-700 text-white"
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Uh oh! Something went wrong. 😟",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, text: 'sagormodak19@gmail.com', href: 'mailto:sagormodak19@gmail.com', color: 'text-red-400', bgColor: 'bg-red-500/20' },
    { icon: Phone, text: '01760992962', href: 'tel:01760992962', color: 'text-green-400', bgColor: 'bg-green-500/20' },
    { icon: MapPin, text: 'SUST, Bangladesh', href: '#', color: 'text-yellow-400', bgColor: 'bg-yellow-500/20' },
  ];
  
  const socialPlatforms = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/shourov', color: 'text-gray-300 hover:text-white', borderColor: 'border-gray-600 hover:border-gray-400', bgColor: 'hover:bg-gray-700' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/shourov', color: 'text-blue-400 hover:text-white', borderColor: 'border-blue-500 hover:border-blue-400', bgColor: 'hover:bg-blue-500' },
    { name: 'X (Twitter)', icon: Twitter, href: 'https://twitter.com/shourov', color: 'text-sky-400 hover:text-white', borderColor: 'border-sky-500 hover:border-sky-400', bgColor: 'hover:bg-sky-500' },
  ];


  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind, a question, or just want to say hi? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-2xl p-8 hover-lift"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Send me a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                <Input 
                  type="text" 
                  name="name" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Shourov Modak" 
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-blue-500" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                <Input 
                  type="email" 
                  name="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com" 
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-blue-500" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                <Input 
                  type="text" 
                  name="subject" 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Let's talk about..." 
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-blue-500" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Your Message</label>
                <Textarea 
                  name="message" 
                  id="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Shourov, I'd like to discuss..." 
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-blue-500" 
                  required 
                />
              </div>
              <div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                    />
                  ) : (
                    <Send className="mr-2 w-4 h-4" />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="glass rounded-2xl p-8 hover-lift">
              <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith('http') || info.href.startsWith('mailto') || info.href.startsWith('tel') ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 group p-4 rounded-lg hover:bg-white/5 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className={`w-12 h-12 ${info.bgColor} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-6 h-6 ${info.color}`} />
                      </div>
                      <div>
                        <p className={`text-white font-semibold group-hover:${info.color} transition-colors duration-300`}>{info.text}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
            
            <div className="glass rounded-2xl p-8 hover-lift">
              <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
              <p className="text-gray-400 mb-6">
                Find me on social media, or check out my code repositories.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {socialPlatforms.map((platform) => {
                  const Icon = platform.icon;
                  return (
                    <Button 
                      key={platform.name}
                      variant="outline"
                      className={`w-full flex items-center justify-center space-x-2 py-3 rounded-lg transition-all duration-300 ${platform.borderColor} ${platform.color} ${platform.bgColor}`}
                      onClick={() => window.open(platform.href, "_blank")}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{platform.name}</span>
                    </Button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
