import React from 'react'
import '../styles/Features.css'

function Features() {
  const features = [
    {
      id: 1,
      icon: '✨',
      title: 'Modern Design',
      description: 'Beautiful, contemporary interfaces that captivate and engage your audience with elegant aesthetics.'
    },
    {
      id: 2,
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Optimized performance ensuring your application loads instantly and runs smoothly every time.'
    },
    {
      id: 3,
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with best practices built-in to protect your data and users.'
    },
    {
      id: 4,
      icon: '📱',
      title: 'Fully Responsive',
      description: 'Perfect on any device. Seamlessly adapts to desktop, tablet, and mobile screens.'
    },
    {
      id: 5,
      icon: '🎯',
      title: 'SEO Optimized',
      description: 'Built for discoverability with proper structure and meta tags for maximum reach.'
    },
    {
      id: 6,
      icon: '🤝',
      title: 'Easy Integration',
      description: 'Integrates seamlessly with your existing tools and services for a unified workflow.'
    }
  ]

  return (
    <section className="features" id="features">
      <div className="features-container">
        <div className="section-header">
          <span className="section-badge">Our Features</span>
          <h2>Everything You Need</h2>
          <p>Comprehensive solutions designed to help you succeed</p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div className="feature-decoration"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
