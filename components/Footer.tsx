
import React from 'react';
import { RESUME_DATA, AWARDS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">K J Nikhil</h3>
            <p className="text-slate-400 max-w-xs">
              Pushing the boundaries of automation with AI-driven testing and agentic workflows.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <i className="fab fa-github"></i>
              </a>
              <a href={`mailto:${RESUME_DATA.email}`} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Awards & Honors</h4>
            <ul className="space-y-4">
              {AWARDS.map((award, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-8 h-8 rounded bg-indigo-600/20 text-indigo-400 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-award"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-200">{award.title}</p>
                    <p className="text-xs text-slate-500">{award.organization} • {award.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <a href="#home" className="text-slate-400 hover:text-white transition-colors">Home</a>
              <a href="#skills" className="text-slate-400 hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="text-slate-400 hover:text-white transition-colors">Projects</a>
              <a href={`mailto:${RESUME_DATA.email}`} className="text-slate-400 hover:text-white transition-colors">Hire Me</a>
            </nav>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-800 text-center text-slate-500 text-sm">
          {/* Fixed: Use new Date() instead of new Array() to get the current year */}
          <p>© {new Date().getFullYear()} K J Nikhil. Built with React, Tailwind & Gemini AI.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
