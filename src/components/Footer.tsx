import React from 'react';
import { ArrowUp } from 'lucide-react';

const WhatsAppIcon = ({ size = 28, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const InstagramIcon = ({ size = 28, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const Footer: React.FC = () => {
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

        <div className="footer-socials-new">
          <a 
            href="https://chat.whatsapp.com/DyfwYcMpYgiIVUPpO0VAfD?s=cl&p=a&ilr=0&amv=2" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-social-card whatsapp"
          >
            <WhatsAppIcon size={28} />
            <span>ARES Freshers 2030</span>
          </a>
          <a 
            href="https://www.instagram.com/aresrobotics.nsut/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-social-card instagram"
          >
            <InstagramIcon size={28} />
            <span>Instagram</span>
          </a>
        </div>

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


    </footer>
  );
};
