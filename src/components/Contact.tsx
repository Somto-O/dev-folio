import React from 'react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="py-10 border-t border-white/10 text-left">
      <div className="max-w-4xl mx-0">
        <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">Get In Touch</h2>
        <p className="text-secondary mb-12 max-w-xl text-lg leading-relaxed font-light">
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <a 
          href="mailto:somtochukwujoachinob@cmail.carleton.ca"
          className="inline-block px-8 py-4 border border-white/20 text-white rounded hover:bg-white hover:text-black transition-all duration-300 font-medium mb-16 tracking-wide"
        >
          Say Hello
        </a>

        <div className="text-sm text-gray-600 font-medium">
          <p>&copy; {new Date().getFullYear()} Somto Obidike-Ikenna. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;

