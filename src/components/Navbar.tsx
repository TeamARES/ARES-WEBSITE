import React, { useEffect, useState } from 'react';
import { Sun, Moon, ArrowUpRight, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { label: 'Projects', href: '#projects' },
    { label: 'Events', href: '#events' },
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

        <a href="#footer" className="btn-nav-cta">
          <span>Contact</span>
          <ArrowUpRight size={15} />
        </a>

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
          <a
            href="#footer"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-nav-cta"
            style={{ justifyContent: 'center', marginTop: '10px' }}
          >
            <span>Contact</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      )}
    </nav>
  );
};
