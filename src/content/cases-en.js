import ecommerceCover from "../assets/projects/ecommerce-cover.png";
import partnersCover from "../assets/projects/partners-cover.png";
import partnersDrawer from "../assets/projects/partners-drawer.png";
import productPageBeforeMockup from "../assets/Страница товара до мокап.png";
import productPageAfterMockup from "../assets/Страница товара после мокап.png";
import pricingPreview from "../assets/projects/pricing-preview.jpg";
import corporatePreview from "../assets/projects/corporate-preview.png";
import freelancePreview from "../assets/projects/freelance-preview.jpg";
import bmcPreview from "../assets/projects/bmc-preview.jpg";
import { freelanceMedia } from "./freelance-media";

export const caseOrder = [
  { slug: "/projects/ecommerce-redesign", label: "E-commerce" },
  { slug: "/projects/design-system", label: "Design system" },
  { slug: "/projects/partners", label: "Partner offers" },
  { slug: "/projects/corporate-portal", label: "Corporate portal" },
  { slug: "/projects/freelance", label: "Freelance" },
  { slug: "/projects/bmc-group", label: "BMC Group" },
];

export const workflowCases = {};

export const mechtaProjects = [
  {
    slug: "/projects/ecommerce-redesign",
    title: "E-commerce",
    kind: "Redesign and growth",
    period: "2025 — X",
    summary: [
      "Redesign and optimization of the funnel: product page, cart, checkout, order details, and order history.",
      "Warranty services and upsell scenarios were handled as a dedicated layer inside the project.",
    ],
    highlights: ["+NDA% purchase conversion", "+NDA% checkout starts", "-NDA% support requests"],
    facts: ["+NDA% conversion", "+NDA% to checkout", "-NDA% support requests"],
    cover: ecommerceCover,
    preview: false,
  },
  {
    slug: "/projects/design-system",
    title: "Design system",
    kind: "System evolution",
    period: "2025 — X",
    summary: [
      "Components, patterns, and documentation as one source of truth for design, analytics, and engineering.",
      "We moved from a list of screens to a more structured description of flows, states, and product logic.",
    ],
    highlights: ["Faster launches", "Less custom work and fewer duplicates", "Lower support cost"],
    facts: ["Fewer duplicates", "Faster change delivery"],
    cover: ecommerceCover,
    hiddenOnHome: true,
    preview: false,
  },
  {
    slug: "/projects/partners",
    title: "Partner offers",
    kind: "0→1 / MVP",
    period: "2025",
    summary: [
      "An internal tool for processing supplier and partner offers. The focus was structure, speed for managers, and a scalable process.",
    ],
    highlights: ["Launched the MVP in one month", "Reduced errors in product card creation", "Third highlight to be defined later"],
    facts: ["Reduced product card creation errors", "Structured flow"],
    cover: partnersCover,
    preview: false,
  },
  {
    slug: "/projects/corporate-portal",
    title: "Corporate portal",
    kind: "0→1 / internal product",
    period: "2025",
    summary: [
      "An internal portal for employees, org structure, and documents with electronic signing through eGov.",
    ],
    highlights: [
      "Accelerated the document signing process",
      "Reduced document processing costs",
      "Reduced HR support tickets by NDAx",
      "The fourth point I will define later",
    ],
    facts: ["Employees and org structure", "Documents and eGov"],
    cover: corporatePreview,
    hiddenOnHome: true,
    preview: false,
  },
  {
    slug: "",
    title: "Price labels",
    kind: "0→1 / internal product",
    period: "2025",
    summary: [
      "A service for faster repricing and label replacement in physical stores, reducing reliance on legacy tools.",
      "Field interviews and usability testing with supervisors and floor consultants helped validate the MVP in a real work context before launch.",
    ],
    highlights: [
      "Under NDA, improved the price-tag printing workflow by making it faster",
      "Reduced material waste during printing",
      "Lowered printing error rates",
    ],
    facts: ["Faster price-tag printing workflow", "Reduced material waste", "Lowered printing error rates"],
    cover: pricingPreview,
    preview: true,
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
    highlights: ["7 projects", "mobile / AI / fintech", "fast cycle from brief to deliverable"],
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

export const backlogSections = [];

export const publicCases = {
  ecommerce: {
    slug: "/projects/ecommerce-redesign",
    title: "E-commerce",
    heroImage: ecommerceCover,
    summary: [
      "A core redesign of the Mechta.kz shopping funnel for a 500k MAU retail product: product page, cart, checkout, order details, and order history.",
      "The work combined conversion optimization, legacy cleanup, and design-system rollout so the team could improve the funnel without multiplying one-off UI logic.",
    ],
    context: [
      "The funnel had grown through multiple releases, so key screens were overloaded with banners, secondary promos, trade-in offers, financing blocks, and state-specific logic. On the product page especially, core decisions such as stock, delivery, credit, and the main CTA had to compete for the same attention area.",
      "This was not a solo redesign. I worked in close collaboration with a lead designer and a cross-functional team of analysts, product managers, and frontend/backend engineers. A large part of the job was reducing ambiguity: mapping dependencies, reviewing scenarios in pair, and turning a messy set of requirements into a cleaner product structure.",
    ],
    goals: [
      "make the main funnel actions easier to notice and faster to complete",
      "reduce clutter on the product page without losing critical sales, delivery, credit, or SEO information",
      "replace deprecated UI patterns with a cleaner and more scalable design-system base",
      "lower support and operational handwork by making states, statuses, and next steps easier to understand",
    ],
    actions: [
      "audited the funnel through analytics, competitor patterns, heatmaps, and session recordings",
      "prioritized the most conversion-sensitive modules first: product page, cart, checkout, order details, and order list",
      "removed or toned down low-performing and distracting elements such as oversized promo areas and legacy upsell treatments",
      "made the main CTAs more prominent and moved secondary actions away from the primary decision zone",
      "reorganized delivery, financing, bonuses, discount clarifications, and stock-dependent states into clearer blocks",
      "worked with the lead designer, analysts, and engineers through recurring reviews, prototypes, and presentations to align decisions before implementation",
      "expanded the design system and documentation layer to reduce hardcoded inconsistencies and simplify future launches",
    ],
    results: [
      "Growth in the number of products with connected delivery — NDA%",
      "Growth in the number of successful deals with delivery — NDA%",
      "Growth in successful deals with delivery — NDA%",
      "Growth in NPS — NDA%",
    ],
    tasks: [
      "Rebuilt key funnel pages to increase conversion",
      "Looked for drop-off points through competitors, heatmaps, and session recordings",
      "Validated scenarios through wireframes and clickable prototypes before implementation",
      "Refined solutions iteratively to ship the most important parts faster",
      "Aligned major changes through recurring presentations with a cross-functional team",
      "Expanded the design system and documentation to reduce custom work and speed up delivery",
      "Worked closely with engineering to reduce ambiguity during implementation",
      "Built reusable page patterns and components to shorten future launches",
    ],
    sections: [
      {
        title: "Product page",
        paragraphs: [
          "The product page was the first and most crowded step of the funnel. It had to help users understand availability, pick-up or delivery, discounts, financing options, and the next action without friction.",
        ],
        problems: [
          "critical information competed for attention on the first screen",
          "part of the financing information was lost inside a noisy layout",
          "the link between stock, fulfillment method, and the primary action was not obvious enough",
          "the page had to be rebuilt without hurting search visibility or useful SEO content",
        ],
        result: [
          "The rebuilt page became more sequential: users can understand what is available right now, under which conditions they can buy, and how they can receive the product, while the team can support the screen with less custom logic.",
        ],
        list: [
          "audited the current flow and competitor patterns",
          "simplified the first-screen structure and carousel",
          "merged delivery method and delivery timing into one block",
          "moved financing and payment conditions into a dedicated zone",
          "mapped how stock and fulfillment method affect UI states and the main CTA",
          "checked that the redesign preserved indexation-critical SEO blocks",
          "reduced visual competition to make the first choice faster",
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
          "I rebuilt the cart as a module with direct impact on conversion: fewer secondary distractions, a stronger transition to checkout, and upsell blocks that still felt relevant.",
        ],
        result: [
          "The handoff from cart to checkout became more direct: users moved to checkout faster, and the cart worked better as a decision point rather than a noisy intermediate screen.",
        ],
        list: [
          "reviewed competitor patterns and references",
          "kept the checkout block visible so the main action stayed within reach",
          "moved away from a table-like layout toward a card structure",
          "surfaced gifts, discounts, bonuses, and relevant accessories",
        ],
        media: "Module: cart",
      },
      {
        title: "Checkout",
        paragraphs: [
          "Checkout had to support many dependencies at once: delivery, pick-up, bonuses, promo codes, forms, and special-case scenarios such as trade-in.",
        ],
        resultTitle: "Result:",
        resultTitleStyle: "body",
        resultList: [
          "the next-step transition grew by +NDA%",
          "the flow became more stable across delivery and pick-up scenarios",
          "special rules and restrictions stopped breaking the main checkout path",
        ],
        list: [
          "designed scenarios where fulfillment method changes availability",
          "separated copy and states for delivery versus store pick-up",
          "accounted for trade-in and other special constraints",
          "refined forms, modal states, and confirmation logic",
        ],
        media: "Module: checkout",
        mediaPlacement: "before-result",
      },
      {
        title: "Order details",
        paragraphs: [
          "The post-purchase stage became the foundation of the project: this is where statuses, promotions, line items, pickup timing, and service dependencies all converged.",
        ],
        result: [
          "After rebuilding the post-purchase stage and its connected screens, support requests dropped by -NDA%: users understood order status, contents, and next actions much better without extra help.",
        ],
        list: [
          "standardized statuses and their sequence after purchase",
          "built one coherent post-purchase flow instead of disconnected screens",
          "accounted for dependencies with microservices, pricing, delivery, and promotions",
        ],
        media: "Module: order details",
      },
      {
        title: "My orders",
        paragraphs: ["The order list became an extension of the post-purchase stage and the entry point into order history and statuses."],
        list: [
          "connected the list screen with the order-details logic",
          "simplified navigation across statuses and states",
          "checked how users move between the list and the details page",
        ],
        media: "Module: my orders",
      },
      {
        title: "Warranty services",
        paragraphs: ["Warranty services worked as a built-in mini-product inside the store and as a separate upsell layer."],
        list: [
          "rethought the way warranties and plan cards are presented",
          "designed relevant cross-sells around the service",
          "simplified the content structure to reduce hardcoded layout logic",
          "worked through edge cases, including services attached to several identical items",
        ],
      },
      {
        title: "Summary",
        paragraphs: [
          "For me this was not a one-off redesign but a long-term improvement of a product flow. The outcome was not only better-looking screens, but a more connected funnel with clearer behavior and better scalability.",
        ],
      },
      {
        title: "Personal takeaways",
        list: [
          "connecting several product modules into one coherent user flow",
          "treating product work as a system of dependencies rather than a set of isolated screens",
          "spotting earlier how a UX decision affects engineering, support, and adjacent services",
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
  partners: {
    slug: "/projects/partners",
    title: "Partner offers",
    heroImage: partnersCover,
    summary: [
      "An internal service for processing supplier and partner offers: less manual chaos, fewer duplicates, and a clearer review workflow for category managers.",
      "The MVP had to be realistic for engineering and useful from day one, so the work focused on process clarity rather than interface complexity.",
    ],
    context: [
      "Incoming offers were handled through a messy stream of manual operations. Duplicates polluted the catalog, decisions were hard to track, and category managers spent too much time just cleaning the flow before they could assess the actual proposal.",
      "The challenge was not to invent a large internal platform from scratch, but to build a compact MVP that reflected the real workflow and gave the team a cleaner staged process.",
    ],
    goals: [
      "turn the incoming stream into a manageable review workflow",
      "reduce duplicate handling and wasted manager time",
      "make prioritization and publishing preparation easier to track",
      "ship an MVP that engineering could implement quickly",
    ],
    actions: [
      "mapped the raw supplier flow into review, prioritization, and publishing-preparation stages",
      "interviewed category managers to capture pain points from the real process",
      "framed the service as an inbox-like workflow instead of another static internal form",
      "validated the MVP through a clickable prototype and alignment with engineering",
      "reused familiar patterns where they reduced time-to-market without hurting clarity",
    ],
    results: [
      "Launched the MVP in one month with a structure that was realistic for engineering.",
      "Reduced duplicate processing by turning incoming proposals into a clearer staged flow.",
      "Gave managers a more controlled process for review, prioritization, and handoff to publishing.",
      "Created a base that could be expanded with richer calculations and automation later on.",
    ],
    tasks: [
      "Mapped the incoming stream of supplier offers into a structured workflow",
      "Interviewed category managers to capture pain points in the real process",
      "Prototyped the MVP around review, prioritization, and publishing preparation",
      "Balanced process clarity with reuse of existing patterns to ship faster",
      "Documented the MVP logic for the next implementation step",
    ],
    sections: [
      {
        title: "Process",
        paragraphs: [
          "The work naturally decomposed into three short modules: review the incoming stream, mark and prioritize the offers worth keeping, and then prepare the chosen ones for publishing in the main catalog.",
        ],
        problems: [
          "the incoming flow was too dependent on manual operations",
          "duplicates polluted the catalog and wasted team time",
          "the team needed a realistic MVP instead of a heavy redesign from scratch",
        ],
        list: [
          "framed the service as an inbox-like workflow instead of another static form",
          "added a review layer for first-pass evaluation",
          "built prioritization states and lightweight handoff logic",
          "connected the final step with preparation for publishing in the catalog",
        ],
        media: {
          src: partnersDrawer,
          alt: "Publishing preparation module",
        },
        mediaPlacement: "after-problems",
      },
      {
        title: "Validation and rollout",
        paragraphs: [
          "To keep the MVP realistic, I aligned the flow with engineering and discussed the prototype with category managers who would actually use the service. That helped keep the scope focused while still solving the biggest pain points.",
        ],
        list: [
          "gathered pain points from category managers",
          "used a clickable prototype for alignment instead of abstract discussion",
          "reused familiar patterns where it reduced time-to-market",
        ],
      },
      {
        title: "Personal takeaways",
        list: [
          "breaking a messy internal process into a small set of practical modules",
          "designing MVP logic around real work patterns instead of decorative complexity",
          "using prototypes as a tool to keep meetings and trade-offs manageable",
        ],
      },
    ],
  },
  corporate: {
    slug: "/projects/corporate-portal",
    title: "Corporate portal",
    heroImage: corporatePreview,
    summary: [
      "An internal portal for employee management, org structure, and document flows with electronic signing through eGov.",
      "The work was driven by deadlines and incomplete input, so a big part of the value was structuring the product before polishing the interface.",
    ],
    context: [
      "The project started without a complete technical brief or a stable product structure. Roles, statuses, and process boundaries had to be defined quickly, while the portal itself needed to cover both administrative employee management and document approval/signing.",
      "This made prioritization just as important as interface quality: the team needed a workable modular foundation first, and only then deeper refinement of separate flows.",
    ],
    goals: [
      "turn an incomplete brief into a structured modular product",
      "define clear role-based actions for employees, managers, and HR",
      "build a readable document route from creation to eGov signing",
      "prepare an admin layer for employees, departments, and org structure",
    ],
    actions: [
      "split the portal into employee-management and document-signing modules",
      "mapped roles, statuses, and transitions for lists and detailed process views",
      "designed employee administration, editable org data, and manual linking where source data was incomplete",
      "structured the eGov route with separate stages, confirmations, and status visibility",
      "prepared the interfaces with engineering constraints and backend contracts in mind",
    ],
    results: [
      "Built the foundation of a modular internal portal under a tight deadline.",
      "Defined separate actions and states for HR, managers, and employees.",
      "Structured the document approval and eGov signing flow as a dedicated process.",
      "Prepared an admin layer for employees, departments, and org structure.",
    ],
    tasks: [
      "Turned an incomplete brief into a structured set of product modules",
      "Designed employee management around roles, statuses, and editable fields",
      "Mapped the document route from creation to electronic signing in eGov",
      "Built a status model that works both in lists and in detailed process views",
      "Prepared the interfaces with engineering constraints in mind",
    ],
    sections: [
      {
        title: "Project context",
        paragraphs: [
          "Because of the deadline, the product had to be built as a modular system: first a working foundation, then deeper refinement of individual areas.",
        ],
        problems: [
          "there was no full technical brief or complete input documentation at the start",
          "role boundaries and actions had to be defined very quickly",
          "with limited time, module prioritization was critical",
        ],
      },
      {
        title: "Employee management",
        paragraphs: [
          "This module covered the administrative side of the portal and the manual connections between data points that were missing in the existing HR system.",
        ],
        problems: [
          "part of the organizational data was missing in the source system and had to be linked manually",
          "department, org structure, and account data had to be editable within one flow",
          "without a dedicated admin layer, these changes would stay scattered across the system",
        ],
        list: [
          "designed the employee list with key identity and role data",
          "built the employee card with editable fields, corporate email, and password change",
          "added manual linking between employees, departments, and org structure",
          "covered structure creation, department editing, and employee search",
        ],
      },
      {
        title: "Documents and eGov",
        paragraphs: [
          "The second module focused on approval routes and document signing through eGov, from the business process itself to the final signing status.",
        ],
        problems: [
          "the route involved several roles and could easily lose status transparency",
          "HR, managers, and employees needed different actions within the same process",
          "electronic signing required a dedicated layer of statuses and confirmations",
        ],
        list: [
          "mapped role-based flows for employee, manager, and HR",
          "designed the document list, creation flow, editing, and process card",
          "built statuses, stages, and role-based actions",
          "prepared the interface for the eGov signing flow and signature status",
        ],
      },
      {
        title: "What mattered in UX",
        list: [
          "statuses and stages had to be readable at a glance",
          "each role should only see relevant actions",
          "the process needed to stay understandable both in the list and in the detailed view",
          "the eGov signing state had to be visualized as a dedicated layer",
        ],
      },
      {
        title: "Personal takeaways",
        list: [
          "splitting a large internal product into modules and driving it by priority",
          "designing around roles, statuses, and process stages",
          "laying a backend contract and state model already at the UX stage",
          "moving a project forward even with incomplete documentation and a tight deadline",
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
  title: "Yerik Kuanbayev",
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
      projects: ["E-commerce", "Design system", "Partner offers", "Corporate portal", "Price labels"],
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
