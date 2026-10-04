export const siteConfig = {
  metrics: {
    // Replace null with strings when data is available (e.g., "15", "98")
    hoursSaved: null,
    daysFasterInvoicing: null,
    percentFewerUnbilled: null,
  },
  testimonials: {
    infinityQuote: "Ovelah fundamentally changed how we track our field engineers. We no longer lose money on forgotten parts, and our clients appreciate the transparent service histories.",
    infinityAuthorName: "Abdullah",
    infinityAuthorTitle: "Operation Manager",
  },
  security: {
    encryptedData: true, 
    roleBasedAccess: true, 
    hostedInAsia: true,
    soc2Certified: null, // Remains hidden until verified
  },
  faqs: {
    exportData: null, // "Yes, you can export..."
  },
  about: {
    // Hide the Origin section until the founder writes their story
    founderStory: null as string | null, 
    
    // Timeline items. Add new ones or change status to 'planned'/'completed'
    timeline: [
      { date: "[ADD DATE]", title: "Platform live in daily operations", status: "completed" },
      // { date: "[ADD DATE]", title: "Public Launch", status: "planned" }
    ],
    
    // Add team members here. The Team section hides automatically if this array is empty.
    team: [
      // { name: "Muhammad Anas Nadeem", role: "Founder", bio: "Building Ovelah.", linkedin: null, image: null }
    ],
    
    // Used in the 'Where We Are' section. E.g., "+92 300 0000000"
    contactPhone: null as string | null 
  }
};