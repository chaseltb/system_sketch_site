export function setupPricing() {
  const pricing = document.querySelector('#pricing')

  pricing.innerHTML = `
    <div class="pricing">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">
            <i class="ph ph-tag"></i>
            Simple, transparent pricing
          </div>
          <h2 class="section-title">Start free, scale as you grow</h2>
          <p class="section-subtitle">
            No credit card required. No surprises. Pay only for what you use.
          </p>
        </div>
        <div class="pricing-grid">
          <div class="pricing-card">
            <div class="pricing-header">
              <h3 class="pricing-name">Starter</h3>
              <p class="pricing-price">Free</p>
            </div>
            <p class="pricing-description">Perfect for learning and small projects</p>
            <ul class="pricing-features">
              <li>Up to 3 projects</li>
              <li>Basic infrastructure templates</li>
              <li>Community support</li>
              <li>Standard documentation</li>
            </ul>
            <button class="btn btn-secondary btn-large" style="width: 100%; margin-top: 24px;">
              Get started free
            </button>
          </div>
          <div class="pricing-card pricing-card-featured">
            <div class="pricing-badge">Most Popular</div>
            <div class="pricing-header">
              <h3 class="pricing-name">Professional</h3>
              <p class="pricing-price"><span class="price-amount">$29</span><span class="price-period">/month</span></p>
            </div>
            <p class="pricing-description">For serious developers and teams</p>
            <ul class="pricing-features">
              <li>Unlimited projects</li>
              <li>Advanced templates & customization</li>
              <li>Priority support</li>
              <li>Auto-generated documentation</li>
              <li>Team collaboration (up to 5)</li>
              <li>API access</li>
            </ul>
            <button class="btn btn-primary btn-large" style="width: 100%; margin-top: 24px;">
              <i class="ph ph-rocket-launch"></i>
              Start free trial
            </button>
          </div>
          <div class="pricing-card">
            <div class="pricing-header">
              <h3 class="pricing-name">Enterprise</h3>
              <p class="pricing-price">Custom</p>
            </div>
            <p class="pricing-description">For organizations with advanced needs</p>
            <ul class="pricing-features">
              <li>Everything in Professional</li>
              <li>Unlimited team members</li>
              <li>Custom integrations</li>
              <li>Dedicated support</li>
              <li>SLA guarantee</li>
            </ul>
            <button class="btn btn-secondary btn-large" style="width: 100%; margin-top: 24px;">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  `
}
