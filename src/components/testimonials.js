export function setupTestimonials() {
  const testimonials = document.querySelector('#testimonials')
  
  testimonials.innerHTML = `
    <div class="testimonials">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">
            <i class="ph ph-chat-circle-dots"></i>
            Success stories
          </div>
          <h2 id="testimonials-title" class="section-title">Developers love SystemSketch</h2>
          <p class="section-subtitle">
            See how teams are saving weeks of setup time and shipping faster with visual system design.
          </p>
        </div>
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <p class="testimonial-quote">
              "We used to spend 2-3 weeks on project setup before writing a single feature. Now we're deploying working prototypes in hours. Our clients are amazed at how fast we deliver."
            </p>
            <div class="testimonial-author">
              <div class="testimonial-avatar">SM</div>
              <div class="testimonial-info">
                <h4>Sarah Martinez</h4>
                <p>Tech Lead, Digital Agency</p>
              </div>
            </div>
          </div>
          <div class="testimonial-card">
            <p class="testimonial-quote">
              "Finally, a way to show clients exactly what we're building before we build it. No more miscommunication, no more scope creep. Projects stay on budget and on time."
            </p>
            <div class="testimonial-author">
              <div class="testimonial-avatar">JC</div>
              <div class="testimonial-info">
                <h4>James Chen</h4>
                <p>Solutions Architect, Enterprise</p>
              </div>
            </div>
          </div>
          <div class="testimonial-card">
            <p class="testimonial-quote">
              "My students went from struggling with system design concepts to building real applications in weeks instead of months. They're getting job offers before graduation."
            </p>
            <div class="testimonial-author">
              <div class="testimonial-avatar">AL</div>
              <div class="testimonial-info">
                <h4>Dr. Amanda Liu</h4>
                <p>Computer Science Professor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}