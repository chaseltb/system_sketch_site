(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(s){if(s.ep)return;s.ep=!0;const t=o(s);fetch(s.href,t)}})();function r(){const e=document.querySelector("#navigation");e.innerHTML=`
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
  `,window.addEventListener("scroll",()=>{window.scrollY>50?(e.style.background="rgba(255, 255, 255, 0.98)",e.style.boxShadow="var(--shadow-sm)"):(e.style.background="rgba(255, 255, 255, 0.95)",e.style.boxShadow="none")}),document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener("click",function(o){o.preventDefault();const i=document.querySelector(this.getAttribute("href"));i&&i.scrollIntoView({behavior:"smooth",block:"start"})})})}function n(){const e=document.querySelector("#hero");e.innerHTML=`
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
          <div class="hero-cta">
            <a href="#features" class="btn btn-primary btn-large" aria-describedby="hero-title">
              <i class="ph ph-play-circle"></i>
              Start designing for free
            </a>
            <a href="#process" class="btn btn-secondary btn-large">
              <i class="ph ph-video"></i>
              Watch demo
            </a>
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
  `}function l(){const e=document.querySelector("#tech-carousel");e.innerHTML=`
    <div class="container">
      <p class="tech-text">Works with your favorite technologies</p>
      <div class="tech-carousel-container">
        <div class="tech-carousel">
          <span class="tech-name">React</span>
          <span class="tech-name">Vue</span>
          <span class="tech-name">Angular</span>
          <span class="tech-name">Node.js</span>
          <span class="tech-name">Python</span>
          <span class="tech-name">Express</span>
          <span class="tech-name">FastAPI</span>
          <span class="tech-name">Django</span>
          <span class="tech-name">PostgreSQL</span>
          <span class="tech-name">MongoDB</span>
          <span class="tech-name">Redis</span>
          <span class="tech-name">Docker</span>
          <span class="tech-name">Kubernetes</span>
        </div>
      </div>
    </div>
  `}function d(){const e=document.querySelector("#features");e.innerHTML=`
    <div class="features">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">
            <i class="ph ph-lightning"></i>
            Core capabilities
          </div>
          <h2 id="features-title" class="section-title">Everything you need to go from idea to implementation</h2>
          <p class="section-subtitle">
            Stop wrestling with boilerplate code and focus on building what matters. SystemSketch handles the heavy lifting.
          </p>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-section-icon">
              <i class="ph ph-palette"></i>
            </div>
            <div class="feature-icon">
              <i class="ph ph-selection-all"></i>
            </div>
            <h3 class="feature-title">Visual drag-and-drop design</h3>
            <p class="feature-description">
              Build system architectures with an intuitive canvas. No more whiteboard sketches that get lost.
            </p>
            <ul class="feature-list">
              <li>Pre-built components for popular technologies</li>
              <li>Smart connection system for data flows</li>
              <li>Real-time collaboration with your team</li>
              <li>Template library for common patterns</li>
            </ul>
          </div>
          <div class="feature-card">
            <div class="feature-section-icon">
              <i class="ph ph-code"></i>
            </div>
            <div class="feature-icon">
              <i class="ph ph-file-code"></i>
            </div>
            <h3 class="feature-title">Production-ready code generation</h3>
            <p class="feature-description">
              Transform your visual designs into complete, working codebases with proper structure and best practices.
            </p>
            <ul class="feature-list">
              <li>Full project scaffolding with folder structure</li>
              <li>Docker configurations and deployment files</li>
              <li>Comprehensive documentation and setup guides</li>
              <li>Industry-standard code patterns</li>
            </ul>
          </div>
          <div class="feature-card">
            <div class="feature-section-icon">
              <i class="ph ph-stack"></i>
            </div>
            <div class="feature-icon">
              <i class="ph ph-stack-simple"></i>
            </div>
            <h3 class="feature-title">Multi-technology support</h3>
            <p class="feature-description">
              Work with the tools you love. Support for React, Vue, Node.js, Python, databases, and more.
            </p>
            <ul class="feature-list">
              <li>Frontend: React, Vue, Angular, Next.js</li>
              <li>Backend: Node.js, Express, FastAPI, Django</li>
              <li>Databases: PostgreSQL, MongoDB, Redis</li>
              <li>Infrastructure: Docker, Kubernetes, AWS</li>
            </ul>
          </div>
          <div class="feature-card">
            <div class="feature-section-icon">
              <i class="ph ph-users"></i>
            </div>
            <div class="feature-icon">
              <i class="ph ph-users-four"></i>
            </div>
            <h3 class="feature-title">Team collaboration made simple</h3>
            <p class="feature-description">
              Bridge the gap between architects, developers, and stakeholders with shared visual understanding.
            </p>
            <ul class="feature-list">
              <li>Real-time collaborative editing</li>
              <li>Version control and change tracking</li>
              <li>Comments and feedback system</li>
              <li>Export options for presentations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `}function p(){const e=document.querySelector("#process");e.innerHTML=`
    <div class="process">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">
            <i class="ph ph-path"></i>
            Simple process
          </div>
          <h2 id="process-title" class="section-title">From architecture to code in 3 steps</h2>
          <p class="section-subtitle">
            Our streamlined workflow gets you from system design to running code faster than traditional development approaches.
          </p>
        </div>
        <div class="process-flow">
          <div class="process-card">
            <div class="process-section-icon">
              <i class="ph ph-pencil-simple"></i>
            </div>
            <div class="process-icon">
              <i class="ph ph-cursor-click"></i>
            </div>
            <div class="process-content">
              <h3 class="process-title">Design your system visually</h3>
              <p class="process-description">
                Drag components onto the canvas and connect them to represent your architecture. Choose from our library of popular technologies or start with a template.
              </p>
            </div>
            <div class="process-number">01</div>
          </div>
          
          <div class="process-arrow">
            <i class="ph ph-arrow-right"></i>
          </div>
          
          <div class="process-card">
            <div class="process-section-icon">
              <i class="ph ph-sliders"></i>
            </div>
            <div class="process-icon">
              <i class="ph ph-gear"></i>
            </div>
            <div class="process-content">
              <h3 class="process-title">Configure and customize</h3>
              <p class="process-description">
                Set up your tech stack preferences, deployment targets, and project structure. Preview the generated file structure before proceeding.
              </p>
            </div>
            <div class="process-number">02</div>
          </div>
          
          <div class="process-arrow">
            <i class="ph ph-arrow-right"></i>
          </div>
          
          <div class="process-card">
            <div class="process-section-icon">
              <i class="ph ph-download"></i>
            </div>
            <div class="process-icon">
              <i class="ph ph-rocket-launch"></i>
            </div>
            <div class="process-content">
              <h3 class="process-title">Generate and deploy</h3>
              <p class="process-description">
                Download your complete project with starter code, Docker configs, and documentation. Start building features immediately instead of setting up infrastructure.
              </p>
            </div>
            <div class="process-number">03</div>
          </div>
        </div>
      </div>
    </div>
  `}function u(){const e=document.querySelector("#testimonials");e.innerHTML=`
    <div class="testimonials">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">
            <i class="ph ph-chat-circle-dots"></i>
            Success stories
          </div>
          <h2 id="testimonials-title" class="section-title">Developers love SystemSketch</h2>
          <p class="section-subtitle">
            See how teams are saving weeks of setup time and shipping faster with visual system design.
          </p>
        </div>
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <div class="testimonial-section-icon">
              <i class="ph ph-timer"></i>
            </div>
            <p class="testimonial-quote">
              "SystemSketch cut our project setup time from 2 weeks to 2 hours. The generated code follows best practices and actually works out of the box. Game changer for our agency."
            </p>
            <div class="testimonial-author">
              <div class="testimonial-avatar">SM</div>
              <div class="testimonial-info">
                <h4>Sarah Martinez</h4>
                <p>Tech Lead, Digital Agency</p>
              </div>
            </div>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-section-icon">
              <i class="ph ph-bridge"></i>
            </div>
            <p class="testimonial-quote">
              "As a solution architect, I finally have a tool that bridges design and implementation. My developers get exactly what I envisioned, and clients can see the architecture clearly."
            </p>
            <div class="testimonial-author">
              <div class="testimonial-avatar">JC</div>
              <div class="testimonial-info">
                <h4>James Chen</h4>
                <p>Solutions Architect, Enterprise</p>
              </div>
            </div>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-section-icon">
              <i class="ph ph-graduation-cap"></i>
            </div>
            <p class="testimonial-quote">
              "Teaching system design became so much easier. Students can experiment with different architectures and see the actual code structure. It's like having a coding mentor built-in."
            </p>
            <div class="testimonial-author">
              <div class="testimonial-avatar">AL</div>
              <div class="testimonial-info">
                <h4>Dr. Amanda Liu</h4>
                <p>Computer Science Professor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function h(){const e=document.querySelector("#faq");e.innerHTML=`
    <div class="faq">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">
            <i class="ph ph-question"></i>
            Common questions
          </div>
          <h2 id="faq-title" class="section-title">Everything you need to know</h2>
          <p class="section-subtitle">
            Quick answers to questions you might have about SystemSketch and how it works.
          </p>
        </div>
        <div class="faq-list">
          <div class="faq-item">
            <button class="faq-question" aria-expanded="false">
              What technologies does SystemSketch support?
              <i class="ph ph-chevron-down faq-chevron"></i>
            </button>
            <div class="faq-answer">
              We support all major web technologies including React, Vue, Angular, Node.js, Express, FastAPI, Django, PostgreSQL, MongoDB, Redis, Docker, and Kubernetes. Our library is constantly expanding based on user feedback.
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-question" aria-expanded="false">
              How production-ready is the generated code?
              <i class="ph ph-chevron-down faq-chevron"></i>
            </button>
            <div class="faq-answer">
              The generated code follows industry best practices and includes proper project structure, error handling, security configurations, and comprehensive documentation. It's designed to be a solid foundation that you can build upon immediately.
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-question" aria-expanded="false">
              Can I customize the generated code structure?
              <i class="ph ph-chevron-down faq-chevron"></i>
            </button>
            <div class="faq-answer">
              Yes! You can configure naming conventions, folder structures, coding patterns, and deployment configurations. The system is flexible enough to match your team's preferences and standards.
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-question" aria-expanded="false">
              Do I need design or architecture experience?
              <i class="ph ph-chevron-down faq-chevron"></i>
            </button>
            <div class="faq-answer">
              Not at all! SystemSketch is designed for developers of all levels. We provide templates for common architectures and guided workflows that help you learn system design principles as you build.
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-question" aria-expanded="false">
              How does team collaboration work?
              <i class="ph ph-chevron-down faq-chevron"></i>
            </button>
            <div class="faq-answer">
              Teams can collaborate in real-time on system designs, leave comments, track changes, and maintain version history. Everyone stays aligned from architecture through implementation.
            </div>
          </div>
        </div>
      </div>
    </div>
  `;const a=document.querySelectorAll(".faq-item");a.forEach(o=>{const i=o.querySelector(".faq-question");i.addEventListener("click",()=>{const s=o.classList.contains("active");a.forEach(t=>{t.classList.remove("active"),t.querySelector(".faq-question").setAttribute("aria-expanded","false")}),s?i.setAttribute("aria-expanded","false"):(o.classList.add("active"),i.setAttribute("aria-expanded","true"))})})}function v(){const e=document.querySelector("#cta");e.innerHTML=`
    <div class="cta">
      <div class="container">
        <h2 id="cta-title">Ready to transform your development workflow?</h2>
        <p>
          Join hundreds of developers who've eliminated weeks of setup time. Start designing your next system architecture visually and generate production-ready code in minutes.
        </p>
        <div style="display: flex; align-items: center; justify-content: center; gap: 16px; flex-wrap: wrap;">
          <a href="#features" class="btn btn-primary btn-large" aria-describedby="cta-title">
            <i class="ph ph-rocket-launch"></i>
            Start building for free
          </a>
          <a href="#process" class="btn btn-secondary btn-large" style="background: rgba(255,255,255,0.1); color: white; border: 1px solid rgba(255,255,255,0.2);">
            <i class="ph ph-calendar"></i>
            Book a demo
          </a>
        </div>
      </div>
    </div>
  `}function f(){const e=document.querySelector("#footer");e.innerHTML=`
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
  `}r();n();l();d();p();u();h();v();f();
