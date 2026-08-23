import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { educationList, certifications } from '../../data/education';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';

export function EducationSection() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          title="Education & Certifications" 
          badge="Academic"
          subtitle="My academic background and professional certifications."
          align="center"
        />
        
        <div className="mt-16 grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-neon-blue/10 text-neon-blue rounded-xl">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            
            <div className="space-y-6">
              {educationList.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 md:p-8 hover:border-neon-blue/30 transition-all h-full bg-slate-900/50">
                    <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                    <h5 className="text-lg text-slate-300 font-medium mb-4">{edu.institution}</h5>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={16} className="text-neon-blue" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={16} className="text-neon-purple" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    
                    {edu.score && (
                      <div className="inline-block px-3 py-1 bg-slate-800 text-neon-blue text-sm font-medium rounded-full border border-white/5">
                        {edu.score}
                      </div>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Certifications Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-neon-purple/10 text-neon-purple rounded-xl">
                <Award size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 md:p-8 hover:border-neon-purple/30 transition-all bg-slate-900/50">
                    <h4 className="text-xl font-bold text-white mb-3">{cert.title}</h4>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <span className="text-lg text-slate-300">{cert.issuer}</span>
                      <div className="flex items-center gap-1.5 text-sm text-slate-400">
                        <Calendar size={16} />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
