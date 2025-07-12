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
          <h2 class="section-title">From architecture to code in 3 steps</h2>
          <p class="section-subtitle">
            Our streamlined workflow gets you from system design to running code faster than traditional development approaches.
          </p>
        </div>
        <div class="process-steps">
          <div class="process-step">
            <div class="process-number">1</div>
            <h3 class="process-title">Design your system visually</h3>
            <p class="process-description">
              Drag components onto the canvas and connect them to represent your architecture. Choose from our library of popular technologies or start with a template.
            </p>
          </div>
          <div class="process-step">
            <div class="process-number">2</div>
            <h3 class="process-title">Configure and customize</h3>
            <p class="process-description">
              Set up your tech stack preferences, deployment targets, and project structure. Preview the generated file structure before proceeding.
            </p>
          </div>
          <div class="process-step">
            <div class="process-number">3</div>
            <h3 class="process-title">Generate and deploy</h3>
            <p class="process-description">
              Download your complete project with starter code, Docker configs, and documentation. Start building features immediately instead of setting up infrastructure.
            </p>
          </div>
        </div>
      </div>
    </div>
  `
}