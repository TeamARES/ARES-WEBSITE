import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowUpRight, Sparkles, Volume2, VolumeX } from 'lucide-react';

const RECRUITMENT_RESULTS_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRgGalZjXIiN5G0cfgOVr59lBOrdZhhL7QDKFeFnL1RqoNMLTnwHMD8SOlUZ8IAxm8krj87mX68Wr01/pubhtml";

export const RecruitmentModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => console.log('Autoplay blocked:', err));
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    setIsOpen(false);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div 
      className="modal-overlay" 
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-recruitment-title"
    >
      <div 
        className="modal-card animate-pop-in" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <span className="live-pulse-dot results-dot" />
            <span id="modal-recruitment-title" className="modal-badge-text" style={{ color: '#34D399' }}>
              ROUND 1 RESULTS OUT!
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button 
              className="modal-close-btn" 
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
              title={isMuted ? "Click to Unmute" : "Click to Mute"}
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
            <button 
              className="modal-close-btn" 
              onClick={handleClose}
              aria-label="Close recruitment announcement"
              title="Close (Esc)"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Body with Recruitment Video */}
        <div className="modal-body">
          <div className="modal-image-wrapper">
            <video 
              ref={videoRef}
              src="/recruitment-video.mp4" 
              className="modal-poster-img"
              autoPlay
              muted
              playsInline
              controls
              onEnded={handleClose}
            />
          </div>
        </div>

        {/* Modal Footer with Call To Action */}
        <div className="modal-footer">
          <a
            href={RECRUITMENT_RESULTS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="recruitment-results-btn modal-cta-btn"
            onClick={handleClose}
          >
            <Sparkles size={16} />
            <span>ARES Recruitment Round 1 Results Out! Check out →</span>
            <ArrowUpRight size={18} className="btn-icon" />
          </a>

          <div className="modal-timer-info" style={{ justifyContent: 'center' }}>
            <button className="modal-dismiss-text-btn" onClick={handleClose}>
              Dismiss Announcement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
