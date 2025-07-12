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

// Setup trusted by section
document.querySelector('#trusted-by').innerHTML = `
  <div class="container">
    <p class="trusted-text">Trusted by developers at</p>
    <div class="trusted-logos">
      <div class="logo-item">Startups</div>
      <div class="logo-item">Scale-ups</div>
      <div class="logo-item">Enterprises</div>
      <div class="logo-item">Agencies</div>
      <div class="logo-item">Consultancies</div>
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