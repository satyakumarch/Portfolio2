import React from 'react';
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 pt-16 animate-gradient bg-[length:400%_400%]">
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="hero-image-container mb-12 perspective-1000">
          <div className="transform-3d hover:rotate-y-0 rotate-y-[-15deg] transition-transform duration-500">
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop"
              alt="Profile"
              className="w-40 h-40 rounded-full mx-auto object-cover shadow-2xl border-4 border-indigo-400"
            />
          </div>
        </div>
        <div className="relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 animate-float">
            Satya Kumar Chaudhary
          </h1>
          <p className="text-xl md:text-2xl text-indigo-200 mb-8 max-w-2xl mx-auto">
            Full Stack Developer specializing in building exceptional digital experiences
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#contact"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-lg"
            >
              Get in Touch
            </a>
            <a
              href="/resume.pdf"
              download
              className="flex items-center space-x-2 border-2 border-indigo-400 text-indigo-200 px-8 py-3 rounded-lg hover:bg-indigo-800/30 transition-all transform hover:scale-105"
            >
              <Download size={20} />
              <span>Download CV</span>
            </a>
          </div>
        </div>
        <div className="mt-16 animate-bounce">
          <ArrowDown className="mx-auto text-indigo-400" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;