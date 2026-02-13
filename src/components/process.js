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
          <h2 id="process-title" class="section-title">From idea to deployed app in under an hour</h2>
          <p class="section-subtitle">
            What used to take weeks now takes minutes. Here's how you'll go from concept to working application faster than ever before.
          </p>
        </div>
        <div class="process-flow">
          <div class="process-card">
            <div class="process-icon">
              <i class="ph ph-pencil-simple"></i>
            </div>
            <div class="process-content">
              <h3 class="process-title">Sketch your idea in 5 minutes</h3>
              <p class="process-description">
                Stop overthinking and start building. Drag and drop components to create your system architecture. No technical drawings or complex documentation needed.
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
              <h3 class="process-title">Customize to your needs</h3>
              <p class="process-description">
                Choose your preferred technologies and deployment options. See exactly what you'll get before generating any code. No surprises, no vendor lock-in.
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
              <h3 class="process-title">Launch immediately</h3>
              <p class="process-description">
                Get your complete, working application in seconds. Deploy with one click or download to continue locally. Start adding business logic on day one.
              </p>
            </div>
            <div class="process-number">03</div>
          </div>
        </div>
      </div>
    </div>
  `
}