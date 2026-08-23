import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Github } from '../components/icons';
import { projects } from '../data/projects';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { motion } from 'framer-motion';

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <Helmet>
        <title>{project.title} | Ninad Chavan</title>
        <meta name="description" content={project.shortDescription} />
      </Helmet>

      <div className="container mx-auto px-4 md:px-6">
        <Link to="/#projects" className="inline-flex items-center text-slate-400 hover:text-neon-blue transition-colors mb-8">
          <ArrowLeft size={16} className="mr-2" /> Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="neon">{project.category}</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{project.title}</h1>
              <p className="text-xl text-slate-400 max-w-3xl">{project.shortDescription}</p>
            </div>
            
            <div className="flex gap-4 shrink-0">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary">
                    <Github size={18} className="mr-2" /> Source
                  </Button>
                </a>
              )}
              {project.liveDemoUrl && (
                <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                  <Button>
                    <ExternalLink size={18} className="mr-2" /> Live Demo
                  </Button>
                </a>
              )}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
                <div className="prose prose-invert max-w-none text-slate-300">
                  <p className="leading-relaxed text-lg">{project.fullDescription}</p>
                </div>
              </section>

              <section className="grid sm:grid-cols-2 gap-8 bg-slate-900/50 p-6 md:p-8 rounded-2xl border border-white/5">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-neon-purple">The Problem</h3>
                  <p className="text-slate-300 leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-neon-blue">The Solution</h3>
                  <p className="text-slate-300 leading-relaxed">{project.solution}</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Architecture</h2>
                <div className="prose prose-invert max-w-none text-slate-300 mb-6">
                  <p className="leading-relaxed">{project.architectureDescription}</p>
                </div>
              </section>
              
              {project.challenges && project.challenges.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold text-white mb-6">Engineering Challenges</h2>
                  <div className="space-y-6">
                    {project.challenges.map((challenge, index) => (
                      <div key={index} className="bg-slate-900 border border-slate-800 rounded-xl p-6 border-l-4 border-l-neon-blue">
                        <h3 className="text-lg font-semibold text-white mb-2">{challenge.title}</h3>
                        <p className="text-slate-400">{challenge.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            <div className="space-y-8">
              <div className="bg-slate-900/50 border border-white/5 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4 border-b border-white/10 pb-2">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-md text-sm text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900/50 border border-white/5 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4 border-b border-white/10 pb-2">Key Features</h3>
                <ul className="space-y-3">
                  {project.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm text-slate-300">
                      <span className="text-neon-blue mr-2 font-bold">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
