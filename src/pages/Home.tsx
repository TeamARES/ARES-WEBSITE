import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { AboutAresSection } from '../components/AboutAresSection';
import { DepartmentsSection } from '../components/DepartmentsSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { NotableAlumniSection } from '../components/NotableAlumniSection';
import { CompetitionsSection } from '../components/CompetitionsSection';
import { RecruitmentSection } from '../components/RecruitmentSection';
import { FaqSection } from '../components/FaqSection';

export const Home: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <AboutAresSection />
      <DepartmentsSection />
      <ProjectsSection />
      <NotableAlumniSection />
      <CompetitionsSection />
      <RecruitmentSection />
      <FaqSection />
    </main>
  );
};

