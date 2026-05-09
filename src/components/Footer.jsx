import React from 'react'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>Corte & Associates</h3>
            <p>Premier legal representation with over 25 years of experience. Dedicated to protecting your rights and advancing your interests.</p>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Phone">📞</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Practice Areas</h4>
            <ul>
              <li><a href="#services">Corporate Law</a></li>
              <li><a href="#services">Litigation</a></li>
              <li><a href="#services">Real Estate</a></li>
              <li><a href="#services">Intellectual Property</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Firm</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#news">News & Updates</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#cookies">Cookie Policy</a></li>
              <li><a href="#disclaimer">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Corte & Associates. All rights reserved.</p>
          <p>Excellence in legal representation.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
