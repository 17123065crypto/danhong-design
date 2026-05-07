export type Project = {
  slug: string;
  title: string;
  year: string;
  category: string;
  summary: string;
  overview: string;
  role: string;
  tools: string[];
  services: string[];
  challenge: string;
  process: string[];
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "personal-image-report-system",
    title: "Personal Image Report System",
    year: "2025",
    category: "Service Design / Digital Editorial",
    summary:
      "A digital report system for personal image consulting, designed to make analysis, recommendations, and client takeaways feel clear and premium.",
    overview:
      "This project sits between service design and editorial UI. The report communicates personal color analysis and styling guidance in a way that stays useful after the consultation.",
    role: "Information architecture, UI design, report system",
    tools: ["Figma", "Adobe Photoshop", "Adobe InDesign"],
    services: ["Report Design", "Digital Editorial", "Template System"],
    challenge:
      "The report includes dense information: color direction, visual references, personal notes, and recommendations. The challenge was to make it feel personal and premium while keeping it easy to revisit.",
    process: [
      "Organized the report around the client questions that appear after a consultation.",
      "Separated diagnostic information from actionable styling guidance.",
      "Created repeatable modules for palettes, references, and recommendations.",
      "Refined the tone so the system feels warm, professional, and reusable.",
    ],
    outcome:
      "The final structure can support future client reports by replacing images, palettes, and notes while keeping the hierarchy consistent.",
  },
  {
    slug: "community-care-service-brochure",
    title: "Community Care Service Brochure",
    year: "2024",
    category: "Graphic Design / Information Design",
    summary:
      "A trifold brochure system for a community care concept, designed to make service information feel calm, credible, and easy to scan.",
    overview:
      "This print piece explores how a small format can carry a lot of information without feeling dense. Each panel has a specific role, from introduction to service context to contact action.",
    role: "Information design, editorial layout, print design",
    tools: ["Adobe InDesign", "Adobe Photoshop", "Adobe Illustrator"],
    services: ["Brochure Design", "Typography", "Print Layout"],
    challenge:
      "A trifold has limited space, but it still needs to carry benefits, imagery, supporting copy, and contact information in a way that feels trustworthy.",
    process: [
      "Defined the reading order across the six panels before choosing image placement.",
      "Grouped information by user need: what the service is, why it matters, and how to take the next step.",
      "Balanced photography with type-led sections so the brochure feels warm but professional.",
      "Prepared the layout as a print-ready system with consistent margins and hierarchy.",
    ],
    outcome:
      "The brochure feels approachable and structured, suitable for community outreach, printed handouts, and portfolio presentation.",
  },
  {
    slug: "restaurant-menu-layout-system",
    title: "Restaurant Menu Layout System",
    year: "2025",
    category: "Editorial Design / Brand Touchpoint",
    summary:
      "A refined menu layout system that organizes categories, pricing, and brand atmosphere into a calm reading experience.",
    overview:
      "A menu is both a functional interface and a brand object. This project focuses on making information easy to navigate while preserving hospitality and restraint.",
    role: "Editorial layout, typography, print direction",
    tools: ["Adobe InDesign", "Adobe Photoshop"],
    services: ["Menu Design", "Typography", "Print Layout"],
    challenge:
      "Menus can quickly become visually noisy because every item competes for attention. The challenge was to keep the design useful while still feeling like a brand touchpoint.",
    process: [
      "Audited content types: categories, item names, descriptions, prices, and supporting imagery.",
      "Built a repeatable grid so new menu items can be added without redesigning the page.",
      "Adjusted type scale and spacing to make scanning easier.",
      "Refined the final layout for print consistency and brand polish.",
    ],
    outcome:
      "The final system is practical to maintain and polished enough to work as a physical menu, PDF menu, or digital brand asset.",
  },
  {
    slug: "personal-identity-touchpoints",
    title: "Personal Identity Touchpoints",
    year: "2024",
    category: "Visual Identity / Brand Collateral",
    summary:
      "A personal identity system focused on the small brand moments that matter in professional introductions: name, role, contact, and tone.",
    overview:
      "This project treats personal branding as a system of touchpoints rather than a single logo. The goal was to create materials that feel precise, quiet, and useful in hiring and freelance contexts.",
    role: "Identity design, typography, print collateral",
    tools: ["Adobe Illustrator", "Adobe InDesign", "Adobe Photoshop"],
    services: ["Identity", "Business Card", "Print System"],
    challenge:
      "A business card has very little room to communicate personality. The challenge was to make the piece feel designed without adding unnecessary decoration.",
    process: [
      "Clarified what the touchpoint needs to communicate at first glance.",
      "Explored typographic lockups and spacing systems.",
      "Kept the visual language quiet so it can sit beside different portfolio projects.",
      "Prepared assets with enough consistency to extend into resume and website materials.",
    ],
    outcome:
      "The direction supports job applications, freelance outreach, and in-person networking without feeling overdesigned.",
  },
];

export const featuredProjects = projects.slice(0, 3);
