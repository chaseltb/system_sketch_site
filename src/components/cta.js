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
          <form class="waitlist-form" style="display: flex; gap: 12px;">
            <input 
              type="email" 
              placeholder="Enter your email" 
              required
              style="flex: 1; padding: 16px 20px; border: 2px solid white; border-radius: 16px; font-size: 16px; background: white; color: var(--text-primary);"
            />
            <button type="submit" class="btn btn-primary btn-large" style="background: var(--text-primary); color: white; white-space: nowrap; border: 2px solid var(--text-primary); flex-shrink: 0;">
              <i class="ph ph-envelope"></i>
              Join waitlist
            </button>
          </form>
        </div>
      </div>
    </div>
  `
}