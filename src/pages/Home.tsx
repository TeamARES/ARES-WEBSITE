import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { DepartmentsSection } from '../components/DepartmentsSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { RecruitmentSection } from '../components/RecruitmentSection';
import { FaqSection } from '../components/FaqSection';
import { CompetitionsSection } from '../components/CompetitionsSection';

export const Home: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <DepartmentsSection />
      <ProjectsSection />
      <CompetitionsSection />
      <RecruitmentSection />
      <FaqSection />
    </main>
  );
};
