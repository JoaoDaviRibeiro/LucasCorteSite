import React from 'react'
import '../styles/Services.css'

function Services() {
  const services = [
    {
      id: 1,
      number: '01',
      title: 'Corporate & Business Law',
      description: 'Comprehensive legal services for business formation, contracts, mergers & acquisitions, and corporate governance matters.'
    },
    {
      id: 2,
      number: '02',
      title: 'Litigation & Dispute Resolution',
      description: 'Aggressive representation in civil litigation, arbitration, and mediation. We protect your interests with skilled advocacy.'
    },
    {
      id: 3,
      number: '03',
      title: 'Real Estate & Property Law',
      description: 'Expert guidance on real estate transactions, property disputes, zoning issues, and commercial property matters.'
    },
    {
      id: 4,
      number: '04',
      title: 'Intellectual Property',
      description: 'Strategic protection of patents, trademarks, copyrights, and trade secrets. Comprehensive IP portfolio management.'
    }
  ]

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="section-header">
          <span className="section-badge">Our Practice Areas</span>
          <h2>Legal Services</h2>
          <p>Specialized expertise across key practice areas to serve your legal needs</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-number">{service.number}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-link">
                Learn More
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
