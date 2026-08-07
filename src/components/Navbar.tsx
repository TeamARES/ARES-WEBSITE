import React, { useEffect, useState, useRef } from 'react';
import { Sun, Moon, Menu, X, ChevronDown } from 'lucide-react';

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

export const Navbar: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setContactDropdownOpen(false);
    };
    
    const handleClickOutside = (e: MouseEvent) => {
      if (
        (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) &&
        (mobileDropdownRef.current && !mobileDropdownRef.current.contains(e.target as Node))
      ) {
        setContactDropdownOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('ares-theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('ares-theme', nextTheme);
  };

  const navItems = [
    { label: 'Departments', href: '#departments' },
    { label: 'Members', href: '#members' },
    { label: 'Projects & Events', href: '#projects' },
    { label: 'Competitions', href: '#competitions' },
    { label: 'Recruitment', href: '#recruitment' },
    { label: 'FAQs', href: '#faq' },
  ];

  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="#home" className="nav-brand">
          <img src="/LOGO.png" alt="ARES Robotics" className="nav-logo-img" />
          <span className="nav-brand-text">ARES Robotics</span>
        </a>
      </div>

      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.label}>
            <a href={item.href} className="nav-link">
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <button
          onClick={toggleTheme}
          className="btn-theme-toggle"
          aria-label="Toggle Theme"
          title="Switch Dark/Light Mode"
        >
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>

        <div 
          className={`contact-dropdown-wrapper ${contactDropdownOpen ? 'open' : ''}`}
          ref={dropdownRef}
        >
          <button 
            className="btn-nav-cta"
            onClick={(e) => {
              e.stopPropagation();
              setContactDropdownOpen(!contactDropdownOpen);
            }}
            aria-expanded={contactDropdownOpen}
            aria-haspopup="true"
          >
            <span>Contact</span>
            <ChevronDown size={15} />
          </button>
          
          <div className="contact-dropdown-menu">
            <a 
              href="https://chat.whatsapp.com/DyfwYcMpYgiIVUPpO0VAfD?s=cl&p=a&ilr=0&amv=2" 
              className="dropdown-item btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setContactDropdownOpen(false)}
            >
              <WhatsAppIcon size={18} className="icon" />
              <span>Join Freshers' 2030 Group</span>
            </a>
            <a 
              href="https://www.instagram.com/aresrobotics.nsut/" 
              className="dropdown-item btn-instagram"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setContactDropdownOpen(false)}
            >
              <InstagramIcon size={18} className="icon" />
              <span>ARES Instagram</span>
            </a>
          </div>
        </div>

        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-dropdown">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-link"
            >
              {item.label}
            </a>
          ))}
          <div 
            className={`contact-dropdown-wrapper ${contactDropdownOpen ? 'open' : ''}`}
            ref={mobileDropdownRef}
            style={{ alignSelf: 'center', marginTop: '10px' }}
          >
            <button 
              className="btn-nav-cta"
              onClick={(e) => {
                e.stopPropagation();
                setContactDropdownOpen(!contactDropdownOpen);
              }}
              aria-expanded={contactDropdownOpen}
              aria-haspopup="true"
            >
              <span>Contact</span>
              <ChevronDown size={15} />
            </button>
            
            <div className="contact-dropdown-menu" style={{ left: '50%', right: 'auto', transform: 'translateX(-50%) translateY(-10px)' }}>
              <a 
                href="https://chat.whatsapp.com/DyfwYcMpYgiIVUPpO0VAfD?s=cl&p=a&ilr=0&amv=2" 
                className="dropdown-item btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setContactDropdownOpen(false);
                  setMobileMenuOpen(false);
                }}
              >
                <WhatsAppIcon size={18} className="icon" />
                <span>Join Freshers' 2030 Group</span>
              </a>
              <a 
                href="https://www.instagram.com/aresrobotics.nsut/" 
                className="dropdown-item btn-instagram"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setContactDropdownOpen(false);
                  setMobileMenuOpen(false);
                }}
              >
                <InstagramIcon size={18} className="icon" />
                <span>ARES Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
