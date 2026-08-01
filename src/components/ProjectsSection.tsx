import React from 'react';
import { Image, ArrowUpRight } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="content-section">
      <div className="section-header">
        <div className="section-title">
          <span className="section-num">03</span>
          <span>PROJECTS &amp; ROVERS</span>
        </div>
        <div className="section-subtitle">Autonomous Systems &amp; Technical Hardware</div>
      </div>

      <div className="grid-cols-2">
        {[1, 2, 3, 4].map((index) => (
          <div key={index} className="wireframe-card" style={{ padding: '24px', minHeight: '440px' }}>
            <div className="wireframe-media" style={{ height: '280px', marginBottom: '20px', flexDirection: 'column', gap: '12px' }}>
              <Image size={36} style={{ color: 'var(--text-dim)' }} />
              <span style={{ fontSize: '13px' }}>[ PROJECT_MEDIA_VIEWPORT // 0{index} ]</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div className="wireframe-tag">[ PROJECT // SYSTEM_0{index} ]</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: '800', margin: '6px 0' }}>
                  HARDWARE_TITLE_{index}
                </h3>
                <div className="wireframe-line" style={{ width: '220px' }} />
              </div>
              
              <div style={{ width: '40px', height: '40px', border: '1px solid var(--border-color)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-main)' }}>
                <ArrowUpRight size={18} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
