export function setupHero() {
  const hero = document.querySelector('#hero')
  
  hero.innerHTML = `
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
  `
  
  // Add custom play button functionality
  const customPlayBtn = document.querySelector('#custom-play-btn')
  const playOverlay = document.querySelector('#play-overlay')
  const iframe = document.querySelector('#youtube-video')
  
  if (customPlayBtn && playOverlay && iframe) {
    customPlayBtn.addEventListener('click', () => {
      // Remove the custom play button overlay completely
      playOverlay.remove()
      
      // Update iframe src to include autoplay
      const currentSrc = iframe.src
      if (!currentSrc.includes('autoplay=1')) {
        iframe.src = currentSrc + '&autoplay=1&mute=1'
      }
    })
  }
}