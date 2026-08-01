import React from 'react';

export const RecruitmentSection: React.FC = () => {
  return (
    <section id="recruitment" className="content-section">
      <div className="section-header">
        <div className="section-title">
          <span className="section-num">05</span>
          <span>RECRUITMENT TIMELINE</span>
        </div>
        <div className="section-subtitle">Annual Onboarding &amp; Selection Stages</div>
      </div>

      <div className="timeline-track">
        {[1, 2, 3, 4].map((index) => (
          <div key={index} className="timeline-node">
            <div className="timeline-bullet" />
            <div className="timeline-date">STAGE // 0{index}</div>
            <div className="wireframe-card" style={{ minHeight: 'auto', padding: '24px', marginTop: '8px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '800' }}>
                RECRUITMENT_ROUND_{index}_NAME
              </div>
              <div className="wireframe-line" style={{ width: '60%', marginTop: '14px' }} />
              <div className="wireframe-line wireframe-line-short" />
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-dim)', marginTop: '16px' }}>
                [ CRITERIA_AND_REQUIREMENTS_UNSPECIFIED ]
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
