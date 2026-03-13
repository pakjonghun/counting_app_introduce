const en = {
  nav: {
    features: "Features",
    howItWorks: "How to Use",
    tech: "Tech",
    download: "Download",
    menu: "Menu",
  },
  hero: {
    badge: "Offline-first Inventory Management",
    titleLine1: "Inventory Counting",
    titleHighlight: "Done",
    titleEnd: " with One Scan",
    description:
      "Scan a barcode with your camera and quantities update automatically.\nAn inventory counting app that works perfectly — even offline.",
    ctaPrimary: "Free Download",
    ctaSecondary: "Learn More",
    trustFree: "Completely Free",
    trustPlatform: "6 Platforms",
    trustOffline: "Works Offline",
    floatScan: "+1 Scan Done ✓",
    floatOffline: "Working Offline",
    mockupAppName: "Counting",
    mockupItemA: "Product A",
    mockupItemB: "Product B",
    mockupItemC: "Product C",
  },
  features: {
    label: "Features",
    title: "Why Inventory Counting?",
    subtitle:
      "Only the features you need on-site. Get started without complex setup.",
    barcode: {
      title: "Barcode Scanning",
      description:
        "Recognize barcodes with your camera and register inventory quickly with continuous scan mode.",
    },
    session: {
      title: "Session-based Management",
      description:
        "Separate tasks with independent sessions and manage inventory systematically.",
    },
    history: {
      title: "Full Change Tracking",
      description:
        "Record all change history with event sourcing and undo anytime.",
    },
    sheets: {
      title: "Google Sheets Sync",
      description:
        "Synchronize data bidirectionally with CSV files or Google Sheets.",
    },
    offline: {
      title: "Offline Operation",
      description:
        "Works perfectly without internet using SQLite local storage.",
    },
    i18n: {
      title: "Multi-language",
      description:
        "Supports Korean and English for use in global environments.",
    },
  },
  howItWorks: {
    label: "How it works",
    title: "Start in 3 Steps",
    subtitle:
      "Start inventory counting right away without complex setup.",
    step1: {
      title: "Create Session",
      description: "Create a new counting session and set the scope of work.",
    },
    step2: {
      title: "Scan Barcodes",
      description:
        "Scan barcodes with your camera and quantities are recorded automatically.",
    },
    step3: {
      title: "Export Results",
      description: "Export completed data to CSV or Google Sheets.",
    },
  },
  screenshots: {
    label: "Preview",
    title: "App Preview",
    subtitle: "An intuitive interface anyone can use with ease.",
    items: "Items",
    scanner: "Scanner",
    scanning: "Scanning",
    settings: "Settings",
  },
  tech: {
    label: "Technology",
    title: "Built on Solid Tech",
    subtitle:
      "Not just a simple app. Enterprise-grade architecture to keep your data safe.",
    eventSourcing: {
      tag: "Architecture",
      title: "Event Sourcing",
      description:
        "Records all changes as immutable events. Recalculate past states and audit trails anytime.",
    },
    offlineFirst: {
      tag: "Storage",
      title: "Offline First",
      description:
        "Zero network dependency with SQLite local storage. Works reliably in warehouses and stores.",
    },
    crossPlatform: {
      tag: "Platform",
      title: "Cross Platform",
      description:
        "Built with Flutter, supporting 6 platforms: iOS, Android, Web, Windows, macOS, and Linux.",
    },
    transaction: {
      tag: "Reliability",
      title: "Transaction Safety",
      description:
        "Processes events within a single transaction with automatic rollback on errors to ensure data integrity.",
    },
  },
  cta: {
    title: "Get Started\nRight Now",
    subtitle:
      "Revolutionize inventory management with one barcode scan.\nCompletely free, ready to use instantly.",
    button: "Free Download",
    notice: "Coming soon to App Store and Google Play",
  },
  footer: {
    appName: "Inventory Counting",
    tagline: "Barcode-based Inventory Management",
    contact: "Contact",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    formName: "Name",
    formNamePlaceholder: "Enter your name",
    formEmail: "Email",
    formEmailPlaceholder: "Your email for reply",
    formTitle: "Subject",
    formTitlePlaceholder: "Enter subject",
    formMessage: "Message",
    formMessagePlaceholder: "Enter your message",
    formSend: "Send",
    formSending: "Sending...",
    formSent: "Sent!",
    formError: "Failed. Please try again.",
    copyright: "© {{year}} Inventory Counting. All rights reserved.",
  },
  privacy: {
    title: "Privacy Policy",
    effectiveDate: "Effective Date: March 12, 2026",
    intro:
      'This Privacy Policy describes how the "Inventory Counting" app (the "App") collects, uses, stores, and deletes personal information.',
    section1Title: "1. Information We Collect",
    section1Items: [
      "Google Account Information (email, name): Collected for authentication when signing in with Google",
      "Camera Access: Used for barcode scanning (images are not stored or transmitted externally)",
    ],
    section2Title: "2. How We Store Data",
    section2Items: [
      "All inventory data is stored exclusively on your device's local storage (SQLite).",
      "The App does not transmit data to external servers.",
      "We do not operate any backend servers.",
    ],
    section3Title: "3. Google Sheets Integration",
    section3Desc:
      "Data is recorded only to the Google Spreadsheet that you explicitly select. The App does not access or write to any other spreadsheets.",
    section4Title: "4. Data Retention and Deletion",
    section4Items: [
      "Uninstalling the App from your device automatically deletes all locally stored data.",
      "You can revoke Google Account access through your Google Account settings.",
    ],
    section5Title: "5. Third-Party Sharing",
    section5Desc:
      "The App does not share collected personal information with any third parties.",
    section6Title: "6. Contact",
    section6Desc: "For privacy-related inquiries, please contact us at the email below.",
    contactEmail: "fireking5996@gmail.com",
  },
  terms: {
    title: "Terms of Service",
    effectiveDate: "Effective Date: March 12, 2026",
    intro:
      'These Terms of Service govern the use of the "Inventory Counting" app (the "App").',
    section1Title: "1. Service Overview",
    section1Desc:
      "The App is an offline inventory counting tool based on barcode scanning. Users can scan barcodes with their camera, record inventory quantities, and export results to CSV or Google Sheets.",
    section2Title: "2. Pricing",
    section2Desc:
      "The App is provided completely free of charge. There are no paid features, subscriptions, or in-app purchases.",
    section3Title: "3. User Obligations",
    section3Items: [
      "You must not use the App for illegal purposes.",
      "You must not infringe on the rights of other users.",
      "You must not interfere with the normal operation of the App.",
    ],
    section4Title: "4. Disclaimer",
    section4Items: [
      "The App is provided AS IS without warranty of fitness for a particular purpose.",
      "Users are responsible for data loss; regular data backups are recommended.",
      "The developer is not liable for any direct or indirect damages arising from use of the App.",
    ],
    section5Title: "5. Intellectual Property",
    section5Desc:
      "All intellectual property rights in the App's design, source code, and content belong to the developer.",
    section6Title: "6. Changes to Terms",
    section6Desc:
      "These terms may be updated as necessary. Changes will be posted within the App or on this page.",
    section7Title: "7. Contact",
    section7Desc: "For inquiries about these terms, please contact us at the email below.",
    contactEmail: "fireking5996@gmail.com",
  },
} as const

export default en
