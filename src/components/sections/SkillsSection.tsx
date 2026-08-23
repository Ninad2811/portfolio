import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { skillCategories } from '../../data/skills';
import { motion } from 'framer-motion';

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          title="Technical Skills" 
          badge="Expertise"
          subtitle="Technologies and tools I use to build robust and scalable systems."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full p-6 hover:border-neon-purple/30 transition-colors bg-slate-900/40">
                <h3 className="text-lg font-semibold text-white mb-4 border-b border-white/10 pb-2">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 text-sm bg-slate-800 text-slate-300 rounded-md border border-slate-700 hover:bg-slate-700 hover:text-white transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
