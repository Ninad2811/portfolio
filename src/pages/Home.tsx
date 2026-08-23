import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { EducationSection } from '../components/sections/EducationSection';
import { DevOpsSection } from '../components/sections/DevOpsSection';
import { SecuritySection } from '../components/sections/SecuritySection';
import { JourneySection } from '../components/sections/JourneySection';
import { ContactSection } from '../components/sections/ContactSection';
import { Helmet } from 'react-helmet-async';

export function Home() {
  return (
    <>
      <Helmet>
        <title>Ninad Chavan | Full Stack Developer & Software Engineer</title>
        <meta name="description" content="Portfolio of Ninad Chavan, Full Stack Developer & Software Engineer. View my projects, experience, and technical skills." />
      </Helmet>
      
      <Hero />
      <About />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <DevOpsSection />
      <SecuritySection />
      <JourneySection />
      <ContactSection />
    </>
  );
}
