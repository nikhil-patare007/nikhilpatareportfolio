/*
  Content for the section panels. Edit this file in VS Code to update the site.
  Each section: { label, title, intro, items: [{ title, subtitle, status, text, tags, link }] }
  Items marked "Starter" are placeholders: replace them with your own entries.
*/
window.SITE_DATA = {
  projects: {
    label: "Projects",
    title: "Things I've built",
    intro:
      "Websites, web apps, Android and iOS applications, and AI-powered solutions. Two freelance projects delivered so far.",
    items: [
      {
        title: "Detaillo",
        subtitle: "Auto Detailing Studio Billing Web App",
        status: "Delivered · Freelance",
        text:
          "A billing web app for an auto detailing studio. Staff sign in, raise GST invoices and quotations, manage the rate card, track paid, part-paid and unpaid bills, and export date-range reports as Excel files.",
        tags: ["Web App", "GST Billing", "Reports & Excel", "Firebase"],
        featureList: [
          "Secure staff sign in",
          "GST invoices and quotations",
          "Rate card management",
          "Paid / part-paid / unpaid tracking",
          "Date-range reports to Excel",
        ],
        gallery: [
          { label: "Dashboard", kind: "detaillo-dashboard" },
          { label: "Bills list", kind: "detaillo-bills" },
          { label: "Reports & Excel", kind: "detaillo-reports" },
          { label: "Sign in", kind: "detaillo-login" },
        ],
      },
      {
        title: "Prime Vision",
        subtitle: "Eye Hospital Reading App",
        status: "Delivered · Freelance",
        text:
          "A patient registration and diagnostic reading tool for an eye hospital. It records vision, refraction and glasses data across patient profiles and keeps the workflow simple and digital.",
        tags: ["Android", "iOS", "Web App", "Eye Care"],
        featureList: [
          "Patient registration",
          "Vision, refraction and glasses entry",
          "Patient list and record search",
          "Backup / restore workflow",
        ],
        gallery: [
          { label: "Patient registration", kind: "prime-vision-patient" },
          { label: "Patient list", kind: "prime-vision-list" },
          { label: "Backup screen", kind: "prime-vision-backup" },
        ],
      },
    ],
  },

  reading: {
    label: "Reading List",
    title: "Books & references",
    intro:
      "A running list of recent reads, current books and the ideas that are shaping my thinking right now.",
    items: [
      {
        title: "The Quantum Divide",
        subtitle: "C. Gerry & K. Bruno",
        status: "Currently reading",
        text:
          "A deep dive into quantum ideas and how they connect to the way we reason about reality, systems and the unknown.",
        tags: ["Quantum", "Science", "Current read"],
      },
      {
        title: "Dune",
        subtitle: "Frank Herbert",
        status: "Recently finished",
        text:
          "A classic work of worldbuilding, political strategy and the tension between power, ecology and human ambition.",
        tags: ["Classic", "Sci-Fi", "Worldbuilding"],
      },
      {
        title: "Thinking, Fast and Slow",
        subtitle: "Daniel Kahneman",
        status: "Recent read",
        text:
          "A powerful exploration of intuition, bias, judgment and the mental systems behind decision-making.",
        tags: ["Psychology", "Decision making"],
      },
      {
        title: "The Black Swan",
        subtitle: "Nassim Nicholas Taleb",
        status: "Recent read",
        text:
          "A sharp look at uncertainty, rare events and how we often misread the true shape of risk.",
        tags: ["Probability", "Risk"],
      },
      {
        title: "Deep Work",
        subtitle: "Cal Newport",
        status: "Recent read",
        text:
          "A practical case for building deep focus in a world designed to keep us distracted.",
        tags: ["Productivity", "Focus"],
      },
      {
        title: "Atomic Habits",
        subtitle: "James Clear",
        status: "Recent read",
        text:
          "A clear framework for daily systems, small wins and turning good intentions into repeatable behavior.",
        tags: ["Habits", "Growth"],
      },
      {
        title: "The Lean Startup",
        subtitle: "Eric Ries",
        status: "Recent read",
        text:
          "A practical guide to experimentation, learning cycles and reducing waste while building products.",
        tags: ["Startup", "Product"],
      },
      {
        title: "Clean Code",
        subtitle: "Robert C. Martin",
        status: "Recent read",
        text:
          "A durable reminder that readability, discipline and simplicity are the real foundations of maintainable software.",
        tags: ["Software", "Craft"],
      },
      {
        title: "The Pragmatic Programmer",
        subtitle: "Andrew Hunt & David Thomas",
        status: "Recent read",
        text:
          "A classic engineering book on clarity, automation, craftsmanship and building for change.",
        tags: ["Engineering", "Practice"],
      },
      {
        title: "The Psychology of Money",
        subtitle: "Morgan Housel",
        status: "Recent read",
        text:
          "A thoughtful look at how behaviour, uncertainty and time shape financial decisions far more than formulas do.",
        tags: ["Finance", "Behavior"],
      },
      {
        title: "The New New Thing",
        subtitle: "Michael Lewis",
        status: "Recent read",
        text:
          "An engaging look at the personalities, bets and risk culture behind the internet boom and the people who shaped it.",
        tags: ["Business", "Technology"],
      },
      {
        title: "Zero to One",
        subtitle: "Peter Thiel",
        status: "Recent read",
        text:
          "A sharp and contrarian take on monopoly, technology and what creates real, durable value.",
        tags: ["Startups", "Strategy"],
      },
      {
        title: "The Power of Habit",
        subtitle: "Charles Duhigg",
        status: "Recent read",
        text:
          "A fascinating explanation of habit loops, routines and how systems shape outcomes in life and business.",
        tags: ["Behavior", "Systems"],
      },
      {
        title: "The Alchemist",
        subtitle: "Paulo Coelho",
        status: "Recent read",
        text:
          "A reminder that personal growth is often a matter of learning to listen to your own direction and keep moving.",
        tags: ["Reflection", "Philosophy"],
      },
      {
        title: "The Undoing Project",
        subtitle: "Michael Lewis",
        status: "Recent read",
        text:
          "A narrative about human judgment, probability and the people who changed how we think about decision science.",
        tags: ["Psychology", "Science"],
      },
      {
        title: "Sapiens",
        subtitle: "Yuval Noah Harari",
        status: "Recent read",
        text:
          "A sweeping account of how humankind built ideas, institutions and systems that transformed history.",
        tags: ["History", "Humanity"],
      },
      {
        title: "The Hard Thing About Hard Things",
        subtitle: "Ben Horowitz",
        status: "Recent read",
        text:
          "A practical and honest look at leadership, uncertainty and building under pressure.",
        tags: ["Leadership", "Startup"],
      },
    ],
  },

  ailab: {
    label: "AI Lab",
    title: "Current Studies / Artificial Intelligence",
    intro:
      "Current studies in AI, experiments, learning resources and the systems I'm exploring across machine learning, generative AI and agentic workflows.",
    items: [
      {
        title: "Why AI",
        subtitle: "Current Studies / Artificial Intelligence",
        status: "Focus area",
        text:
          "AI is becoming a force multiplier for software, design, operations and decision-making. I am learning where it can help me move faster, think more clearly and build better tools.",
        tags: ["AI foundations", "Systems thinking"],
      },
      {
        title: "Gesturize",
        subtitle: "AI interaction experiments",
        status: "Exploring",
        text:
          "Exploring human-centered interfaces and multimodal experiences where people interact with systems through gesture, movement and intent rather than only clicks and forms.",
        tags: ["Interaction design", "HCI"],
      },
      {
        title: "Facebook × Udacity Scholarship",
        subtitle: "AI learning track",
        status: "In progress",
        text:
          "A structured learning path focused on practical AI and machine learning foundations, with a strong emphasis on building an understanding by doing.",
        tags: ["Scholarship", "Learning path"],
      },
      {
        title: "Sentdex AI series",
        subtitle: "Practical ML and AI learning",
        status: "Watching",
        text:
          "Working through hands-on tutorials, code-first explanations and applied machine learning examples to build intuition for the real-world workflow.",
        tags: ["Python", "ML tutorials"],
      },
      {
        title: "Stanford AI course",
        subtitle: "Foundations of artificial intelligence",
        status: "Studying",
        text:
          "Following the Stanford curriculum to strengthen the theoretical base behind search, reasoning, planning, and probabilistic thinking in AI.",
        tags: ["Theory", "AI course"],
      },
      {
        title: "Deep Learning",
        subtitle: "Ian Goodfellow, Yoshua Bengio & Aaron Courville",
        status: "Book",
        text:
          "One of the core references for understanding the architecture, training dynamics and foundations behind modern deep learning systems.",
        tags: ["Deep Learning", "AI book"],
        link: "https://www.deeplearningbook.org/",
      },
      {
        title: "Hands-On Machine Learning",
        subtitle: "Aurélien Géron",
        status: "Book",
        text:
          "A highly practical guide to machine learning pipelines, modelling choices and building working systems with real data.",
        tags: ["ML", "Practical"],
        link: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/",
      },
      {
        title: "The Hundred-Page Machine Learning Book",
        subtitle: "Andriy Burkov",
        status: "Book",
        text:
          "A compact reference for the ideas, terminology and mental models behind modern machine learning at a useful level of depth.",
        tags: ["Reference", "ML"],
        link: "https://themlbook.com/",
      },
      {
        title: "Machine Learning with PyTorch and Scikit-Learn",
        subtitle: "Sebastian Raschka, Yuxi Liu & Vahid Mirjalili",
        status: "Book",
        text:
          "A hands-on book that ties together production-minded ML workflows, tooling and model development in Python.",
        tags: ["PyTorch", "Python"],
        link: "https://www.packtpub.com/product/machine-learning-with-pytorch-and-scikit-learn/9781801819312",
      },
      {
        title: "AI Revolution, Part 1",
        subtitle: "Tim Urban",
        status: "Post",
        text:
          "A thoughtful, accessible look at the rise of AI and the bigger social and technological changes it suggests.",
        tags: ["AI thinking", "Long read"],
        link: "https://waitbutwhy.com/2015/01/artificial-intelligence-revolution-1.html",
      },
      {
        title: "AI Revolution, Part 2",
        subtitle: "Tim Urban",
        status: "Post",
        text:
          "A follow-up that goes deeper into the practical implications of AI, its pace and the changing expectations it creates.",
        tags: ["AI thinking", "Long read"],
        link: "https://waitbutwhy.com/2015/01/artificial-intelligence-revolution-2.html",
      },
    ],
  },

  design: {
    label: "Design & Experiments",
    title: "UI & UX work",
    intro: "UI/UX work, prototypes, and creative ideas.",
    items: [
      {
        title: "Detaillo billing UI",
        subtitle: "Dark dashboard with a red accent",
        status: "Shipped",
        text: "A dark, high-contrast dashboard for daily billing: today's totals, recent bills, rate card and reports.",
        tags: ["Dashboard", "Dark UI"],
      },
      {
        title: "Studio Z portfolio",
        subtitle: "Card-based personal site",
        status: "Live",
        text: "A bright card layout with layered shapes, soft motion and one idea per card.",
        tags: ["Portfolio", "Motion"],
      },
    ],
  },

  learning: {
    label: "Currently Learning",
    title: "What I'm studying",
    intro: "Technologies, courses, and new skills I'm developing.",
    items: [
      {
        title: "Generative AI",
        subtitle: "Prompting, models and product patterns",
        status: "Learning",
        text: "Prompting, retrieval and building real features on top of language models.",
        tags: ["GenAI"],
      },
      {
        title: "Agentic AI",
        subtitle: "Planning, tools and workflow design",
        status: "Learning",
        text: "How agents plan, call tools and recover from mistakes while working across steps.",
        tags: ["Agents"],
      },
      {
        title: "Software engineering craft",
        subtitle: "Architecture, testing and delivery",
        status: "Ongoing",
        text: "Cleaner architecture, testing and shipping across web and mobile.",
        tags: ["Android", "iOS", "Web"],
      },
    ],
  },

  notes: {
    label: "Notes & Insights",
    title: "Lessons learned",
    intro: "Technical notes, useful discoveries, and lessons learned.",
    items: [
      {
        title: "Designing for clarity",
        subtitle: "Useful UI principle",
        status: "Draft",
        text: "Before adding any feature, reduce the interface to what people need to do in the next fifteen seconds and remove everything else.",
        tags: ["UX", "Design"],
      },
    ],
  },
};
