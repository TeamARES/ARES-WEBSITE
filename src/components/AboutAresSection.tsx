import React from 'react';
import { Cpu, Hammer, Bug, RotateCw, MapPin, Users } from 'lucide-react';

export const AboutAresSection: React.FC = () => {
  const philosophySteps = [
    { label: 'BUILD', icon: <Hammer size={13} /> },
    { label: 'BREAK', icon: <Cpu size={13} /> },
    { label: 'DEBUG', icon: <Bug size={13} /> },
    { label: 'BUILD AGAIN', icon: <RotateCw size={13} /> },
  ];

  return (
    <section id="about" className="content-section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Subtle Background Glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(0, 102, 255, 0.06) 0%, rgba(0, 0, 0, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Prominent Section Header */}
      <div className="section-header about-section-header" style={{ marginBottom: '40px' }}>
        <div className="section-title">
          <span className="about-title-text">ABOUT ARES</span>
        </div>
        <div className="section-subtitle" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <MapPin size={14} style={{ color: 'var(--brand-blue)' }} />
          <span>NETAJI SUBHAS UNIVERSITY OF TECHNOLOGY · DWARKA, NEW DELHI</span>
        </div>
      </div>

      <div className="about-ares-container">
        {/* Left Content Column */}
        <div className="about-ares-content">
          {/* Main Headline */}
          <h2 className="about-main-heading">
            Engineering the Future, <br />
            <span className="gradient-text">One Build at a Time.</span>
          </h2>

          {/* Core Biography / Copy */}
          <p className="about-core-text">
            ARES is where NSUT’s builders, coders, and dreamers turn circuits and code into machines that move, see, think, and compete. From rovers built for alien terrain to autonomous bots that battle it out on the arena floor, ARES exists for one reason — to give students a real, hands-on shot at engineering the future. Every project is a chance to learn robotics the way it’s actually done: by building, breaking, debugging, and building again.
          </p>

          {/* Philosophy Highlights Pill Badges */}
          <div className="about-philosophy-bar">
            {philosophySteps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="about-philosophy-chip">
                  <span className="about-chip-icon">{step.icon}</span>
                  <span>{step.label}</span>
                </div>
                {idx < philosophySteps.length - 1 && (
                  <span className="about-philosophy-arrow">→</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Institutional Stats Footer */}
          <div className="about-stats-row">
            <div className="about-stat-item">
              <div className="about-stat-val">30+</div>
              <div className="about-stat-lbl">ACTIVE BUILDERS</div>
            </div>
            <div className="about-stat-divider" />
            <div className="about-stat-item">
              <div className="about-stat-val">100%</div>
              <div className="about-stat-lbl">STUDENT LEADERSHIP</div>
            </div>
            <div className="about-stat-divider" />
            <div className="about-stat-item">
              <div className="about-stat-val">NSUT</div>
              <div className="about-stat-lbl">ROBOTICS SOCIETY</div>
            </div>
          </div>
        </div>

        {/* Right Visual Column — Group Photograph Showcase */}
        <div className="about-ares-visual-col">
          <div className="about-photo-wrapper">
            {/* Main Group Photo Container */}
            <div className="about-photo-container">
              <img
                src="/ares-group.jpg"
                alt="ARES Robotics Society NSUT Group Photo"
                className="about-group-img"
              />
              <div className="about-photo-gradient-overlay" />

              {/* Floating Institutional Badge */}
              <div className="about-floating-badge">
                <div className="about-badge-header">
                  <Users size={14} style={{ color: 'var(--brand-blue)' }} />
                  <span className="about-badge-title">ARES ROBOTICS SOCIETY</span>
                </div>
                <span className="about-badge-sub">NSUT · NEW DELHI</span>
              </div>
            </div>

            {/* Corner Decorative Tech Elements */}
            <div className="about-tech-corner top-left" />
            <div className="about-tech-corner bottom-right" />
          </div>
        </div>
      </div>
    </section>
  );
};
