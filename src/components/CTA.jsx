import React from 'react'
import '../styles/CTA.css'

function CTA() {
  return (
    <section className="cta" id="contact">
      <div className="cta-container">
        <div className="cta-background"></div>
        
        <div className="cta-content">
          <h2>Ready to Protect Your Rights?</h2>
          <p>Let our experienced attorneys provide the expert legal guidance you deserve</p>

          <div className="cta-form">
            <input type="email" placeholder="your@email.com" />
            <button className="btn btn-primary">
              Schedule Consultation
              <span className="btn-arrow">→</span>
            </button>
          </div>

          <p className="cta-subtext">Free initial consultation. Confidential & professional.</p>
        </div>
      </div>
    </section>
  )
}

export default CTA
