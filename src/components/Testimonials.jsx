import React, { useState } from 'react'
import '../styles/Testimonials.css'

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO at TechStart',
      image: '👩‍💼',
      text: 'Exceptional work! The team delivered a stunning landing page that perfectly captures our brand. Our conversion rates increased by 45% within the first month.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Founder at Digital Co',
      image: '👨‍💼',
      text: 'Professional, creative, and results-driven. They understood our vision and transformed it into a beautiful reality. Highly recommended!',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      image: '👩‍🎨',
      text: 'The design is elegant and the user experience is flawless. Our users love the intuitive interface. Best investment we made this year.',
      rating: 5
    }
  ]

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        <div className="section-header">
          <span className="section-badge">Client Stories</span>
          <h2>What Our Clients Say</h2>
          <p>Real feedback from real clients who achieved amazing results</p>
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
