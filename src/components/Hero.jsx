import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiChevronDown } from 'react-icons/fi';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      {/* Background Dot Pattern & Glow */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #334155 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 pointer-events-none" />

      <motion.div 
        className="relative z-10 flex flex-col items-center w-full max-w-4xl mx-auto mt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <span className="px-4 py-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-sm font-medium tracking-wide">
            👋 Available for Placement — Nov 2026
          </span>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-black tracking-tight mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"
        >
          MOHAMED SHAMEEL M
        </motion.h1>

        <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl text-slate-400 font-semibold mb-4">
          AI/ML Engineer & Full Stack Developer
        </motion.h2>

        <motion.p variants={itemVariants} className="text-lg text-slate-500 mb-12">
          Building AI systems that solve real problems
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
          <a 
            href="#projects" 
            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all shadow-[0_4px_30px_rgba(59,130,246,0.3)] hover:shadow-[0_4px_40px_rgba(59,130,246,0.5)]"
          >
            View Projects
          </a>
          <a 
            href="/resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-slate-600 hover:border-blue-500 text-slate-300 rounded-lg font-semibold transition-colors"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-6">
          <a href="https://github.com/mohamed-shameel" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
            <FiGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/mohamedshameel2006/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
            <FiLinkedin size={24} />
          </a>
          <a href="mailto:mohamedshameelm21@gmail.com" className="text-slate-500 hover:text-white transition-colors">
            <FiMail size={24} />
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <FiChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
