export function setupHero() {
  const hero = document.querySelector('#hero')
  
  hero.innerHTML = `
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
            <div class="hero-video-container" role="img" aria-label="SystemSketch demo video">
              <div class="video-thumbnail" id="video-thumbnail">
                <img src="https://img.youtube.com/vi/irJg-uTr554/maxresdefault.jpg" alt="SystemSketch Demo Video" />
                <button class="video-play-button" id="play-button" aria-label="Play demo video">
                  <i class="ph ph-play-fill"></i>
                </button>
              </div>
              <iframe 
                id="youtube-iframe"
                width="560" 
                height="315" 
                src="" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
                style="display: none;">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
  
  // Add video play functionality
  const playButton = document.querySelector('#play-button')
  const thumbnail = document.querySelector('#video-thumbnail')
  const iframe = document.querySelector('#youtube-iframe')
  
  if (playButton && thumbnail && iframe) {
    playButton.addEventListener('click', () => {
      thumbnail.style.display = 'none'
      iframe.style.display = 'block'
      // Set iframe src to trigger loading and autoplay
      iframe.src = 'https://www.youtube.com/embed/irJg-uTr554?si=Rm-oH1QWlrYmgmkm&controls=0&autoplay=1&mute=1'
    })
  }

  if (playButton && thumbnail) {
  playButton.addEventListener('click', () => {
    thumbnail.style.display = 'none';

    // Create iframe dynamically
    const newIframe = document.createElement('iframe');
    newIframe.width = "560";
    newIframe.height = "315";
    newIframe.src = "https://www.youtube.com/embed/irJg-uTr554?controls=0&autoplay=1&mute=1";
    newIframe.title = "YouTube video player";
    newIframe.frameBorder = "0";
    newIframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    newIframe.referrerPolicy = "strict-origin-when-cross-origin";
    newIframe.allowFullscreen = true;

    // Append to container
    document.querySelector('.hero-video-container').appendChild(newIframe);
  });
}
}