export function setupCTA() {
  const cta = document.querySelector('#cta')
  
  cta.innerHTML = `
    <div class="cta">
      <div class="container">
        <h2 id="cta-title">Stop rebuilding the same infrastructure over and over</h2>
        <p>
          Your next project launches tomorrow. Not after months of setup. Get started and ship production-ready systems while your competitors are still on their to-do lists.
        </p>
        <div style="max-width: 400px; margin: 0 auto;">
          <form class="waitlist-form" style="display: flex; gap: 12px;">
            <input
              type="email"
              placeholder="Enter your email"
              required
              style="flex: 1; padding: 16px 20px; border: 2px solid white; border-radius: 16px; font-size: 16px; background: white; color: var(--text-primary);"
            />
            <button type="submit" class="btn btn-primary btn-large" style="background: white; color: #06b6d4; font-weight: 600; white-space: nowrap; border: 2px solid white; flex-shrink: 0;">
              <i class="ph ph-envelope"></i>
              Get started
            </button>
          </form>
        </div>
      </div>
    </div>
  `
}