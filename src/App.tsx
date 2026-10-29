import { useEffect } from 'react';
import Lenis from 'lenis';
import { animate } from 'animejs';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Team } from './pages/Team';

// Helper to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Lenis initialization component
function LenisSetup() {
  const { pathname } = useLocation();

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

    // Reset lenis scroll when route changes
    lenis.scrollTo(0, { immediate: true });

    const observerCallback: IntersectionObserverCallback = (entries, obs) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.dataset.revealed = 'true';
          animate(target, {
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 900,
            delay: index * 80,
          });
          obs.unobserve(target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0,
    });

    // Request animation frame ensures DOM is fully painted before we query and hide
    const rafHide = requestAnimationFrame(() => {
      document.querySelectorAll('.content-section, .wireframe-card, .faq-item, .minimal-footer').forEach((el) => {
        const htmlEl = el as HTMLElement;
        if (htmlEl.dataset.revealed !== 'true') {
          htmlEl.style.opacity = '0';
          htmlEl.style.transform = 'translateY(50px)';
          observer.observe(htmlEl);
        }
      });
    });

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
      cancelAnimationFrame(rafHide);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <LenisSetup />
      <div className="app-container tech-grid-bg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
