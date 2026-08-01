import React from 'react';

export const DepartmentsSection: React.FC = () => {
  return (
    <section id="departments" className="content-section">
      <div className="section-header">
        <div className="section-title">
          <span className="section-num">01</span>
          <span>DEPARTMENTS</span>
        </div>
        <div className="section-subtitle">Core Technical &amp; Operational Divisions</div>
      </div>

      <div className="grid-cols-3">
        {[1, 2, 3].map((index) => (
          <div key={index} className="wireframe-card">
            <div>
              <div className="wireframe-tag">[ DEPT // 0{index} ]</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '800', marginTop: '12px' }}>
                DEPARTMENT_{index}
              </h3>
            </div>
            <div style={{ padding: '20px 0' }}>
              <div className="wireframe-line" />
              <div className="wireframe-line wireframe-line-short" />
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-dim)', borderTop: '1px solid var(--border-color)', paddingTop: '12px' }}>
              STATUS: PENDING_ASSIGNMENT
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
