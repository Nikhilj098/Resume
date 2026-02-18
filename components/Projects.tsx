
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <p className="text-slate-500">
              Showcasing my impact at global companies like Google and British Telecom.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="w-12 h-1 rounded-full bg-indigo-600"></div>
            <div className="w-4 h-1 rounded-full bg-indigo-200"></div>
            <div className="w-4 h-1 rounded-full bg-indigo-200"></div>
          </div>
        </div>

        <div className="space-y-16">
          {PROJECTS.map((project, index) => (
            <div key={project.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
                  <img 
                    src={`https://picsum.photos/seed/${project.name}/800/500`} 
                    alt={project.name}
                    className="w-full h-auto rounded-2xl shadow-xl relative"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-indigo-600 shadow-sm">{project.domain}</span>
                    <span className="bg-indigo-600 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-sm">{project.client}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-slate-900">{project.name}</h3>
                  <p className="text-indigo-600 font-semibold">{project.role}</p>
                </div>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  <h4 className="font-bold text-slate-800">Key Contributions:</h4>
                  <ul className="grid grid-cols-1 gap-3">
                    {project.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-600">
                        <i className="fas fa-check-circle text-indigo-500 mt-1"></i>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex flex-wrap gap-2">
                  {project.tools.map((tool, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-sm font-medium hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
