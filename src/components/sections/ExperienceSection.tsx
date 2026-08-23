import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { experiences } from '../../data/experience';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative bg-slate-900/30">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          title="Professional Experience" 
          badge="Career"
          subtitle="My journey building production-ready systems and progressing as an engineer."
        />
        
        <div className="max-w-4xl mx-auto mt-16 relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`relative flex flex-col md:flex-row items-center mb-16 last:mb-0 ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-neon-blue -translate-x-1/2 flex items-center justify-center z-10">
                <Briefcase size={14} className="text-neon-blue" />
              </div>
              
              {/* Content */}
              <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:order-last'}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card className="p-6 md:p-8 hover:border-neon-blue/30 transition-all">
                    <div className={`flex flex-col mb-4 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                      <Badge variant="neon" className="mb-2">{exp.duration}</Badge>
                      <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                      <h4 className="text-lg font-medium text-slate-400 text-justify">{exp.company}</h4>
                    </div>
                    <ul className={`space-y-3 text-slate-300 text-sm md:text-base ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className="leading-relaxed text-justify">{item}</li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
