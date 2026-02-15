(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(s){if(s.ep)return;s.ep=!0;const t=o(s);fetch(s.href,t)}})();function n(){const e=document.querySelector("#navigation");e.innerHTML=`
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
          <a href="#cta" class="btn btn-primary">
            <i class="ph ph-rocket-launch"></i>
            Join the waitlist
          </a>
        </div>
      </div>
    </div>
  `,window.addEventListener("scroll",()=>{window.scrollY>50?(e.style.background="rgba(255, 255, 255, 0.98)",e.style.boxShadow="var(--shadow-sm)"):(e.style.background="rgba(255, 255, 255, 0.95)",e.style.boxShadow="none")}),document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener("click",function(o){o.preventDefault();const i=document.querySelector(this.getAttribute("href"));i&&i.scrollIntoView({behavior:"smooth",block:"start"})})})}function c(){const e=document.querySelector("#hero");e.innerHTML=`
    <div class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">
            <i class="ph ph-sparkle"></i>
            Stop wasting weeks on setup
          </div>
          <h1 id="hero-title">Ship production-ready systems in hours, not weeks</h1>
          <p class="hero-subtitle">
            Your best developers are spending their time on boilerplate instead of solving real problems. SystemSketch generates your entire backend, frontend, and infrastructure so your team can focus on building features that matter.
          </p>
          <div class="hero-cta" style="max-width: 400px; margin: 0 auto 60px;">
            <form class="waitlist-form" style="display: flex; gap: 12px;">
              <input 
                type="email" 
                placeholder="Enter your email" 
                required
                style="flex: 1; padding: 16px 20px; border: 1px solid var(--border); border-radius: 16px; font-size: 16px; background: white;"
              />
              <button type="submit" class="btn btn-primary btn-large" style="white-space: nowrap; flex-shrink: 0;">
                <i class="ph ph-envelope"></i>
                Join waitlist
              </button>
            </form>
          </div>
          <div class="hero-visual">
            <div class="tech-carousel-section">
              <p class="tech-text">Works with your favorite technologies</p>
              <div class="tech-carousel-container">
                <div class="tech-carousel">
                  <div class="tech-track">
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
                    <!-- Duplicate for seamless loop -->
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
            </div>
            <div class="video-wrapper">
              <iframe 
                id="youtube-video"
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/irJg-uTr554?si=uk4Pyw8c-eGawMnm&controls=0" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
              </iframe>
              <div class="custom-play-overlay" id="play-overlay">
                <button class="custom-play-button" id="custom-play-btn" aria-label="Play video">                    <i class="ph ph-play-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;const a=document.querySelector("#custom-play-btn"),o=document.querySelector("#play-overlay"),i=document.querySelector("#youtube-video");a&&o&&i&&a.addEventListener("click",()=>{o.remove();const s=i.src;s.includes("autoplay=1")||(i.src=s+"&autoplay=1&mute=1")})}function l(){const e=document.querySelector("#tech-carousel");e.style.display="none"}function d(){const e=document.querySelector("#features");e.innerHTML=`
    <div class="features">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">
            <i class="ph ph-lightning"></i>
            Why teams win with SystemSketch
          </div>
          <h2 id="features-title" class="section-title">Reclaim thousands of hours every year</h2>
          <p class="section-subtitle">
            Every dollar spent setting up infrastructure is a dollar not spent building your product. Get your entire system up and running before your first sprint ends.
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
            <h3 class="feature-title">Deliver proposals clients can see and trust</h3>
            <p class="feature-description">
              Stop presenting wireframes on napkins. Show clients exactly what they're getting with visual diagrams that prevent scope creep and misalignment before a single line of code is written.
            </p>
            <ul class="feature-list">
              <li>Win more contracts with visual proof of concept</li>
              <li>Reduce scope creep by 60%</li>
              <li>Close deals faster with clear architecture</li>
              <li>Eliminate miscommunication with stakeholders</li>
            </ul>
          </div>
          <div class="feature-card">
            <div class="feature-section-icon">
              <i class="ph ph-code"></i>
            </div>
            <div class="feature-icon">
              <i class="ph ph-file-code"></i>
            </div>
            <h3 class="feature-title">Compress months into weeks</h3>
            <p class="feature-description">
              Production-ready infrastructure, security, and documentation generated automatically. Your developers ship real features on day one instead of copying boilerplate from GitHub.
            </p>
            <ul class="feature-list">
              <li>Deploy in minutes, not months</li>
              <li>Security and best practices built in</li>
              <li>Full documentation auto-generated</li>
              <li>Scalable architecture from launch day</li>
            </ul>
          </div>
          <div class="feature-card">
            <div class="feature-section-icon">
              <i class="ph ph-stack"></i>
            </div>
            <div class="feature-icon">
              <i class="ph ph-stack-simple"></i>
            </div>
            <h3 class="feature-title">Teach better, faster</h3>
            <p class="feature-description">
              New developers see patterns in action instead of theory in textbooks. Build real systems and learn architecture by doing—not studying.
            </p>
            <ul class="feature-list">
              <li>Learn system design through practice</li>
              <li>Understand production architecture immediately</li>
              <li>Build portfolio-ready projects in weeks</li>
              <li>Get hired with working examples</li>
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
            How it works
          </div>
          <h2 id="process-title" class="section-title">From sketch to deployed in your first sprint</h2>
          <p class="section-subtitle">
            Three simple steps. Your team goes from idea to production infrastructure while you're still in planning meetings. That's the SystemSketch difference.
          </p>
        </div>
        <div class="process-flow">
          <div class="process-card">
            <div class="process-icon">
              <i class="ph ph-pencil-simple"></i>
            </div>
            <div class="process-content">
              <h3 class="process-title">Visualize your architecture</h3>
              <p class="process-description">
                Sketch your system with a few clicks. Show stakeholders exactly what you're building. Get alignment on design before you write a single line of code.
              </p>
            </div>
            <div class="process-number">01</div>
          </div>

          <div class="process-arrow">
            <i class="ph ph-arrow-right"></i>
          </div>

          <div class="process-card">
            <div class="process-icon">
              <i class="ph ph-gear"></i>
            </div>
            <div class="process-content">
              <h3 class="process-title">Choose your tech stack</h3>
              <p class="process-description">
                Pick the frameworks and tools you know. SystemSketch generates code that works perfectly with your workflow, not against it.
              </p>
            </div>
            <div class="process-number">02</div>
          </div>

          <div class="process-arrow">
            <i class="ph ph-arrow-right"></i>
          </div>

          <div class="process-card">
            <div class="process-icon">
              <i class="ph ph-gauge"></i>
            </div>
            <div class="process-content">
              <h3 class="process-title">Ship production code</h3>
              <p class="process-description">
                Get fully functional, documented infrastructure. Deploy immediately or customize locally. Your team starts building features today, not next month.
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
            Real results
          </div>
          <h2 id="testimonials-title" class="section-title">Teams that ship faster win</h2>
          <p class="section-subtitle">
            See how agencies, startups, and educational programs are using SystemSketch to compress timelines and ship with confidence.
          </p>
        </div>
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <p class="testimonial-quote">
              "We were losing deals because our proposals couldn't compete. Now we show clients interactive architecture diagrams before we even write a proposal. It's closed three enterprise contracts this quarter alone."
            </p>
            <div class="testimonial-author">
              <div class="testimonial-avatar">SM</div>
              <div class="testimonial-info">
                <h4>Sarah Martinez</h4>
                <p>Founder, Digital Agency</p>
              </div>
            </div>
          </div>
          <div class="testimonial-card">
            <p class="testimonial-quote">
              "We went from 6-month timelines to 3-month deployments. Every week we save on setup is a week we can spend on the features that actually differentiate us. It's changed our entire business model."
            </p>
            <div class="testimonial-author">
              <div class="testimonial-avatar">JC</div>
              <div class="testimonial-info">
                <h4>James Chen</h4>
                <p>CTO, SaaS Startup</p>
              </div>
            </div>
          </div>
          <div class="testimonial-card">
            <p class="testimonial-quote">
              "Our bootcamp graduates now ship portfolio projects that look like they came from production systems. They get hired faster, and we've cut 4 weeks off the curriculum without sacrificing depth."
            </p>
            <div class="testimonial-author">
              <div class="testimonial-avatar">AL</div>
              <div class="testimonial-info">
                <h4>Dr. Amanda Liu</h4>
                <p>CS Department Chair</p>
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
        <h2 id="cta-title">Stop rebuilding the same infrastructure over and over</h2>
        <p>
          Your next project launches tomorrow. Not after months of setup. Get started and ship production-ready systems while your competitors are still on their to-do lists.
        </p>
        <div style="max-width: 400px; margin: 0 auto;">
          <form class="waitlist-form" style="display: flex; gap: 12px;">
            <input
              type="email"
              placeholder="Enter your email"
              required
              style="flex: 1; padding: 16px 20px; border: 2px solid white; border-radius: 16px; font-size: 16px; background: white; color: var(--text-primary);"
            />
            <button type="submit" class="btn btn-primary btn-large" style="background: white; color: #06b6d4; font-weight: 600; white-space: nowrap; border: 2px solid white; flex-shrink: 0;">
              <i class="ph ph-envelope"></i>
              Get started
            </button>
          </form>
        </div>
      </div>
    </div>
  `}function m(){const e=document.querySelector("#footer"),a=new Date().getFullYear();e.innerHTML=`
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
        <p>&copy; ${a} SystemSketch. All rights reserved. Site built by <a href="https://etherealabs.co" style="color: white; text-decoration: none; font-weight: 600; border-bottom: 1px solid rgba(255,255,255,0.5); transition: border-color 0.2s;" onmouseover="this.style.borderColor='rgba(255,255,255,1)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.5)'"><strong>Etherea Labs</strong></a></p>
      </div>
    </div>
  `}n();c();l();d();p();u();h();v();m();
