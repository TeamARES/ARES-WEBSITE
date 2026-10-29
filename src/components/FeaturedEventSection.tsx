import React from 'react';
import { Calendar, Clock, MapPin, Users, ArrowUpRight } from 'lucide-react';

const FeaturedEvent = {
  title: 'DUSTSTORM RECOVERY',
  subtitle: 'ARES × MOKSHA \'26',
  tag: '[ EVENT // DUSTSTORM_RECOVERY ]',
  description: 'A massive dust storm just knocked out the rover on Mars, and you have minutes before permanent blackout.',
  url: 'https://duststormrecovery.netlify.app',
  image: '/events/duststorm_recovery.jpg',
  details: [
    { label: 'Date', value: '30th October', icon: Calendar },
    { label: 'Time', value: '1:00 PM – 3:00 PM', icon: Clock },
    { label: 'Venue', value: 'Mini Audi-1', icon: MapPin },
    { label: 'Team Size', value: '2 members', icon: Users },
  ]
};

export const FeaturedEventSection: React.FC = () => {
  const handleCardClick = (e: React.MouseEvent<HTMLElement>) => {
    // If the click happened on or inside an anchor tag, let native browser navigation handle it
    if ((e.target as HTMLElement).closest('a')) return;
    window.open(FeaturedEvent.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="event" className="content-section featured-event-section-wrap" style={{ minHeight: 'auto', paddingTop: '40px', paddingBottom: '60px' }}>
      <div className="section-header">
        <div className="section-title">
          <span>FEATURED LIVE EVENT</span>
        </div>
        <div className="section-subtitle">Moksha '26 × Duststorm Recovery</div>
      </div>

      <article
        className="featured-event-card neon-live-theme"
        onClick={handleCardClick}
        aria-labelledby="duststorm-event-title"
      >
        <div className="featured-event-poster-container">
          <div className="featured-event-poster-wrapper">
            <img
              src={FeaturedEvent.image}
              alt="MOKSHA × DUSTSTORM RECOVERY Event Poster - ARES Mars Rover Operation Challenge on 30th October"
              className="featured-event-poster-img"
              loading="eager"
            />
            <div className="featured-poster-overlay-badge">
              <span>{FeaturedEvent.subtitle}</span>
            </div>
          </div>
        </div>

        <div className="featured-event-content">
          <div className="featured-event-badge-row">
            <span className="featured-event-live-pill neon-pill">
              <span className="featured-live-dot neon-dot" aria-hidden="true" />
              FEATURED EVENT
            </span>
            <span className="wireframe-tag neon-tag" style={{ margin: 0 }}>
              {FeaturedEvent.tag}
            </span>
          </div>

          <h3 id="duststorm-event-title" className="featured-event-title">
            <a
              href={FeaturedEvent.url}
              target="_blank"
              rel="noopener noreferrer"
              className="featured-event-title-link"
            >
              {FeaturedEvent.title}
              <ArrowUpRight className="featured-link-arrow" size={26} aria-hidden="true" />
            </a>
          </h3>

          <p className="featured-event-scenario neon-scenario">
            “{FeaturedEvent.description}”
          </p>

          <div className="featured-event-details-grid">
            {FeaturedEvent.details.map((detail, idx) => {
              const Icon = detail.icon;
              return (
                <div key={idx} className="featured-event-detail-item neon-detail-item">
                  <div className="featured-detail-icon-box neon-icon-box">
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <div className="featured-detail-text">
                    <span className="featured-detail-label">{detail.label}</span>
                    <span className="featured-detail-value">{detail.value}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="featured-event-action-bar">
            <a
              href={FeaturedEvent.url}
              target="_blank"
              rel="noopener noreferrer"
              className="featured-event-cta-btn sky-blue-btn"
            >
              <span>Launch Mission Control</span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};
