import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { motion } from 'framer-motion';
import { ShieldAlert, Network, Search, Lock } from 'lucide-react';

export function SecuritySection() {
  const securityPractices = [
    {
      icon: <Network size={24} className="text-emerald-400" />,
      title: "Network Reconnaissance",
      desc: "Using Nmap and RustScan to identify open ports, services, and potential network vulnerabilities before deployment."
    },
    {
      icon: <Search size={24} className="text-emerald-400" />,
      title: "Vulnerability Scanning",
      desc: "Integrating Trivy for container image scanning to prevent deploying images with known CVEs into production."
    },
    {
      icon: <ShieldAlert size={24} className="text-emerald-400" />,
      title: "Web Security Testing",
      desc: "Utilizing Burp Suite concepts to test web applications for common vulnerabilities like XSS, SQLi, and misconfigurations."
    },
    {
      icon: <Lock size={24} className="text-emerald-400" />,
      title: "TLS/SSL Assessment",
      desc: "Evaluating server configurations using testssl.sh to ensure strong cryptographic protocols and prevent downgrade attacks."
    }
  ];

  return (
    <section id="security" className="py-24 relative bg-slate-900/30">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          title="Security Engineering" 
          badge="Cybersecurity"
          subtitle="Building defensible systems and integrating security tooling into the development lifecycle."
        />
        
        <div className="grid md:grid-cols-2 gap-12 mt-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="prose prose-invert max-w-none text-slate-400 mb-8"
            >
              <p className="text-lg leading-relaxed">
                Security is not an afterthought; it's a foundational engineering principle. My background includes practical experience in a Security Engineering Lab environment where I learned to think like an attacker to build better defenses.
              </p>
              <p className="text-lg leading-relaxed">
                I actively apply concepts from SIEM solutions like Splunk and IBM QRadar to ensure my applications log actionable, structured data, making systems observable and auditable in production.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {securityPractices.map((practice, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="p-5 h-full border border-emerald-500/20 bg-slate-900 hover:border-emerald-500/50 transition-colors">
                    <div className="mb-3">
                      {practice.icon}
                    </div>
                    <h4 className="text-white font-semibold mb-2">{practice.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{practice.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Terminal Window Mockup */}
            <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-950 shadow-2xl shadow-emerald-500/10">
              <div className="bg-slate-900 border-b border-slate-800 px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 text-xs text-slate-500 font-mono">security-lab ~ bash</div>
              </div>
              <div className="p-6 font-mono text-sm overflow-x-auto">
                <div className="text-emerald-400 mb-2">$ nmap -sV -sC target-server</div>
                <div className="text-slate-300 mb-4 opacity-70">
                  Starting Nmap 7.93<br/>
                  Nmap scan report for target-server<br/>
                  Host is up (0.012s latency).<br/>
                  PORT   STATE SERVICE VERSION<br/>
                  22/tcp open  ssh     OpenSSH 8.4p1<br/>
                  80/tcp open  http    nginx 1.18.0<br/>
                  443/tcp open ssl/http nginx<br/>
                </div>
                
                <div className="text-emerald-400 mb-2">$ trivy image my-api:latest</div>
                <div className="text-slate-300 opacity-70">
                  2026-08-23T10:00:00Z INFO Vulnerability scanning enabled<br/>
                  my-api:latest (alpine 3.19.0)<br/>
                  =============================<br/>
                  Total: 0 (UNKNOWN: 0, LOW: 0, MEDIUM: 0, HIGH: 0, CRITICAL: 0)
                </div>
                <div className="mt-4 flex items-center gap-2 text-emerald-400">
                  <span className="animate-pulse">_</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
