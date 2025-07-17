export function setupProcess() {
  const process = document.querySelector('#process')
  
  process.innerHTML = `
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
            <div class="process-icon">
              <i class="ph ph-pencil-simple"></i>
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
            <div class="process-icon">
              <i class="ph ph-gauge"></i>
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
  `
}