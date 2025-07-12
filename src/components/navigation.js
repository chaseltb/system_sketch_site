export function setupNavigation() {
  const nav = document.querySelector('#navigation')
  
  nav.innerHTML = `
    <div class="container">
      <div class="nav-content">
        <a href="#hero" class="nav-brand" aria-label="SystemSketch home">
          <i class="ph ph-squares-four"></i>
          SystemSketch
        </a>
        <ul class="nav-links" role="list">
          <li><a href="#features">Features</a></li>
          <li><a href="#process">How it works</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <div class="nav-cta">
          <a href="#cta" class="btn btn-secondary">Sign in</a>
          <a href="#cta" class="btn btn-primary">
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
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })
}