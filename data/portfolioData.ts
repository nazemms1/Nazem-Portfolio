import type {
  Experience,
  Project,
  Skill,
  ContactInfo,
} from "../types/portfolio";
import k2Image from "../assets/images/k2.jpg";
import flutterEm from "../assets/images/flutter-empl.jpg";

export const experiences: Experience[] = [
  {
    id: "soutify-2025",
    title: "Software Engineer | Frontend Developer",
    company: "Soutify",
    period: "Jan 2025 – Jul 2025",
    location: "Remotely, KSA",
    type: "Fulltime",
    description: [
      "Developed web frontend (React + TypeScript) for multilingual sentiment classification platform powered by transformer and LLM models",
      "Built React-based frontend for multi-role data labeling platform with task switching, role management, and smooth UX flows",
      "Developed mobile version using Flutter with dynamic form rendering, real-time updates, and adaptive layouts",
      "Implemented data analytics dashboard for visualizing social data from X (Twitter) with real-time insights",
      "Contributed to Waste Management ERP system frontend and mobile UI using ABP Framework integration",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Flutter",
      "Dart",
      "REST APIs",
      "ABP Framework",
    ],
  },
  {
    id: "freelancer-2024",
    title: "Software Engineer | Frontend Developer",
    company: "Freelancer",
    period: "May 2024 – Present",
    location: "Remote",
    type: "Freelance",
    description: [
      "Developing custom web and mobile applications for various international clients",
      "Specializing in React, TypeScript, and Flutter development with focus on performance optimization",
      "Delivering responsive and user-centered interfaces with modern design principles",
      "Implementing complex state management solutions and API integrations",
    ],
    technologies: ["React", "TypeScript", "Flutter", "Tailwind CSS"],
  },
];

export const projects: Project[] = [
  {
    id: "e-ticketing-system",
    title: "E-Ticketing System - Frontend Development",
    period: "Feb 2025 - May 2025",
    description:
      "Comprehensive frontend interface for digital ticketing management system, creating intuitive user experiences for companies to manage events, distribute tickets, and control access with responsive web applications.",
    features: [
      "Multi-role dashboard interfaces supporting admin, company, and employee access levels",
      "Comprehensive event management with ticket creation and real-time analytics visualization",
      "QR code ticket generation and scanning interface with instant validation feedback",
      "Bulk guest import functionality with drag-and-drop CSV upload and validation",
      "Dynamic email template designer with drag-and-drop components and live preview",
      "Real-time analytics dashboard with interactive charts and exportable reports",
      "Full Arabic/English internationalization with RTL support",
      "Secure authentication flows with JWT token management and session handling",
    ],
    technologies: [
      "React",
      "TypeScript",
      "REST APIs",
      "Chart.js",
      "QR Code Libraries",
      "CSV Processing",
      "i18n",
      "JWT",
    ],
    image: "/placeholder.svg?height=300&width=500",
    status: "completed",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "baflay-burger",
    title: "Baflay Burger Restaurant Website & Management System",
    period: "Nov 2024 - Mar 2025",
    description:
      "Comprehensive restaurant website and administrative dashboard for Baflay Burger, a popular Syrian burger restaurant chain in Damascus with over 34,000 social media followers.",
    features: [
      "Responsive restaurant website with menu display and online ordering system",
      "Comprehensive admin dashboard for menu management and order processing",
      "Multi-location management system supporting restaurant's expanding operations",
      "Real-time order processing and customer data management",
      "Promotional campaigns and detailed reporting features",
      "Modern UI/UX design with mobile responsiveness and fast loading performance",
      "Complete brand integration reflecting restaurant's Syrian culinary identity",
    ],
    technologies: [
      "React",
      "TypeScript",
      "REST APIs",
      "Dashboard Development",
      "Database Integration",
    ],
    image: "/placeholder.svg?height=300&width=500",
    status: "completed",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "ketabook",
    title: "Ketabook – Online Bookstore & Publishing Platform",
    period: "May 2024 - Sep 2024",
    description:
      "Comprehensive Flutter mobile application for online bookstore with seamless reading experience, featuring advanced e-commerce functionality and social reading features.",
    features: [
      "Advanced book browsing with filtering and search capabilities",
      "Secure Stripe payment integration with multiple payment methods",
      "In-app reading experience with customizable themes and bookmarks",
      "Real-time notifications and reading progress tracking",
      "Social features: following publishers, book reviews, and gifting",
      "Cross-platform compatibility (Android & iOS)",
    ],
    technologies: ["Flutter", "Dart", "REST APIs", "Stripe", "Firebase", "Git"],
    image: k2Image,
    status: "completed",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "mtx-scanner",
    title: "MTX - Event Ticket Scanner App",
    period: "Mar 2025 – Apr 2025",
    description:
      "Comprehensive Flutter mobile application for organizing and facilitating charitable donations across multiple causes, enabling users to support communities through various contribution programs.",
    features: [
      "Core donation features: cause browsing, donation processing, and contribution tracking",
      "Secure payment gateways for seamless financial transactions",
      "Real-time updates, donation history, and impact tracking",
      "Community engagement via cause following and donation sharing",
      "Volunteer coordination and beneficiary management",
      "Cross-platform compatibility for Android with intuitive UI/UX",
    ],
    technologies: ["Flutter", "Dart", "REST APIs", "Payment Gateway", "Git"],
    image: flutterEm,
    status: "completed",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "chatpdf",
    title: "ChatPDF – Smart PDF Interaction App",
    period: "Oct 2023 – Feb 2024",
    description:
      "Innovative generative AI-based PDF assistant application enabling intuitive document interaction through natural language processing and advanced AI capabilities.",
    features: [
      "Intelligent chat interface for PDF document queries",
      "AI-powered quiz generation from PDF content",
      "Advanced OCR technology for text extraction",
      "Audio-to-text conversion with high accuracy",
      "PDF manipulation: merging, splitting, and editing",
      "Cross-functional team collaboration and agile development",
    ],
    technologies: ["Flutter", "Dart", "AI/ML Integration", "OCR", "Git"],
    image: "/placeholder.svg?height=300&width=500",
    status: "completed",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "social-aid-gaith",
    title: "Social Aid App (Gaith)",
    period: "Oct 2022 – Feb 2023",
    description:
      "Flutter mobile application for organizing and facilitating charitable donations across multiple causes, enabling users to support communities through medical funding, in-kind contributions, and orphan sponsorship programs.",
    features: [
      "Cause browsing and donation processing with contribution tracking",
      "Secure payment gateways for financial transactions",
      "Real-time updates and donation history tracking",
      "Impact monitoring and progress tracking features",
      "Community engagement through cause following and donation sharing",
      "Volunteer coordination and beneficiary management system",
    ],
    technologies: ["Flutter", "Dart", "REST APIs", "Payment Gateway", "Git"],
    image: "/placeholder.svg?height=300&width=500",
    status: "completed",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "ecommerce-app",
    title: "E-Commerce Mobile Application",
    period: "Jun 2022 – Sep 2022",
    description:
      "Feature-rich e-commerce mobile application enabling users to browse products, view detailed information, and manage purchases with enhanced shopping experience.",
    features: [
      "Product catalog with detailed views and shopping cart functionality",
      "Payment processing and order tracking system",
      "User accounts with wishlist and product reviews",
      "Recommendation engine and personalized features",
      "Search filters and category navigation",
      "Promotional features and discount management",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "E-commerce APIs",
      "Payment Gateway",
      "Git",
    ],
    image: "/placeholder.svg?height=300&width=500",
    status: "completed",
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend", proficiency: 95 },
  { name: "TypeScript", category: "frontend", proficiency: 90 },
  { name: "Next.js", category: "frontend", proficiency: 85 },
  { name: "Tailwind CSS", category: "frontend", proficiency: 90 },

  { name: "Flutter", category: "mobile", proficiency: 90 },
  { name: "Dart", category: "mobile", proficiency: 88 },

  { name: "Git", category: "tools", proficiency: 90 },
  { name: "Figma", category: "tools", proficiency: 80 },
];

export const contactInfo: ContactInfo = {
  email: "nazem.msouti@gmail.com",
  phone: "+963-9928-13014",
  location: "Damascus, Syria",
  linkedin: "#",
  github: "#",
};
