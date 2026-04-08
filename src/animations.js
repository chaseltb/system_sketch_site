export function setupAnimations() {
  setupFadeInOnScroll();
  setupStaggerAnimations();
  setupHoverEffects();
}

function setupFadeInOnScroll() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.feature-card, .testimonial-card, .process-card, .faq-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
}

function setupStaggerAnimations() {
  const cards = document.querySelectorAll('.feature-card');
  cards.forEach((card, index) => {
    card.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`;
    card.style.opacity = '0';
  });

  const testimonials = document.querySelectorAll('.testimonial-card');
  testimonials.forEach((card, index) => {
    card.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`;
    card.style.opacity = '0';
  });
}

function setupHoverEffects() {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'translateY(-2px)';
      btn.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translateY(0)';
      btn.style.boxShadow = '';
    });
  });

  const cards = document.querySelectorAll('.feature-card, .testimonial-card, .process-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-8px)';
      card.style.transition = 'all 0.3s ease-out';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });
}

export function animateHeroElements() {
  const heroContent = document.querySelector('.hero-content');
  if (!heroContent) return;

  const h1 = heroContent.querySelector('h1');
  const subtitle = heroContent.querySelector('.hero-subtitle');
  const badge = heroContent.querySelector('.hero-badge');

  if (badge) {
    badge.style.opacity = '0';
    badge.style.animation = 'fadeInDown 0.8s ease-out 0.2s forwards';
  }

  if (h1) {
    h1.style.opacity = '0';
    h1.style.animation = 'fadeInUp 0.8s ease-out 0.4s forwards';
  }

  if (subtitle) {
    subtitle.style.opacity = '0';
    subtitle.style.animation = 'fadeInUp 0.8s ease-out 0.6s forwards';
  }
}
