import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-indigo-900/95 to-purple-900/95 backdrop-blur-sm z-50 shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="transform-3d hover:rotate-y-180 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop"
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover border-2 border-indigo-400"
              />
            </div>
            <div className="text-2xl font-bold text-white">
              Satya Kumar
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-indigo-200 hover:text-white transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 border-l border-indigo-700 pl-4">
              <a 
                href="https://github.com/satyakumarch" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-200 hover:text-white transition-all transform hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/satya-kumar-/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-200 hover:text-white transition-all transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:satyakumarchaudhary603@gmail.com"
                className="text-indigo-200 hover:text-white transition-all transform hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-indigo-200 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-indigo-900/95 rounded-lg shadow-lg p-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-indigo-200 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 py-4 border-t border-indigo-700 mt-4">
              <a 
                href="https://github.com/satyakumarch" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-200 hover:text-white"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/satya-kumar-/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-200 hover:text-white"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:satyakumarchaudhary603@gmail.com"
                className="text-indigo-200 hover:text-white"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;