import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Mail, MapPin, Send, Phone } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative bg-slate-900/30">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          title="Get In Touch" 
          badge="Contact"
          subtitle="Interested in working together or have a question? Let's connect."
          align="center"
        />
        
        <div className="max-w-5xl mx-auto mt-16 grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 flex flex-col gap-6">
            <Card className="p-8 h-full bg-slate-900/60 border border-white/5 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-neon-blue/10 flex items-center justify-center text-neon-blue shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <a href="mailto:ninadchavan2811@gmail.com" className="text-slate-400 hover:text-neon-blue transition-colors">
                      ninadchavan2811@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Phone</h4>
                    <a href="tel:+918329436305" className="text-slate-400 hover:text-green-500 transition-colors">
                      +91 8329436305
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-neon-purple/10 flex items-center justify-center text-neon-purple shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Location</h4>
                    <p className="text-slate-400">
                      Pune, India
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="md:col-span-3">
            <Card className="p-8 bg-slate-900 border border-white/5 h-full flex flex-col items-center justify-center text-center min-h-[300px]">
              <div className="w-20 h-20 rounded-full bg-neon-blue/10 text-neon-blue flex items-center justify-center mb-6">
                <Mail size={40} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">I'm just one mail away!</h3>
              <p className="text-slate-400 max-w-md mx-auto mb-8 text-lg text-justify">
                I'm currently open to new opportunities and projects. Whether you have a question or just want to say hi, my inbox is always open.
              </p>
              <a href="mailto:ninadchavan2811@gmail.com">
                <Button size="lg" className="px-8 text-lg">
                  Send an Email <Send size={20} className="ml-2" />
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
