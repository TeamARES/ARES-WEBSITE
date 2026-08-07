import React from 'react';
import { Trophy, Crosshair, Cpu, Target } from 'lucide-react';

const CompetitionsList = [
  {
    id: 1,
    title: 'IROC’26 – Autonomous Drone Challenge',
    highlightTag: '✨ HOSTED BY ISRO',
    isFeatured: true,
    description: 'IROC’26 brought together teams to design and deploy autonomous drones capable of navigating complex challenges with precision and reliability. The event celebrated innovation in aerial robotics and real-world problem solving.',
    icon: Target
  },
  {
    id: 2,
    title: 'IIT Roorkee Tech Fest',
    highlightTag: 'NATIONAL LEVEL COMPETITION',
    description: 'Competing among the country’s brightest engineering minds, ARES showcased technical expertise through high-pressure robotics challenges that emphasized innovation, teamwork, and practical problem-solving.',
    icon: Trophy
  },
  {
    id: 3,
    title: 'IIIT Delhi Drone Competition',
    highlightTag: 'DRONE CHALLENGE',
    description: 'A fast-paced competition focused on precision flying, control systems, and technical excellence. ARES pushed the limits of autonomous and manual operations against talented teams from across India.',
    icon: Crosshair
  },
  {
    id: 4,
    title: 'NXP Cup 2025',
    highlightTag: '🏆 TOP 14 FINALIST',
    description: 'Securing a prestigious place among the Top 14 teams nationally, ARES demonstrated excellence in embedded systems, autonomous control, and cutting-edge engineering design on a major competitive platform.',
    icon: Cpu
  }
];

export const CompetitionsSection: React.FC = () => {
  return (
    <section id="competitions" className="content-section" style={{ paddingTop: '60px' }}>
      <div className="section-header">
        <div className="section-title">
          <span className="section-num">04</span>
          <span>COMPETITIONS</span>
        </div>
        <div className="section-subtitle">Global &amp; National Challenges</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {CompetitionsList.map((comp) => {
          const CompIcon = comp.icon;
          return (
            <div 
              key={comp.id} 
              className="wireframe-card" 
              style={{ 
                minHeight: 'auto', 
                padding: '24px 32px', 
                flexDirection: 'row', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '24px',
                display: 'flex'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', flex: 1, minWidth: '300px' }}>
                <div style={{ padding: '12px', border: '1px solid var(--border-color)', borderRadius: '10px', background: 'var(--bg-color)', color: 'var(--brand-blue)', flexShrink: 0 }}>
                  <CompIcon size={24} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '800', marginBottom: '8px', lineHeight: '1.2' }}>
                    {comp.title}
                  </div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    {comp.description}
                  </div>
                </div>
              </div>

              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div 
                  className="wireframe-tag"
                  style={comp.isFeatured ? { 
                    background: 'var(--brand-blue)', 
                    color: '#fff', 
                    border: '1px solid var(--brand-blue)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    transform: 'scale(1.05)',
                    transformOrigin: 'right center'
                  } : {}}
                >
                  {comp.highlightTag}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
