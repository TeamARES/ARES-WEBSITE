import React, { useEffect, useRef } from 'react';
import { createTimeline } from 'animejs';

export const HeroSection: React.FC = () => {
  const heroWrapperRef = useRef<HTMLDivElement>(null);
  const timelineRef    = useRef<any>(null);
  const canvasRef      = useRef<HTMLDivElement>(null);
  const roboticsRef    = useRef<HTMLDivElement>(null);
  const droneRef       = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const buildTimeline = () => {
      const segments = heroWrapperRef.current?.querySelectorAll('.expand-segment') as NodeListOf<HTMLElement>;
      segments?.forEach(el => el.style.maxWidth = '');

      const tl = createTimeline({
        autoplay: false,
        defaults: { ease: 'linear', duration: 800 },
      });

      tl.add('.ew-utomated',   { maxWidth: ['0ch', '9.5ch'] }, 0);
      tl.add('.ew-over',       { maxWidth: ['0ch', '5.2ch'] }, 0);
      tl.add('.ew-mbedded',    { maxWidth: ['0ch', '8.5ch'] }, 0);
      tl.add('.ew-ystems',     { maxWidth: ['0ch', '7.3ch'] }, 0);
      
      tl.add('.hero-rows-container', { fontSize: ['1em', '0.65em'] }, 0);
      tl.add('.hero-robotics',       { fontSize: ['1em', '0.65em'] }, 0);

      timelineRef.current = tl;
    };

    buildTimeline();
    window.addEventListener('resize', buildTimeline);
    if ((document as any).fonts && (document as any).fonts.ready) {
      (document as any).fonts.ready.then(buildTimeline);
    }

    let rafId: number;
    const tick = () => {
      const wrapper = heroWrapperRef.current;
      const drone   = droneRef.current;
      if (!wrapper || !timelineRef.current) { rafId = requestAnimationFrame(tick); return; }

      const rect    = wrapper.getBoundingClientRect();
      const scrollH = rect.height - window.innerHeight;
      const p       = scrollH > 0 ? Math.max(0, Math.min(1, -rect.top / scrollH)) : 0;

      const revealP = Math.min(1, p / 0.35);
      timelineRef.current.seek(revealP * timelineRef.current.duration);

      if (drone) {
        // Fly completely off the screen to the left (-120vw)
        const droneX = -(p * 120); 
        
        // Wavy up and down motion (1.5 full waves, smaller amplitude)
        const droneY = 95 + Math.sin(p * Math.PI * 3) * 45;
        
        // Tilt slightly as it flies up and down
        const droneRot = -7 + Math.cos(p * Math.PI * 3) * 8;

        // Shrink slightly as it travels away (scale down to 50%)
        const droneScale = 1 - (p * 0.5);

        drone.style.transform = `translateY(calc(-50% + ${droneY}px)) translateX(${droneX}vw) rotate(${droneRot}deg) scale(${droneScale})`;
        drone.style.opacity   = '1';
      }

      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', buildTimeline);
    };
  }, []);

  return (
    <section id="home" className="hero-wrapper" ref={heroWrapperRef}>
      <div className="hero-sticky-frame">
        <div className="hero-content-canvas" ref={canvasRef}>

          <div className="hero-text-block">

            <div className="hero-rows-container">

              <div className="hero-text-row layer-front">
                <span className="letter-block">
                  <span className="hero-initial">A</span>
                  <span className="expand-segment ew-utomated">UTOMATED</span>
                </span>
                <span className="letter-block">
                  <span className="hero-initial">R</span>
                  <span className="expand-segment ew-over">OVER</span>
                </span>
                <span className="letter-block">
                  <span className="hero-initial">E</span>
                  <span className="expand-segment ew-mbedded">MBEDDED</span>
                </span>
                <span className="letter-block">
                  <span className="hero-initial">S</span>
                  <span className="expand-segment ew-ystems">YSTEMS</span>
                </span>
              </div>

              <div className="hero-drone-layer" ref={droneRef}>
                <img src="/ARES.png" alt="ARES Drone" className="hero-drone-pic" />
              </div>

            </div>

            <div className="hero-robotics layer-back" ref={roboticsRef}>ROBOTICS</div>

          </div>

        </div>
      </div>
    </section>
  );
};
