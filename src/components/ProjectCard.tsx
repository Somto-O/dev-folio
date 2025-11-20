import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  videoSrc?: string; // Optional for now, placeholder if missing
  category: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, videoSrc, category }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group bg-surface rounded-xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300"
    >
      {/* Video Loop Container */}
      <div className="relative h-48 w-full bg-black overflow-hidden">
        {videoSrc ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-neutral-900 text-neutral-700">
             <span className="text-xs uppercase tracking-widest">Preview Unavailable</span>
          </div>
        )}
        <div className="absolute top-2 right-2 bg-accent/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-semibold text-white shadow-sm">
            {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-secondary text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

