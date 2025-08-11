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
            <div class="hero-image" role="img" aria-label="SystemSketch interface preview">
              <video id="hero-video" muted playsinline poster="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200">
                <source src="./ssketch demo.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>
              <div class="video-controls" id="video-controls">
                <div class="video-progress-container">
                  <div class="video-progress" id="progress-bar">
                    <div class="video-progress-bar" id="progress-fill"></div>
                  </div>
                  <div class="video-time" id="video-time">0:00 / 0:00</div>
                </div>
                <div class="video-controls-buttons">
                  <button class="video-control-btn" id="play-pause-btn">
                    <i class="ph ph-play"></i>
                  </button>
                  <button class="video-control-btn" id="restart-btn">
                    <i class="ph ph-arrow-counter-clockwise"></i>
                  </button>
                  <button class="video-control-btn" id="fullscreen-btn">
                    <i class="ph ph-corners-out"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
  
  // Video controls functionality
  const video = document.getElementById('hero-video')
  const playPauseBtn = document.getElementById('play-pause-btn')
  const restartBtn = document.getElementById('restart-btn')
  const fullscreenBtn = document.getElementById('fullscreen-btn')
  const progressBar = document.getElementById('progress-bar')
  const progressFill = document.getElementById('progress-fill')
  const videoTime = document.getElementById('video-time')
  
  let isPlaying = false
  let autoplayTimer = null
  
  // Format time helper
  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }
  
  // Update progress and time
  function updateProgress() {
    if (video.duration) {
      const progress = (video.currentTime / video.duration) * 100
      progressFill.style.width = `${progress}%`
      videoTime.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`
    }
  }
  
  // Toggle play/pause
  function togglePlayPause() {
    if (autoplayTimer) {
      clearTimeout(autoplayTimer)
      autoplayTimer = null
    }
    
    if (isPlaying) {
      video.pause()
      isPlaying = false
      playPauseBtn.innerHTML = '<i class="ph ph-play"></i>'
    } else {
      video.play()
      isPlaying = true
      playPauseBtn.innerHTML = '<i class="ph ph-pause"></i>'
    }
  }
  
  // Fullscreen functionality
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      video.requestFullscreen().catch(err => {
        console.log(`Error attempting to enable fullscreen: ${err.message}`)
      })
    } else {
      document.exitFullscreen()
    }
  }
  
  // Event listeners
  video.addEventListener('loadedmetadata', updateProgress)
  video.addEventListener('timeupdate', updateProgress)
  
  // Click to play/pause
  video.addEventListener('click', togglePlayPause)
  playPauseBtn.addEventListener('click', togglePlayPause)
  
  // Restart button
  restartBtn.addEventListener('click', () => {
    video.currentTime = 0
    updateProgress()
  })
  
  // Fullscreen button
  fullscreenBtn.addEventListener('click', toggleFullscreen)
  
  // Update fullscreen button icon
  document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
      fullscreenBtn.innerHTML = '<i class="ph ph-corners-in"></i>'
    } else {
      fullscreenBtn.innerHTML = '<i class="ph ph-corners-out"></i>'
    }
  })
  
  // Progress bar click
  progressBar.addEventListener('click', (e) => {
    const rect = progressBar.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const width = rect.width
    const clickPercent = clickX / width
    video.currentTime = clickPercent * video.duration
  })
  
  // Autoplay after 2 seconds
  autoplayTimer = setTimeout(() => {
    if (!isPlaying) {
      togglePlayPause()
    }
  }, 2000)
  
  // Handle video end
  video.addEventListener('ended', () => {
    isPlaying = false
    playPauseBtn.innerHTML = '<i class="ph ph-play"></i>'
  })
}