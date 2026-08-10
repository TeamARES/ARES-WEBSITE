import React from 'react';
import { User } from 'lucide-react';

const memberImages: Record<string, { src: string, position?: string, fit?: any, scale?: number }> = {
  'Namai': { src: '/team/Namai.jpg', position: 'top center' },
  'Ishit Papnai': { src: '/team/Ishit.jpg', position: 'top center' },
  'Muskan Arora': { src: '/team/Muskan.jpeg', position: 'top center' },
  'Shriyansh Goyal': { src: '/team/ShriyanshGoyal.png', position: 'top center' },
  'Deep Maurya': { src: '/team/Deep.jpg', position: 'top center' },
  'Ruhansh Bansal': { src: '/team/ruhansh.jpg' },
  'Abhinit Verma': { src: '/team/Abhinit.Verma.jpg', position: 'top center' },
  'Raghav Kathuria': { src: '/team/raghav.jpeg', position: 'top center' },
  'Abhibhav Rai': { src: '/team/AbhibhavRai.jpg', position: 'top center' },
  'Kunsh Bhatia': { src: '/team/Kunsh Bhatia.jpg' },
  'Anant Sangal': { src: '/team/Anant.jpg', position: 'top center' },
  'Ankita Mungi': { src: '/team/Ankita Mungi.jpg', position: 'top center' },
  'Kavyansh Malhotra': { src: '/team/Kavyansh Malhotra.jpg', position: 'top center' },
  'Tanishtha': { src: '/team/Tanishta.jpg', position: 'center 10%', scale: 1.15 },
  'Samiul': { src: '/team/Samiul.jpg', position: 'center 35%', scale: 1.1 },
  'Somnath': { src: '/team/Somnath.jpg', position: 'top center' },
  'Sanvi': { src: '/team/sanvi.jpeg', position: 'center 25%' },
  'Ujjawal': { src: '/team/ujjawal_kumar.png', position: 'top center' },
  'Maninderjeet Singh': { src: '/team/Maninderjeet.jpg' },
  'Shayana Madan': { src: '/team/Shanaya.jpg', fit: 'cover', position: 'center 35%', scale: 1.25 },
  'Yash': { src: '/team/Yash.jpg', fit: 'cover', position: 'center 25%', scale: 1.15 },
  'Ravi': { src: '/team/Ravi.png', fit: 'cover', position: 'center 25%', scale: 1.15 },
  'Riya Shukla': { src: '/team/Riyashukla.png', fit: 'cover', position: 'center 25%', scale: 1.15 }
};

const leadershipRows = [
  [
    { role: 'President', members: ['Tanishtha'] },
    { role: 'Vice Presidents', members: ['Ravi', 'Namai'] },
    { role: 'Director', members: ['Samiul'] },
  ],
  [
    { role: 'General Secretaries', members: ['Somnath', 'Sanvi'] },
    { role: 'Mentors', members: ['Ujjawal', 'Yash'] },
  ]
];

const departmentRows = [
  [
    { role: 'Project Leads', members: ['Ishit Papnai', 'Muskan Arora'] },
    { role: 'Software Lead', members: ['Shriyansh Goyal'] },
    { role: 'Mechanical Lead', members: ['Deep Maurya'] },
  ],
  [
    { role: 'Electronics Leads', members: ['Ruhansh Bansal', 'Abhinit Verma'] },
    { role: 'Business Lead (Outreach)', members: ['Raghav Kathuria'] },
    { role: 'Business Lead (Operations/Admin)', members: ['Abhibhav Rai'] },
  ],
  [
    { role: 'Science & R&D Leads', members: ['Maninderjeet Singh', 'Kunsh Bhatia', 'Anant Sangal'] },
  ],
  [
    { role: 'Design Leads', members: ['Riya Shukla', 'Ankita Mungi'] },
    { role: 'Senior Core', members: ['Shayana Madan', 'Kavyansh Malhotra'] },
  ]
];

const RoleCard = ({ role, members }: { role: string, members: string[] }) => {
  return (
    <div className="wireframe-card role-card-container" style={{ display: 'flex', flexDirection: 'column', flex: members.length, flexBasis: `${members.length * 280}px`, minWidth: '260px' }}>
      <div className="wireframe-tag" style={{ marginBottom: '24px' }}>[ {role.toUpperCase()} ]</div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '12px', flex: 1 }}>
        {members.map((member, i) => {
          const photoData = memberImages[member];
          return (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '200px', margin: '0 auto' }}>
              {photoData ? (
                <div style={{ width: '100%', aspectRatio: '3 / 4', marginBottom: '16px', borderRadius: '8px', border: '1px solid var(--border-color)', backgroundColor: 'var(--card-bg)', overflow: 'hidden' }}>
                  <img
                    src={photoData.src}
                    alt={member}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: photoData.fit || 'cover',
                      objectPosition: photoData.position || 'center',
                      transform: photoData.scale ? `scale(${photoData.scale})` : 'none'
                    }}
                  />
                </div>
              ) : (
                <div className="wireframe-media" style={{ aspectRatio: '3 / 4', marginBottom: '16px', flexDirection: 'column', gap: '10px', width: '100%', borderRadius: '8px' }}>
                  <User size={32} style={{ color: 'var(--text-dim)' }} />
                  <span style={{ fontSize: '11px', letterSpacing: '1px' }}>[ PHOTO ]</span>
                </div>
              )}
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(13px, 3.5vw, 16px)', fontWeight: '800', color: 'var(--text-main)', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                {member}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const MembersSection: React.FC = () => {
  return (
    <section id="members" className="content-section">
      <div className="section-header" style={{ marginBottom: '48px' }}>
        <div className="section-title">
          <span className="section-num">02</span>
          <span>TEAM MEMBERS</span>
        </div>
        <div className="section-subtitle">Engineers, Researchers &amp; Faculty Advisors</div>
      </div>

      <div style={{ marginBottom: '80px' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--brand-blue)', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ width: '48px', height: '1px', background: 'var(--border-color)' }}></span>
          ARES Leadership
          <span style={{ flex: 1, height: '1px', background: 'var(--border-color)' }}></span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {leadershipRows.map((row, rowIndex) => (
            <div key={rowIndex} style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
              {row.map((roleInfo, index) => (
                <RoleCard key={index} role={roleInfo.role} members={roleInfo.members} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--brand-blue)', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ width: '48px', height: '1px', background: 'var(--border-color)' }}></span>
          Department Leads
          <span style={{ flex: 1, height: '1px', background: 'var(--border-color)' }}></span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {departmentRows.map((row, rowIndex) => (
            <div key={rowIndex} style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
              {row.map((roleInfo, index) => (
                <RoleCard key={index} role={roleInfo.role} members={roleInfo.members} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
