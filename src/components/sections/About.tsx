import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Code, Shield, Server, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const highlights = [
  {
    title: 'Full Stack Development',
    description: 'Building responsive, accessible, and performant web applications using React, TypeScript, and FastAPI.',
    icon: <Code className="text-neon-blue" size={24} />
  },
  {
    title: 'Data Processing & AI',
    description: 'Developing intelligent pipelines for document parsing and leveraging LLMs for automated workflows.',
    icon: <Cpu className="text-neon-purple" size={24} />
  },
  {
    title: 'DevOps & Infrastructure',
    description: 'Containerizing applications, setting up CI/CD, and managing infrastructure with Docker and Linux.',
    icon: <Server className="text-blue-400" size={24} />
  },
  {
    title: 'Security Engineering',
    description: 'Applying security best practices, vulnerability scanning, and secure API design.',
    icon: <Shield className="text-emerald-400" size={24} />
  }
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader 
              title="About Me" 
              badge="Introduction"
              subtitle="I am a Full Stack Developer & Software Engineer passionate about building systems that matter."
            />
            
            <motion.div 
              className="prose prose-invert max-w-none text-slate-400 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="mb-6 text-justify">
                I currently work at <strong>Stylotech</strong>, where I have progressed from a Full Stack Developer to a Senior Engineer. My journey has been driven by a deep curiosity for how things work and a desire to build robust, scalable, and secure software.
              </p>
              <p className="mb-6 text-justify">
                I specialize in connecting the dots between complex backend systems, intelligent data pipelines, and intuitive frontend interfaces. Whether it's architecting a document processing engine for financial audits or setting up secure containerized infrastructure, I focus on delivering engineering excellence.
              </p>
              <p className="text-justify">
                My philosophy is simple: <em>build for maintainability, secure by design, and automate repetitive work.</em>
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="p-6 h-full border border-white/5 bg-slate-900/50 hover:bg-slate-900 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-4 border border-white/5">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed text-justify">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
