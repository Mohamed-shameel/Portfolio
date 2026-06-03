import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 font-medium">Built by Mohamed shameel m &middot; 2026</p>
        <div className="flex gap-4">
          <a href="https://github.com/mohamed-shameel" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
            <FiGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/mohamedshameel2006/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
            <FiLinkedin size={20} />
          </a>
          <a href="mailto:mohamedshameelm21@gmail.com" className="text-slate-500 hover:text-white transition-colors">
            <FiMail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
