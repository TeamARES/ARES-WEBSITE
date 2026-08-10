import React from 'react';

const departments = [
  {
    id: '01',
    name: 'Software',
    tagline: 'Architecting intelligence and autonomy.',
    description: 'The Software team develops robust algorithms, perception systems, and control logic that enable our rovers to navigate, analyze, and make decisions in complex environments.',
    responsibilities: [
      'AI & Machine Learning',
      'Computer Vision & Perception',
      'Autonomous Systems & Navigation',
      'Simulation & Path Planning',
      'Embedded Software Architecture',
    ],
    tools: ['ROS', 'C++', 'Python', 'OpenCV', 'TensorFlow'],
  },
  {
    id: '02',
    name: 'Electronics',
    tagline: 'Powering the nervous system.',
    description: 'We design and implement complex electrical architectures. From custom printed circuit boards to sensor networks, we ensure reliable power distribution and seamless data communication.',
    responsibilities: [
      'Custom PCB Design',
      'Microcontroller Programming',
      'Sensor Integration',
      'Power Management Systems',
      'Signal Integrity & Circuit Testing',
    ],
    tools: ['Altium', 'STM32', 'Oscilloscopes', 'I2C/SPI/CAN'],
  },
  {
    id: '03',
    name: 'Mechanical',
    tagline: 'Engineering robust physical structures.',
    description: 'Tasked with designing the skeletal structure and actuation systems. We focus on lightweight, durable chassis design, precision manufacturing, and rigorous structural analysis.',
    responsibilities: [
      'Chassis & Drivetrain Design',
      'Structural Analysis (FEA)',
      '3D Printing & Rapid Prototyping',
      'CNC Machining & Fabrication',
      'Mechanical Assembly & Testing',
    ],
    tools: ['SolidWorks', 'Fusion 360', 'ANSYS', '3D Printers'],
  },
  {
    id: '04',
    name: 'Science & R&D',
    tagline: 'Pushing boundaries of exploration.',
    description: 'Focused on the theoretical aspects of our missions, the Science team conducts rigorous literature reviews, develops innovative algorithms, and performs critical performance analyses.',
    responsibilities: [
      'Scientific Research',
      'New Technology Exploration',
      'Experimentation & Field Testing',
      'Algorithm Development',
      'Performance Analysis',
    ],
    tools: ['MATLAB', 'Jupyter', 'Data Logging', 'Research Papers'],
  },
  {
    id: '05',
    name: 'Business',
    tagline: 'Fueling growth and global outreach.',
    description: 'Operating as the backbone of ARES, securing resources to push boundaries. We manage finances, cultivate strategic sponsorships, and handle public relations to elevate our global presence.',
    responsibilities: [
      'Corporate Sponsorships & Partnerships',
      'Financial Planning & Budgeting',
      'Marketing Strategy & Branding',
      'Event Management',
      'Public & Educational Outreach',
    ],
    tools: ['Notion', 'Excel', 'CRM', 'Social Media Analytics'],
  },
  {
    id: '06',
    name: 'Design',
    tagline: 'Crafting visual identity and UX.',
    description: 'We shape how the world sees ARES. The Design team creates compelling narratives, intuitive user interfaces for our control software, and high-quality multimedia assets.',
    responsibilities: [
      'UI/UX for Control Systems',
      'Graphic Design & Branding',
      'Motion Graphics & Video Editing',
      'Product Visualization',
      'Photography & Social Media Assets',
    ],
    tools: ['Figma', 'Adobe CC', 'Blender', 'Premiere Pro'],
  }
];

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
        {departments.map((dept) => (
          <div key={dept.id} className="wireframe-card" style={{ gap: '24px' }}>
            <div style={{ flex: 1 }}>
              <div className="wireframe-tag">
                [ DEPT ]
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(18px, 5vw, 24px)', fontWeight: '800', marginTop: '16px', letterSpacing: '-0.02em', color: 'var(--text-main)' }}>
                {dept.name}
              </h3>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(12px, 3vw, 14px)', fontWeight: '600', color: 'var(--brand-blue)', marginTop: '6px' }}>
                {dept.tagline}
              </div>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(12px, 3vw, 14px)', color: 'var(--text-muted)', marginTop: '12px', lineHeight: '1.6' }}>
                {dept.description}
              </p>
            </div>
            
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(10px, 2.5vw, 11px)', color: 'var(--text-main)', fontWeight: '700', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '4px', height: '4px', background: 'var(--brand-blue)', borderRadius: '50%' }}></span>
                Core Focus
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {dept.responsibilities.map((resp, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: 'clamp(12px, 3vw, 13px)', color: 'var(--text-muted)', fontFamily: 'var(--font-sans)', lineHeight: '1.4' }}>
                    <span style={{ color: 'var(--text-dim)', marginTop: '1px', fontFamily: 'var(--font-mono)' }}>+</span>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>
              {dept.tools.map((tool, i) => (
                <span key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(9px, 2.5vw, 11px)', fontWeight: '600', color: 'var(--text-muted)', padding: '4px 10px', background: 'var(--bg-color)', border: '1px solid var(--border-color)', borderRadius: '6px', letterSpacing: '0.5px' }}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
