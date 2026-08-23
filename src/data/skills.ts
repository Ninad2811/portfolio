export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'SQL', 'HTML5', 'CSS3']
  },
  {
    title: 'Frontend',
    skills: ['React', 'Vite', 'Bootstrap', 'Tailwind CSS', 'Responsive Web Design']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'SQLAlchemy', 'REST APIs', 'JWT Auth']
  },
  {
    title: 'Databases & Queue',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Celery']
  },
  {
    title: 'DevOps & Infrastructure',
    skills: ['Docker', 'Docker Compose', 'Kubernetes', 'Git', 'GitHub', 'GitLab CI/CD', 'Linux (Ubuntu, Kali)', 'AWS']
  },
  {
    title: 'Security',
    skills: ['Penetration Testing', 'Vulnerability Analysis', 'Secure Coding', 'Ethical Hacking', 'Nmap', 'Burp Suite', 'Web Security', 'Network Security']
  },
  {
    title: 'Data Processing & Tools',
    skills: ['pandas', 'openpyxl', 'pdfplumber', 'Jupyter Notebook']
  },
  {
    title: 'AI & ML',
    skills: ['TensorFlow', 'OpenCV', 'Media Pipe', 'NLP', 'OpenAI', 'GPT-4o', 'Claude', 'Ollama']
  }
];
