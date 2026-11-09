const SECTIONS_DATA = {
  projects: {
    label: "Projects & Freelance",
    title: "Client & Freelance Work",
    intro: "Production-ready platforms and bespoke software systems built for real-world operations.",
    colorClass: "panel--blue",
    items: [
      {
        id: "dr-chothe",
        title: "Dr. Chothe Children Hospital",
        subtitle: "Pediatric Clinic Management & EMR System",
        status: "Delivered · Live",
        desc: "A lightweight, production-grade pediatric clinic management web app designed for daily clinical workflows—featuring instant OPD registration, live patient queue handling, digital prescriptions, growth tracking, immunization schedules, and daily ledger accounting.",
        features: [
          "OPD registration & automated UHID generation",
          "Live OPD queue management & fast triage workflow",
          "Custom Rx prescription printing & one-click WhatsApp sharing",
          "Vaccination due tracking & automated guardian reminder messages",
          "WHO-standard pediatric growth monitoring (Weight, Height, Head Circ.)",
          "Admissions, NICU tracking & nursing MAR administration",
          "Daily ledger, OPD fee billing & dues reconciliation",
          "Offline demo mode (localStorage) + Cloud sync via Firebase"
        ],
        screenshots: [
          {
            src: "/screenshots/brave_screenshot_devchospital.web.app.png",
            title: "OPD Dashboard & Patient Flow",
            caption: "Real-time footfall, live OPD queue, weight-based rapid dosing calculator, and dues summary."
          },
          {
            src: "/screenshots/brave_screenshot_devchospital.web.app (1).png",
            title: "Prescription (Rx) & Consultation",
            caption: "Pediatric drug formulation picker, vitals, SOS guidelines, and emergency alert footer."
          },
          {
            src: "/screenshots/brave_screenshot_devchospital.web.app (2).png",
            title: "Vaccination Due Reminders",
            caption: "IAP/Government schedule tracking with preformatted WhatsApp reminder messages for parents."
          },
          {
            src: "/screenshots/brave_screenshot_devchospital.web.app (3).png",
            title: "WHO Growth Percentile Curves",
            caption: "Interactive SD curve comparison for weight-for-age, height-for-age, and head circumference."
          },
          {
            src: "/screenshots/brave_screenshot_devchospital.web.app (4).png",
            title: "Daily Collection & Cash Ledger",
            caption: "Real-time drawer balance, digital UPI tracking, pending dues, and shift closure audit."
          }
        ],
        tags: [
          "Vanilla JS",
          "Firebase Hosting & Firestore",
          "Pediatric EMR",
          "Responsive PWA",
          "WhatsApp Cloud Link",
          "Print Stylesheets"
        ],
        link: "#",
        linkText: "Hospital Portal"
      },
      {
        id: "detaillo",
        title: "Detaillo",
        subtitle: "Auto Detailing & Workshop Management",
        status: "Delivered",
        desc: "End-to-end studio workflow manager for automotive detailing centers—covering customer intake, job card assignment, multi-stage coating inspections, and invoice reconciliation.",
        features: [
          "Digital vehicle intake inspection checklist",
          "Job progress tracking and technician assignment",
          "Automated pickup/delivery alerts for customers",
          "Secure billing and vehicle service logs"
        ],
        screenshots: [
          {
            src: "/screenshots/brave_screenshot_detailloautodetailingstudio.web.app.png",
            title: "Workshop Job Board & Invoicing",
            caption: "Vehicle intake checklist, detailing progress status, and billing audit."
          },
          {
            src: "/screenshots/brave_screenshot_detailloautodetailingstudio.web.app (1).png",
            title: "Customer Intake & Job Cards",
            caption: "Digital vehicle intake inspection and job card assignment workflow."
          },
          {
            src: "/screenshots/brave_screenshot_detailloautodetailingstudio.web.app (2).png",
            title: "Coating Inspection Stages",
            caption: "Multi-stage coating inspection tracking with status indicators."
          },
          {
            src: "/screenshots/brave_screenshot_detailloautodetailingstudio.web.app (3).png",
            title: "Billing & Service Logs",
            caption: "Secure billing records and vehicle service history audit."
          },
          {
            src: "/screenshots/brave_screenshot_detailloautodetailingstudio.web.app (4).png",
            title: "Customer Alerts & Notifications",
            caption: "Automated pickup/delivery alerts for customers."
          }
        ],
        tags: ["PWA", "HTML5/CSS3", "JavaScript", "Cloud Database"],
        link: "#",
        linkText: "View Case Study"
      },
      {
        id: "prime-vision",
        title: "Prime Vision",
        subtitle: "Optometry & Optical Practice Management",
        status: "Delivered",
        desc: "Comprehensive clinic and store management system handling patient eye examinations, prescription history, frame/lens inventory tracking, and billing.",
        features: [
          "Comprehensive vision exam records & refractive index tracking",
          "Frame & optical lens stock management",
          "Patient history with auto-suggested follow-ups",
          "GST invoice generation & sales analytics"
        ],
        screenshots: [],
        tags: ["Web App", "JavaScript", "Firebase", "Inventory Management"],
        link: "#",
        linkText: "View Case Study"
      }
    ]
  },

  reading: {
    label: "Reading List",
    title: "Books & Literature",
    intro: "Books shaping my perspective on physics, systems engineering, philosophy, and computation.",
    colorClass: "panel--red",
    items: [
      {
        title: "The Quantum Divide",
        subtitle: "Christopher C. Gerry & Kimberly M. Bruno",
        status: "Reading",
        desc: "Exploring quantum optical phenomena, wave-particle duality, and the foundations of quantum mechanics.",
        tags: ["Physics", "Quantum Optics", "Foundations"]
      }
    ]
  },

  ailab: {
    label: "AI Lab & Research",
    title: "Artificial Intelligence",
    intro: "Hands-on explorations into large language models, agent workflows, and practical machine intelligence.",
    colorClass: "panel--green",
    items: [
      {
        title: "Autonomous Agent Architectures",
        subtitle: "Exploratory Project",
        status: "Active",
        desc: "Prototyping multi-agent coordination pipelines using structured tool calls and persistent memory layers.",
        tags: ["LLMs", "Agentic AI", "Function Calling"]
      }
    ]
  },

  design: {
    label: "Design Work",
    title: "UI & UX Design",
    intro: "Crafting purposeful, clean interfaces that make complex domain workflows effortless.",
    colorClass: "panel--dark",
    items: [
      {
        title: "Clinical & Enterprise Dashboards",
        subtitle: "Design System & Micro-interactions",
        status: "Case Study",
        desc: "Creating distraction-free, high-density layouts for mission-critical medical and enterprise desktop environments.",
        tags: ["Figma", "Design Systems", "UX Research", "Accessibility"]
      }
    ]
  },

  learning: {
    label: "Continuous Learning",
    title: "Currently Learning",
    intro: "New tools, frameworks, and engineering concepts currently on my radar.",
    colorClass: "panel--amber",
    items: [
      {
        title: "Generative AI & Agentic Systems",
        subtitle: "Deep Learning & Applied AI",
        status: "In Progress",
        desc: "Studying retrieval-augmented generation (RAG) fine-tuning, reasoning topologies, and multimodal inference pipelines.",
        tags: ["GenAI", "Embeddings", "Vector Databases", "Prompt Engineering"]
      }
    ]
  },

  notes: {
    label: "Technical Notes",
    title: "Lessons Learned",
    intro: "Field notes, performance optimizations, and patterns discovered while building software.",
    colorClass: "panel--violet",
    items: [
      {
        title: "Zero-Build Web Architectures",
        subtitle: "Engineering Note",
        status: "Published",
        desc: "How plain HTML5, clean modern CSS, and modular vanilla JavaScript can deliver sub-50ms render speeds without bundle overhead.",
        tags: ["Web Performance", "Vanilla JS", "Architecture"]
      }
    ]
  }
};