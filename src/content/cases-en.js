import ecommerceCover from "../assets/projects/ecommerce-cover.png";
import partnersCover from "../assets/projects/partners-cover.png";
import partnersDrawer from "../assets/projects/partners-drawer.png";
import productPageBeforeMockup from "../assets/Страница товара до мокап.png";
import productPageAfterMockup from "../assets/Страница товара после мокап.png";
import pricingPreview from "../assets/projects/pricing-preview.jpg";
import corporatePreview from "../assets/projects/corporate-preview.png";
import freelancePreview from "../assets/projects/freelance-preview.jpg";
import bmcPreview from "../assets/projects/bmc-preview.jpg";

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
    highlights: ["+XX% purchase conversion", "+X% checkout starts", "X times fewer support requests"],
    facts: ["+XX% conversion", "+X% to checkout", "X times fewer requests"],
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
    highlights: ["faster launches", "less custom work and fewer duplicates", "lower support cost"],
    facts: ["Fewer duplicates", "Faster change delivery"],
    cover: ecommerceCover,
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
    highlights: ["launched in one month", "X times fewer duplicates", "a real workflow instead of manual chaos"],
    facts: ["X times fewer duplicates", "Structured flow"],
    cover: partnersCover,
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
    highlights: ["MVP validated in-store", "field research", "faster repricing flow"],
    facts: ["Field research", "MVP tested with real users"],
    cover: pricingPreview,
    preview: true,
  },
  {
    slug: "/projects/corporate-portal",
    title: "Corporate portal",
    kind: "0→1 / internal product",
    period: "2025",
    summary: [
      "An internal portal for employees, org structure, and documents with electronic signing through eGov.",
    ],
    highlights: ["employees and org structure", "documents and eGov", "roles and process statuses"],
    facts: ["Employees and org structure", "Documents and eGov"],
    cover: corporatePreview,
    preview: false,
  },
];

export const freelanceProjects = [
  {
    slug: "/projects/freelance",
    title: "Freelance",
    kind: "Case collection",
    period: "2023 — 2025",
    summary: ["A combined case built from four client projects: UniqUnits, Xola, CheryX, and Vault."],
    highlights: ["4 projects", "mobile / AI / fintech", "fast cycle from brief to deliverable"],
    facts: ["4 projects", "Mobile / AI / Fintech / Utilities"],
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
    highlights: ["Regular sync with a 20+ person team"],
    summary: [
      "One of the core projects inside Mechta.kz, a Kazakhstan retailer with a 500k MAU audience. Together with the team we rebuilt the key funnel steps: product page, cart, checkout, order details, and the order list. My role was to design, structure, and detail those scenarios.",
      "The project was focused on conversion growth, fewer user errors, and a cleaner customer journey. In parallel, I expanded the design-system and documentation layer so the solutions could scale, reduce custom work, simplify support, and speed up future releases.",
    ],
    myRole: [
      "I worked closely with the product team, engineering, and the design lead. I owned the structure of the funnel scenarios, screen-level detailing, prototypes, presentations for major changes, and handoff to implementation, while priorities and trade-offs were aligned together with the team.",
    ],
    results: ["Together we improved purchase conversion by +XX% across the rebuilt funnel."],
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
          "the next-step transition grew by +X%",
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
          "After rebuilding the post-purchase stage and its connected screens, support requests dropped by X times: users understood order status, contents, and next actions much better without extra help.",
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
        media: {
          kind: "service-card-anatomy",
        },
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
      "At Mechta.kz we evolved the design system not just as a component library but as a working layer for faster launches, fewer custom solutions, and clearer alignment between teams. My area of ownership was the systematization of flows, patterns, and documentation.",
      "We gradually moved away from a collection of isolated mockups toward structured documentation of flows, states, and dependencies so that design, analytics, and engineering could rely on one shared source of truth.",
    ],
    myRole: [
      "I developed this layer together with the product team. I focused on systematizing scenarios, patterns, documentation, and quick prototypes, while rollout priorities and trade-offs were aligned with the design lead, analysts, and engineers.",
    ],
    results: [
      "Reduced duplicated mockups by describing scenarios and states more systematically.",
      "Accelerated new launches through components, templates, and repeatable patterns.",
      "Lowered the cost of changes and support by removing unnecessary manual fixes across many screens.",
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
      "An internal service for processing offers from suppliers and partners. The project was about creating a manageable workflow, reducing duplicate work, and giving category managers a faster way to review incoming proposals.",
      "The MVP had to be realistic for the team and useful from day one, so the main challenge was to build a clean process around a messy incoming stream rather than design another form-heavy internal tool.",
    ],
    myRole: [
      "I worked on the service together with a product manager, analyst, and engineers. My role was to structure the workflow, turn the process into a clear set of modules, validate the logic with future users, and prepare the interface and prototype for implementation discussions.",
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
      "An internal portal for employee management, org structure, and document flows with electronic signing through eGov. The project had to be built under tight deadlines and with incomplete initial documentation, so structure and prioritization mattered as much as the UI itself.",
    ],
    myRole: [
      "I worked with the product team and engineering on structuring the portal into modules. My responsibility was to turn an incomplete brief into a clear employee-management and document-signing flow, detail the roles and statuses, and prepare the interfaces for implementation.",
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
      "Freelance gave me product experience in short cycles: entering a new domain fast, shaping the product structure, keeping quality high without long onboarding, and taking work to a state that clients could review, discuss, and move forward with. This is where I built speed, autonomy, and the habit of turning a raw request into a product frame.",
    ],
    myRole: [
      "I led these projects independently: from entering the problem space and structuring the product to the final UI, presentation, and next step with the client. Developers or client-side stakeholders joined around feedback and implementation, but I owned the product logic and visual direction.",
    ],
    results: [
      "Designed several client products from scratch, from structure and wireframes to polished UI.",
      "Worked across mobile products, AI, fintech, utility apps, and brand packaging.",
      "Prepared interfaces and concepts that clients could bring straight into development or the next iteration.",
      "Built a reliable freelance practice around entering a context quickly, making decisions, and shipping work ready for review.",
      "Improved the client side of the job: timelines, pricing, planning, and clear expectations.",
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
        title: "UniqUnits",
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
      },
      {
        title: "Personal takeaways",
        list: [
          "moving quickly from a client request to a product structure",
          "working across different domains without losing coherence",
          "building not only the interface but also the product packaging",
          "running several small projects in parallel while keeping quality stable",
          "holding client expectations and deadlines without outside control",
        ],
      },
    ],
  },
  bmc: {
    slug: "/projects/bmc-group",
    title: "BMC Group",
    heroImage: bmcPreview,
    summary: [
      "At BMC Group we built client websites and visual materials in a fast agency rhythm. I was responsible for page design, no-code / low-code assembly, and part of the Instagram support. The main value of this experience was proximity to launch: work had to reach a state that could be approved and shipped.",
    ],
    myRole: [
      "The work was coordinated through the studio team, account manager, and clients. I owned the page design, no-code / low-code assembly, and part of the visual support, while final approvals happened together with the studio team.",
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
        "improved purchase conversion by +XX% in the e-commerce flow",
        "increased the transition from cart to checkout by +X%",
        "reduced call-center requests by X times",
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
      projects: ["UniqUnits", "Xola", "CheryX", "Vault"],
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
