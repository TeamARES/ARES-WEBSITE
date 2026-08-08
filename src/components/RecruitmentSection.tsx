import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { SumoBotModel } from './SumoBotModel';

const STAGES = [
  { num: 1, label: 'STAGE 01', title: 'Discover ARES', desc: 'Attend our orientation session and explore our vision, projects, culture, and the opportunities waiting for you.' },
  { num: 2, label: 'STAGE 02', title: 'Submit Your Application', desc: 'Fill out the recruitment form and choose the department where your skills and interests belong.' },
  { num: 3, label: 'STAGE 03', title: 'Showcase Your Skills', desc: 'Complete the department-specific task or technical assessment designed to evaluate your creativity, knowledge, and problem-solving abilities. (For Electronics and Mechanical, this may include an assessment.)' },
  { num: 4, label: 'STAGE 04', title: 'Personal Interview', desc: 'Interact with our core members in a personal interview where we get to know your passion, mindset, and potential.' },
  { num: 5, label: 'STAGE 05', title: 'Welcome to ARES', desc: 'Congratulations! You’re now part of ARES Robotics Society—ready to innovate, collaborate, and build the future with us.' }
];

export const RecruitmentSection: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0); // 0 to 1 across full scroll
  const [activeStage, setActiveStage] = useState(-1);

  useEffect(() => {
    const onScroll = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;
      const rect = wrapper.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const p = scrollable > 0 ? Math.max(0, Math.min(1, -rect.top / scrollable)) : 0;
      setProgress(p);
      // Which stage is the bot currently at?
      const stageIndex = Math.floor(p * STAGES.length);
      setActiveStage(Math.min(stageIndex, STAGES.length - 1));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Bot X position: 0% at start, 100% at end of track
  const botPercent = progress * 100;

  return (
    <div ref={wrapperRef} className="timeline-scroll-wrapper">
      <div className="timeline-sticky">
        <div className="section-header">
          <div className="section-title">
            <span className="section-num">05</span>
            <span>RECRUITMENT TIMELINE</span>

          <div className="section-subtitle">Annual Onboarding &amp; Selection Stages</div>
        </div>

        {/* Full-page 3D canvas overlay — transparent, no clipping */}
        <Canvas
          camera={{ position: [0, 0.5, 5], fov: 50 }}
          gl={{ alpha: true, antialias: true }}
          onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            background: 'transparent',
          }}
        >
          <ambientLight intensity={0.8} />
          <spotLight position={[5, 5, 5]} angle={0.2} penumbra={1} intensity={1.5} />
          <Environment preset="city" />
          <React.Suspense fallback={null}>
            <SumoBotModel targetX={(progress - 0.5) * 8} />
          </React.Suspense>
        </Canvas>

        {/* Horizontal track */}
        <div className="h-timeline-track-container">

          {/* The track line */}
          <div className="h-timeline-rail">
            <div className="h-timeline-fill" style={{ width: `${botPercent}%` }} />
          </div>

          {/* The stage dots */}
          <div className="h-timeline-nodes">
            {STAGES.map((stage, i) => {
              const dotPercent = (i / (STAGES.length - 1)) * 100;
              const passed = botPercent >= dotPercent;
              return (
                <div
                  key={stage.num}
                  className={`h-timeline-dot ${passed ? 'passed' : ''}`}
                  style={{ left: `${dotPercent}%` }}
                >
                  <span>{stage.num}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active stage content */}
        <div className="h-timeline-content">
          {STAGES.map((stage, i) => (
            <div
              key={stage.num}
              className={`h-timeline-stage-info ${i === activeStage ? 'active' : ''}`}
            >
              <div className="timeline-date">{stage.label}</div>
              <div className="h-timeline-title">{stage.title}</div>
              <div className="h-timeline-desc">{stage.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

