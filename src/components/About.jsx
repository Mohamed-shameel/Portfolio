import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { label: 'CGPA', value: '8.33', color: 'text-blue-400' },
    { label: 'Dual Degree', value: 'CIT + IIT Madras', color: 'text-emerald-400' },
    { label: 'Current', value: 'MDQ Apps Internship', color: 'text-purple-400' },
    { label: 'Hackathons', value: '4+ National Level Finalist', color: 'text-blue-400' },
  ];

  return (
    <section id="about" className="py-24 px-6 relative">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-16">
          <span className="text-slate-500 font-mono text-sm tracking-widest block mb-2">01</span>
          <h2 className="text-3xl font-bold text-white inline-block relative">
            About Me
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full" />
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-base text-slate-400 leading-relaxed">
            <p>
              I'm a second-year BE Computer Science (AIML) student at Chennai Institute of Technology, simultaneously pursuing a BS in Data Science from IIT Madras. Currently interning at MDQ Apps, where I build and automate production-grade testing pipelines using Playwright.
            </p>
            <p>
              I've shipped AI systems end-to-end — from a deepfake audio detection tool (National Level hackathon-selected) to leading a team of 3 to build CIT RISE, an AI resume analyzer deployed live on Vercel. Every project follows one rule: architecture → code → deploy → iterate.
            </p>
            <p>
              I'm currently building QuestReady, an autonomous AI placement mentor using multi-agent orchestration with CrewAI and Claude. My target is a 10+ LPA role at a product-based company by November 2026 — and I'm building the skills and projects to earn it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-colors">
                <div className={`text-2xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
