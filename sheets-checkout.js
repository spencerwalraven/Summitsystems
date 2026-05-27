/**
 * SPEC Sheets, Stripe Checkout Scaffold
 * ────────────────────────────────────────
 * This file is scaffolded for future Stripe integration.
 * Currently inactive, all purchases go through Gumroad.
 *
 * To activate:
 * 1. Create a Vercel serverless function at /api/sheets-checkout
 * 2. Add your Stripe secret key to Vercel environment variables
 * 3. Create Stripe products/prices for each template pack
 * 4. Fill in the priceMap below with real Stripe price IDs
 * 5. Uncomment the checkout function and wire up the buttons
 */

const SHEETS_CHECKOUT = {

  /**
   * Map product IDs to Stripe Price IDs.
   * Fill these in after creating products in Stripe Dashboard.
   */
  priceMap: {
    'landscaping-pack': null, // e.g., 'price_1Abc123...'
    'wedding-pack':     null,
    'budget-pack':      null,
    // Individual templates
    // 'template-id':   'price_xxx',
  },

  /**
   * Stripe Checkout redirect.
   * Uncomment and configure when ready to accept Stripe payments.
   */
  /*
  async checkout(productId) {
    const priceId = this.priceMap[productId];
    if (!priceId) {
      console.error(`No Stripe price ID found for product: ${productId}`);
      return;
    }

    try {
      const response = await fetch('/api/sheets-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          priceId,
          productId,
          successUrl: window.location.origin + '/sheets-success.html?product=' + productId,
          cancelUrl: window.location.href
        })
      });

      const { url } = await response.json();
      if (url) {
        window.location.href = url;
      }
    } catch (err) {
      console.error('Checkout error:', err);
      // Fallback to Gumroad
      const product = SHEETS_PRODUCTS.packs.find(p => p.id === productId);
      if (product?.gumroadUrl) {
        window.open(product.gumroadUrl, '_blank');
      }
    }
  }
  */

  /**
   * Show "coming soon" tooltip for Stripe checkout buttons.
   * Used while Gumroad is the primary checkout.
   */
  showComingSoon(button) {
    const tooltip = document.createElement('div');
    tooltip.textContent = 'Card checkout coming soon, buy on Gumroad today!';
    tooltip.style.cssText = `
      position:absolute;bottom:calc(100% + 8px);left:50%;transform:translateX(-50%);
      background:#0E1C2F;color:#fff;padding:8px 14px;border-radius:8px;
      font-size:0.78rem;white-space:nowrap;z-index:999;
      opacity:0;transition:opacity 0.2s;pointer-events:none;
    `;
    button.style.position = 'relative';
    button.appendChild(tooltip);
    requestAnimationFrame(() => { tooltip.style.opacity = '1'; });
    setTimeout(() => { tooltip.style.opacity = '0'; setTimeout(() => tooltip.remove(), 200); }, 2500);
  }
};
