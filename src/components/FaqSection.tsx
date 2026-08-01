import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="content-section">
      <div className="section-header">
        <div className="section-title">
          <span className="section-num">06</span>
          <span>FREQUENTLY ASKED QUESTIONS</span>
        </div>
        <div className="section-subtitle">General Inquiries &amp; Information</div>
      </div>

      <div className="faq-list">
        {[1, 2, 3, 4, 5].map((index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className="faq-item" 
              onClick={() => toggleFaq(index)}
              style={{ flexDirection: 'column', alignItems: 'stretch' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ color: 'var(--brand-blue)', marginRight: '16px' }}>Q//0{index}.</span>
                  <span>[ QUESTION_SLOT_{index}_UNSPECIFIED ]</span>
                </div>
                <div style={{ color: 'var(--text-muted)' }}>
                  {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </div>

              {isOpen && (
                <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px dashed var(--border-color)', fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--text-muted)', fontWeight: '400', lineHeight: '1.6' }}>
                  <div className="wireframe-line" style={{ width: '90%' }} />
                  <div className="wireframe-line" style={{ width: '75%' }} />
                  <div className="wireframe-line wireframe-line-short" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
