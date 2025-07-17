export function setupHero() {
  const hero = document.querySelector('#hero')
  
  hero.innerHTML = `
    <div class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">
            <i class="ph ph-sparkle"></i>
            Transform weeks of setup into minutes of design
          </div>
          <h1 id="hero-title">Turn system diagrams into production code</h1>
          <p class="hero-subtitle">
            Used by 500+ developers to eliminate 20-40% of project setup time through visual architecture design and automated code generation
          </p>
          <div class="hero-cta" style="max-width: 400px; margin: 0 auto 60px;">
            <form class="waitlist-form" style="display: flex; gap: 12px; flex-wrap: wrap;">
              <input 
                type="email" 
                placeholder="Enter your email" 
                required
                style="flex: 1; min-width: 250px; padding: 16px 20px; border: 1px solid var(--border); border-radius: 16px; font-size: 16px; background: white;"
              />
              <button type="submit" class="btn btn-primary btn-large" style="white-space: nowrap;">
                <i class="ph ph-envelope"></i>
                Join the waitlist
              </button>
            </form>
          </div>
          <div class="hero-visual">
            <div class="hero-image" role="img" aria-label="SystemSketch interface preview">
              <div style="text-align: center; padding: 40px;">
                <i class="ph ph-squares-four" style="font-size: 48px; color: var(--primary); margin-bottom: 16px; display: block;"></i>
                <h3 style="color: var(--text-primary); margin-bottom: 8px;">Interactive System Designer</h3>
                <p style="color: var(--text-secondary);">Drag, drop, connect → Generate production-ready code</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}