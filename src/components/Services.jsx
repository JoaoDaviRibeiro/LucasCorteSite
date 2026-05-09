import React from 'react'
import '../styles/Services.css'

function Services() {
  const services = [
    {
      id: 1,
      number: '01',
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and best practices. Scalable, maintainable, and beautiful.'
    },
    {
      id: 2,
      number: '02',
      title: 'UI/UX Design',
      description: 'Stunning user interfaces designed for engagement. Every pixel crafted with purpose and elegance in mind.'
    },
    {
      id: 3,
      number: '03',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that provide seamless experiences on all devices.'
    },
    {
      id: 4,
      number: '04',
      title: 'Consulting',
      description: 'Strategic guidance to optimize your digital presence and achieve your business goals effectively.'
    }
  ]

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="section-header">
          <span className="section-badge">What We Offer</span>
          <h2>Our Services</h2>
          <p>Elevate your digital presence with our comprehensive solutions</p>
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
