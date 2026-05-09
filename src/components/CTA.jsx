import React from 'react'
import '../styles/CTA.css'

function CTA() {
  return (
    <section className="cta" id="contact">
      <div className="cta-container">
        <div className="cta-background"></div>
        
        <div className="cta-content">
          <h2>Ready to Transform Your Vision?</h2>
          <p>Join hundreds of satisfied clients who have elevated their digital presence</p>

          <div className="cta-form">
            <input type="email" placeholder="Enter your email" />
            <button className="btn btn-primary">
              Get Started Now
              <span className="btn-arrow">→</span>
            </button>
          </div>

          <p className="cta-subtext">No credit card required. Start for free today.</p>
        </div>
      </div>
    </section>
  )
}

export default CTA
