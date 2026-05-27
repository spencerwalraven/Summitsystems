/**
 * SPEC Sheets, Product Catalog
 * All template packs, individual templates, and free lead magnets.
 * Replace #gumroad-XXXX URLs with real Gumroad product links.
 */

const SHEETS_PRODUCTS = {

  /* ── PAID PACKS ── */
  packs: [
    {
      id: 'landscaping-pack',
      name: 'Landscaping Business Pack',
      category: 'business',
      industry: 'landscaping',
      price: 49,
      gumroadUrl: '#gumroad-landscaping-pack',
      description: 'Everything you need to run a professional landscaping business, from first client call to final invoice.',
      templates: [
        'Landscaping Proposal Template',
        'Service Contract Template',
        'Job Estimate Template',
        'Invoice Template',
        'Client Intake Form'
      ],
      formats: ['google-docs', 'word'],
      badge: 'Best Seller',
      emoji: '🌿'
    },
    {
      id: 'wedding-pack',
      name: 'Wedding Planning Pack',
      category: 'life',
      subcategory: 'wedding',
      price: 29,
      gumroadUrl: '#gumroad-wedding-pack',
      description: 'Plan your perfect day without the stress. Budget, guests, timeline, vendors, and seating, all in one place.',
      templates: [
        'Wedding Budget Spreadsheet',
        'Guest List Tracker',
        'Wedding Timeline Template',
        'Vendor Comparison Sheet',
        'Seating Chart Template'
      ],
      formats: ['google-sheets', 'excel'],
      badge: 'Popular',
      emoji: '💍'
    },
    {
      id: 'budget-pack',
      name: 'Monthly Budget Pack',
      category: 'life',
      subcategory: 'budget',
      price: 19,
      gumroadUrl: '#gumroad-budget-pack',
      description: 'Take control of your money. Track spending, set savings goals, and crush debt, all from one spreadsheet.',
      templates: [
        'Monthly Budget Spreadsheet',
        'Savings Goal Tracker',
        'Debt Payoff Calculator',
        'Expense Category Template',
        'Annual Financial Overview'
      ],
      formats: ['google-sheets', 'excel'],
      badge: null,
      emoji: '💰'
    }
  ],

  /* ── FREE LEAD MAGNETS ── */
  freebies: [
    {
      id: 'free-estimate',
      name: 'Free Contractor Estimate Template',
      category: 'business',
      gumroadUrl: '#gumroad-free-estimate',
      description: 'Professional estimate template, plug in your logo and start sending quotes today.',
      formats: ['google-docs', 'word'],
      emoji: '📋'
    },
    {
      id: 'free-budget',
      name: 'Free Monthly Budget Lite',
      category: 'life',
      gumroadUrl: '#gumroad-free-budget',
      description: 'Simple monthly budget to track income and expenses. No formulas to figure out, just fill in the blanks.',
      formats: ['google-sheets', 'excel'],
      emoji: '📊'
    }
  ],

  /* ── BUSINESS INDUSTRIES ── */
  industries: [
    { id: 'landscaping',   name: 'Landscaping',         emoji: '🌿', count: 5 },
    { id: 'roofing',       name: 'Roofing',             emoji: '🏠', count: 0 },
    { id: 'hvac',          name: 'HVAC',                emoji: '❄️', count: 0 },
    { id: 'plumbing',      name: 'Plumbing',            emoji: '🔧', count: 0 },
    { id: 'painting',      name: 'Painting',            emoji: '🎨', count: 0 },
    { id: 'electrical',    name: 'Electrical',           emoji: '⚡', count: 0 },
    { id: 'general',       name: 'General Contracting',  emoji: '🏗️', count: 0 },
    { id: 'cleaning',      name: 'Cleaning Services',    emoji: '✨', count: 0 },
    { id: 'realestate',    name: 'Real Estate',          emoji: '🏡', count: 0 },
    { id: 'consulting',    name: 'Consulting',           emoji: '💼', count: 0 },
    { id: 'creative',      name: 'Freelance / Creative', emoji: '🖌️', count: 0 },
    { id: 'restaurant',    name: 'Restaurant',           emoji: '🍽️', count: 0 },
    { id: 'fitness',       name: 'Fitness',              emoji: '💪', count: 0 },
    { id: 'auto',          name: 'Auto / Mechanic',      emoji: '🔩', count: 0 }
  ],

  /* ── BUSINESS DOCUMENT TYPES ── */
  docTypes: [
    'Proposals', 'Contracts', 'Estimates', 'Invoices',
    'Project Plans', 'Budgets', 'Client Intake Forms', 'Onboarding Checklists',
    'SOPs', 'Employee Handbooks', 'Meeting Agendas', 'Business Plans',
    'Marketing Plans', 'Social Media Calendars'
  ],

  /* ── LIFE CATEGORIES ── */
  lifeCategories: [
    { id: 'wedding',     name: 'Wedding Planning',     emoji: '💍', count: 5 },
    { id: 'budget',      name: 'Monthly / Annual Budget', emoji: '💰', count: 5 },
    { id: 'meal',        name: 'Meal Planning',         emoji: '🥗', count: 0 },
    { id: 'moving',      name: 'Moving / Relocation',   emoji: '📦', count: 0 },
    { id: 'travel',      name: 'Travel',                emoji: '✈️', count: 0 },
    { id: 'goals',       name: 'Goal Setting',          emoji: '🎯', count: 0 },
    { id: 'renovation',  name: 'Home Renovation',       emoji: '🔨', count: 0 },
    { id: 'events',      name: 'Event Planning',        emoji: '🎉', count: 0 },
    { id: 'health',      name: 'Health & Fitness',      emoji: '🏋️', count: 0 },
    { id: 'academic',    name: 'Academic',              emoji: '📚', count: 0 },
    { id: 'baby',        name: 'New Baby',              emoji: '👶', count: 0 },
    { id: 'sidehustle',  name: 'Side Hustle',           emoji: '🚀', count: 0 }
  ],

  /* ── PRICING TIERS ── */
  pricing: {
    individual:    { min: 9,   max: 29,  label: 'Individual Templates' },
    industryPack:  { min: 49,  max: 99,  label: 'Industry Packs (5-10 templates)' },
    lifePack:      { min: 29,  max: 79,  label: 'Life Event Packs (5-10 templates)' },
    allAccess:     { min: 149, max: 199, label: 'All-Access Bundles' }
  },

  /* ── FORMAT LABELS ── */
  formatLabels: {
    'google-docs':   { name: 'Google Docs',   color: '#4285F4' },
    'google-sheets': { name: 'Google Sheets',  color: '#0F9D58' },
    'word':          { name: 'Word',           color: '#2B579A' },
    'excel':         { name: 'Excel',          color: '#217346' }
  }
};
