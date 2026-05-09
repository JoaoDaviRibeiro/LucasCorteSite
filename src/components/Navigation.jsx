import React, { useState } from 'react'
import '../styles/Navigation.css'

function Navigation({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-brand">
          <span className="brand-icon">⚖️</span>
          <span className="brand-text">Corte & Associates</span>
        </div>

        <button 
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li>
            <button onClick={() => scrollToSection('features')}>Features</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('services')}>Services</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('testimonials')}>Testimonials</button>
          </li>
          <li>
            <a href="#contact" className="nav-cta">Get Started</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
