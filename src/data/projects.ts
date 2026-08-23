export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  solution: string;
  architectureDescription: string;
  technologies: string[];
  keyFeatures: string[];
  challenges: { title: string; description: string }[];
  category: 'Frontend' | 'Backend' | 'Full Stack' | 'DevOps' | 'Security' | 'AI';
  githubUrl?: string;
  liveDemoUrl?: string;
  caseStudyAvailable: boolean;
  slug: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Smart CA Audit Assistant',
    shortDescription: 'Intelligent financial data processing platform automating up to 80% of repetitive audit tasks for Chartered Accountants.',
    fullDescription: 'An intelligent financial data processing and audit-assistance platform designed to automate repetitive work involved in analyzing financial data for Chartered Accountants. It processes various formats like PDFs, Excel, and CSVs through an asynchronous pipeline for parsing, normalization, classification, ledger mapping, duplicate detection, and Tally ERP export.',
    problem: 'Chartered Accountants (CA) require more time to manually feed the clients data in the tally or other software which take too much efforts, time and man power.',
    solution: 'Automated 70-80% of repetitive financial-data processing work while keeping uncertain transactions available for manual review using a confidence-based scoring system (High -> AUTO, Medium -> REVIEW, Low -> SUSPENSE).',
    architectureDescription: 'The system uses a React frontend with a FastAPI backend. Financial documents are uploaded and processed asynchronously using Celery and Redis with checkpoint recovery. It features a multi-tenant RBAC architecture supporting ORG_OWNER, ORG_MEMBER, and END_CUSTOMER roles with engagement-level data isolation. The entire system is containerized with Docker.',
    technologies: ['React', 'TypeScript', 'FastAPI', 'Python', 'PostgreSQL', 'Celery', 'Redis', 'SQLAlchemy', 'Docker', 'pandas', 'JWT Authentication', 'REST APIs', 'NLP', 'RBAC'],
    keyFeatures: [
      'PDF and Excel/CSV transaction parsing with Pandas',
      'Rule-based transaction classification engine (18+ categories)',
      'Confidence scoring engine (AUTO/REVIEW/SUSPENSE)',
      'Tenant-aware duplicate detection using SHA-256 fingerprinting',
      'Fault-tolerant background processing with Celery workers',
      'Multi-tenant RBAC supporting different organizational roles',
      'Fuzzy vendor-to-ledger mapping using RapidFuzz',
      'Jinja2-based Tally ERP XML generation',
      'Secure authentication with JWT, refresh rotation, and OTP'
    ],
    challenges: [
      {
        title: 'Corporate Identifiers',
        description: 'Removing corporate identifiers from transaction descriptions could cause compliance-related information such as TDS information to be lost. The solution emphasized preserving important identifiers while accurately normalizing the core transaction data.'
      },
      {
        title: 'Incorrect Classification',
        description: 'A generic "Bank Transfer" classification could incorrectly absorb vendor payments. Implemented granular classification rules to prevent miscategorization.'
      },
      {
        title: 'Duplicate Detection',
        description: 'Processing large files repeatedly could lead to duplicate entries. Used SHA-256 fingerprints and database-level batch queries to efficiently identify and reject duplicate transactions.'
      }
    ],
    category: 'Full Stack',
    caseStudyAvailable: true,
    slug: 'smart-ca-audit-assistant'
  },
  {
    id: '3',
    title: 'PSDC Cyber Range Lab – Real World Simulation Platform',
    shortDescription: 'Modular cyber range platform developed for the Pratibha Skill Development Center (PSDC) simulating real-world environments for cybersecurity training and validation.',
    fullDescription: 'Designed and developed a modular cyber range platform for the Pratibha Skill Development Center (PSDC). The platform simulates real-world environments including Metro, Banking, Hospital, and Power Plant systems for cybersecurity training and security validation. Built a scalable and reusable architecture enabling independent system modules and seamless integration across multiple simulated enterprise domains.',
    problem: 'Lack of realistic training environments for cybersecurity professionals to test attack and defense scenarios across distributed enterprise domains.',
    solution: 'Engineered role-based workflows, secure authentication, and REST APIs to replicate real-time operational processes, user interactions, and enterprise data flows across simulated environments.',
    architectureDescription: 'Modular backend services built with Node.js, Express.js, MongoDB, and Python. Features independent system modules, distributed workflows, and secure architecture representing various industry domains.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'REST APIs', 'Linux', 'Cybersecurity', 'Network Security', 'System Design', 'RBAC', 'Secure Architecture'],
    keyFeatures: [
      'Real-world environment simulation (Metro, Banking, Hospital, Power Plant)',
      'Role-based workflows and enterprise data flows simulation',
      'Threat modeling and vulnerability analysis',
      'Distributed system architectures simulation',
      'Realistic cyber attack and defense scenarios modeling'
    ],
    challenges: [],
    category: 'Security',
    caseStudyAvailable: false,
    slug: 'cyber-range-lab'
  }
];
