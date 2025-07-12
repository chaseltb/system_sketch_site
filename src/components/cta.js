export function setupCTA() {
  const cta = document.querySelector('#cta')
  
  cta.innerHTML = `
    <div class="cta">
      <div class="container">
        <h2>Ready to transform your development workflow?</h2>
        <p>
          Join hundreds of developers who've eliminated weeks of setup time. Start designing your next system architecture visually and generate production-ready code in minutes.
        </p>
        <div style="display: flex; align-items: center; justify-content: center; gap: 16px; flex-wrap: wrap;">
          <a href="#" class="btn btn-primary btn-large">
            <i class="ph ph-rocket-launch"></i>
            Start building for free
          </a>
          <a href="#" class="btn btn-secondary btn-large" style="background: rgba(255,255,255,0.1); color: white; border: 1px solid rgba(255,255,255,0.2);">
            <i class="ph ph-calendar"></i>
            Book a demo
          </a>
        </div>
      </div>
    </div>
  `
}