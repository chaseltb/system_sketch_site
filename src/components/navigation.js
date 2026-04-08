export function setupNavigation() {
  const nav = document.querySelector('#navigation')
  
  nav.innerHTML = `
    <div class="container">
      <div class="nav-content">
        <a href="#hero" class="nav-brand" aria-label="SystemSketch home">
          <svg class="nav-logo" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <defs>
              <linearGradient id="navLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#1f2937;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
              </linearGradient>
            </defs>
            <circle cx="100" cy="100" r="12" fill="#1f2937"/>
            <circle cx="60" cy="60" r="8" fill="url(#navLogoGradient)"/>
            <circle cx="140" cy="60" r="8" fill="url(#navLogoGradient)"/>
            <circle cx="100" cy="130" r="8" fill="url(#navLogoGradient)"/>
            <line x1="60" y1="60" x2="100" y2="100" stroke="url(#navLogoGradient)" stroke-width="1.5"/>
            <line x1="140" y1="60" x2="100" y2="100" stroke="url(#navLogoGradient)" stroke-width="1.5"/>
            <line x1="100" y1="100" x2="100" y2="130" stroke="#06b6d4" stroke-width="1.5"/>
          </svg>
          SystemSketch
        </a>
        <ul class="nav-links" role="list">
          <li><a href="#features">Features</a></li>
          <li><a href="#process">How it works</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <div class="nav-cta">
          <a href="#cta" class="btn btn-primary">
            <i class="ph ph-rocket-launch"></i>
            Join the waitlist
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