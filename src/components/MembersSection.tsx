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

interface MemberItem {
  name: string;
  role: string;
}

const leadershipMembers: MemberItem[] = [
  { name: 'Tanishtha', role: 'President' },
  { name: 'Ravi', role: 'Vice President' },
  { name: 'Namai', role: 'Vice President' },
  { name: 'Samiul', role: 'Director' },
  { name: 'Somnath', role: 'General Secretary' },
  { name: 'Sanvi', role: 'General Secretary' },
  { name: 'Ujjawal', role: 'Mentor' },
  { name: 'Yash', role: 'Mentor' },
];

const departmentMembers: MemberItem[] = [
  { name: 'Ishit Papnai', role: 'Project Lead' },
  { name: 'Muskan Arora', role: 'Project Lead' },
  { name: 'Shriyansh Goyal', role: 'Software Lead' },
  { name: 'Deep Maurya', role: 'Mechanical Lead' },
  { name: 'Ruhansh Bansal', role: 'Electronics Lead' },
  { name: 'Abhinit Verma', role: 'Electronics Lead' },
  { name: 'Raghav Kathuria', role: 'Business Lead (Outreach)' },
  { name: 'Abhibhav Rai', role: 'Business Lead (Ops/Admin)' },
  { name: 'Maninderjeet Singh', role: 'Science & R&D Lead' },
  { name: 'Kunsh Bhatia', role: 'Science & R&D Lead' },
  { name: 'Anant Sangal', role: 'Science & R&D Lead' },
  { name: 'Riya Shukla', role: 'Design Lead' },
  { name: 'Ankita Mungi', role: 'Design Lead' },
  { name: 'Shayana Madan', role: 'Senior Core' },
  { name: 'Kavyansh Malhotra', role: 'Senior Core' },
];

const SingleMemberCard = ({ name, role }: MemberItem) => {
  const photoData = memberImages[name];

  return (
    <div className="member-card">
      <div className="member-role-tag" title={role}>
        [ {role.toUpperCase()} ]
      </div>

      <div className="member-photo-container">
        {photoData ? (
          <img
            src={photoData.src}
            alt={name}
            className="member-photo"
            style={{
              objectFit: photoData.fit || 'cover',
              objectPosition: photoData.position || 'center',
              transform: photoData.scale ? `scale(${photoData.scale})` : undefined
            }}
          />
        ) : (
          <div className="wireframe-media" style={{ width: '100%', height: '100%', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <User size={32} style={{ color: 'var(--text-dim)' }} />
            <span style={{ fontSize: '10px', letterSpacing: '1px' }}>[ PHOTO ]</span>
          </div>
        )}
      </div>

      <div className="member-name">
        {name}
      </div>
    </div>
  );
};

export const MembersSection: React.FC = () => {
  return (
    <section id="members" className="content-section">
      <div className="section-header" style={{ marginBottom: '48px' }}>
        <div className="section-title">
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

        <div className="members-grid">
          {leadershipMembers.map((member, index) => (
            <SingleMemberCard key={index} name={member.name} role={member.role} />
          ))}
        </div>
      </div>

      <div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--brand-blue)', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ width: '48px', height: '1px', background: 'var(--border-color)' }}></span>
          Department Leads
          <span style={{ flex: 1, height: '1px', background: 'var(--border-color)' }}></span>
        </div>

        <div className="members-grid">
          {departmentMembers.map((member, index) => (
            <SingleMemberCard key={index} name={member.name} role={member.role} />
          ))}
        </div>
      </div>
    </section>
  );
};

