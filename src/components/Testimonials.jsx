import React, { useState } from 'react'
import '../styles/Testimonials.css'

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Jennifer Martinez',
      role: 'CEO at TechVenture Inc',
      image: '👩‍💼',
      text: 'Outstanding legal representation! Corte & Associates secured favorable terms in our merger negotiations that exceeded our expectations. Their attention to detail and strategic thinking were invaluable.',
      rating: 5
    },
    {
      id: 2,
      name: 'David Thompson',
      role: 'Managing Partner, Thompson Corp',
      image: '👨‍💼',
      text: 'We\'ve worked with many firms, but Corte & Associates stands out for their responsiveness and expertise. They handled our complex litigation with precision and achieved an excellent outcome.',
      rating: 5
    },
    {
      id: 3,
      name: 'Sarah Williams',
      role: 'Property Developer',
      image: '👩‍⚖️',
      text: 'Their real estate law expertise is exceptional. They guided us through a complex development project with comprehensive legal strategy. Highly professional and trustworthy team.',
      rating: 5
    }
  ]

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        <div className="section-header">
          <span className="section-badge">Client Stories</span>
          <h2>What Our Clients Say</h2>
          <p>Real feedback from satisfied clients who received exceptional legal representation</p>
        </div>

        <div className="testimonials-carousel">
          <div className="testimonial-main">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
              >
                <div className="testimonial-header">
                  <div className="testimonial-image">{testimonial.image}</div>
                  <div className="testimonial-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>

                <p className="testimonial-text">"{testimonial.text}"</p>

                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
