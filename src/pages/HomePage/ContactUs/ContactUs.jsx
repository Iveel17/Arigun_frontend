
import React from 'react';
import './ContactUs.css';
import LinkA from '../../../components/buttons/LinkA/LinkA'; // Assuming LinkA is a custom component for links

const ContactUs = () => {
  return (
    <section className="contact-us">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <div className="section-label">Locations</div>
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-subtitle">Reach out to us for any inquiries.</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>We'd love to hear from you!</p>
                  <span className="contact-text">
                    info@educationalwebsite.com
                  </span>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <p>Call us anytime!</p>
                  <span className="contact-text">
                    +1 (555) 123-4567
                  </span>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <h3>Facebook</h3>
                  <p>Follow us for updates!</p>
                  <span className="contact-text">
                    @educationalwebsite
                  </span>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <h3>Instagram</h3>
                  <p>Check out our photos!</p>
                  <span className="contact-text">
                    @educationalwebsite
                  </span>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <h3>Office</h3>
                  <p>456 Learning Ave, Sydney NSW 2000 AU</p>
                  <LinkA text="Get Directions" href="https://www.google.com/maps/place/456+Learning+Ave,+Sydney+NSW+2000,+Australia" target="_blank"/>
                </div>
              </div>
            </div>
          </div>
          
          <div className="map-container">
            <div className="map-placeholder">
              <svg width="100%" height="100%" viewBox="0 0 500 400" className="map-svg">
                {/* Background */}
                <rect width="500" height="400" fill="#f0f0f0"/>
                
                {/* Landmasses - simplified world map */}
                <path d="M50 150 Q80 120 120 140 L180 130 Q220 145 250 140 L300 135 Q350 150 400 145 L450 150 Q480 170 450 200 L400 220 Q350 240 300 235 L250 240 Q200 225 150 230 L100 225 Q70 200 50 180 Z" fill="#d1d5db"/>
                <path d="M80 250 Q120 230 160 240 L200 235 Q240 250 280 245 L320 250 Q360 265 400 260 L440 265 Q470 285 440 315 L400 335 Q360 350 320 345 L280 350 Q240 335 200 340 L160 335 Q120 320 80 300 Z" fill="#d1d5db"/>
                <path d="M200 80 Q240 60 280 70 L320 65 Q360 80 400 75 L440 80 Q470 100 440 130 L400 150 Q360 165 320 160 L280 165 Q240 150 200 155 L160 150 Q130 125 160 95 Z" fill="#d1d5db"/>
                
                {/* Grid lines */}
                <defs>
                  <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                    <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#e5e7eb" strokeWidth="1" opacity="0.5"/>
                  </pattern>
                </defs>
                <rect width="500" height="400" fill="url(#grid)"/>
                
                {/* Location marker */}
                <circle cx="350" cy="280" r="8" fill="#2563eb"/>
                <circle cx="350" cy="280" r="15" fill="none" stroke="#2563eb" strokeWidth="2" opacity="0.3">
                  <animate attributeName="r" values="15;25;15" dur="2s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite"/>
                </circle>
                
                {/* Location label */}
                <rect x="320" y="250" width="60" height="20" rx="4" fill="white" stroke="#d1d5db"/>
                <text x="350" y="263" textAnchor="middle" fontSize="12" fill="#374151">Sydney</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;