export function setupProcess() {
  const process = document.querySelector('#process')
  
  process.innerHTML = `
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
  `
}