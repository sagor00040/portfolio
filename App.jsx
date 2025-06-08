import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Projects from '@/pages/Projects';
import Skills from '@/pages/Skills';
import Contact from '@/pages/Contact';
import ParticleBackground from '@/components/ParticleBackground';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-sky-700 to-slate-900 relative">
        <ParticleBackground />
        <Navbar />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;