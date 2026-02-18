
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Technical Expertise</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Leveraging modern AI and automation tools to build robust, future-proof quality solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((skill, index) => (
            <div key={index} className="glass p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <i className={`fas ${skill.icon} text-xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{skill.category}</h3>
              <ul className="space-y-3">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-slate-600 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
