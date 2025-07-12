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
          <h1>Turn system diagrams into production code</h1>
          <p class="hero-subtitle">
            Used by 500+ developers to eliminate 20-40% of project setup time through visual architecture design and automated code generation
          </p>
          <div class="hero-cta">
            <a href="#" class="btn btn-primary btn-large">
              <i class="ph ph-play-circle"></i>
              Start designing for free
            </a>
            <a href="#" class="btn btn-secondary btn-large">
              <i class="ph ph-video"></i>
              Watch demo
            </a>
          </div>
          <div class="hero-visual">
            <div class="hero-image">
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