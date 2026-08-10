import ecommerceCover from "../assets/projects/ecommerce-cover.webp";
import ecommerceCheckoutCover from "../assets/projects/ecommerce-checkout-cover.webp";
import ecommerceCartCover from "../assets/projects/ecommerce-cart-cover.webp";
import ecommerceProductPageCover from "../assets/projects/ecommerce-product-page-cover.webp";
import ecommerceOrdersCover from "../assets/projects/ecommerce-orders-cover.webp";
import ecommerceOrderDetailsCover from "../assets/projects/ecommerce-order-details-cover.webp";
import giftCardFrames from "../assets/projects/gift-card-frames.webp";
import snippetFrames from "../assets/projects/snippet-frames.webp";
import partnersCover from "../assets/projects/partners-cover.webp";
import mishaRozovLogo from "../assets/misha-rozov-logo.webp";
import omsDemo from "../assets/oms-demo.mp4";
import omsDemoPoster from "../assets/oms-demo-poster.webp";
import snippetDemo from "../assets/snippet-demo.mp4";
import snippetDemoPoster from "../assets/snippet-demo-poster.webp";
import giftCardDemo from "../assets/gift-card-demo.mp4";
import giftCardDemoPoster from "../assets/gift-card-demo-poster.webp";
import partnersDemo from "../assets/partners-demo.mp4";
import partnersDemoPoster from "../assets/partners-demo-poster.webp";
import pricesCharacteristics from "../assets/projects/internal-tools/prices-characteristics.webp";
import homeBeforeMockup from "../assets/главная до.webp";
import homeAfterMockup from "../assets/главная после.webp";
import searchBeforeMockup from "../assets/поиск до.webp";
import searchAfterMockup from "../assets/поиск после.webp";
import productPageBeforeMockup from "../assets/Страница товара до мокап.webp";
import productPageAfterMockup from "../assets/Страница товара после мокап.webp";
import cartBeforeMockup from "../assets/Корзина до мокап.webp";
import cartAfterMockup from "../assets/Корзина после мокап.webp";
import checkoutBeforeMockup from "../assets/Оформление до мокап.webp";
import checkoutAfterMockup from "../assets/Оформление после мокап.webp";
import pricingPreview from "../assets/projects/pricing-preview.webp";
import freelancePreview from "../assets/projects/freelance/AI Workspace/02/Desktop home.webp";
import bmcPreview from "../assets/projects/bmc-preview.webp";
import { freelanceMedia } from "./freelance-media";

const moduleMetricsPlaceholder = "Metrics will be added later.";

export const caseOrder = [
  { slug: "/projects/ecommerce", label: "E-commerce" },
  { slug: "/projects/internal-tools", label: "Internal Tools" },
];

export const workflowCases = {};

export const mechtaProjects = [
  {
    slug: "/projects/ecommerce",
    title: "E-commerce",
    kind: "Mechta.kz · Redesign",
    period: "2025",
    summary: [
      "I helped a 500k MAU retailer increase purchase conversion by redesigning key funnel steps and optimizing the customer journey",
    ],
    metrics: ["Purchase conversion +NDA%", "Bounce rate -NDA%", "Support requests -NDA%"],
    cover: homeAfterMockup,
    showSummary: true,
    preview: false,
  },
  {
    slug: "/projects/internal-tools",
    title: "Internal Tools",
    kind: "0→1 / internal",
    period: "2025",
    summary: [
      "I designed interfaces for internal teams and employees — helping optimize workflows and reduce the burden on the business",
    ],
    highlights: [
      "Website, store, and marketplace orders — in one window",
      "Supplier service: from scratch to launch in one month",
      "Price-tag printing from shared data — no manual entry",
    ],
    facts: ["OMS", "Partners", "Prices"],
    cover: omsDemo,
    coverPoster: omsDemoPoster,
    coverKind: "video",
    preview: false,
  },
];

export const freelanceProjects = [
  {
    slug: "/projects/freelance",
    title: "Freelance at Habr",
    kind: "Case collection",
    period: "2023 — 2025",
    summary: [
      "A combined case built from seven client projects: Orbi, Xola, CheryX, Vault, Freelance Marketplace, AI Workspace, and AI Image Creation",
    ],
    highlights: ["89% of clients returned", "Completed 27 projects", "Worked with local and international clients"],
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
      "I built mobile apps, websites, and Telegram mini-apps, ran social media for real-estate developers, and assembled landing pages for them",
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
    imageSrc: mishaRozovLogo,
  },
];

export const backlogSections = [];

export const publicCases = {
  ecommerce: {
    slug: "/projects/ecommerce",
    title: "E-commerce",
    heroImage: ecommerceCover,
    summary: [
      "I owned the end-to-end redesign of the Mechta.kz purchase funnel — a retail product with 500k MAU — from identifying the core conversion problems to shipping and measuring the outcomes.",
      "I redesigned the home, search, product page, cart, checkout, and related purchase flows into one connected path to purchase.",
      "I worked independently — and at the start alongside a lead designer — with developers, product managers, and dozens of analysts across four teams, targeting purchase conversion",
    ],
    metrics: ["Purchase conversion +NDA%", "Transitions from cart to checkout +NDA%", "Support requests -NDA%"],
    sections: [
      {
        title: "Home",
        paragraphs: [
          "We updated the home page, improving navigation and surfacing the key sections on the first screen",
        ],
        resultList: [
          "Catalog and search transitions +NDA%",
          "Bounce rate -NDA%",
          "Transitions to the product card +NDA%",
        ],
        media: {
          kind: "before-after",
          beforeSrc: homeBeforeMockup,
          afterSrc: homeAfterMockup,
          beforeLabel: "Before",
          afterLabel: "After",
        },
      },
      {
        title: "Product card",
        paragraphs: [
          "We removed secondary elements and put the emphasis on the product photo and the benefits: a percentage discount and a gift",
        ],
        resultList: [
          "Search to product page conversion +NDA%",
          "Time to first relevant result -NDA%",
          "Clearer link between query, suggestions, and results",
        ],
        media: {
          kind: "before-after",
          beforeSrc: searchBeforeMockup,
          afterSrc: searchAfterMockup,
          beforeLabel: "Before",
          afterLabel: "After",
        },
      },
      {
        title: "Product page",
        paragraphs: [
          "We reduced the emphasis on secondary and less popular sections, and made the call to action more prominent",
        ],
        resultList: [
          "Transitions to the cart +NDA%",
          "Products added to the cart +NDA%",
          "Bounce rate -NDA%",
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
          "In the cart, we simplified adding accessories and working with promo codes, bonuses, and gifts",
        ],
        resultList: [
          "Transitions from cart to checkout +NDA%",
          "Cart abandonment -NDA%",
          "Higher upsell contribution on the path to checkout",
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
          "We updated the interface: simplified and sped up address selection, and made working with dates, statuses, and addresses more convenient",
        ],
        resultList: [
          "Next-step transition +NDA%",
          "Higher completion for delivery and pick-up",
          "Bounce rate -NDA%",
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
        title: "Order details",
        paragraphs: [
          "We standardized the statuses and worked through hundreds of cases, adding post-checkout instructions so customers understand what to expect next and what to do",
        ],
        resultList: [
          "Support requests after purchase -NDA%",
          "Fewer canceled orders, more payments completed after a failed first attempt",
          "One status model across post-purchase screens",
        ],
        media: [
          {
            src: giftCardFrames,
            alt: "Card types in order details: electronic, plastic, and gift for someone else",
          },
          {
            kind: "video",
            src: snippetDemo,
            poster: snippetDemoPoster,
            alt: "Order snippets — demo",
          },
          {
            src: snippetFrames,
            alt: "Order snippets and listing cards",
          },
          {
            kind: "video",
            src: giftCardDemo,
            poster: giftCardDemoPoster,
            alt: "Gift cards — demo",
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
      "My focus was to move the system from a collection of components into a layer that also documented behavior, dependencies, and repeatable product logic",
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
          "The team used to work through a long list of screens. To cover more scenarios, we kept producing more mockups, which increased duplication and made even small changes expensive",
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
          "We started documenting flows, states, and dependencies right next to the screens so that analysts, designers, product managers, and engineers were all looking at the same system instead of different interpretations of it",
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
          "For complex parts of the product, static screens were not enough. I complemented the UI with diagrams and quick prototypes so the team could discuss behavior, not just visuals",
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
          "This work was about moving the design system from a set of components to a system layer that helps teams change and support the product with less duplication",
        ],
      },
    ],
  },
  internalTools: {
    slug: "/projects/internal-tools",
    title: "Internal Tools",
    heroImage: partnersCover,
    summary: [
      "At Mechta.kz I designed internal tools for category managers, store staff, and operations teams — OMS, Partners, and Prices. Before that, supplier offers lived in 1C with duplicates and manual errors, store repricing and price-tag printing were slow, and orders had no shared status-and-role frame.",
    ],
    metrics: [
      "Partners: time to review -NDA%",
      "Prices: printing workflow -NDA%",
    ],
    context: [
      "The job was three working services around those roles: supplier offers through to publishing, in-store price-tag printing, and order handling. I shaped flows and boundaries with analytics, managers, and engineering; for Prices I also checked the work on shift with supervisors and floor consultants",
    ],
    sections: [
      {
        title: "OMS",
        paragraphs: [
          "OMS is an internal order management service for a retailer: every order from the website, stores, and marketplaces in one place. I designed the order list and detail view so an operator can find an order quickly, see its status and error reason, and resolve the issue without jumping between systems",
        ],
        resultList: [
          "Cut time spent finding and reviewing an order: operators work from one screen instead of several systems",
          "Simplified error monitoring: troubled orders and failure reasons surface immediately, without manual digging",
          "Sped up handling of stuck and failed orders — less routine work, more time for real exceptions",
        ],
        media: {
          kind: "video",
          src: omsDemo,
          poster: omsDemoPoster,
          alt: "Mechta OMS — orders and order details",
        },
      },
      {
        title: "Partners",
        paragraphs: [
          "Supplier offer processing for category managers. The process previously lived in 1C: hard to scale, full of catalog duplicates and manual errors. I simplified reviewing incoming offers and sending them for catalog review, validated it with a clickable prototype, and connected it to the product card",
        ],
        resultList: [
          "Under tight deadlines, built the admin fully from design-system components — that made it possible to launch in one month",
          "Reduced errors, duplicates, and empty requests, which freed up time for real work",
          "Moved the process out of 1C — that simplified day-to-day work and employee onboarding",
        ],
        media: {
          kind: "video",
          src: partnersDemo,
          poster: partnersDemoPoster,
          alt: "Mechta Partners — demo",
        },
      },
      {
        title: "Prices",
        paragraphs: [
          "A price-tag printing service for physical stores. Staff used to build and refresh the list themselves in 1C — and still had no single source of truth they could trust. Shelf and checkout drifted apart: sellers spent half the day swapping tags, customers clashed at the register, and employees got fined. We rebuilt the flow around current data: each store sees its own price changes and prints without typing prices by hand",
        ],
        resultList: [
          "Sped up price-tag prep: the store gets an auto revaluation list instead of hunting changes in 1C",
          "Cut tag errors — price and specs pull from shared master data, not manual entry",
          "Added queue control: clear what’s still in progress vs already printed",
          "Validated the MVP in the field with supervisors and floor consultants before launch",
        ],
        media: [
          {
            src: pricingPreview,
            alt: "Mechta Prices — price-tag printing service",
          },
          {
            src: pricesCharacteristics,
            alt: "Mechta Prices — characteristics and priority module",
          },
        ],
      },
      {
        title: "Summary",
        paragraphs: [
          "One approach across all three: structure the flow and roles first, then deepen the interface. Internal Tools is about working services around the process — not polishing screens",
        ],
      },
    ],
  },
  freelance: {
    slug: "/projects/freelance",
    title: "Freelance at Habr",
    heroImage: freelancePreview,
    summary: [
      "A combined case from seven client projects: Orbi, Xola, CheryX, Vault, Freelance Marketplace, AI Workspace, and AI Image Creation.",
      "This period sharpened fast context switching, independent decision-making, and the ability to turn a rough brief into a review-ready product direction.",
    ],
    metrics: ["89% repeat clients", "27 projects delivered", "3+ years of work"],
    context: [
      "Freelance meant much shorter cycles and much less infrastructure than a large product team. I had to enter new domains quickly, define the product frame, design the interface, and move the work to a state that clients could discuss, approve, and take forward.",
      "The value of this period was not one domain in particular, but the repetition of the same skill across very different products: rapid onboarding, clear structuring, and independent delivery",
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
          "Freelance was the period where I learned to run projects independently, keep momentum, and move from a client request to a workable product structure. There was less infrastructure than in a large team and more direct responsibility for the shape of the solution",
        ],
      },
      {
        title: "Orbi",
        paragraphs: [
          "A mobile app built around a proprietary indicator for traders. The key challenge was to make a dense trading interface manageable on a small screen without slowing down access to critical actions",
        ],
        media: freelanceMedia.Orbi,
      },
      {
        title: "Xola",
        paragraphs: [
          "Built during the first wave of GPT products, when many projects were just wrappers around the model. The goal was not only to add AI, but to create a usable product around recipes, cooking, and adaptive instructions",
        ],
        media: freelanceMedia.Xola,
      },
      {
        title: "CheryX",
        paragraphs: [
          "A fintech concept around paying with crypto directly on POS terminals. It needed to feel realistic and understandable in an everyday offline scenario rather than as a speculative concept",
        ],
        media: freelanceMedia.CheryX,
      },
      {
        title: "Vault",
        paragraphs: [
          "A utility app for app stores: VPN, ad blocking, password leak checks, and speed testing aimed at a broad audience and subscription monetization",
        ],
        media: freelanceMedia.Vault,
      },
      {
        title: "Freelance Marketplace",
        paragraphs: [
          "A marketplace concept for IT specialists focused on profiles, matching, and hiring-related workflows. The goal was to shape a product direction that felt clear both for specialists and for teams searching for talent",
        ],
        media: freelanceMedia.OOX,
      },
      {
        title: "AI Workspace",
        paragraphs: [
          "A collaboration workspace concept with an AI agent inside the product flow. The task was to make the assistant feel embedded into teamwork rather than added as a separate gimmick",
        ],
        media: freelanceMedia["AI Workspace"],
      },
      {
        title: "AI Image Creation",
        paragraphs: [
          "A lightweight concept around generating images with AI. The focus here was not technical depth, but turning a generic generation flow into a cleaner and more presentable product experience",
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
      "Alongside websites, visual support for social channels had to stay consistent with the site direction and fit the rhythm of regular brand communication",
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
          "The main part of the work was client websites: designing pages, assembling them in no-code / low-code tools, and bringing them to a final launch-ready state",
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
          "Alongside websites, we prepared visual materials for client social channels. My part of the work covered promotions, announcements, tariff posts, stories, and other formats that supported regular brand activity, mostly for large developers and real-estate businesses",
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
    "Product designer with 3+ years of experience in e-commerce, B2B, retail, AI, and internal tools. I design web and mobile products, build design systems, and ship solutions that move metrics",
  ],
  experience: [
    {
      company: "Mechta.kz",
      period: "July 2025 — present",
      role: "Product Designer",
      format: "full-time · on-site",
      summary:
        "Kazakhstan retailer with a 500k MAU online store. I led design for the purchase funnel and internal tools",
      responsibilities: [
        "Helped a 500k MAU retailer grow purchase conversion by redesigning key funnel steps and improving the user journey",
        "Designed interfaces for internal teams and employees, optimizing workflows and reducing the load on the business",
        "Validated decisions with clickable prototypes, presentations, and design reviews",
        "Ran field interviews and usability tests for internal scenarios",
        "Grew the design system and documentation to speed up releases",
        "Taught two designers vibe-coding prototyping, which sped up approvals and cut design-review errors",
      ],
      results: [
        "Purchase conversion +NDA%",
        "Bounce rate -NDA%",
        "Support requests -NDA%",
        "Shipped internal products: OMS, Partners, Prices",
        "Hired and onboarded a designer",
      ],
    },
    {
      company: "Freelance",
      period: "July 2023 — July 2025",
      role: "Product Designer",
      format: "project-based · remote",
      summary:
        "Independent work on client products across mobile, AI, fintech, and utilities",
      responsibilities: [
        "Built product structure in new domains without long onboarding",
        "Designed wireframes, visual concepts, and final interfaces for specific scenarios",
        "Packaged products with identity and presentation materials for development or publication",
        "Managed scope, timelines, and client communication independently",
      ],
      results: [
        "Completed 27 projects; 89% of clients returned",
        "Worked with local and international clients across trading, AI, crypto, and utility apps",
      ],
    },
    {
      company: "BMC Group",
      period: "February 2024 — August 2024",
      role: "Designer",
      format: "project-based · hybrid",
      summary:
        "Agency with short cycles: client websites, mini-apps, and launch delivery through no-code / low-code",
      responsibilities: [
        "Built mobile apps, websites, and Telegram mini-apps",
        "Ran social media for real-estate developers and assembled landing pages for them",
        "Assembled pages in no-code / low-code tools for faster release",
        "Brought projects to approval and publishing",
      ],
      results: [
        "Took client websites from mockup to release",
        "Shortened time to launch through no-code / low-code assembly",
      ],
    },
  ],
};
