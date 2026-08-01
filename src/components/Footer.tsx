import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const socials = ['GitHub', 'LinkedIn', 'Instagram', 'Discord', 'Email'];

  return (
    <footer id="footer" className="minimal-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img src="/LOGO.png" alt="ARES Robotics" className="footer-logo-img" />
          <div>
            <div className="footer-logo-text">ARES ROBOTICS</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
              Netaji Subhas University of Technology • New Delhi
            </div>
          </div>
        </div>

        <ul className="footer-socials">
          {socials.map((platform) => (
            <li key={platform}>
              <a href={`#${platform.toLowerCase()}`} className="footer-link">
                [ {platform} ]
              </a>
            </li>
          ))}
        </ul>

        <div>
          <a
            href="#home"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              border: '1px solid var(--border-color)',
              background: 'var(--card-bg)',
              color: 'var(--text-main)',
              textDecoration: 'none',
              transition: 'all 0.2s'
            }}
            aria-label="Back to Top"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div>&copy; 2026 ARES ROBOTICS NSUT. ALL RIGHTS RESERVED.</div>
        <div style={{ color: 'var(--text-dim)' }}>MINIMALIST ENGINEERING SYSTEM</div>
      </div>
    </footer>
  );
};
