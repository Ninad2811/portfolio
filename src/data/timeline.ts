export interface TimelineEvent {
  id: string;
  stage: string;
  description: string;
}

export const journeyTimeline: TimelineEvent[] = [
  {
    id: '1',
    stage: 'Student',
    description: 'B.E. in Information Technology at Savitribai Phule Pune University (SPPU). Began foundational learning.'
  },
  {
    id: '2',
    stage: 'Full Stack Development',
    description: 'Transitioned into web development, mastering React, JavaScript, HTML/CSS, and building full-stack applications.'
  },
  {
    id: '3',
    stage: 'Python / Backend Engineering',
    description: 'Deepened expertise in backend systems using Python, FastAPI, PostgreSQL, and background processing with Celery.'
  },
  {
    id: '4',
    stage: 'Cybersecurity',
    description: 'Explored network security, vulnerability scanning, and security engineering labs utilizing tools like Nmap and Burp Suite.'
  },
  {
    id: '5',
    stage: 'Professional Software Engineering',
    description: 'Joined Stylotech as a Full Stack Developer, contributing to production-ready enterprise systems and APIs.'
  },
  {
    id: '6',
    stage: 'Senior Engineer',
    description: 'Promoted to Senior Engineer at Stylotech, architecting scalable systems and optimizing performance.'
  },
  {
    id: '7',
    stage: 'DevOps / Cloud / AI Engineering',
    description: 'Expanding into infrastructure management, CI/CD, Docker, Kubernetes, and integrating LLMs into automated workflows.'
  }
];
