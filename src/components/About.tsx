import React from 'react';
import { Code2, Palette, Globe2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
          About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <Code2 className="mx-auto mb-4 text-indigo-600" size={32} />
            <h3 className="text-xl font-semibold mb-2 text-center">Clean Code</h3>
            <p className="text-gray-600 text-center">
              I write clean, maintainable code following best practices and design patterns
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <Palette className="mx-auto mb-4 text-indigo-600" size={32} />
            <h3 className="text-xl font-semibold mb-2 text-center">Creative Solutions</h3>
            <p className="text-gray-600 text-center">
              I love solving complex problems with elegant and efficient solutions
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <Globe2 className="mx-auto mb-4 text-indigo-600" size={32} />
            <h3 className="text-xl font-semibold mb-2 text-center">Global Perspective</h3>
            <p className="text-gray-600 text-center">
              I bring international experience and cultural awareness to every project
            </p>
          </div>
        </div>
        <div className="mt-16 max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <p className="text-gray-600 leading-relaxed text-center">
            With over 5 years of experience in web development, I specialize in creating
            responsive and performant web applications. I'm passionate about user experience
            and constantly learning new technologies to stay at the forefront of web development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;