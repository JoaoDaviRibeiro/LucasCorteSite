import React, { useEffect, useState } from 'react'
import '../styles/Hero.css'

function Hero() {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="hero">
      <div className="hero-background">
        <div 
          className="gradient-blob blob-1"
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        ></div>
        <div 
          className="gradient-blob blob-2"
          style={{ transform: `translateY(${offsetY * -0.3}px)` }}
        ></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Excellence in<br />
            <span className="gradient-text">Legal Representation</span>
          </h1>
          <p className="hero-subtitle">
            Protecting your rights and advancing your interests with sophisticated legal strategies. 
            Trusted counsel for complex legal matters handled with precision and integrity.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary">
              Schedule Consultation
              <span className="btn-arrow">→</span>
            </button>
            <button className="btn btn-secondary">
              <span className="btn-play">📞</span>
              Call Us Today
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <h3>250+</h3>
              <p>Cases Won</p>
            </div>
            <div className="stat-item">
              <h3>99%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat-item">
              <h3>25+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="card-icon">⚖️</div>
            <p>Justice</p>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">🛡️</div>
            <p>Protection</p>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">💼</div>
            <p>Expertise</p>
          </div>
          <div className="hero-glow"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
