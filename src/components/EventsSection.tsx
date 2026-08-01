import React from 'react';
import { Calendar } from 'lucide-react';

export const EventsSection: React.FC = () => {
  return (
    <section id="events" className="content-section">
      <div className="section-header">
        <div className="section-title">
          <span className="section-num">04</span>
          <span>EVENTS &amp; COMPETITIONS</span>
        </div>
        <div className="section-subtitle">Workshops, Hackathons &amp; Championship Appearances</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {[1, 2, 3].map((index) => (
          <div 
            key={index} 
            className="wireframe-card" 
            style={{ 
              minHeight: 'auto', 
              padding: '24px 32px', 
              flexDirection: 'row', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ padding: '12px', border: '1px solid var(--border-color)', borderRadius: '10px', background: 'var(--bg-color)', color: 'var(--brand-blue)' }}>
                <Calendar size={24} />
              </div>
              <div>
                <div className="wireframe-tag" style={{ marginBottom: '4px' }}>[ SCHEDULEd_EVENT_0{index} ]</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '800' }}>
                  EVENT_TITLE_TBD_{index}
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-muted)' }}>
              <div>DATE // DD.MM.2026</div>
              <div style={{ marginTop: '4px', fontSize: '11px', color: 'var(--brand-blue)' }}>STATUS // REGISTRATION_CLOSED</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
