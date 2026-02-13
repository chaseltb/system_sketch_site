export function setupFeatures() {
  const features = document.querySelector('#features')
  
  features.innerHTML = `
    <div class="features">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">
            <i class="ph ph-lightning"></i>
            Why developers choose us
          </div>
          <h2 id="features-title" class="section-title">Stop wasting time on setup, start shipping faster</h2>
          <p class="section-subtitle">
            Transform weeks of tedious project setup into minutes of visual design. Get straight to building the features your users actually want.
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
            <h3 class="feature-title">Design systems in minutes, not days</h3>
            <p class="feature-description">
              Skip the endless whiteboard sessions and documentation. Design your entire system architecture visually and share it instantly with your team.
            </p>
            <ul class="feature-list">
              <li>Save 2-3 weeks on every new project</li>
              <li>Get team alignment before writing any code</li>
              <li>Start with proven architecture patterns</li>
              <li>Never lose track of system dependencies again</li>
            </ul>
          </div>
          <div class="feature-card">
            <div class="feature-section-icon">
              <i class="ph ph-code"></i>
            </div>
            <div class="feature-icon">
              <i class="ph ph-file-code"></i>
            </div>
            <h3 class="feature-title">Launch with confidence from day one</h3>
            <p class="feature-description">
              Get production-ready code that follows industry best practices. No more starting from scratch or copying outdated boilerplate.
            </p>
            <ul class="feature-list">
              <li>Deploy immediately with zero configuration</li>
              <li>Built-in security and error handling</li>
              <li>Complete documentation saves hours of writing</li>
              <li>Scale confidently with proper architecture</li>
            </ul>
          </div>
          <div class="feature-card">
            <div class="feature-section-icon">
              <i class="ph ph-stack"></i>
            </div>
            <div class="feature-icon">
              <i class="ph ph-stack-simple"></i>
            </div>
            <h3 class="feature-title">Use the tools you already love</h3>
            <p class="feature-description">
              No need to learn new frameworks or change your workflow. Generate code for your preferred tech stack and keep using the tools your team knows best.
            </p>
            <ul class="feature-list">
              <li>Zero learning curve for your existing team</li>
              <li>Integrate with your current development workflow</li>
              <li>Support for 20+ popular technologies</li>
              <li>Future-proof with regular updates</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `
}