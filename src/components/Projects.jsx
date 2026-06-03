import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiVideo } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'DeepTrust — AI Deepfake Detection',
      status: '🎬 Demo Available',
      statusClass: 'bg-purple-500/10 text-purple-400 border border-purple-500/20',
      description: 'Detects deepfake audio using offline speech-to-text + acoustic analysis + semantic anomaly detection.',
      impact: '⚡ Hackathon-selected. Works offline. Zero API dependencies.',
      tech: ['FastAPI', 'PyTorch', 'Vosk', 'wav2vec2', 'DistilBERT', 'React'],
      github: 'https://github.com/Mohamed-shameel/DeepTrust',
      demo: '#',
      demoIcon: <FiVideo size={20} />
    },
    {
      title: 'CIT RISE — AI Resume Scanner',
      status: '✅ Live on Vercel',
      statusClass: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
      description: 'Led team of 3 to build AI resume analyzer with Gemini. MVP to production in 1 week.',
      impact: '⚡ 100+ resumes analyzed. Real-time streaming responses.',
      tech: ['React 18', 'FastAPI', 'Gemini AI', 'Firebase', 'Vercel', 'Render'],
      github: 'https://github.com/Mohamed-shameel/cit_rise',
      demo: 'https://cit-rise-j65co5ygp-mohamed-shameels-projects.vercel.app/',
      demoIcon: <FiExternalLink size={20} />
    },
    {
      title: 'RationMate — Smart Ration Distribution',
      status: '✅ Live on Render',
      statusClass: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
      description: 'MERN stack platform optimizing ration distribution using location data and demand forecasting.',
      impact: '⚡ 10k+ records. Query speed +40%. JWT auth system.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Maps API'],
      github: 'https://github.com/Mohamed-shameel/rationmate',
      demo: 'https://rationmate.onrender.com/',
      demoIcon: <FiExternalLink size={20} />
    },
    {
      title: 'QuestReady — AI Placement Mentor',
      status: '🔄 Building Aug-Sep',
      statusClass: 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20',
      description: 'Multi-agent AI system for placement prep with gamification, RAG, and personalized learning paths.',
      impact: '⚡ CrewAI agents + Claude API + 1000+ interview questions',
      tech: ['FastAPI', 'LangChain', 'CrewAI', 'Claude API', 'Mem0', 'Chroma'],
      github: '#',
      demo: null
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 relative">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-16">
          <span className="text-slate-500 font-mono text-sm tracking-widest block mb-2">02</span>
          <h2 className="text-3xl font-bold text-white inline-block relative">
            Featured Projects
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col h-full">
              
              <div className="flex justify-between items-start mb-6">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${project.statusClass}`}>
                  {project.status}
                </span>
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                    <FiGithub size={20} />
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                      {project.demoIcon || <FiExternalLink size={20} />}
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              <p className="text-sm text-emerald-400 italic mb-6">
                {project.impact}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, tIdx) => (
                  <span key={tIdx} className="bg-slate-900 text-blue-400 border border-slate-700 rounded-full px-3 py-1 text-xs font-mono uppercase tracking-wider">
                    {tech}
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

export default Projects;
