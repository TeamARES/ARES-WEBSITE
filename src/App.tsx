import { useEffect } from 'react';
import Lenis from 'lenis';
import { animate } from 'animejs';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DepartmentsSection } from './components/DepartmentsSection';
import { MembersSection } from './components/MembersSection';
import { ProjectsSection } from './components/ProjectsSection';
import { RecruitmentSection } from './components/RecruitmentSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CompetitionsSection } from './components/CompetitionsSection';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8,
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const observerCallback: IntersectionObserverCallback = (entries, obs) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          animate(entry.target, {
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 900,
            delay: index * 80,
          });
          obs.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.08,
    });

    const revealTimer = setTimeout(() => {
      document.querySelectorAll('.content-section, .wireframe-card, .faq-item, .minimal-footer').forEach((el) => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.opacity = '0';
        htmlEl.style.transform = 'translateY(50px)';
        observer.observe(htmlEl);
      });
    }, 200);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
      clearTimeout(revealTimer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app-container tech-grid-bg">
      <Navbar />

      <main>
        <HeroSection />
        <DepartmentsSection />
        <MembersSection />
        <ProjectsSection />
        <CompetitionsSection />
        <RecruitmentSection />
        <FaqSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
