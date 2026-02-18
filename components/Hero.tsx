
import React from 'react';
import { RESUME_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-medium animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2 animate-pulse"></span>
            Available for New Opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight">
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">{RESUME_DATA.name}</span>
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-slate-600">
            {RESUME_DATA.title}
          </p>
          <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
            {RESUME_DATA.summary}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
              View My Work
            </a>
            <a href={`mailto:${RESUME_DATA.email}`} className="px-8 py-4 bg-white text-indigo-600 border border-indigo-200 font-semibold rounded-xl hover:bg-slate-50 transition-all">
              Contact Me
            </a>
          </div>
          <div className="flex items-center gap-6 pt-6 text-slate-400">
            <a href="https://linkedin.com" className="hover:text-indigo-600 transition-colors"><i className="fab fa-linkedin text-2xl"></i></a>
            <a href="https://github.com" className="hover:text-indigo-600 transition-colors"><i className="fab fa-github text-2xl"></i></a>
            <a href={`tel:${RESUME_DATA.mobile}`} className="hover:text-indigo-600 transition-colors"><i className="fas fa-phone text-xl"></i></a>
          </div>
        </div>
        
        <div className="relative flex-shrink-0 group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500 to-blue-400 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://picsum.photos/seed/nikhil/800/800" 
              alt={RESUME_DATA.name} 
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
