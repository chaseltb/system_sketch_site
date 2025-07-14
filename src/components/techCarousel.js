export function setupTechCarousel() {
  const techCarousel = document.querySelector('#tech-carousel')
  
  techCarousel.innerHTML = `
    <div class="container">
      <p class="tech-text">Works with your favorite technologies</p>
      <div class="tech-carousel-container">
        <div class="tech-carousel">
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
  `
}