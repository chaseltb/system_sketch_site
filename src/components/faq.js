export function setupFAQ() {
  const faq = document.querySelector('#faq')
  
  faq.innerHTML = `
    <div class="faq">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">
            <i class="ph ph-question"></i>
            Common questions
          </div>
          <h2 class="section-title">Everything you need to know</h2>
          <p class="section-subtitle">
            Quick answers to questions you might have about SystemSketch and how it works.
          </p>
        </div>
        <div class="faq-list">
          <div class="faq-item">
            <button class="faq-question">
              What technologies does SystemSketch support?
              <i class="ph ph-caret-down faq-icon"></i>
            </button>
            <div class="faq-answer">
              We support all major web technologies including React, Vue, Angular, Node.js, Express, FastAPI, Django, PostgreSQL, MongoDB, Redis, Docker, and Kubernetes. Our library is constantly expanding based on user feedback.
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-question">
              How production-ready is the generated code?
              <i class="ph ph-caret-down faq-icon"></i>
            </button>
            <div class="faq-answer">
              The generated code follows industry best practices and includes proper project structure, error handling, security configurations, and comprehensive documentation. It's designed to be a solid foundation that you can build upon immediately.
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-question">
              Can I customize the generated code structure?
              <i class="ph ph-caret-down faq-icon"></i>
            </button>
            <div class="faq-answer">
              Yes! You can configure naming conventions, folder structures, coding patterns, and deployment configurations. The system is flexible enough to match your team's preferences and standards.
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-question">
              Do I need design or architecture experience?
              <i class="ph ph-caret-down faq-icon"></i>
            </button>
            <div class="faq-answer">
              Not at all! SystemSketch is designed for developers of all levels. We provide templates for common architectures and guided workflows that help you learn system design principles as you build.
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-question">
              How does team collaboration work?
              <i class="ph ph-caret-down faq-icon"></i>
            </button>
            <div class="faq-answer">
              Teams can collaborate in real-time on system designs, leave comments, track changes, and maintain version history. Everyone stays aligned from architecture through implementation.
            </div>
          </div>
        </div>
      </div>
    </div>
  `
  
  // Add FAQ functionality
  const faqItems = document.querySelectorAll('.faq-item')
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question')
    
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active')
      
      // Close all other items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active')
      })
      
      // Toggle current item
      if (!isActive) {
        item.classList.add('active')
      }
    })
  })
}