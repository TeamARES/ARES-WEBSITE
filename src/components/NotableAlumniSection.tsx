import React from 'react';
import { Award, Briefcase, GraduationCap, Sparkles, ShieldCheck, TrendingUp } from 'lucide-react';

const YoutubeIcon = ({ size = 14, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

interface AlumniProfile {
  id: string;
  number: string;
  name: string;
  designation: string;
  image: string;
  secondaryBrand: string;
  bio: string;
  highlights: { label: string; icon?: React.ReactNode; primary?: boolean; variant?: 'green' | 'red' | 'primary' }[];
  accentColor?: string;
}

const alumniData: AlumniProfile[] = [
  {
    id: 'devansh-jain',
    number: '01',
    name: 'Devansh Jain',
    designation: 'Founder & CEO, Culture Circle',
    image: '/alumni/devansh.jpg',
    secondaryBrand: 'CULTURE CIRCLE',
    bio: 'Devansh Jain is the Founder & CEO of Culture Circle and an accomplished alumnus of ARES Robotics. An IIM Ahmedabad alumnus and Forbes 30 Under 30 honoree, he has previously worked with Goldman Sachs and Microsoft. With a CAT percentile of 99.96, Devansh’s journey reflects the spirit of excellence, ambition, and innovation fostered at ARES.',
    highlights: [
      { label: 'Forbes 30 Under 30', icon: <Award size={14} />, variant: 'green' },
      { label: 'Founder & CEO, Culture Circle', icon: <Sparkles size={14} />, primary: true },
      { label: 'IIM Ahmedabad', icon: <GraduationCap size={14} /> },
      { label: 'CAT 99.96 Percentile', icon: <TrendingUp size={14} /> },
      { label: 'Ex-Goldman Sachs', icon: <Briefcase size={14} /> },
      { label: 'Ex-Microsoft', icon: <Briefcase size={14} /> },
      { label: 'Former ARES Robotics Member', icon: <ShieldCheck size={14} /> }
    ]
  },
  {
    id: 'nishant-chahar',
    number: '02',
    name: 'Nishant Chahar',
    designation: 'Former President, ARES Robotics',
    image: '/alumni/nishant.jpg',
    secondaryBrand: '550K+ SUBSCRIBERS',
    bio: 'Nishant Chahar is a former President of ARES Robotics who went on to build an impressive career in technology and content creation. With experience at Microsoft and a YouTube community of over 550K subscribers, his journey represents the diverse paths and opportunities that can emerge from the ARES ecosystem.',
    highlights: [
      { label: 'Former President — ARES Robotics', icon: <ShieldCheck size={14} />, primary: true },
      { label: '550K+ YouTube Subscribers', icon: <YoutubeIcon size={14} />, variant: 'red' },
      { label: 'Ex-Microsoft', icon: <Briefcase size={14} /> }
    ]
  }
];

export const NotableAlumniSection: React.FC = () => {
  const getBadgeClass = (h: { primary?: boolean; variant?: string }) => {
    if (h.variant === 'green') return 'alumni-badge--green';
    if (h.variant === 'red') return 'alumni-badge--red';
    if (h.primary) return 'alumni-badge--primary';
    return '';
  };
  return (
    <section id="alumni" className="content-section">
      {/* Section Header */}
      <div className="section-header" style={{ marginBottom: '56px' }}>
        <div>
          <div className="section-title">
            <span>NOTABLE ALUMNI</span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 5vw, 42px)',
            fontWeight: '800',
            color: 'var(--text-main)',
            marginTop: '12px',
            letterSpacing: '-0.02em'
          }}>
            From ARES to the World.
          </h2>
        </div>
      </div>

      {/* Editorial Alumni Showcase */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        {alumniData.map((alumni, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={alumni.id}
              className="alumni-feature-card"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: '32px',
                alignItems: 'center'
              }}
            >
              {/* Visual Frame */}
              <div
                className="alumni-visual-frame"
                style={{
                  gridColumn: isEven ? '1 / span 5' : '8 / span 5',
                  order: isEven ? 1 : 2,
                  position: 'relative'
                }}
              >
                <div className="alumni-portrait-box">
                  <img
                    src={alumni.image}
                    alt={alumni.name}
                    className="alumni-portrait-img"
                  />
                  {/* Glassmorphic Brand Tag Overlay */}
                  <div className="alumni-brand-overlay">
                    <span className="alumni-live-dot" />
                    <span>{alumni.secondaryBrand}</span>
                  </div>
                </div>
              </div>

              {/* Text & Achievements Content */}
              <div
                className="alumni-content-frame"
                style={{
                  gridColumn: isEven ? '6 / span 7' : '1 / span 7',
                  order: isEven ? 2 : 1
                }}
              >
                <h3 className="alumni-name">
                  {alumni.name}
                </h3>
                
                <div className="alumni-designation">
                  {alumni.designation}
                </div>

                {/* Achievement Badges */}
                <div className="alumni-badges-container">
                  {alumni.highlights.map((h, i) => (
                    <div
                      key={i}
                      className={`alumni-badge ${getBadgeClass(h)}`}
                    >
                      {h.icon && <span className="alumni-badge-icon">{h.icon}</span>}
                      <span>{h.label}</span>
                    </div>
                  ))}
                </div>

                {/* Biography */}
                <p className="alumni-bio">
                  {alumni.bio}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
