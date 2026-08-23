import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Github } from '../icons';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { projects } from '../../data/projects';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative bg-slate-900/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <SectionHeader 
            title="Featured Projects" 
            badge="Portfolio"
            subtitle="Real-world systems, applications, and engineering solutions I have built."
            className="mb-0"
          />
        </div>

        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {projects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card variant="neon" className="h-full flex flex-col p-6 sm:p-8 bg-slate-900/80 backdrop-blur-sm">
                  <div className="flex justify-between items-start mb-6">
                    <Badge variant="neon">{project.category}</Badge>
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                          <Github size={20} />
                        </a>
                      )}
                      {project.liveDemoUrl && (
                        <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-slate-400 mb-6 flex-grow text-justify">{project.shortDescription}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 6).map((tech) => (
                        <span key={tech} className="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded border border-slate-700">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 6 && (
                        <span className="text-xs px-2 py-1 bg-slate-800 text-slate-400 rounded border border-slate-700">
                          +{project.technologies.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-white/10">
                    {project.caseStudyAvailable ? (
                      <Link to={`/projects/${project.slug}`}>
                        <Button variant="ghost" className="w-full justify-between group px-0 hover:bg-transparent">
                          <span className="text-neon-blue group-hover:text-neon-blue/80 transition-colors">Read Full Case Study</span>
                          <ArrowRight size={18} className="text-neon-blue group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    ) : (
                      <div className="text-sm text-slate-500 italic">Internal / Confidential Project</div>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
