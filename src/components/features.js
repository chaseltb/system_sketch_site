export function setupFeatures() {
  const features = document.querySelector('#features')
  
  features.innerHTML = `
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
  `
}