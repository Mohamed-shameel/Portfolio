import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const categories = [
    {
      title: 'Advanced',
      dotColor: 'bg-emerald-500',
      skills: ['Python', 'JavaScript', 'C++', 'React 18', 'FastAPI', 'MongoDB', 'PyTorch', 'Playwright']
    },
    {
      title: 'Intermediate',
      dotColor: 'bg-blue-500',
      skills: ['Hugging Face', 'LangChain', 'CrewAI', 'AWS', 'Docker', 'Firebase', 'Vercel']
    },
    {
      title: 'Familiar',
      dotColor: 'bg-purple-500',
      skills: ['System Design', 'Redis', 'GraphQL', 'RAG', 'Agent Systems', 'Kubernetes']
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 relative">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-16">
          <span className="text-slate-500 font-mono text-sm tracking-widest block mb-2">03</span>
          <h2 className="text-3xl font-bold text-white inline-block relative">
            Technical Arsenal
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, idx) => (
            <div key={idx} className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-3 h-3 rounded-full ${category.dotColor}`} />
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="bg-slate-900 border border-slate-700 hover:border-blue-500 transition-colors rounded-full px-3 py-1 text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
