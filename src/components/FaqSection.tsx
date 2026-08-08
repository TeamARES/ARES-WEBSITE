import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Do I need prior experience in robotics or coding to join ARES?',
    answer: 'Not at all. ARES welcomes students of all skill levels. Whether you’re a complete beginner or already have technical experience, we provide guidance, mentorship, and hands-on opportunities to help you grow.'
  },
  {
    question: 'What opportunities will I get after joining ARES?',
    answer: 'As a member, you’ll work on real robotics projects, participate in national competitions, collaborate with talented peers, learn from experienced mentors, and develop practical skills in engineering, innovation, and teamwork that extend far beyond the classroom.'
  },
  {
    question: 'Can students from any branch join ARES?',
    answer: 'Absolutely! ARES welcomes students from all branches and disciplines. Whether you’re from Computer Science, Electronics, Mechanical, Electrical, Instrumentation, Design, or any other department, there’s a place for you. We value curiosity, dedication, and a willingness to learn more than your academic background.'
  },
  {
    question: 'Can second-year students join ARES?',
    answer: 'Yes! Recruitment is open to both first-year and second-year students (subject to the current recruitment cycle and eligibility criteria). If you’re passionate about robotics, innovation, and building impactful projects, we encourage you to apply regardless of whether you’re in your first or second year. Your skills, enthusiasm, and commitment matter more than your year of study.'
  }
];

export const FaqSection: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleFaq = (index: number) => {
    setOpenIndices(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
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
        {faqs.map((faq, index) => {
          const isOpen = openIndices.includes(index);
          return (
            <div
              key={index}
              className="faq-item"
              onClick={() => toggleFaq(index)}
              style={{ flexDirection: 'column', alignItems: 'stretch', cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyItems: 'flex-start' }}>
                <span style={{ color: 'var(--brand-blue)', marginRight: '16px', fontWeight: 'bold' }}>Q//0{index + 1}.</span>
                <span style={{ flex: 1, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '16px', lineHeight: '1.4' }}>{faq.question}</span>
                <div style={{ color: 'var(--text-muted)', marginLeft: '16px' }}>
                  {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </div>

              {isOpen && (
                <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px dashed var(--border-color)', fontFamily: 'var(--font-sans)', fontSize: '15px', color: 'var(--text-muted)', fontWeight: '400', lineHeight: '1.6' }}>
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
