export function setupNavigation() {
  const nav = document.querySelector('#navigation')
  
  nav.innerHTML = `
    <div class="container">
      <div class="nav-content">
        <a href="#" class="nav-brand">
          <i class="ph ph-squares-four"></i>
          SystemSketch
        </a>
        <ul class="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#process">How it works</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <div class="nav-cta">
          <a href="#" class="btn btn-secondary">Sign in</a>
          <a href="#" class="btn btn-primary">
            <i class="ph ph-rocket-launch"></i>
            Start building
          </a>
        </div>
      </div>
    </div>
  `
  
  // Add scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.style.background = 'rgba(255, 255, 255, 0.98)'
      nav.style.boxShadow = 'var(--shadow-sm)'
    } else {
      nav.style.background = 'rgba(255, 255, 255, 0.95)'
      nav.style.boxShadow = 'none'
    }
  })
}