import React from 'react';
import { Code2, Palette, Globe2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-100 via-green-100 to-teal-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-green-600">
          About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-teal-50 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <Code2 className="mx-auto mb-4 text-teal-600" size={32} />
            <h3 className="text-xl font-semibold mb-2 text-center text-yellow-700">Clean Code</h3>
            <p className="text-teal-600 text-center">
              I write clean, maintainable code following best practices and design patterns
            </p>
          </div>
          <div className="bg-teal-50 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <Palette className="mx-auto mb-4 text-teal-600" size={32} />
            <h3 className="text-xl font-semibold mb-2 text-center text-teal-700">Creative Solutions</h3>
            <p className="text-teal-600 text-center">
              I love solving complex problems with elegant and efficient solutions
            </p>
          </div>
          <div className="bg-teal-50 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <Globe2 className="mx-auto mb-4 text-teal-600" size={32} />
            <h3 className="text-xl font-semibold mb-2 text-center text-blue-700">Global Perspective</h3>
            <p className="text-teal-600 text-center">
              I bring international experience and cultural awareness to every project
            </p>
          </div>
        </div>
        <div className="mt-16 max-w-3xl mx-auto bg-white-50 p-8 rounded-xl shadow-lg">
          <p className="text-white-600 leading-relaxed text-center">
          I am Satya Kumar Chaudhary, a third-year Computer Science student 
          and an aspiring Full Stack Developer. I specialize in creating
           responsive and user-friendly web applications while continuously
            enhancing my skills in modern technologies. I am dedicated to learning,
             building, and innovating in the field of web development to create impactful digital experiences.

          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
