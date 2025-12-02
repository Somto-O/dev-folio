import React from 'react';

const TechStack: React.FC = () => {
  const stack = [
    { name: "C", category: "Languages" },
    { name: "C++", category: "Languages" },
    { name: "Python", category: "Languages" },
    { name: "Java", category: "Languages" },
    { name: "JavaScript", category: "Languages" },
    { name: "Prolog", category: "Languages" },
    { name: "Scheme", category: "Languages" },
  ];

  return (
    <section className="py-10">
      <div className="border-t border-white/10 mb-20"></div>
      <div className="max-w-4xl mx-0 text-left">
        <h2 className="text-3xl font-bold mb-12 text-white tracking-tight">Technical Arsenal</h2>
        <div className="flex flex-wrap justify-start gap-6">
          {stack.map((tech) => (
            <div 
              key={tech.name}
              className="px-8 py-4 bg-white/5 border border-white/5 rounded-lg text-secondary hover:text-white hover:bg-white/10 transition-all duration-300 cursor-default text-sm font-medium tracking-wide"
            >
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

