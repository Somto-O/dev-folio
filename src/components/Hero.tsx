import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="w-full pt-10 pb-4 text-left">
      {/* Content */}
      <div className="max-w-3xl mx-0 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6 text-white">
            Somto Obidike-Ikenna
          </h1>
          <h2 className="text-2xl md:text-3xl text-secondary font-light mb-8">
            Software Developer
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl leading-loose font-light">
            Fourth year Computer Science student with expertise in low level programming. Python RL developer passionate about game development.
          </p>
          <p className="text-lg text-gray-500 max-w-2xl leading-loose font-light mt-4">
            Currently seeking winter 2026 internship opportunities.
          </p>
        </motion.div>

        {/* Navigation / Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-wrap gap-8 mt-6"
        >
          <a href="https://github.com/Somto-O" target="_blank" rel="noopener noreferrer" className="nav-link group text-sm font-semibold uppercase tracking-widest hover:text-accent text-gray-400 transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/somto-obidike-ikenna/" target="_blank" rel="noopener noreferrer" className="nav-link group text-sm font-semibold uppercase tracking-widest hover:text-accent text-gray-400 transition-colors">
            LinkedIn
          </a>
          <a href="mailto:somtochukwujoachinob@cmail.carleton.ca" className="nav-link group text-sm font-semibold uppercase tracking-widest hover:text-accent text-gray-400 transition-colors">
            Contact
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

