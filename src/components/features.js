export function setupFeatures() {
  const features = document.querySelector('#features')
  
  features.innerHTML = `
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
  `
}