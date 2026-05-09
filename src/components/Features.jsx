import React from 'react'
import '../styles/Features.css'

function Features() {
  const features = [
    {
      id: 1,
      icon: '⚖️',
      title: 'Expert Legal Counsel',
      description: 'Highly qualified attorneys with extensive experience across multiple practice areas. Strategic guidance tailored to your unique legal needs.'
    },
    {
      id: 2,
      icon: '🛡️',
      title: 'Aggressive Representation',
      description: 'Dedicated advocates who fight relentlessly for your rights. We pursue every avenue to achieve the best possible outcome.'
    },
    {
      id: 3,
      icon: '🤝',
      title: 'Client-Focused Service',
      description: 'Your interests come first. We prioritize clear communication and transparency throughout the legal process.'
    },
    {
      id: 4,
      icon: '💼',
      title: 'Business Law Excellence',
      description: 'From startups to corporations, we provide comprehensive business law services including contracts, mergers, and compliance.'
    },
    {
      id: 5,
      icon: '📋',
      title: 'Detailed Case Preparation',
      description: 'Meticulous research and preparation ensures nothing is overlooked. Every detail matters in achieving justice.'
    },
    {
      id: 6,
      icon: '✅',
      title: 'Proven Track Record',
      description: 'Consistently winning cases and securing favorable settlements. Our results speak to our commitment and expertise.'
    }
  ]

  return (
    <section className="features" id="features">
      <div className="features-container">
        <div className="section-header">
          <span className="section-badge">Why Choose Us</span>
          <h2>What Sets Us Apart</h2>
          <p>Exceptional legal representation backed by expertise, dedication, and proven results</p>
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
