import './style.css'
import { setupNavigation } from './components/navigation.js'
import { setupHero } from './components/hero.js'
import { setupFeatures } from './components/features.js'
import { setupProcess } from './components/process.js'
import { setupTestimonials } from './components/testimonials.js'
import { setupFAQ } from './components/faq.js'
import { setupCTA } from './components/cta.js'

document.querySelector('#app').innerHTML = `
  <div class="app">
    <nav id="navigation"></nav>
    <main>
      <section id="hero"></section>
      <section id="trusted-by"></section>
      <section id="features"></section>
      <section id="process"></section>
      <section id="testimonials"></section>
      <section id="faq"></section>
      <section id="cta"></section>
    </main>
    <footer id="footer"></footer>
  </div>
`

// Initialize components
setupNavigation()
setupHero()
setupFeatures()
setupProcess()
setupTestimonials()
setupFAQ()
setupCTA()

// Setup technology carousel section
document.querySelector('#tech-carousel').innerHTML = `
  <div class="container">
    <p class="tech-text">Works with your favorite technologies</p>
    <div class="tech-carousel-container">
      <div class="tech-carousel">
        <div class="tech-item" data-tech="react">
          <div class="tech-icon"><i class="ph ph-atom"></i></div>
          <div class="tech-name">React</div>
        </div>
        <div class="tech-item" data-tech="vue">
          <div class="tech-icon"><i class="ph ph-triangle"></i></div>
          <div class="tech-name">Vue</div>
        </div>
        <div class="tech-item" data-tech="angular">
          <div class="tech-icon"><i class="ph ph-shield"></i></div>
          <div class="tech-name">Angular</div>
        </div>
        <div class="tech-item" data-tech="nodejs">
          <div class="tech-icon"><i class="ph ph-leaf"></i></div>
          <div class="tech-name">Node.js</div>
        </div>
        <div class="tech-item" data-tech="python">
          <div class="tech-icon"><i class="ph ph-snake"></i></div>
          <div class="tech-name">Python</div>
        </div>
        <div class="tech-item" data-tech="java">
          <div class="tech-icon"><i class="ph ph-coffee"></i></div>
          <div class="tech-name">Java</div>
        </div>
        <div class="tech-item" data-tech="postgresql">
          <div class="tech-icon"><i class="ph ph-database"></i></div>
          <div class="tech-name">PostgreSQL</div>
        </div>
        <div class="tech-item" data-tech="mongodb">
          <div class="tech-icon"><i class="ph ph-leaf"></i></div>
          <div class="tech-name">MongoDB</div>
        </div>
        <div class="tech-item" data-tech="redis">
          <div class="tech-icon"><i class="ph ph-lightning"></i></div>
          <div class="tech-name">Redis</div>
        </div>
        <div class="tech-item" data-tech="docker">
          <div class="tech-icon"><i class="ph ph-package"></i></div>
          <div class="tech-name">Docker</div>
        </div>
        <div class="tech-item" data-tech="kubernetes">
          <div class="tech-icon"><i class="ph ph-circles-three"></i></div>
          <div class="tech-name">Kubernetes</div>
        </div>
        <div class="tech-item" data-tech="aws">
          <div class="tech-icon"><i class="ph ph-cloud"></i></div>
          <div class="tech-name">AWS</div>
        </div>
        <div class="tech-item" data-tech="azure">
          <div class="tech-icon"><i class="ph ph-cloud-check"></i></div>
          <div class="tech-name">Azure</div>
        </div>
        <div class="tech-item" data-tech="gcp">
          <div class="tech-icon"><i class="ph ph-cloud-arrow-up"></i></div>
          <div class="tech-name">Google Cloud</div>
        </div>
        <!-- Duplicate for seamless loop -->
        <div class="tech-item" data-tech="react">
          <div class="tech-icon"><i class="ph ph-atom"></i></div>
          <div class="tech-name">React</div>
        </div>
        <div class="tech-item" data-tech="vue">
          <div class="tech-icon"><i class="ph ph-triangle"></i></div>
          <div class="tech-name">Vue</div>
        </div>
        <div class="tech-item" data-tech="angular">
          <div class="tech-icon"><i class="ph ph-shield"></i></div>
          <div class="tech-name">Angular</div>
        </div>
        <div class="tech-item" data-tech="nodejs">
          <div class="tech-icon"><i class="ph ph-leaf"></i></div>
          <div class="tech-name">Node.js</div>
        </div>
        <div class="tech-item" data-tech="python">
          <div class="tech-icon"><i class="ph ph-snake"></i></div>
          <div class="tech-name">Python</div>
        </div>
        <div class="tech-item" data-tech="java">
          <div class="tech-icon"><i class="ph ph-coffee"></i></div>
          <div class="tech-name">Java</div>
        </div>
        <div class="tech-item" data-tech="postgresql">
          <div class="tech-icon"><i class="ph ph-database"></i></div>
          <div class="tech-name">PostgreSQL</div>
        </div>
      </div>
    </div>
  </div>
`

// Setup footer
document.querySelector('#footer').innerHTML = `
  <div class="container">
    <div class="footer-content">
      <div class="footer-brand">
        <h3>SystemSketch</h3>
        <p>Visual system architecture made simple</p>
      </div>
      <div class="footer-links">
        <div class="footer-column">
          <h4>Product</h4>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#docs">Documentation</a>
        </div>
        <div class="footer-column">
          <h4>Company</h4>
          <a href="#about">About</a>
          <a href="#blog">Blog</a>
          <a href="#careers">Careers</a>
        </div>
        <div class="footer-column">
          <h4>Support</h4>
          <a href="#help">Help Center</a>
          <a href="#contact">Contact</a>
          <a href="#status">Status</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 SystemSketch. All rights reserved.</p>
    </div>
  </div>
`