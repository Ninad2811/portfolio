import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { motion } from 'framer-motion';
import { GitBranch, Server, Database, Cloud, Terminal, Container, Lock } from 'lucide-react';

export function DevOpsSection() {
  return (
    <section id="devops" className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[500px] bg-blue-500/10 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          title="DevOps & Infrastructure" 
          badge="Architecture"
          subtitle="How I deploy, manage, and scale applications from code to cloud."
          align="center"
        />
        
        <div className="mt-16 max-w-5xl mx-auto">
          {/* Interactive Pipeline Diagram */}
          <div className="hidden md:flex items-center justify-between relative py-12">
            
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-[5%] right-[5%] h-1 bg-slate-800 -translate-y-1/2 z-0">
              <motion.div 
                className="h-full bg-gradient-to-r from-blue-500 via-neon-blue to-neon-purple"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </div>
            
            {/* Steps */}
            {[
              { icon: <GitBranch size={24} />, label: "Code & CI", sub: "Git / Jenkins" },
              { icon: <Container size={24} />, label: "Containerize", sub: "Docker" },
              { icon: <Server size={24} />, label: "Orchestrate", sub: "Docker Compose / K8s" },
              { icon: <Database size={24} />, label: "Data Layer", sub: "PostgreSQL / Redis" },
              { icon: <Cloud size={24} />, label: "Delivery", sub: "Traefik / AWS" }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="relative z-10 flex flex-col items-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + (index * 0.2) }}
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 group-hover:border-neon-blue shadow-xl flex items-center justify-center text-slate-300 group-hover:text-neon-blue transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-neon-blue/20">
                  {step.icon}
                </div>
                <div className="mt-4 text-center">
                  <h4 className="text-white font-semibold">{step.label}</h4>
                  <p className="text-xs text-slate-400 mt-1">{step.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile version of pipeline */}
          <div className="flex flex-col gap-6 md:hidden relative pl-8 before:absolute before:left-[15px] before:top-4 before:bottom-4 before:w-px before:bg-slate-800">
            {[
              { icon: <GitBranch size={20} />, label: "Code & CI", sub: "Git / Jenkins" },
              { icon: <Container size={20} />, label: "Containerize", sub: "Docker" },
              { icon: <Server size={20} />, label: "Orchestrate", sub: "Docker Compose / K8s" },
              { icon: <Database size={20} />, label: "Data Layer", sub: "PostgreSQL / Redis" },
              { icon: <Cloud size={20} />, label: "Delivery", sub: "Traefik / AWS" }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="relative z-10 bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="absolute -left-[35px] w-6 h-6 rounded-full bg-slate-900 border-2 border-neon-blue flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-neon-blue" />
                </div>
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-neon-blue">
                  {step.icon}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{step.label}</h4>
                  <p className="text-sm text-slate-400">{step.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-16">
            <Card className="p-8 border border-white/5 bg-slate-900/60">
              <Terminal className="text-neon-purple mb-4" size={32} />
              <h3 className="text-xl font-semibold text-white mb-3">Infrastructure as Code</h3>
              <p className="text-slate-400 leading-relaxed">
                I believe in reproducible environments. Using Docker and Docker Compose, I ensure that applications run consistently from local development to production. I configure reverse proxies like Traefik to handle routing, SSL termination, and load balancing automatically.
              </p>
            </Card>
            <Card className="p-8 border border-white/5 bg-slate-900/60">
              <Lock className="text-neon-blue mb-4" size={32} />
              <h3 className="text-xl font-semibold text-white mb-3">Secure Networking</h3>
              <p className="text-slate-400 leading-relaxed">
                Deploying services securely by utilizing Cloudflare Tunnels to avoid exposing public ports, configuring strict firewall rules, and isolating internal services (like databases and Redis) on private Docker networks.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
