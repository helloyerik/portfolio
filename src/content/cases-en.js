import ecommerceCover from "../assets/projects/ecommerce-cover.png";
import ecommerceCheckoutCover from "../assets/projects/ecommerce-checkout-cover.png";
import ecommerceCartCover from "../assets/projects/ecommerce-cart-cover.png";
import ecommerceProductPageCover from "../assets/projects/ecommerce-product-page-cover.png";
import ecommerceOrdersCover from "../assets/projects/ecommerce-orders-cover.png";
import ecommerceOrderDetailsCover from "../assets/projects/ecommerce-order-details-cover.png";
import giftCardFrames from "../assets/projects/gift-card-frames.png";
import snippetFrames from "../assets/projects/snippet-frames.png";
import partnersCover from "../assets/projects/partners-cover.png";
import partnersDrawer from "../assets/projects/partners-drawer.png";
import productPageBeforeMockup from "../assets/Страница товара до мокап.png";
import productPageAfterMockup from "../assets/Страница товара после мокап.png";
import cartBeforeMockup from "../assets/Корзина до мокап.png";
import cartAfterMockup from "../assets/Корзина после мокап.png";
import checkoutBeforeMockup from "../assets/Оформление до мокап.png";
import checkoutAfterMockup from "../assets/Оформление после мокап.png";
import pricingPreview from "../assets/projects/pricing-preview.jpg";
import corporatePreview from "../assets/projects/corporate-preview.png";
import freelancePreview from "../assets/projects/freelance-preview.jpg";
import bmcPreview from "../assets/projects/bmc-preview.jpg";
import { freelanceMedia } from "./freelance-media";

const moduleMetricsPlaceholder = "Metrics will be added later.";

export const caseOrder = [
  { slug: "/projects/ecommerce", label: "E-commerce" },
  { slug: "/projects/internal-tools", label: "Internal Tools" },
  { slug: "/projects/freelance", label: "Freelance" },
];

export const workflowCases = {};

export const mechtaProjects = [
  {
    slug: "/projects/ecommerce",
    title: "E-commerce",
    kind: "Mechta.kz · Redesign",
    period: "2025",
    summary: [
      "Redesign of the Mechta.kz purchase funnel for a 500k MAU retail product: product page, cart, checkout, and post-purchase.",
    ],
    metrics: ["Purchase conversion +NDA%", "Cart → checkout +NDA%", "Support requests -NDA%"],
    cover: ecommerceCover,
    showSummary: true,
    preview: false,
  },
  {
    slug: "/projects/internal-tools",
    title: "Internal Tools",
    kind: "0→1 / internal",
    period: "2025",
    summary: [
      "Partners, Prices, and the corporate portal — Mechta internal tools for supplier flow, price-tag printing, and documents with eGov.",
    ],
    highlights: [
      "Partners: MVP in one month",
      "Prices: faster price-tag printing",
      "Portal: documents and eGov",
    ],
    facts: ["Partners", "Prices", "Corporate portal"],
    cover: partnersCover,
    preview: false,
  },
];

export const freelanceProjects = [
  {
    slug: "/projects/freelance",
    title: "Freelance",
    kind: "Case collection",
    period: "2023 — 2025",
    summary: [
      "A combined case built from seven client projects: Orbi, Xola, CheryX, Vault, Freelance Marketplace, AI Workspace, and AI Image Creation.",
    ],
    highlights: ["89% of clients returned", "Completed 27 projects", "fast cycle from brief to deliverable"],
    facts: ["7 projects", "Mobile / AI / Fintech / Utilities"],
    cover: freelancePreview,
    preview: false,
  },
];

export const bmcProjects = [
  {
    slug: "/projects/bmc-group",
    title: "BMC Group",
    kind: "Agency experience",
    period: "2024",
    summary: [
      "Client websites, no-code / low-code delivery, and visual support for Instagram in a fast agency environment.",
    ],
    highlights: ["client websites", "no-code / low-code", "social support for real-estate brands"],
    facts: ["No-code / low-code", "Instagram"],
    cover: bmcPreview,
    preview: false,
  },
];

export const certificates = [
  {
    title: "Superpowered from Misha Rozov",
    period: "March — June 2026",
    href: "https://drive.google.com/file/d/1NoGFtc-DFuN5Mz2C519muoHuBWWQHEuE/view?usp=drive_link",
  },
];

export const backlogSections = [];

export const publicCases = {
  ecommerce: {
    slug: "/projects/ecommerce",
    title: "E-commerce",
    heroImage: ecommerceCover,
    summary: [
      "Redesign of the Mechta.kz purchase funnel for a 500k MAU retail product: product page, cart, checkout, and post-purchase. Worked independently, and at the start also with a lead designer, together with product, analytics, and engineering. Target metric for the funnel — purchase conversion; post-purchase also aimed at fewer support requests.",
    ],
    metrics: ["Purchase conversion +NDA%", "Cart → checkout +NDA%", "Support requests -NDA%"],
    sections: [
      {
        title: "Product page",
        paragraphs: [
          "The product page was the most crowded step of the funnel: stock, fulfillment, discounts, financing, and the main CTA competed on the first screen. We rebuilt the structure so the key decision path reads faster — without cutting SEO-critical content.",
        ],
        resultList: [
          "Product page conversion +NDA%",
          "Time to primary CTA -NDA%",
          "Clearer path from stock and fulfillment to the main CTA",
        ],
        media: {
          kind: "before-after",
          beforeSrc: productPageBeforeMockup,
          afterSrc: productPageAfterMockup,
          beforeLabel: "Before",
          afterLabel: "After",
        },
      },
      {
        title: "Cart",
        paragraphs: [
          "Rebuilt the cart as a conversion module: fewer secondary elements, a sticky path to checkout, and relevant upsell (gifts, bonuses, accessories) without noise.",
        ],
        resultList: [
          "Cart → checkout +NDA%",
          "Cart exits -NDA%",
          "Stronger upsell without cluttering the main path",
        ],
        media: {
          kind: "before-after",
          beforeSrc: cartBeforeMockup,
          afterSrc: cartAfterMockup,
          beforeLabel: "Before",
          afterLabel: "After",
        },
      },
      {
        title: "Checkout",
        paragraphs: [
          "Checkout depended on delivery, pick-up, bonuses, promo codes, forms, and special cases like trade-in. We separated states and copy by fulfillment method so restrictions stopped breaking the main path.",
        ],
        resultList: [
          "Next-step transition +NDA%",
          "More stable delivery and pick-up completion",
          "Special rules stopped breaking the main checkout path",
        ],
        media: {
          kind: "before-after",
          beforeSrc: checkoutBeforeMockup,
          afterSrc: checkoutAfterMockup,
          beforeLabel: "Before",
          afterLabel: "After",
        },
      },
      {
        title: "Post-purchase",
        paragraphs: [
          "Post-purchase covers both the order list and order details. Statuses, promotions, line items, pickup timing, and service dependencies all met here. We standardized statuses, connected list → details, and rebuilt the flow so users understand what happened and what to do next.",
        ],
        resultList: [
          "Support requests after purchase -NDA%",
          "Clearer status and next-step reading in list and details",
          "One status model across post-purchase screens",
        ],
        media: [
          {
            src: giftCardFrames,
            alt: "Card types in order details: electronic, plastic, and gift for someone else",
          },
          {
            src: snippetFrames,
            alt: "Order snippets and listing cards",
          },
        ],
      },
    ],
  },
  designSystem: {
    slug: "/projects/design-system",
    title: "Design system",
    heroImage: ecommerceCover,
    summary: [
      "A system layer for Mechta.kz that went beyond a component library and started working as shared product infrastructure for design, analytics, and engineering.",
      "The core shift was moving from isolated screen files to a clearer description of flows, states, dependencies, and reusable patterns.",
    ],
    metrics: ["Launch cycles -NDA%", "Duplicate screens -NDA%", "Support cost -NDA%"],
    context: [
      "The design system had value as a UI library, but a lot of work still lived in disconnected mockups. As the product grew, that increased duplication, manual updates, and interpretation gaps between design, analytics, and engineering.",
      "My focus was to move the system from a collection of components into a layer that also documented behavior, dependencies, and repeatable product logic.",
    ],
    goals: [
      "reduce duplicate mockups and repeated manual updates",
      "speed up launches through reusable patterns and templates",
      "make flows, states, and dependencies easier to understand across teams",
      "lower the cost of support and future changes",
    ],
    actions: [
      "expanded components and patterns around real product scenarios instead of isolated screens",
      "moved behavior, states, and dependencies into structured documentation next to the UI",
      "used diagrams and quick prototypes for scenario discussions before detailed design",
      "aligned the system with analysts, product managers, engineers, and the design lead",
      "built a more practical source of truth for launches, updates, and implementation handoff",
    ],
    results: [
      "Fewer duplicated mockups through more systematic scenario and state documentation.",
      "Faster launches through components, templates, and repeatable patterns.",
      "Lower support and change cost by removing unnecessary manual fixes across many screens.",
      "Improved clarity for analytics and engineering through a single layer of documentation and diagrams.",
    ],
    tasks: [
      "Expanded components and patterns for real product scenarios",
      "Moved logic out of isolated screens into documentation with states and dependencies",
      "Created diagrams and quick prototypes to discuss logic before implementation",
      "Documented interface behavior next to the UI itself",
      "Aligned the system with analytics, product, and engineering",
    ],
    sections: [
      {
        title: "From screen inventory to a system",
        paragraphs: [
          "The team used to work through a long list of screens. To cover more scenarios, we kept producing more mockups, which increased duplication and made even small changes expensive.",
        ],
        problems: [
          "one scenario could drift across several mockups",
          "almost any change required manual fixes across many files",
          "without an extra layer it was hard to see the system as a whole",
        ],
        list: ["connected screens, flows, and states into a more systematic layer"],
        media: "Module: current vs. target documentation approach",
      },
      {
        title: "Single source of truth",
        paragraphs: [
          "We started documenting flows, states, and dependencies right next to the screens so that analysts, designers, product managers, and engineers were all looking at the same system instead of different interpretations of it.",
        ],
        list: [
          "documentation described not only the UI but the system behavior behind it",
          "diagrams helped the team discuss dependencies without multiplying screens",
          "the team aligned much faster on how a scenario should work",
        ],
        media: "Module: single source of truth",
      },
      {
        title: "Diagrams and quick prototypes",
        paragraphs: [
          "For complex parts of the product, static screens were not enough. I complemented the UI with diagrams and quick prototypes so the team could discuss behavior, not just visuals.",
        ],
        list: [
          "used diagrams to capture dependencies and state transitions",
          "tested debatable scenarios with quick prototypes before detailed design",
          "reduced ambiguity before implementation started",
        ],
        media: "Module: diagrams and quick prototypes",
      },
      {
        title: "Summary",
        paragraphs: [
          "This work was about moving the design system from a set of components to a system layer that helps teams change and support the product with less duplication.",
        ],
      },
      {
        title: "Personal takeaways",
        list: [
          "treating documentation as an active product tool rather than an archive",
          "connecting components, flows, and implementation inside one system layer",
          "reducing duplication through a more structured way of describing interfaces",
        ],
      },
    ],
  },
  internalTools: {
    slug: "/projects/internal-tools",
    title: "Internal Tools",
    heroImage: partnersCover,
    summary: [
      "Mechta.kz internal tools: Partners, Prices, and the corporate portal. Three products about processes, roles, and team speed — from suppliers and price tags to documents with eGov.",
    ],
    metrics: [
      "Partners: time to review -NDA%",
      "Prices: printing workflow -NDA%",
      "Documents: processing time -NDA%",
    ],
    context: [
      "Internal work at Mechta spanned three 0→1 products: supplier offer processing, offline price-tag workflows, and a modular corporate portal with eGov signing.",
    ],
    goals: [
      "turn messy internal processes into shippable MVP workflows",
      "keep role, status, and module boundaries clear under real constraints",
      "validate decisions through prototypes and field checks before launch",
    ],
    actions: [
      "mapped Partners as an inbox-like review → prioritization → publishing flow",
      "validated Prices with supervisors and floor consultants in real store scenarios",
      "structured the corporate portal around employees/org data and document routes",
    ],
    results: [
      "Launched Partners MVP in one month and reduced duplicates and manual errors.",
      "Sped up price-tag printing and cut material waste and print errors in Prices.",
      "Built a modular corporate portal for employees, org structure, documents, and eGov.",
    ],
    sections: [
      {
        title: "Partners",
        paragraphs: [
          "An internal service for processing supplier and partner offers. Before that, the process lived in 1C — hard to scale and full of catalog duplicates.",
        ],
        problems: [
          "incoming offers depended too heavily on manual operations",
          "duplicates polluted the catalog and wasted manager time",
          "the team needed a realistic MVP instead of a heavy redesign",
        ],
        list: [
          "split the work into review, prioritization, and publishing-preparation modules",
          "validated the flow through a clickable prototype before implementation",
          "connected internal processing to product-card preparation and catalog publishing",
        ],
        media: {
          src: partnersDrawer,
          alt: "Publishing preparation module",
        },
        mediaPlacement: "after-problems",
      },
      {
        title: "Prices",
        paragraphs: [
          "A service for faster repricing and label replacement in physical stores, reducing reliance on legacy tools.",
          "Field interviews and usability testing with supervisors and floor consultants helped validate the MVP in a real work context before launch.",
        ],
        list: [
          "sped up the price-tag printing workflow",
          "reduced material waste during printing",
          "lowered printing error rates",
        ],
        media: {
          src: pricingPreview,
          alt: "Mechta Prices — price-tag printing service",
        },
      },
      {
        title: "Corporate portal",
        paragraphs: [
          "A modular portal for employees, org structure, and documents with approval and eGov signing. Built under an incomplete brief and a tight deadline.",
        ],
        problems: [
          "no full technical brief at the start",
          "role boundaries and actions had to be defined quickly",
          "module prioritization was critical under limited time",
        ],
        list: [
          "designed the admin layer for employees, departments, and org structure",
          "mapped role-based document statuses and actions",
          "prepared the interface for the eGov signing flow",
        ],
        media: {
          src: corporatePreview,
          alt: "Mechta corporate portal",
        },
      },
      {
        title: "Personal takeaways",
        list: [
          "designing an internal tool as a role-based process, not a pile of screens",
          "holding MVP scope and modularity with incomplete input",
          "validating decisions through prototypes and field scenarios before launch",
        ],
      },
    ],
  },
  freelance: {
    slug: "/projects/freelance",
    title: "Freelance",
    heroImage: freelancePreview,
    summary: [
      "A combined case from seven client projects: Orbi, Xola, CheryX, Vault, Freelance Marketplace, AI Workspace, and AI Image Creation.",
      "This period sharpened fast context switching, independent decision-making, and the ability to turn a rough brief into a review-ready product direction.",
    ],
    metrics: ["89% repeat clients", "27 projects delivered", "3+ years of work"],
    context: [
      "Freelance meant much shorter cycles and much less infrastructure than a large product team. I had to enter new domains quickly, define the product frame, design the interface, and move the work to a state that clients could discuss, approve, and take forward.",
      "The value of this period was not one domain in particular, but the repetition of the same skill across very different products: rapid onboarding, clear structuring, and independent delivery.",
    ],
    goals: [
      "turn raw client requests into clear product structures",
      "move quickly across new domains without long onboarding",
      "ship interfaces and concepts that were ready for review or development",
      "keep quality stable while managing scope, timing, and communication independently",
    ],
    actions: [
      "framed products through competitor scans, interviews, and hypotheses",
      "validated key scenarios with wireframes and clickable prototypes",
      "designed UI, states, and brand direction around specific flows",
      "prepared assets for development, pitching, or store publication",
      "managed client scope, planning, and the next step without a larger delivery layer",
    ],
    results: [
      "Designed several client products from scratch, from structure and wireframes to polished UI.",
      "Worked across mobile products, AI, fintech, utility apps, and brand packaging.",
      "Prepared interfaces and concepts that clients could bring straight into development or the next iteration.",
      "Built a reliable freelance practice around entering a context quickly, making decisions, and shipping work ready for review.",
      "Handled the client side of the job: timelines, pricing, planning, and clear expectations.",
    ],
    tasks: [
      "Framed products through competitor scans, interviews, and hypotheses",
      "Validated scenarios through wireframes and clickable prototypes",
      "Designed UI and states around specific user flows",
      "Packaged products into visual systems and brand direction",
      "Prepared assets for development, pitching, or store publication",
      "Managed client scope, timelines, and the next step",
    ],
    sections: [
      {
        title: "Context",
        paragraphs: [
          "Freelance was the period where I learned to run projects independently, keep momentum, and move from a client request to a workable product structure. There was less infrastructure than in a large team and more direct responsibility for the shape of the solution.",
        ],
      },
      {
        title: "Orbi",
        paragraphs: [
          "A mobile app built around a proprietary indicator for traders. The key challenge was to make a dense trading interface manageable on a small screen without slowing down access to critical actions.",
        ],
        problems: [
          "high density of data and actions on a small screen",
          "critical actions had to stay fast and thumb-friendly",
          "the interface could not be simplified to the point where it lost meaning for traders",
        ],
        list: [
          "interviewed traders and mapped hypotheses",
          "structured the mobile home screen and algorithmic order flows",
          "worked through loading, error, success, and helper states",
        ],
        media: freelanceMedia.Orbi,
      },
      {
        title: "Xola",
        paragraphs: [
          "Built during the first wave of GPT products, when many projects were just wrappers around the model. The goal was not only to add AI, but to create a usable product around recipes, cooking, and adaptive instructions.",
        ],
        problems: [
          "the market was crowded with similar GPT wrappers without clear use cases",
          "recipe search, cooking, and the AI layer had to work as one flow",
          "the model alone did not create value without a clear product structure",
        ],
        list: [
          "used Job Stories to frame the product",
          "built wireframes, product structure, and the visual layer",
          "turned the concept into a more coherent cooking product",
        ],
        media: freelanceMedia.Xola,
      },
      {
        title: "CheryX",
        paragraphs: [
          "A fintech concept around paying with crypto directly on POS terminals. It needed to feel realistic and understandable in an everyday offline scenario rather than as a speculative concept.",
        ],
        problems: [
          "an unusual crypto-payment model had to feel clear in a familiar offline context",
          "the interface had to feel realistic, not speculative",
          "the service value had to be communicated through the flow, not the complexity of the technology",
        ],
        list: [
          "started with competitor analysis and product structure",
          "moved into wireframes, brand direction, and the main payment flow",
          "shaped the product around convenience rather than technical complexity",
        ],
        media: freelanceMedia.CheryX,
      },
      {
        title: "Vault",
        paragraphs: [
          "A utility app for app stores: VPN, ad blocking, password leak checks, and speed testing aimed at a broad audience and subscription monetization.",
        ],
        problems: [
          "the product package had to work for store publication from day one",
          "the interface and packaging needed to fit several markets",
          "utility features, subscription logic, and the store presence had to support each other",
        ],
        list: [
          "designed the wireframes, logo, visual concept, and store materials",
          "focused on cover assets and localization",
          "prepared the product package for publication across markets",
        ],
        media: freelanceMedia.Vault,
      },
      {
        title: "Freelance Marketplace",
        paragraphs: [
          "A marketplace concept for IT specialists focused on profiles, matching, and hiring-related workflows. The goal was to shape a product direction that felt clear both for specialists and for teams searching for talent.",
        ],
        list: [
          "outlined the main marketplace structure and browsing logic",
          "worked through profile, list, and matching-related screens",
          "framed the product as a more usable hiring flow rather than just a directory of specialists",
        ],
        media: freelanceMedia.OOX,
      },
      {
        title: "AI Workspace",
        paragraphs: [
          "A collaboration workspace concept with an AI agent inside the product flow. The task was to make the assistant feel embedded into teamwork rather than added as a separate gimmick.",
        ],
        list: [
          "structured the workspace around collaboration and task context",
          "explored how an AI agent could support navigation and decisions inside the flow",
          "turned the concept into a more coherent product scenario with clearer screens and modules",
        ],
        media: freelanceMedia["AI Workspace"],
      },
      {
        title: "AI Image Creation",
        paragraphs: [
          "A lightweight concept around generating images with AI. The focus here was not technical depth, but turning a generic generation flow into a cleaner and more presentable product experience.",
        ],
        list: [
          "framed the basic generation flow and output states",
          "designed a visual direction around prompt input and result review",
          "packaged the concept into screens that were easier to discuss and iterate with the client",
        ],
        media: freelanceMedia["Genera AI"],
      },
    ],
  },
  bmc: {
    slug: "/projects/bmc-group",
    title: "BMC Group",
    heroImage: bmcPreview,
    summary: [
      "Agency work around client websites, no-code / low-code delivery, and visual support for social channels.",
      "The key value of this experience was launch proximity: work had to move from design into an assembled deliverable quickly.",
    ],
    metrics: ["Delivery cycle -NDA%", "Client approvals +NDA%"],
    context: [
      "BMC Group was a fast agency environment with short cycles, approvals, and launch pressure. The work was not finished at the mockup stage: pages had to be assembled, adapted to content, and brought to a state that clients could actually publish.",
      "Alongside websites, visual support for social channels had to stay consistent with the site direction and fit the rhythm of regular brand communication.",
    ],
    goals: [
      "shorten the path from design to launch-ready pages",
      "adapt quickly to client content and approval constraints",
      "keep websites and social materials visually coherent",
      "support launch delivery through no-code / low-code assembly",
    ],
    actions: [
      "designed pages around client goals, content, and approval constraints",
      "assembled and adapted the pages in no-code / low-code tools",
      "prepared visual materials for promotions, announcements, and regular social activity",
      "brought the work to approval and publication rather than stopping at mockups",
    ],
    results: [
      "Took client websites from mockup to assembled release-ready pages in a no-code / low-code environment.",
      "Shortened the path from design to launch through direct page assembly.",
      "Created Instagram materials while keeping a consistent visual language between the site and social communication.",
    ],
    tasks: [
      "Designed pages around client goals and content",
      "Built pages in no-code / low-code tools for faster launch",
      "Supported the brand layer in social and promo materials",
      "Prepared projects for approval and publishing",
    ],
    sections: [
      {
        title: "No-code / low-code websites",
        paragraphs: [
          "The main part of the work was client websites: designing pages, assembling them in no-code / low-code tools, and bringing them to a final launch-ready state.",
        ],
        problems: [
          "the project had to go beyond design into an assembled deliverable",
          "there was little time for approvals and revisions in the agency rhythm",
          "the solution had to adapt quickly to content and client constraints",
        ],
        list: [
          "designed pages around client needs",
          "assembled and adapted pages in a no-code / low-code builder",
          "prepared projects for approval and publication",
        ],
      },
      {
        title: "Instagram and visual support",
        paragraphs: [
          "Alongside websites, we prepared visual materials for client social channels. My part of the work covered promotions, announcements, tariff posts, stories, and other formats that supported regular brand activity, mostly for large developers and real-estate businesses.",
        ],
        list: [
          "designed promotions, announcements, and tariff-based visuals",
          "created story and feed materials for regular brand activity",
          "adapted the visual system across different social formats",
          "kept the communication style consistent for studio clients",
        ],
      },
    ],
  },
};

export const cvData = {
  title: "Yerik",
  role: "Product Designer",
  intro: [
    "Product designer with X+ years of experience across e-commerce, B2B, retail, AI, and internal tools. I design web and mobile products, systematize interfaces, evolve design systems, and work on solutions that influence metrics, shipping speed, and implementation quality.",
  ],
  experience: [
    {
      company: "Mechta.kz",
      period: "July 2025 — present",
      role: "Product Designer",
      format: "full-time · on-site",
      summary:
        "A Kazakhstan retailer where I worked on the customer funnel of the e-commerce product and on internal tools.",
      projects: ["E-commerce", "Design system", "Internal Tools"],
      responsibilities: [
        "rebuilt web and mobile flows to improve conversion and reduce errors",
        "improved customer and internal workflows under real business constraints",
        "validated solutions through prototypes, presentations, and design reviews",
        "ran field interviews and usability tests for internal scenarios",
        "expanded the design system and documentation to speed up shipping and support",
      ],
      results: [
        "improved purchase conversion by +NDA% in the e-commerce flow",
        "increased the transition from cart to checkout by +NDA%",
        "reduced call-center requests by -NDA%",
        "expanded the design system to accelerate new releases and support",
        "designed internal products for supplier flow, documents and eGov, and price labels",
        "validated internal flows with supervisors and floor consultants through offline interviews and usability tests",
        "participated in hiring and onboarding a designer into the team",
      ],
    },
    {
      company: "Freelance",
      period: "July 2023 — July 2025",
      role: "Product Designer",
      format: "project-based · remote",
      summary:
        "Independent work on client products across mobile flows, AI, fintech, and utility services.",
      projects: ["Orbi", "Xola", "CheryX", "Vault", "Freelance Marketplace", "AI Workspace", "AI Image Creation"],
      responsibilities: [
        "built product structure in new domains without long onboarding",
        "created wireframes, visual concepts, and final interfaces for specific scenarios",
        "packaged products through identity and presentation materials for development or publication",
        "managed tasks, timelines, and client communication independently",
      ],
      results: [
        "designed several client products from scratch",
        "worked across trading, AI, crypto payments, and utility apps",
        "built a solid independent practice around project ownership and client communication",
      ],
    },
    {
      company: "BMC Group",
      period: "February 2024 — August 2024",
      role: "Designer",
      format: "project-based · hybrid",
      summary:
        "An agency environment with short cycles: client websites, visual materials, and launch delivery through no-code / low-code tools.",
      projects: ["Client websites", "Instagram and visual support"],
      responsibilities: [
        "designed landing pages and client-facing flows",
        "assembled pages in no-code / low-code tools for faster release",
        "prepared social and promotional materials for clients",
        "brought projects to the approval and publishing stage",
      ],
      results: [
        "took client websites from mockup to release",
        "shortened time to launch through direct no-code / low-code assembly",
        "kept a consistent visual layer between websites and social media",
      ],
    },
  ],
};
