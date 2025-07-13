export function setupFooter() {
  const footer = document.querySelector('#footer')
  
  footer.innerHTML = `
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
            <a href="#process">How it works</a>
            <a href="#faq">FAQ</a>
          </div>
          <div class="footer-column">
            <h4>Company</h4>
            <a href="#testimonials">Testimonials</a>
            <a href="#cta">Get started</a>
            <a href="#hero">Home</a>
          </div>
          <div class="footer-column">
            <h4>Support</h4>
            <a href="#faq">Help Center</a>
            <a href="#cta">Contact</a>
            <a href="#testimonials">Reviews</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 SystemSketch. All rights reserved.</p>
      </div>
    </div>
  `
}