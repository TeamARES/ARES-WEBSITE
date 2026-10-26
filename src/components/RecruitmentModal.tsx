import React, { useEffect, useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

const MOKSHA_EVENTS_URL = 'https://www.mokshansut.com/events';

export const RecruitmentModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={() => setIsOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dust-storm-title"
    >
      <div className="modal-card animate-pop-in event-announcement-modal" onClick={(event) => event.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-group">
            <span className="modal-badge-text">ARES × Moksha '26</span>
          </div>
          <button
            className="modal-close-btn"
            onClick={() => setIsOpen(false)}
            aria-label="Close event announcement"
            title="Close (Esc)"
          >
            <X size={18} />
          </button>
        </div>

        <div className="modal-body event-announcement-body">
          <iframe
            src="https://www.instagram.com/p/De8h6w1Sqld/embed/"
            title="Dust Storm Recovery Instagram announcement"
            className="event-instagram-embed"
            scrolling="no"
            allowTransparency
          />
          <div className="event-announcement-copy">
            <h2 id="dust-storm-title">Dust Storm Recovery</h2>
            <p>Work together as Mars Rover Operator and Mission Control to survive a severe dust storm, restore communication, and navigate critical challenges.</p>
            <dl className="event-announcement-details">
              <div><dt>When</dt><dd>30 October · 1–3 PM</dd></div>
              <div><dt>Where</dt><dd>Mini Audi 1</dd></div>
            </dl>
          </div>
        </div>

        <div className="modal-footer">
          <a
            href={MOKSHA_EVENTS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-event-cta"
          >
            View Dust Storm Recovery on Moksha
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
};
