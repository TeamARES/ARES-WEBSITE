import React from 'react';

const recruitmentSteps = [
  {
    title: 'Discover ARES',
    description: 'Attend our orientation session and explore our vision, projects, culture, and the opportunities waiting for you.'
  },
  {
    title: 'Submit Your Application',
    description: 'Fill out the recruitment form and choose the department where your skills and interests belong.'
  },
  {
    title: 'Showcase Your Skills',
    description: 'Complete the department-specific task or technical assessment designed to evaluate your creativity, knowledge, and problem-solving abilities. (For Electronics and Mechanical, this may include an assessment.)'
  },
  {
    title: 'Personal Interview',
    description: 'Interact with our core members in a personal interview where we get to know your passion, mindset, and potential.'
  },
  {
    title: 'Welcome to ARES',
    description: 'Congratulations! You’re now part of ARES Robotics Society—ready to innovate, collaborate, and build the future with us.'
  }
];

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
        {recruitmentSteps.map((step, index) => (
          <div key={index} className="timeline-node">
            <div className="timeline-bullet" />
            <div className="timeline-date">STAGE // 0{index + 1}</div>
            <div className="wireframe-card" style={{ minHeight: 'auto', padding: '24px', marginTop: '8px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '800', marginBottom: '12px' }}>
                {step.title}
              </div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                {step.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
