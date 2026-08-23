import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { journeyTimeline } from '../../data/timeline';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export function JourneySection() {
  return (
    <section id="journey" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          title="Development Journey" 
          badge="Evolution"
          subtitle="How I've evolved from a student to a senior software engineer."
          align="center"
        />
        
        <div className="mt-16 max-w-3xl mx-auto flex flex-col items-center">
          {journeyTimeline.map((item, index) => (
            <React.Fragment key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full text-center p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-neon-purple/50 transition-colors shadow-lg"
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{item.stage}</h3>
                <p className="text-slate-400 leading-relaxed text-sm text-justify">{item.description}</p>
              </motion.div>
              
              {index < journeyTimeline.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  whileInView={{ opacity: 1, height: 40 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="w-px bg-gradient-to-b from-slate-700 to-neon-purple/50 my-2 flex flex-col items-center justify-end relative"
                >
                  <ArrowDown size={16} className="text-neon-purple/50 absolute -bottom-4 bg-slate-950 rounded-full" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
