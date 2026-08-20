import React, { useState } from 'react';
import { Box, HardDrive } from 'lucide-react';

const CADProjects = [
  {
    id: 1,
    title: 'ARES Drone MK-IV',
    tag: '[ PROJECT // DRONE_MK4 ]',
    description: 'A custom-built FPV racing drone optimized for high-speed maneuverability, obstacle avoidance, and real-time video transmission.',
    department: 'Hardware / FPV',
    software: 'Autodesk Fusion 360',
    technologies: ['Carbon Fiber', 'Brushless Motors', 'Betaflight', 'ExpressLRS'],
    previewImage: '/projects/drone.jpg'
  },
  {
    id: 2,
    title: 'ARES Autonomous Rover',
    tag: '[ PROJECT // ROVER_V1 ]',
    description: 'Modular autonomous rover prototype designed for rough terrain navigation and computer vision payload integration testing.',
    department: 'Hardware / Robotics',
    software: 'Autodesk Fusion 360',
    technologies: ['Aluminum Extrusion', 'Independent Suspension', 'ROS2', 'LIDAR'],
    previewImage: '/projects/rover.jpg'
  }
];

const UpcomingEvents = [
  {
    id: 1,
    title: 'Drone Maze Race',
    tag: '[ EVENT // DRONE_MAZE ]',
    description: 'Navigate a challenging aerial maze where precision, speed, and control determine the winner. Participants piloted drones through a series of obstacles, aiming for the perfect landing while competing against the clock.',
    tagline: 'Precision. Control. Perfect Landing.',
    date: 'TBD 2026',
    status: 'COMPLETED',
    image: '/events/drone_maze.png'
  },
  {
    id: 2,
    title: 'The Debugging Dead',
    tag: '[ EVENT // DEBUG_DEAD ]',
    description: 'A unique engineering challenge where broken code, faulty circuits, and unpredictable robots tested participants’ debugging skills under pressure. Success depended on logical thinking, teamwork, and the ability to solve real-world technical problems.',
    tagline: 'Where Logic Defeats Chaos.',
    date: 'TBD 2026',
    status: 'COMPLETED',
    image: '/events/debugging_dead.png'
  },
  {
    id: 3,
    title: 'RFID Treasure Hunt',
    tag: '[ EVENT // RFID_HUNT ]',
    description: 'An exciting technology-driven treasure hunt where participants solved clues and used RFID technology to discover hidden checkpoints. Combining innovation with adventure, the event challenged both speed and problem-solving abilities.',
    tagline: 'Technology Leads the Way.',
    date: 'TBD 2026',
    status: 'COMPLETED',
    image: '/events/rfid_hunt.png'
  },
  {
    id: 4,
    title: 'Snake Xenzia',
    tag: '[ EVENT // SNAKE_XENZIA ]',
    description: 'A nostalgic gaming competition that brought the iconic Snake game back to life. Participants relived a timeless classic while competing in an exciting tournament filled with strategy, quick reflexes, and childhood memories.',
    tagline: 'Classic Game. Competitive Spirit.',
    date: 'TBD 2026',
    status: 'COMPLETED',
    image: '/events/snake.png'
  }
];

export const ProjectsSection: React.FC = () => {
  const [activeEventId, setActiveEventId] = useState<number | null>(null);
  const [activeProjectId, setActiveProjectId] = useState<number | null>(null);

  const handleImageClick = (id: number, e: React.MouseEvent) => {
    if (window.innerWidth <= 768) {
      e.stopPropagation();
      setActiveEventId(activeEventId === id ? null : id);
      setActiveProjectId(null); // Clear other popouts
    }
  };

  const handleProjectClick = (id: number, e: React.MouseEvent) => {
    if (window.innerWidth <= 768) {
      e.stopPropagation();
      setActiveProjectId(activeProjectId === id ? null : id);
      setActiveEventId(null); // Clear other popouts
    }
  };

  const handleSectionClick = () => {
    if (activeEventId !== null) setActiveEventId(null);
    if (activeProjectId !== null) setActiveProjectId(null);
  };

  return (
    <section id="projects" className="content-section" style={{ paddingBottom: '60px' }} onClick={handleSectionClick}>
      <div className="section-header">
        <div className="section-title">
          <span>PROJECTS &amp; EVENTS</span>
        </div>
        <div className="section-subtitle">Autonomous Systems &amp; Community Impact</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
        
        {/* PROJECTS SHOWCASE */}
        <div className="projects-showcase">
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--brand-blue)', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ width: '48px', height: '1px', background: 'var(--border-color)' }}></span>
            Current Projects
            <span style={{ flex: 1, height: '1px', background: 'var(--border-color)' }}></span>
          </div>
          
          <div className="grid-cols-2">
            {CADProjects.map((project) => {
              const isActive = activeProjectId === project.id;
              
              return (
                <div 
                  key={project.id} 
                  className={`wireframe-card project-card ${isActive ? 'active-project-card' : ''}`}
                  onClick={(e) => handleProjectClick(project.id, e)}
                  style={{ 
                    padding: '0', 
                    overflow: 'hidden',
                    position: 'relative',
                    cursor: 'pointer'
                  }}
                >
                {/* Future 3D Viewer Placeholder */}
                <div className="viewer-placeholder" style={{ 
                  height: '320px', 
                  background: 'var(--text-dim)', 
                  display: 'flex', 
                  flexDirection: 'column',
                  alignItems: 'center', 
                  justifyContent: 'center',
                  borderBottom: '1px solid var(--border-color)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={project.previewImage} 
                    alt={`Preview of ${project.title}`}
                    className="project-image"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: 0,
                      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  />
                  <div style={{ position: 'absolute', top: '16px', right: '16px', display: 'flex', gap: '8px' }}>
                    <span className="wireframe-tag" style={{ background: 'var(--bg-color)', padding: '4px 8px', borderRadius: '4px', margin: 0 }}>
                      CAD MODEL
                    </span>
                  </div>
                </div>

                <div style={{ padding: '30px' }}>
                  <div className="wireframe-tag">{project.tag}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 5vw, 26px)', fontWeight: '800', margin: '8px 0 16px 0' }}>
                    {project.title}
                  </h3>
                  
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(12px, 3vw, 14px)', lineHeight: '1.6', color: 'var(--text-muted)', marginBottom: '24px' }}>
                    {project.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <Box size={16} style={{ color: 'var(--brand-blue)' }} />
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(10px, 2.5vw, 12px)', color: 'var(--text-main)' }}>
                        <span style={{ color: 'var(--text-muted)' }}>DEPT //</span> {project.department}
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <HardDrive size={16} style={{ color: 'var(--brand-blue)' }} />
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(10px, 2.5vw, 12px)', color: 'var(--text-main)' }}>
                         <span style={{ color: 'var(--text-muted)' }}>TOOL //</span> {project.software}
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', borderTop: '1px solid var(--border-color)', paddingTop: '20px', marginTop: '24px' }}>
                    {project.technologies.map((tech, i) => (
                      <span key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(9px, 2.5vw, 11px)', fontWeight: '600', color: 'var(--text-muted)', padding: '4px 10px', background: 'var(--bg-color)', border: '1px solid var(--border-color)', borderRadius: '6px', letterSpacing: '0.5px' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>

        {/* EVENTS SECTION */}
        <div className="events-showcase">
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--brand-blue)', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ width: '48px', height: '1px', background: 'var(--border-color)' }}></span>
            Events &amp; Workshops
            <span style={{ flex: 1, height: '1px', background: 'var(--border-color)' }}></span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {UpcomingEvents.map((event) => {
              const isActive = activeEventId === event.id;
              
              return (
                <div 
                  key={event.id} 
                  className={`wireframe-card event-card ${isActive ? 'active-preview-card' : ''}`} 
                  style={{ 
                    padding: '0', 
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative'
                  }}
                >
                  {/* Image acts as a fixed layout anchor, but scales internally on hover/tap */}
                  <div 
                    className={`event-img-anchor ${isActive ? 'active-preview' : ''}`} 
                    onClick={(e) => handleImageClick(event.id, e)}
                    style={{ 
                      width: '100%', 
                      height: '200px', 
                      position: 'relative',
                      borderTopLeftRadius: '11px',
                      borderTopRightRadius: '11px',
                      cursor: 'pointer'
                    }}
                  >
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="event-img" 
                      style={{
                        position: 'absolute',
                        top: 0, left: 0,
                        width: '100%', height: '100%',
                        objectFit: 'cover',
                        borderTopLeftRadius: '11px',
                        borderTopRightRadius: '11px',
                        borderBottom: '1px solid var(--border-color)'
                      }}
                    />
                  </div>
                  
                  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1, background: 'var(--card-bg)', borderRadius: '0 0 12px 12px', position: 'relative', zIndex: 2 }}>
                    <div className="wireframe-tag" style={{ marginBottom: '10px' }}>{event.tag}</div>
                    <h3 className="event-title" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(16px, 4vw, 20px)', fontWeight: '800', marginBottom: '8px' }}>
                      {event.title}
                    </h3>
                    
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(12px, 3vw, 14px)', lineHeight: '1.6', color: 'var(--text-muted)', marginBottom: '16px', flexGrow: 1 }}>
                      {event.description}
                    </p>
                    
                    <div style={{ fontFamily: 'var(--font-mono)', fontStyle: 'italic', fontSize: '13px', color: 'var(--brand-blue)', marginBottom: '0', fontWeight: '600' }}>
                      "{event.tagline}"
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      <style>{`
        .project-card:hover .viewer-placeholder {
          background: var(--border-color);
        }
        .viewer-placeholder {
          transition: background 0.3s ease;
        }

        /* Netflix-style Project Card Pop-out */
        .project-card {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, z-index 0.4s ease, border-color 0.2s;
          transform-origin: center center;
          z-index: 1;
          will-change: transform;
        }

        @media (min-width: 769px) {
          .project-card:hover {
            transform: scale(1.08) !important;
            z-index: 50;
            box-shadow: 0 25px 50px rgba(0,0,0,0.6);
            border-color: var(--brand-blue);
          }
        }

        @media (max-width: 768px) {
          .project-card.active-project-card {
            transform: scale(1.05) !important;
            z-index: 50;
            box-shadow: 0 15px 35px rgba(0,0,0,0.5);
            border-color: var(--brand-blue);
          }
        }

        /* Netflix-style Hover/Tap Pop-out for Events */
        .event-img {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-radius 0.4s ease;
          transform-origin: center center;
          z-index: 1;
        }
        
        /* Desktop Hover */
        @media (min-width: 769px) {
          .event-card:hover {
            z-index: 50; /* Bring hovered card above siblings */
          }
          .event-img-anchor:hover .event-img {
            transform: scale(1.35);
            z-index: 100;
            box-shadow: 0 20px 40px rgba(0,0,0,0.6);
            border-radius: 8px; /* Round all corners when popped out */
            border-bottom: none !important;
          }
        }

        /* Mobile/Tablet Tap (Active State) */
        @media (max-width: 768px) {
          .event-card.active-preview-card {
            z-index: 50;
          }
          .event-img-anchor.active-preview .event-img {
            transform: scale(1.15); /* Slightly smaller pop-out for mobile to prevent overflowing screen edges */
            z-index: 100;
            box-shadow: 0 15px 30px rgba(0,0,0,0.5);
            border-radius: 8px;
            border-bottom: none !important;
          }
        }

      `}</style>
    </section>
  );
};
