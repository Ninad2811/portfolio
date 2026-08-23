export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  score?: string;
  details?: string[];
}

export const educationList: Education[] = [
  {
    id: '1',
    degree: 'Bachelor of Engineering, Major in Information Technology',
    institution: 'Trinity College of Engineering and Research',
    location: 'Pune, India',
    duration: 'May 2025',
    score: 'Cumulative GPA: 7.5',
  },
  {
    id: '2',
    degree: 'HSC (12th Grade)',
    institution: 'Yashwantrao Chavan Institute of Science',
    location: 'Satara, India',
    duration: 'May 2021',
    score: '82.17%',
  },
  {
    id: '3',
    degree: 'SSC (10th Grade)',
    institution: 'Bharat Vidya Mandir',
    location: 'Satara, India',
    duration: 'May 2019',
    score: '71%',
  }
];

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
}

export const certifications: Certification[] = [
  {
    id: '1',
    title: 'Ethical Hacker',
    issuer: 'Cisco',
    date: 'March 7, 2025'
  },
  {
    id: '2',
    title: 'Full Stack MERN Development',
    issuer: 'Pregrad',
    date: 'Aug 13, 2024'
  },
  {
    id: '3',
    title: 'Cyber Security and Ethical Hacking',
    issuer: 'Rinex',
    date: 'Sept 5, 2023'
  }
];
