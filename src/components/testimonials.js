export function setupTestimonials() {
  const testimonials = document.querySelector('#testimonials')
  
  testimonials.innerHTML = `
    <div class="testimonials">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">
            <i class="ph ph-chat-circle-dots"></i>
            Real results
          </div>
          <h2 id="testimonials-title" class="section-title">Teams that ship faster win</h2>
          <p class="section-subtitle">
            See how agencies, startups, and educational programs are using SystemSketch to compress timelines and ship with confidence.
          </p>
        </div>
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <p class="testimonial-quote">
              "We were losing deals because our proposals couldn't compete. Now we show clients interactive architecture diagrams before we even write a proposal. It's closed three enterprise contracts this quarter alone."
            </p>
            <div class="testimonial-author">
              <div class="testimonial-avatar">SM</div>
              <div class="testimonial-info">
                <h4>Sarah Martinez</h4>
                <p>Founder, Digital Agency</p>
              </div>
            </div>
          </div>
          <div class="testimonial-card">
            <p class="testimonial-quote">
              "We went from 6-month timelines to 3-month deployments. Every week we save on setup is a week we can spend on the features that actually differentiate us. It's changed our entire business model."
            </p>
            <div class="testimonial-author">
              <div class="testimonial-avatar">JC</div>
              <div class="testimonial-info">
                <h4>James Chen</h4>
                <p>CTO, SaaS Startup</p>
              </div>
            </div>
          </div>
          <div class="testimonial-card">
            <p class="testimonial-quote">
              "Our bootcamp graduates now ship portfolio projects that look like they came from production systems. They get hired faster, and we've cut 4 weeks off the curriculum without sacrificing depth."
            </p>
            <div class="testimonial-author">
              <div class="testimonial-avatar">AL</div>
              <div class="testimonial-info">
                <h4>Dr. Amanda Liu</h4>
                <p>CS Department Chair</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}