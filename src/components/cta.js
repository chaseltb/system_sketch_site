export function setupCTA() {
  const cta = document.querySelector('#cta')
  
  cta.innerHTML = `
    <div class="cta">
      <div class="container">
        <h2 id="cta-title">Ready to transform your development workflow?</h2>
        <p>
          Join hundreds of developers who've eliminated weeks of setup time. Start designing your next system architecture visually and generate production-ready code in minutes.
        </p>
        <div style="max-width: 400px; margin: 0 auto;">
          <form class="waitlist-form" style="display: flex; gap: 12px; flex-wrap: wrap;">
            <input 
              type="email" 
              placeholder="Enter your email" 
              required
              style="flex: 1; min-width: 250px; padding: 16px 20px; border: 1px solid rgba(255,255,255,0.3); border-radius: 16px; font-size: 16px; background: rgba(255,255,255,0.1); color: white; backdrop-filter: blur(10px);"
            />
            <button type="submit" class="btn btn-primary btn-large" style="background: white; color: var(--primary); white-space: nowrap;">
              <i class="ph ph-envelope"></i>
              Join the waitlist
            </button>
          </form>
        </div>
      </div>
    </div>
  `
}