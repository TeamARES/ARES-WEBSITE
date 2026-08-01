import React from 'react';
import { User } from 'lucide-react';

export const MembersSection: React.FC = () => {
  return (
    <section id="members" className="content-section">
      <div className="section-header">
        <div className="section-title">
          <span className="section-num">02</span>
          <span>TEAM MEMBERS</span>
        </div>
        <div className="section-subtitle">Engineers, Researchers &amp; Faculty Advisors</div>
      </div>

      <div className="grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
          <div key={index} className="wireframe-card" style={{ padding: '20px', minHeight: '320px' }}>
            <div className="wireframe-media" style={{ height: '200px', marginBottom: '16px', flexDirection: 'column', gap: '8px' }}>
              <User size={28} style={{ color: 'var(--text-dim)' }} />
              <span>[ PHOTO_SLOT_0{index} ]</span>
            </div>

            <div>
              <div className="wireframe-tag" style={{ marginBottom: '4px' }}>[ MEMBER // 0{index} ]</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: '700', color: 'var(--text-main)' }}>
                UNASSIGNED_PROFILE
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>
                ROLE_TITLE_HERE
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
