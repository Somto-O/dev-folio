import React from 'react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Medical Device (Insulin Pump)",
      description: "A critical safety-critical medical device interface built with the Qt framework, featuring real-time monitoring and precise dosage control logic.",
      category: "Embedded Systems",
      // Placeholder video
      videoSrc: "" 
    },
    {
      title: "OpenGL-Cowboy",
      description: "A high-performance 2D up-down shooter engine built from scratch using OpenGL and GLFW, demonstrating low-level graphics programming concepts.",
      category: "Low Level",
      videoSrc: ""
    },
    // Placeholders to fill requirements
    {
      title: "Neural Network Visualizer",
      description: "Interactive visualization of gradient descent and backpropagation algorithms, demonstrating core ML concepts.",
      category: "AI / ML",
      videoSrc: ""
    },
    {
      title: "Distributed Task Queue",
      description: "A scalable background job processing system built with Go and Redis, handling concurrent task execution.",
      category: "Full Stack",
      videoSrc: ""
    }
  ];

  return (
    <section id="projects" className="py-10">
      <div className="border-t border-white/10 mb-16"></div>
      
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-white tracking-tight">Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

