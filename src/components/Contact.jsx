import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

const Contact = () => {
  const links = [
    {
      icon: <FiMail size={32} className="mb-4 text-blue-400 mx-auto" />,
      label: 'Email',
      value: 'mohamedshameelm21@gmail.com',
      href: 'mailto:mohamedshameelm21@gmail.com',
      target: '_blank'
    },
    {
      icon: <FiGithub size={32} className="mb-4 text-slate-300 mx-auto" />,
      label: 'GitHub',
      value: 'github.com/mohamed-shameel',
      href: 'https://github.com/mohamed-shameel'
    },
    {
      icon: <FiLinkedin size={32} className="mb-4 text-blue-500 mx-auto" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/mohamedshameel2006',
      href: 'https://www.linkedin.com/in/mohamedshameel2006/'
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 relative">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-slate-500 font-mono text-sm tracking-widest block mb-4">04</span>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Let's Build Something</h2>
        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
          Open to internships, collaborations, and placement opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {links.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href}
              target={link.target || "_blank"}
              rel="noopener noreferrer"
              className="bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500 p-8 flex flex-col items-center justify-center cursor-pointer transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 group"
            >
              <div className="group-hover:scale-110 transition-transform">
                {link.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{link.label}</h3>
              <p className="text-sm text-slate-400 break-all">{link.value}</p>
            </a>
          ))}
        </div>

        <div className="inline-block px-6 py-3 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full font-medium tracking-wide">
          Available for Nov 2026 placement
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
