/**
 * =========================================================================
 * CONFIG.JS - WEBSITE REBRANDING CONFIGURATION & ENGINE
 * =========================================================================
 * 
 * INSTRUCTIONS:
 * 1. Modify Section 1 (Data Entry) to update branding, styles, images, and content.
 * 2. Include this script at the end of index.html after index.js:
 *    
 * =========================================================================
 */

/* =========================================================================
   SECTION 1: DATA ENTRY CONFIGURATION
   ========================================================================= */
const REBRAND_CONFIG = {
  // --- BRAND IDENTIFICATION & META DATA ---
  brand: {
    name: "Kora.Blr",
    suffix: ".",
    tagline: "Good Food, Good Mood",
    description: "Kora.Blr - A cozy, aesthetic cafe in Koramangala offering handcrafted coffees, gourmet small bites, all-day breakfast, artisanal paninis, and premium desserts.",
    keywords: "cafe, Koramangala cafe, Bangalore coffee, specialty coffee, work from cafe, gourmet breakfast, paninis, burgers, desserts",
    themeColor: "#1b3323",
    domain: "https://www.zomato.com/bangalore/kora-blr-koramangala-6th-block-bangalore?amp=1",
    ogImage: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnqtEEhFeIv00vp6cHUhuOAxiulLiFZB4nuE64wJQKn1JGqURczhRzQC5A0ShcWIdaEUzu0HLvFexP-HOjMGrEGRS4r2DOZFnzHSeZacSITw_r8kXVCbsBi_ZTUE7Y2jwqCN_0Ms1w4qvc=s680-w680-h510-rw",
    faviconEmoji: "☕",
    whatsappNumber: "918298000002"
  },

  // --- GLOBAL STYLES & THEMING ---
  styles: {
    colors: {
      bg: "#0d1410",
      bgCard: "#15201a",
      bgLight: "#1e2c24",
      primary: "#528564",
      primaryHover: "#72a685",
      text: "#e8ede9",
      textMuted: "#a2b5a7",
      accent: "#283b2e"
    },
    fonts: {
      heading: "'Syne', sans-serif",
      body: "'Plus Jakarta Sans', sans-serif"
    }
  },

  // --- HERO SECTION ---
  hero: {
    subtitle: "Koramangala, Bengaluru",
    title: "Good Food, Good Mood",
    description: "A little corner where coffee tastes better and time slows down. Enjoy warm brews, cozy vibes, and curated dishes in the heart of Bengaluru.",
    bgImage: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnqtEEhFeIv00vp6cHUhuOAxiulLiFZB4nuE64wJQKn1JGqURczhRzQC5A0ShcWIdaEUzu0HLvFexP-HOjMGrEGRS4r2DOZFnzHSeZacSITw_r8kXVCbsBi_ZTUE7Y2jwqCN_0Ms1w4qvc=s680-w680-h510-rw",
    stats: [
      { value: "8 AM - 12 AM", label: "Open Daily" },
      { value: "4.9 ★", label: "Aesthetic Vibes" },
      { value: "100%", label: "Freshly Brewed" }
    ]
  },

  // --- ABOUT US SECTION ---
  about: {
    subtitle: "About Us",
    title: "A Cafe That's As Aesthetic As It Is Comforting",
    paragraphs: [
      "Located in Koramangala, Kora.Blr was created as a sanctuary for coffee lovers, remote workers, and foodies alike. Every corner is thoughtfully curated to give you a relaxing, inspiring atmosphere.",
      "Whether you're stopping by for our signature Rose Cardamom Coffee, catching up on work, or enjoying an all-day gourmet breakfast with friends, Kora.Blr is your ultimate spot to unwind."
    ],
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkSiA_5V2b_Z6Nw7YTWkT7l9G-dOCy5GTejZ_zvCsM8O4N59blGZIob4QTFyp5N96B2RxqSUqbgv95wELP2PeGH9W5uBY27DieTpKdXxF8B72Oo-4RLvMFWisDyCQlaNhH93VdO0Dku898T=s680-w680-h510-rw",
    imageAlt: "Kora.Blr cafe warm aesthetic seating interior",
    experienceValue: "100%",
    experienceLabel: "Cozy & Relaxing Vibes"
  },

  // --- SPECIALS / NEWLY ADDED FOOD ---
  specials: {
    subtitle: "Fresh From Kitchen",
    title: "Signature & Chef's Specials",
    badge: "Must Try",
    description: "Handcrafted delicacies curated by our kitchen to give you the perfect comfort food experience.",
    items: [
      {
        badge: "Chef's Special",
        img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=600",
        alt: "Avocado Scrambled Eggs on Butter Toast",
        diet: "veg",
        title: "Avocado Scrambled Eggs on Butter Toast",
        price: "₹245",
        desc: "Creamy scrambled eggs served over rich mashed avocado on warm buttered artisanal toast."
      },
      {
        badge: "Popular",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600",
        alt: "Truffle Mushroom Pizza",
        diet: "veg",
        title: "Truffle Mushroom Pizza",
        price: "₹415",
        desc: "Freshly baked pizza topped with wild earth mushrooms, aromatic truffle oil, and melted mozzarella."
      },
      {
        badge: "Customer Favorite",
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600",
        alt: "KORA'S Chicken Tri-Cheese Melting Burger",
        diet: "nonveg",
        title: "KORA'S Chicken Tri-Cheese Melting Burger",
        price: "₹425",
        desc: "Juicy chicken patty layered with three melting cheeses, house special burger sauce, and crisp greens."
      }
    ]
  },

  // --- OFFERS SECTION ---
  offers: {
    subtitle: "Exclusive Deals",
    title: "Special Offers",
    items: [
      {
        tag: "WORK FROM CAFE",
        title: "Coffee & Toast Combo",
        desc: "Enjoy any specialty brew along with our signature Avocado Toast at a special price.",
        code: "KORAWORK",
        highlight: false
      },
      {
        tag: "MUST TRY DRINK",
        title: "Rose Cardamom Brew",
        desc: "Pair your favorite panini or burger with our viral Rose Cardamom Coffee.",
        code: "ROSEBREW",
        highlight: true
      },
      {
        tag: "BRUNCH SPECIAL",
        title: "Full KORA'S English Breakfast",
        desc: "Get a complete English Breakfast setup loaded with eggs, sausages, baked beans, and toast.",
        code: "KORABRUNCH",
        highlight: false
      }
    ]
  },

  // --- FEATURED MENU SECTION ---
  menu: {
    subtitle: "Our Complete Menu",
    title: "Handcrafted Food & Beverages",
    pdfUrl: "assets/kora-menu.pdf",
    pdfFilename: "Kora_BLR_Food_Menu.pdf",
    categories: [
      { id: "all", label: "All Items", active: true },
      { id: "breakfast", label: "All Day Breakfast", active: false },
      { id: "pizza", label: "Handcrafted Pizza", active: false },
      { id: "pasta", label: "Pasta & Bowls", active: false },
      { id: "burgers", label: "Sandwiches & Burgers", active: false },
      { id: "bites", label: "Small Bites & Salads", active: false },
      { id: "desserts", label: "Premium Desserts", active: false }
    ],
    items: [
      // Gourmet All Day Breakfast
      {
        category: "breakfast",
        img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=600",
        title: "Avocado Scrambled Eggs on Butter Toast",
        price: "₹245",
        diet: "veg",
        desc: "Rich avocado mash and velvety scrambled eggs layered over toasted artisan bread.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/bangalore/kora-blr-koramangala-6th-block-bangalore?amp=1"
      },
      {
        category: "breakfast",
        img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=80&w=600",
        title: "Truffle Mushroom & Cheese Croissant",
        price: "₹295",
        diet: "veg",
        desc: "Flaky butter croissant stuffed with sauteed truffle mushrooms and melted cheese.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/bangalore/kora-blr-koramangala-6th-block-bangalore?amp=1"
      },
      {
        category: "breakfast",
        img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=80&w=600",
        title: "KORA'S English Breakfast",
        price: "₹425",
        diet: "nonveg",
        desc: "Classic hearty platter with chicken sausage, eggs, grilled tomatoes, beans, and buttered toast.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/bangalore/kora-blr-koramangala-6th-block-bangalore?amp=1"
      },

      // Handcrafted Pizza
      {
        category: "pizza",
        img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=600",
        title: "Margherita with Fresh Basil",
        price: "₹375",
        diet: "veg",
        desc: "Classic Italian style thin-crust pizza topped with rich tomato sauce, mozzarella, and fresh basil leaves.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/bangalore/kora-blr-koramangala-6th-block-bangalore?amp=1"
      },
      {
        category: "pizza",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600",
        title: "Truffle Mushroom Pizza",
        price: "₹415",
        diet: "veg",
        desc: "Aromatic truffle drizzle, earthy mushrooms, and gooey cheese on handcrafted dough.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/bangalore/kora-blr-koramangala-6th-block-bangalore?amp=1"
      },
      {
        category: "pizza",
        img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600",
        title: "Herb Roasted Chicken Pizza",
        price: "₹425",
        diet: "nonveg",
        desc: "Succulent herb-marinated chicken bites over mozzarella cheese and house tomato base.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/bangalore/kora-blr-koramangala-6th-block-bangalore?amp=1"
      },

      // Pasta & Comfort Bowls
      {
        category: "pasta",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFU8wB7L8zkCBAuZpm27sHu8ZNydS8Fs6eay7ZF6k-pA&s=10",
        title: "Penne Arrabbiata",
        price: "₹325",
        diet: "veg",
        desc: "Penne pasta tossed in spicy red garlic tomato sauce with Italian herbs.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/bangalore/kora-blr-koramangala-6th-block-bangalore?amp=1"
      },
      {
        category: "pasta",
        img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=600",
        title: "Creamy Alfredo Pasta",
        price: "₹325",
        diet: "veg",
        desc: "Silky white sauce pasta with parmesan cheese, garlic, and fresh herbs.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/bangalore/kora-blr-koramangala-6th-block-bangalore?amp=1"
      },
      {
        category: "pasta",
        img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=600",
        title: "Chicken Alfredo Pasta",
        price: "₹425",
        diet: "nonveg",
        desc: "Tender grilled chicken tossed with rich parmesan cream sauce and pasta.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/bangalore/kora-blr-koramangala-6th-block-bangalore?amp=1"
      },

      // Buns & Burgers / Sandwiches
      {
        category: "burgers",
        img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=600",
        title: "Classic Caprese Sandwich",
        price: "₹285",
        diet: "veg",
        desc: "Fresh mozzarella slices, ripe tomatoes, and pesto spread on artisan bread.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/bangalore/kora-blr-koramangala-6th-block-bangalore?amp=1"
      },
      {
        category: "burgers",
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600",
        title: "KORA'S Chicken Tri-Cheese Melting Burger",
        price: "₹425",
        diet: "nonveg",
        desc: "Melting triple-cheese loaded over a crispy grilled chicken patty in a warm brioche bun.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/bangalore/kora-blr-koramangala-6th-block-bangalore?amp=1"
      },
      {
        category: "burgers",
        img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=600",
        title: "Peri Peri Chicken & Cheese Sandwich",
        price: "₹325",
        diet: "nonveg",
        desc: "Spicy peri peri chicken chunks toasted with melted cheese between fresh bread.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/bangalore/kora-blr-koramangala-6th-block-bangalore?amp=1"
      },

      // Gourmet Small Bites
      {
        category: "bites",
        img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=600",
        title: "Cheese Loaded Nachos",
        price: "₹265",
        diet: "veg",
        desc: "Crispy tortilla chips smothered in hot cheese sauce, jalapeños, and salsa.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/bangalore/kora-blr-koramangala-6th-block-bangalore?amp=1"
      },
      {
        category: "bites",
        img: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=600",
        title: "Spicy Chicken Wings",
        price: "₹325",
        diet: "nonveg",
        desc: "Crispy chicken wings tossed in fiery house hot sauce.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/bangalore/kora-blr-koramangala-6th-block-bangalore?amp=1"
      },

      // Premium Desserts
      {
        category: "desserts",
        img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=600",
        title: "Classic Tiramisu",
        price: "₹285",
        diet: "veg",
        desc: "Authentic coffee-soaked ladyfingers layered with rich mascarpone cream and cocoa dusting.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/bangalore/kora-blr-koramangala-6th-block-bangalore?amp=1"
      },
      {
        category: "desserts",
        img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=600",
        title: "Matcha Cheesecake",
        price: "₹325",
        diet: "veg",
        desc: "Smooth Japanese matcha infused velvety cheesecake on a buttery biscuit base.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/bangalore/kora-blr-koramangala-6th-block-bangalore?amp=1"
      },
      {
        category: "desserts",
        img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=600",
        title: "Dark Chocolate Ganache Tart",
        price: "₹270",
        diet: "veg",
        desc: "Rich 70% dark chocolate ganache set in a crisp buttery pastry shell.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/bangalore/kora-blr-koramangala-6th-block-bangalore?amp=1"
      }
    ]
  },

  // --- REVIEWS & TESTIMONIALS ---
  reviews: {
    subtitle: "Testimonials",
    title: "What Our Guests Say",
    items: [
      {
        stars: 5,
        text: "\"It's a total vibe. One of the best place for unwind and relax. You can opt this place for work from cafe. Also I love their sandwiches and burger. Must try rose cardamom coffee. Asthetic every corner.\"",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
        name: "Mamun B",
        role: "Local Guide · 206 reviews"
      },
      {
        stars: 5,
        text: "\"A little corner where coffee tastes better and time slows down. ☕✨ The perfect blend of warm brews, cozy vibes, and beautiful interiors. Every detail here feels thoughtfully curated. A café that's as aesthetic as it is comforting. 🤎\"",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
        name: "shivali arora",
        role: "Local Guide · 19 reviews"
      },
      {
        stars: 5,
        text: "\"Loved the coffee here! The flavors felt authentic and well-balanced, and the quality really stands out. The cozy ambience makes it a great place to relax and catch up with friends. A wonderful spot for coffee lovers. The coffee was freshly brewed, rich in flavor, and served beautifully. The atmosphere is calm and welcoming, making the overall experience enjoyable.\"",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
        name: "HeySunshine 23",
        role: "Local Guide · 8 reviews"
      }
    ],
    googleCta: {
      title: "Loved your experience at Kora.Blr?",
      desc: "Help others discover our aesthetic spot by leaving a review on Google Maps!",
      url: "https://www.zomato.com/bangalore/kora-blr-koramangala-6th-block-bangalore?amp=1"
    }
  },

  // --- GALLERY SECTION ---
  gallery: {
    subtitle: "Visual Experience",
    title: "Life Inside Kora.Blr",
    images: [
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl-QkyPXSGXZ-vRg5cGlncLjYvzjQB29OBT-EFnh5gIusgyXM3R47Ir3VEd-H7YUu_Qd4eLNFq7K6W3z9TADEhUnJSlVm0WG_nXPJOlRCRKLcwSiYwtdCPYbR5ig26p7Ih6tZPrm3R9M9Ph=s680-w680-h510-rw", alt: "Warm interior lighting and cozy seating at Kora.Blr" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmIl4Me_Xfeby0fUUDddXQOV7X0aE2m_xNXUMHbBwC4bC3bdPIoh3orQrp8IfKOnSKslHdDiPFy6Zbh2xG7YurxXtczMVrhosqRr1hWrGUkYKOYuFzb2jUxh-ZTzYfeePKYpBlzEGy-MgxR=s680-w680-h510-rw", alt: "Signature coffee and cozy table arrangement" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmrs3YixAM27_VVzx89EdiuRiso3W_strZWbWB_iuyloiYJbNhpEPfQ8PaMYaH6oe5Sb7jzin9dHcA_i2uWKT0rPDB8jtQ0YIeL2ecMKgq5F-OrdUmJksOkTIHr4SDkEsKi0AYOJFhFro8Q=w141-h177-n-k-no-nu", alt: "Aesthetic cafe decor and corner setup" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk90BAPY-Xg3Vx0CBVe_x1G7LmtfCWCl6CVbZ_HiDVzDw7CWqBfqkx1PoSSRZYAPEgd3YdvrY7fC9oBP7AECF07rR4qfJ1imcEDcxixFeBnvI0nQCAjkwSczINE3yucpWJwyUOYIFMplPQ=w141-h177-n-k-no-nu", alt: "Fresh food spread served at Kora.Blr" }
    ]
  },

  // --- LOCATION & CONTACT SECTION ---
  location: {
    subtitle: "Visit Us",
    title: "Locations & Hours",
    description: "Located in the vibrant heart of Koramangala. Drop in for your daily cup, a casual meeting, or your work-from-cafe routine.",
    address: "80 Feet Rd, 6th Block, Koramangala, Bengaluru, Karnataka 560025",
    hours: [
      "Monday - Sunday: 8:00 AM - 12:00 AM"
    ],
    email: "hello@korablr.com",
    phone: "+91 82980 00002",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3847774123!2d77.6200000!3d12.9350000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144e00000001%3A0x1234567890abcdef!2s80%20Feet%20Rd%2C%206th%20Block%2C%20Koramangala%2C%20Bengaluru%2C%20Karnataka%20560025!5e0!3m2!1sen!2sin!4v1614134823123!5m2!1sen!2sin"
  },

  // --- FOOTER SECTION ---
  footer: {
    description: "Good Food, Good Mood. An aesthetic sanctuary in Koramangala offering specialty brews, all-day breakfast, and handcrafted comfort food.",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/kora_blr?stkn=MXEwaTRqanZmM2dkdA==", iconClass: "ph-instagram-logo" },
      { platform: "zomato", url: "https://www.zomato.com/bangalore/kora-blr-koramangala-6th-block-bangalore?amp=1", iconClass: "ph-storefront" }
    ],
    copyright: "© 2026 Kora.Blr. All rights reserved."
  },

  // --- WI-FI MODAL SETTINGS ---
  wifi: {
    ssid: "Kora_Guest_WiFi",
    password: "goodfoodgoodmood"
  }
};

/* =========================================================================
   SECTION 2: REBRANDING ENGINE CODE
   ========================================================================= */
(function initRebrandingEngine(cfg) {
  'use strict';

  /**
   * @param {string} selector
   * @param {ParentNode} [ctx]
   * @returns {Element|null}
   */
  const $ = (selector, ctx = document) => ctx.querySelector(selector);

  /**
   * @param {string} selector
   * @param {ParentNode} [ctx]
   * @returns {Element[]}
   */
  const $$ = (selector, ctx = document) => Array.from(ctx.querySelectorAll(selector));

  function applyStyles() {
    const root = document.documentElement;
    if (cfg.styles?.colors) {
      if (cfg.styles.colors.bg) root.style.setProperty('--color-bg', cfg.styles.colors.bg);
      if (cfg.styles.colors.bgCard) root.style.setProperty('--color-bg-card', cfg.styles.colors.bgCard);
      if (cfg.styles.colors.bgLight) root.style.setProperty('--color-bg-light', cfg.styles.colors.bgLight);
      if (cfg.styles.colors.primary) root.style.setProperty('--color-primary', cfg.styles.colors.primary);
      if (cfg.styles.colors.primaryHover) root.style.setProperty('--color-primary-hover', cfg.styles.colors.primaryHover);
      if (cfg.styles.colors.text) root.style.setProperty('--color-text', cfg.styles.colors.text);
      if (cfg.styles.colors.textMuted) root.style.setProperty('--color-text-muted', cfg.styles.colors.textMuted);
      if (cfg.styles.colors.accent) root.style.setProperty('--color-accent', cfg.styles.colors.accent);
    }
    if (cfg.styles?.fonts) {
      if (cfg.styles.fonts.heading) root.style.setProperty('--font-heading', cfg.styles.fonts.heading);
      if (cfg.styles.fonts.body) root.style.setProperty('--font-body', cfg.styles.fonts.body);
    }
  }

  function applyMeta() {
    if (!cfg.brand) return;
    
    const fullTitle = `${cfg.brand.name} | ${cfg.brand.tagline}`;
    document.title = fullTitle;

    /**
     * @param {string} selector
     * @param {string} content
     */
    const setMeta = (selector, content) => {
      const el = $(selector);
      if (el) el.setAttribute('content', content);
    };

    setMeta('meta[name="title"]', fullTitle);
    setMeta('meta[name="description"]', cfg.brand.description);
    setMeta('meta[name="keywords"]', cfg.brand.keywords);
    setMeta('meta[name="theme-color"]', cfg.brand.themeColor);

    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', cfg.brand.description);
    setMeta('meta[property="og:image"]', cfg.brand.ogImage);
    setMeta('meta[property="og:url"]', cfg.brand.domain);
    setMeta('meta[property="og:site_name"]', `${cfg.brand.name} Cafe`);

    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', cfg.brand.description);
    setMeta('meta[name="twitter:image"]', cfg.brand.ogImage);
    setMeta('meta[name="twitter:url"]', cfg.brand.domain);

    const favicon = $('link[rel="icon"]');
    if (favicon && cfg.brand.faviconEmoji) {
      favicon.setAttribute('href', `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${cfg.brand.faviconEmoji}</text></svg>`);
    }

    const schemaScript = $('script[type="application/ld+json"]');
    if (schemaScript) {
      try {
        const schemaData = JSON.parse(schemaScript.textContent);
        schemaData.name = `${cfg.brand.name} ${cfg.brand.tagline}`;
        schemaData.image = cfg.brand.ogImage;
        schemaData.url = cfg.brand.domain;
        schemaData["@id"] = cfg.brand.domain;
        if (cfg.location) {
          schemaData.telephone = cfg.location.phone;
        }
        schemaScript.textContent = JSON.stringify(schemaData, null, 2);
      } catch (err) {
        console.warn("Failed to update JSON-LD schema:", err);
      }
    }
  }

  function applyBrandLogos() {
    $$('.logo').forEach(logoEl => {
      if (logoEl.childNodes.length > 0) {
        logoEl.childNodes[0].nodeValue = cfg.brand.name;
      } else {
        logoEl.textContent = cfg.brand.name;
      }
      let span = $('span', logoEl);
      if (!span && cfg.brand.suffix) {
        span = document.createElement('span');
        logoEl.appendChild(span);
      }
      if (span) span.textContent = cfg.brand.suffix;
      logoEl.setAttribute('aria-label', `${cfg.brand.name} Home`);
    });
  }

  function applyHero() {
    if (!cfg.hero) return;
    const heroSec = $('#home');
    if (heroSec && cfg.hero.bgImage) {
      heroSec.style.background = `linear-gradient(to right, rgba(13,14,18,0.95), rgba(13,14,18,0.6)), url('${cfg.hero.bgImage}') center/cover no-repeat`;
    }
    
    const sub = $('.hero-content .section-subtitle');
    if (sub) sub.textContent = cfg.hero.subtitle;
    
    const title = $('.hero-title');
    if (title) title.textContent = cfg.hero.title;
    
    const desc = $('.hero-description');
    if (desc) desc.textContent = cfg.hero.description;

    const statsContainer = $('.hero-stats');
    if (statsContainer && cfg.hero.stats) {
      statsContainer.innerHTML = cfg.hero.stats.map(s => `
        <div class="stat-item">
          <p class="stat-value">${s.value}</p>
          <p class="stat-label">${s.label}</p>
        </div>
      `).join('');
    }
  }

  function applyAbout() {
    if (!cfg.about) return;
    const aboutSec = $('#about');
    if (!aboutSec) return;

    const img = $('.about-img', aboutSec);
    if (img) {
      img.src = cfg.about.image;
      img.alt = cfg.about.imageAlt;
    }

    const badge = $('.about-experience-badge', aboutSec);
    if (badge) {
      badge.innerHTML = `
        <div style="font-size: 1.8rem; line-height: 1;">${cfg.about.experienceValue}</div>
        <div style="font-size: 0.8rem;">${cfg.about.experienceLabel}</div>
      `;
    }

    const sub = $('.section-subtitle', aboutSec);
    if (sub) sub.textContent = cfg.about.subtitle;

    const title = $('.section-title', aboutSec);     if (title) title.textContent = cfg.about.title;      const textMuted = $$('.text-muted', aboutSec);
    if (cfg.about.paragraphs && cfg.about.paragraphs.length >= 2) {
      if (textMuted[0]) textMuted[0].textContent = cfg.about.paragraphs[0];
      if (textMuted[1]) textMuted[1].textContent = cfg.about.paragraphs[1];
    }
  }

  function applySpecials() {
    if (!cfg.specials) return;
    const specSec = $('#new-food');
    if (!specSec) return;

    const sub = $('.section-subtitle', specSec);
    if (sub) sub.textContent = cfg.specials.subtitle;

    const title = $('.section-title', specSec);
    if (title) {
      title.innerHTML = `${cfg.specials.title} <span class="badge-new">${cfg.specials.badge}</span>`;
    }

    const desc = $('.text-muted', specSec);
    if (desc) desc.textContent = cfg.specials.description;

    const grid = $('.new-items-grid', specSec);
    if (grid && cfg.specials.items) {
      grid.innerHTML = cfg.specials.items.map(item => `
        <article class="new-food-card">
          <div class="new-food-img-wrapper">
            <span class="new-food-badge">${item.badge}</span>
            <img src="${item.img}" alt="${item.alt}" loading="lazy" decoding="async">
          </div>
          <div class="new-food-content">
            <div class="new-food-header">
              <h3 class="new-food-title">
                <span class="diet-badge diet-${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span> 
                ${item.title}
              </h3>
              <span class="new-food-price">${item.price}</span>
            </div>
            <p class="new-food-desc">${item.desc}</p>
            <a href="#location" class="btn btn-outline btn-compact">Order Fresh</a>
          </div>
        </article>
      `).join('');
    }
  }

  function applyOffers() {
    if (!cfg.offers) return;
    const offerSec = $('#offers');
    if (!offerSec) return;

    const sub = $('.section-subtitle', offerSec);
    if (sub) sub.textContent = cfg.offers.subtitle;

    const title = $('.section-title', offerSec);
    if (title) title.textContent = cfg.offers.title;

    const grid = $('.offers-grid', offerSec);
    if (grid && cfg.offers.items) {
      grid.innerHTML = cfg.offers.items.map(o => `
        <div class="offer-card ${o.highlight ? 'highlight-offer' : ''}">
          <div class="offer-tag">${o.tag}</div>
          <h3 class="offer-title">${o.title}</h3>
          <p class="offer-desc">${o.desc}</p>
          <div class="offer-code-wrapper">
            <span>Code: <strong>${o.code}</strong></span>
          </div>
        </div>
      `).join('');
    }
  }

  function applyMenu() {
    if (!cfg.menu) return;
    const menuSec = $('#menu');
    if (!menuSec) return;

    const sub = $('.section-subtitle', menuSec);
    if (sub) sub.textContent = cfg.menu.subtitle;

    const title = $('.section-title', menuSec);
    if (title) title.textContent = cfg.menu.title;

    const dlBtn = $('.btn-download-menu', menuSec);
    if (dlBtn) {
      dlBtn.setAttribute('href', cfg.menu.pdfUrl);
      dlBtn.setAttribute('download', cfg.menu.pdfFilename);
    }

    const catContainer = $('.category-filter-container', menuSec);
    if (catContainer && cfg.menu.categories) {
      catContainer.innerHTML = cfg.menu.categories.map(c => `
        <button class="category-btn ${c.active ? 'active' : ''}" role="tab" aria-selected="${c.active}" aria-controls="menu-grid" data-filter="${c.id}">${c.label}</button>
      `).join('');
    }

    const menuGrid = $('#menu-grid');
    if (menuGrid && cfg.menu.items) {
      menuGrid.innerHTML = cfg.menu.items.map(item => `
        <article class="food-card" data-category="${item.category}">
          <div class="food-card-img-wrapper">
            <img src="${item.img}" alt="${item.title}" loading="lazy" decoding="async">
          </div>
          <div class="food-card-body">
            <div class="food-card-header">
              <h3 class="food-card-title">
                <span class="diet-badge diet-${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span> 
                ${item.title}
              </h3>
              <span class="food-card-price">${item.price}</span>
            </div>
            <p class="food-card-desc">${item.desc}</p>
            <div class="food-card-actions">
              <a href="${item.swiggyUrl}" target="_blank" rel="noopener" class="btn btn-order btn-swiggy">Order with Swiggy</a>
              <a href="${item.zomatoUrl}" target="_blank" rel="noopener" class="btn btn-order btn-zomato">Order with Zomato</a>
              <button type="button" class="btn btn-order btn-whatsapp order-wa-btn" data-item-name="${item.title}" data-item-price="${item.price}">Order via WhatsApp</button>
            </div>
          </div>
        </article>
      `).join('');
    }
  }

  function applyReviews() {
    if (!cfg.reviews) return;
    const revSec = $('#reviews');
    if (!revSec) return;

    const sub = $('.section-subtitle', revSec);
    if (sub) sub.textContent = cfg.reviews.subtitle;

    const title = $('.section-title', revSec);
    if (title) title.textContent = cfg.reviews.title;

    const grid = $('.reviews-grid', revSec);
    if (grid && cfg.reviews.items) {
      grid.innerHTML = cfg.reviews.items.map(r => `
        <figure class="review-card">
          <blockquote class="review-text">
            <div class="review-stars" aria-label="Rating: ${r.stars} out of 5 stars">
              ${Array(r.stars).fill('<i class="ph-fill ph-star" aria-hidden="true"></i>').join('')}
            </div>
            <p>${r.text}</p>
          </blockquote>
          <figcaption class="reviewer-info">
            <img src="${r.avatar}" alt="${r.name}" class="reviewer-avatar" loading="lazy" decoding="async">
            <div>
              <span class="reviewer-name">${r.name}</span>
              <span class="reviewer-role">${r.role}</span>
            </div>
          </figcaption>
        </figure>
      `).join('');
    }

    if (cfg.reviews.googleCta) {
      const ctaTitle = $('.cta-title', revSec);
      if (ctaTitle) ctaTitle.textContent = cfg.reviews.googleCta.title;

      const ctaDesc = $('.cta-desc', revSec);
      if (ctaDesc) ctaDesc.textContent = cfg.reviews.googleCta.desc;

      const ctaBtn = $('.btn-google-review', revSec);
      if (ctaBtn) ctaBtn.setAttribute('href', cfg.reviews.googleCta.url);
    }
  }

  function applyGallery() {
    if (!cfg.gallery) return;
    const galSec = $('#gallery');
    if (!galSec) return;

    const sub = $('.section-subtitle', galSec);
    if (sub) sub.textContent = cfg.gallery.subtitle;

    const title = $('.section-title', galSec);
    if (title) title.textContent = cfg.gallery.title;

    const grid = $('.gallery-grid', galSec);
    if (grid && cfg.gallery.images) {
      grid.innerHTML = cfg.gallery.images.map(img => `
        <button type="button" class="gallery-item" aria-label="Expand image: ${img.alt}">
          <img src="${img.src}" alt="${img.alt}" loading="lazy" decoding="async">
          <span class="gallery-overlay"><i class="ph ph-arrows-out-simple" aria-hidden="true"></i></span>
        </button>
      `).join('');
    }
  }

  function applyLocation() {
    if (!cfg.location) return;
    const locSec = $('#location');
    if (!locSec) return;

    const sub = $('.section-subtitle', locSec);
    if (sub) sub.textContent = cfg.location.subtitle;

    const title = $('.section-title', locSec);
    if (title) title.textContent = cfg.location.title;

    const desc = $('.text-muted', locSec);     if (desc) desc.textContent = cfg.location.description;      const infoItems = $$('.info-item', locSec);
    if (infoItems.length >= 3) {
      const addrText = $('.text-muted', infoItems[0]);       if (addrText) addrText.textContent = cfg.location.address;        const hoursContainer = infoItems[1];       if (hoursContainer && cfg.location.hours) {         const lines = $$('.text-muted', hoursContainer);
        cfg.location.hours.forEach((h, idx) => {
          if (lines[idx]) lines[idx].textContent = h;
        });
      }

      const contactText = $('.text-muted', infoItems[2]);
      if (contactText) contactText.textContent = `${cfg.location.email} | ${cfg.location.phone}`;
    }

    const mapIframe = $('iframe', locSec);
    if (mapIframe && cfg.location.mapEmbedUrl) {
      mapIframe.src = cfg.location.mapEmbedUrl;
    }
  }

  function applyFooter() {
    if (!cfg.footer) return;
    const foot = $('.footer');
    if (!foot) return;

    const desc = $('.footer-desc', foot);
    if (desc) desc.textContent = cfg.footer.description;

    const socialContainer = $('.social-links', foot);
    if (socialContainer && cfg.footer.socials) {
      socialContainer.innerHTML = cfg.footer.socials.map(s => `
        <a href="${s.url}" class="social-icon" aria-label="${s.platform}" target="_blank" rel="noopener">
          <i class="ph ${s.iconClass}" aria-hidden="true"></i>
        </a>
      `).join('');
    }

    const copy = $('.footer-bottom p', foot);
    if (copy) copy.textContent = cfg.footer.copyright;
  }

  function applyWifiModal() {
    if (!cfg.wifi) return;
    const wifiModal = $('#wifi-modal');
    if (!wifiModal) return;

    const qrImg = $('.wifi-qr-img', wifiModal);
    if (qrImg) {
      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=WIFI:S:${cfg.wifi.ssid};T:WPA;P:${cfg.wifi.password};;`;
    }

    const values = $$('.wifi-value', wifiModal);
    if (values[0]) values[0].textContent = cfg.wifi.ssid;
    if (values[1]) values[1].textContent = cfg.wifi.password;
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyStyles();
    applyMeta();
    applyBrandLogos();
    applyHero();
    applyAbout();
    applySpecials();
    applyOffers();
    applyMenu();
    applyReviews();
    applyGallery();
    applyLocation();
    applyFooter();
    applyWifiModal();
  });
})(REBRAND_CONFIG);
