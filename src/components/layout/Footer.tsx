import { ArrowUp, Mail } from 'lucide-react';
import { Github, Linkedin } from '../icons';
import { Link } from 'react-router-dom';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2 mb-4 inline-flex">
              <span className="text-neon-blue">&lt;</span>
              Ninad Chavan
              <span className="text-neon-purple">/&gt;</span>
            </Link>
            <p className="text-slate-400 max-w-md mb-6">
              Full Stack Developer & Software Engineer. Building scalable web applications, intelligent data-processing systems, secure APIs, and production-ready infrastructure.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/Ninad2811" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-neon-blue/20 text-slate-300 hover:text-neon-blue transition-all border border-white/5 hover:border-neon-blue/30">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ninadchavan28" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-neon-blue/20 text-slate-300 hover:text-neon-blue transition-all border border-white/5 hover:border-neon-blue/30">
                <Linkedin size={20} />
              </a>
              <a href="mailto:ninadchavan2811@gmail.com" className="p-2 rounded-full bg-white/5 hover:bg-neon-blue/20 text-slate-300 hover:text-neon-blue transition-all border border-white/5 hover:border-neon-blue/30">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="flex flex-col gap-2">
              <li><Link to="/#about" className="text-slate-400 hover:text-neon-blue transition-colors">About</Link></li>
              <li><Link to="/#experience" className="text-slate-400 hover:text-neon-blue transition-colors">Experience</Link></li>
              <li><Link to="/#projects" className="text-slate-400 hover:text-neon-blue transition-colors">Projects</Link></li>
              <li><Link to="/#skills" className="text-slate-400 hover:text-neon-blue transition-colors">Skills</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="flex flex-col gap-2">
              <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-neon-blue transition-colors">Resume</a></li>
              <li><Link to="/#contact" className="text-slate-400 hover:text-neon-blue transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Ninad Chavan. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            Back to top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
