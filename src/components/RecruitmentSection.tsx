import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { ArrowUpRight } from 'lucide-react';
import { SumoBotModel } from './SumoBotModel';

const STAGES = [
  { num: 1, label: 'STAGE 01', title: 'Discover ARES & Round 1', desc: 'Orientation session and initial application phase. Round 1 submissions are now closed.' },
  { num: 2, label: 'STAGE 02', title: 'Round 1 Results Out!', desc: 'Shortlisted candidates list for technical tasks and personal interviews has been published! Check your name in the results spreadsheet.' },
  { num: 3, label: 'STAGE 03', title: 'Tasks & Assessments', desc: 'Complete department-specific task or technical assessment evaluating creativity, practical skills, and problem solving.' },
  { num: 4, label: 'STAGE 04', title: 'Personal Interview', desc: 'Interact with core team members in a personal interview to showcase your passion, mindset, and technical drive.' },
  { num: 5, label: 'STAGE 05', title: 'Welcome to ARES', desc: 'Congratulations! You are now part of ARES Robotics Society—ready to innovate, collaborate, and build the future.' }
];

export const RecruitmentSection: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0); // 0 to 1 across full scroll
  const [activeStage, setActiveStage] = useState(-1);

  const RECRUITMENT_RESULTS_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRgGalZjXIiN5G0cfgOVr59lBOrdZhhL7QDKFeFnL1RqoNMLTnwHMD8SOlUZ8IAxm8krj87mX68Wr01/pubhtml";

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

  // Bot X position: mapped to camera visible viewport range
  const targetX = (progress - 0.5) * (typeof window !== 'undefined' && window.innerWidth <= 768 ? 2.4 : 5.6);
  const botPercent = progress * 100;

  return (
    <div id="recruitment" ref={wrapperRef} className="timeline-scroll-wrapper">
      <div className="timeline-sticky">
        <div className="section-header">
          <div className="section-title">
            <span>RECRUITMENT TIMELINE</span>
          </div>
          <div className="section-subtitle">Annual Onboarding &amp; Selection Stages</div>
        </div>

        {/* Full-page 3D canvas overlay — transparent, no clipping */}
        <Canvas
          className="sumo-bot-canvas"
          camera={{ position: [0, 0.2, 5], fov: 50 }}
          gl={{ alpha: true, antialias: true }}
          onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            background: 'transparent',
            zIndex: 5,
          }}
        >
          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 10, 7]} intensity={1.8} />
          <directionalLight position={[-5, -2, -5]} intensity={0.8} />
          <Environment preset="city" />
          <React.Suspense fallback={null}>
            <SumoBotModel targetX={targetX} />
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
              {stage.num === 2 && (
                <div style={{ marginTop: '16px' }}>
                  <a
                    href={RECRUITMENT_RESULTS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="recruitment-results-btn"
                    style={{ pointerEvents: 'auto' }}
                  >
                    <span className="live-pulse-dot results-dot" />
                    <span>ARES Recruitment Round 1 Results Out! Check out →</span>
                    <ArrowUpRight size={16} className="btn-icon" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

