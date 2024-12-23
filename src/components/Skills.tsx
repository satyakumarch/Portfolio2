import React from 'react';

const skillCategories = [
  {
    title: 'Front-End Development',
    skills: [
      { name: 'HTML/CSS', level: 95 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'React.js', level: 88 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Responsive Design', level: 92 },
      { name: 'UI/UX Design', level: 80 },
    ],
  },
  {
    title: 'Back-End Development',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 82 },
      { name: 'MongoDB', level: 80 },
      { name: 'RESTful APIs', level: 88 },
      { name: 'SQL', level: 75 },
      { name: 'Authentication', level: 85 },
    ],
  },
  {
    title: 'Additional Skills',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Jest & Testing', level: 78 },
      { name: 'Docker', level: 70 },
      { name: 'CI/CD', level: 75 },
      { name: 'Problem Solving', level: 92 },
      { name: 'Team Collaboration', level: 95 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
          Skills & Expertise
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and proficiency levels across different areas
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-[1.02] transition-all">
              <h3 className="text-xl font-semibold mb-6 text-indigo-600">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-800">{skill.name}</span>
                      <span className="text-indigo-600 font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden shadow-inner-lg">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full skill-bar-animation"
                        style={{ '--skill-level': `${skill.level}%` } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;