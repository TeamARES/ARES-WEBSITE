import React, { useEffect, useRef } from 'react';
import { createTimeline } from 'animejs';

export const HeroSection: React.FC = () => {
  const heroWrapperRef = useRef<HTMLDivElement>(null);
  const timelineRef    = useRef<any>(null);
  const canvasRef      = useRef<HTMLDivElement>(null);
  const arRowRef       = useRef<HTMLDivElement>(null);
  const esRowRef       = useRef<HTMLDivElement>(null);
  const roboticsRef    = useRef<HTMLDivElement>(null);
  const droneRef       = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const arRow = arRowRef.current;
    const esRow = esRowRef.current;
    if (!arRow || !esRow) return;

    const buildTimeline = () => {
      if (!arRowRef.current || !esRowRef.current || !canvasRef.current || !roboticsRef.current) return;
      
      const initials = arRowRef.current.querySelectorAll('.hero-initial');
      let esInitX = 0;
      if (initials.length >= 2) {
        const widthA = (initials[0] as HTMLElement).getBoundingClientRect().width;
        const widthR = (initials[1] as HTMLElement).getBoundingClientRect().width;
        const fontSize = parseFloat(getComputedStyle(arRowRef.current).fontSize);
        const gap = fontSize * 0.60;
        esInitX = widthA + widthR + gap * 2;
      } else {
        const arWidth = arRowRef.current.getBoundingClientRect().width;
        const fontSize = parseFloat(getComputedStyle(arRowRef.current).fontSize);
        esInitX = arWidth + fontSize * 0.60;
      }

      const segments = heroWrapperRef.current?.querySelectorAll('.expand-segment') as NodeListOf<HTMLElement>;
      segments?.forEach(el => el.style.maxWidth = 'none');

      const canvasWidth     = canvasRef.current.getBoundingClientRect().width;
      const arExpandedWidth = arRowRef.current.getBoundingClientRect().width;
      const esExpandedWidth = esRowRef.current.getBoundingClientRect().width;
      const roboticsWidth   = roboticsRef.current.getBoundingClientRect().width;

      segments?.forEach(el => el.style.maxWidth = '');

      const arCenterX       = Math.max(0, (canvasWidth - arExpandedWidth) / 2);
      const esCenterX       = Math.max(0, (canvasWidth - esExpandedWidth) / 2);
      const roboticsCenterX = Math.max(0, (canvasWidth - roboticsWidth) / 2);
      const rowDropY        = arRowRef.current.getBoundingClientRect().height * 1.25;

      const tl = createTimeline({
        autoplay: false,
        defaults: { ease: 'linear', duration: 800 },
      });

      tl.add(arRowRef.current, {
        translateX: [0, arCenterX],
        translateY: [0, '-0.14em'],
      }, 0);
      tl.add('.ew-utomated',   { maxWidth: ['0ch', '9.5ch'] }, 0);
      tl.add('.ew-over',       { maxWidth: ['0ch', '5.2ch'] }, 0);

      tl.add(esRowRef.current, {
        translateX: [esInitX, esCenterX],
        translateY: [0, rowDropY],
      }, 0);
      tl.add('.ew-mbedded',    { maxWidth: ['0ch', '8.5ch'] }, 0);
      tl.add('.ew-ystems',     { maxWidth: ['0ch', '7.3ch'] }, 0);

      tl.add(roboticsRef.current, {
        translateX: [0, roboticsCenterX],
        translateY: [0, '0.45em'],
      }, 0);

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
        const expandP = Math.min(1, p / 0.75);
        const exitP   = Math.max(0, (p - 0.75) / 0.25);

        const droneX   = -(expandP * 340) - (exitP * 1200);
        const droneY   = 95 + Math.sin(expandP * Math.PI) * 45;
        const droneRot = Math.cos(expandP * Math.PI) * -7;
        const opacity  = 1 - exitP;

        drone.style.transform = `translateY(calc(-50% + ${droneY}px)) translateX(${droneX}px) rotate(${droneRot}deg)`;
        drone.style.opacity   = String(opacity);
      }

      const textBlock = document.querySelector('.hero-text-block') as HTMLElement | null;
      if (textBlock) {
        const exitP = Math.max(0, (p - 0.75) / 0.25);
        if (exitP > 0) {
          textBlock.style.transform = `translateX(${exitP * 110}vw)`;
          textBlock.style.opacity   = String(1 - exitP);
        } else {
          textBlock.style.transform = '';
          textBlock.style.opacity   = '';
        }
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

              <div className="hero-line hero-ar-row layer-front" ref={arRowRef}>
                <span className="letter-block">
                  <span className="hero-initial">A</span>
                  <span className="expand-segment ew-utomated">UTOMATED</span>
                </span>
                <span className="letter-block">
                  <span className="hero-initial">R</span>
                  <span className="expand-segment ew-over">OVER</span>
                </span>
              </div>

              <div className="hero-drone-layer" ref={droneRef}>
                <img src="/ARES.png" alt="ARES Drone" className="hero-drone-pic" />
              </div>

              <div className="hero-line hero-es-row layer-mid-front" ref={esRowRef}>
                <span className="letter-block">
                  <span className="hero-initial">E</span>
                  <span className="expand-segment ew-mbedded">MBEDDED</span>
                </span>
                <span className="letter-block">
                  <span className="hero-initial">S</span>
                  <span className="expand-segment ew-ystems">YSTEMS</span>
                </span>
              </div>

            </div>

            <div className="hero-line hero-robotics layer-back" ref={roboticsRef}>ROBOTICS</div>

          </div>

        </div>
      </div>
    </section>
  );
};
