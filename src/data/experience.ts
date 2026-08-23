export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    id: '1',
    role: 'Senior Engineer',
    company: 'Stylopedia Technology PVT. LTD.',
    duration: '2024 - Present',
    description: [
      'Designed scalable REST APIs using FastAPI and Node.js supporting secure authentication, RBAC, and asynchronous processing.',
      'Built reusable React components improving maintainability and reducing frontend development effort.',
      'Implemented GitLab CI/CD pipelines and Docker-based deployments to streamline release workflows.',
      'Optimized PostgreSQL queries and backend services for improved performance when processing financial datasets.',
      'Collaborated in Agile sprint planning, code reviews, and feature releases across cross-functional teams.'
    ]
  },
  {
    id: '2',
    role: 'Full Stack Developer',
    company: 'Stylopedia Technology PVT. LTD.',
    duration: 'Previous',
    description: [
      'Developed scalable frontend interfaces using React, Vite, and Bootstrap.',
      'Built and maintained RESTful APIs using Python and FastAPI.',
      'Implemented secure authentication and authorization mechanisms.',
      'Optimized application performance and resolved complex debugging scenarios.',
      'Collaborated on production-oriented engineering processes.'
    ]
  }
];
