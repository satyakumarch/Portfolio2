import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-indigo-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Satya Kumar</h3>
            <p className="text-gray-300">
              Full Stack Developer passionate about creating exceptional digital experiences
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/satyakumarch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-all transform hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/satya-kumar-/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-all transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:satyakumarchaudhary603@gmail.com"
                className="text-gray-300 hover:text-white transition-all transform hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="flex items-center justify-center text-gray-300">
            Made with <Heart size={16} className="mx-2 text-red-500" /> by Satya Kumar
          </p>
          <p className="text-gray-400 mt-2">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;