import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Github, Linkedin } from '../icons';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'About', path: '/#about' },
  { name: 'Experience', path: '/#experience' },
  { name: 'Skills', path: '/#skills' },
  { name: 'Projects', path: '/#projects' },
  { name: 'DevOps', path: '/#devops' },
  { name: 'Security', path: '/#security' },
  { name: 'Journey', path: '/#journey' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash links
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled 
          ? 'bg-slate-950/80 backdrop-blur-md border-white/10 py-3 shadow-lg shadow-black/20' 
          : 'bg-transparent border-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tighter text-white flex items-center gap-2">
          <span className="text-neon-blue">&lt;</span>
          Ninad Chavan
          <span className="text-neon-purple">/&gt;</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium text-slate-300 hover:text-white px-3 py-2 rounded-md transition-colors hover:bg-white/5"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="h-6 w-px bg-slate-700 mx-2" />
          <div className="flex items-center gap-3">
            <a href="https://github.com/Ninad2811" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/ninadchavan28" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <Button size="sm" onClick={() => {
               const element = document.getElementById('contact');
               if(element) element.scrollIntoView({behavior: 'smooth'});
            }}>
              Contact Me
            </Button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-slate-300 hover:text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-slate-900 border-b border-white/10"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 p-3 rounded-lg"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-4 p-3 border-t border-white/10 mt-2 pt-4">
                <a href="https://github.com/Ninad2811" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/ninadchavan28" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
