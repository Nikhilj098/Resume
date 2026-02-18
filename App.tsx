
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'py-4 glass border-b border-slate-100' : 'py-8 bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-2xl font-black text-slate-900 tracking-tighter">
          N<span className="text-indigo-600">.</span>
        </a>
        <div className="hidden md:flex items-center gap-10">
          <a href="#home" className="text-sm font-semibold hover:text-indigo-600 transition-colors">Home</a>
          <a href="#skills" className="text-sm font-semibold hover:text-indigo-600 transition-colors">Skills</a>
          <a href="#projects" className="text-sm font-semibold hover:text-indigo-600 transition-colors">Projects</a>
          <a href="#home" className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all">
            Resume
          </a>
        </div>
        <button className="md:hidden text-2xl">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;
