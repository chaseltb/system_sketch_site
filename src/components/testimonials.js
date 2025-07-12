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
            <div class="testimonial-section-icon">
              <i class="ph ph-timer"></i>
            </div>
            <p class="testimonial-quote">
              "SystemSketch cut our project setup time from 2 weeks to 2 hours. The generated code follows best practices and actually works out of the box. Game changer for our agency."
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
            <div class="testimonial-section-icon">
              <i class="ph ph-bridge"></i>
            </div>
            <p class="testimonial-quote">
              "As a solution architect, I finally have a tool that bridges design and implementation. My developers get exactly what I envisioned, and clients can see the architecture clearly."
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
            <div class="testimonial-section-icon">
              <i class="ph ph-graduation-cap"></i>
            </div>
            <p class="testimonial-quote">
              "Teaching system design became so much easier. Students can experiment with different architectures and see the actual code structure. It's like having a coding mentor built-in."
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