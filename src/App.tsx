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
