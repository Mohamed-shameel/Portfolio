import React from 'react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
        <a href="#hero" className="text-lg font-bold text-slate-300 hover:text-white transition-colors">Home</a>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-slate-400 hover:text-white transition-colors font-medium">About</a>
          <a href="#projects" className="text-slate-400 hover:text-white transition-colors font-medium">Projects</a>
          <a href="#skills" className="text-slate-400 hover:text-white transition-colors font-medium">Skills</a>
          <a href="#contact" className="text-slate-400 hover:text-white transition-colors font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
