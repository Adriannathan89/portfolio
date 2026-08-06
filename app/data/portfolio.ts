export type Repository = {
  label: string;
  url: string;
};

export type Project = {
  name: string;
  category: string;
  description: string;
  features: string[];
  stack: string[];
  repositories: Repository[];
  size: "standard" | "wide" | "tall";
  visual: "cache" | "finance" | "academic" | "queue";
};

export type Experience = {
  organization: string;
  role: string;
  website: string;
  description: string;
  highlights: string[];
  stack: string[];
  accent: "blue" | "lime" | "amber";
  cta: string;
};

export type Award = {
  title: string;
  image?: string;
  issuer?: string;
  year?: string;
  description?: string;
  url?: string;
  featured?: boolean;
};

export const profile = {
  name: "Adrian Nathanael Setiawan",
  eyebrow: "Software Engineer · Backend & Distributed Systems",
  bio: "I’m Adrian, a Universitas Indonesia student and  software engineer focused on backend systems and distributed infrastructure. I enjoy turning complex workflows into dependable, maintainable software.",
  portraitImage: undefined as string | undefined,
  contact: {
    linkedin: "https://www.linkedin.com/in/adrian-nathanael-setiawan-809761246/",
    whatsapp: "https://wa.me/+6285156628417",
  },
} as const;

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Awards", href: "#awards" },
] as const;

export const projects: Project[] = [
  {
    name: "nestjs-cacheable",
    category: "Open-source NestJS caching library",
    description:
      "A reusable caching package for NestJS that adds declarative caching and cache invalidation through decorators and interceptors.",
    features: [
      "NestJS interceptor-based caching",
      "@Cacheable-style declarative caching",
      "Tag-based cache invalidation",
      "Redis-backed cache storage",
      "Optional in-memory L1 cache",
      "Configurable TTL and cache keys",
      "End-to-end tests",
    ],
    stack: ["TypeScript", "NestJS", "Redis", "RxJS", "Jest", "pnpm"],
    repositories: [
      {
        label: "View Repository",
        url: "https://github.com/Adriannathan89/nestjs-cacheable",
      },
    ],
    size: "standard",
    visual: "cache",
  },
  {
    name: "BayarWoy",
    category: "Full-stack personal finance and debt management platform",
    description:
      "A financial record and debt-management platform that combines a Go backend, an Angular interface, and a lightweight NLP service to classify natural-language transaction input.",
    features: [
      "CRUD for financial records and debt tracking",
      "User authentication and profile management",
      "Friend requests and shared debt workflows",
      "Natural-language transaction classification",
      "Transaction category and income/expense prediction",
      "Discord verification and notification integration",
      "Dockerized services and CI/CD workflows",
    ],
    stack: [
      "Go", "Gin", "GORM", "PostgreSQL", "SQLite", "JWT", "Angular 21",
      "TypeScript", "Angular Material", "Tailwind CSS", "Axios", "Python",
      "FastAPI", "scikit-learn", "TF-IDF", "Logistic Regression", "Docker", "Discord API",
    ],
    repositories: [
      {
        label: "Production",
        url: "https://bayarwoy.adrianportofolio.my.id",
      },
      {
        label: "Backend",
        url: "https://github.com/Adriannathan89/bayarWoyBE_Record",
      },
      {
        label: "Frontend",
        url: "https://github.com/Adriannathan89/bayarWoyFE",
      },
      {
        label: "NLP Service",
        url: "https://github.com/Adriannathan89/bayarwoy-slm",
      },
    ],
    size: "wide",
    visual: "finance",
  },
  {
    name: "COMPFEST Registration Requirement / SIAK NG Lite",
    category: "Full-stack academic management application",
    description:
      "A full-stack academic workflow application built as a COMPFEST registration requirement, covering subjects, classes, schedules, course enrollment, and student scoring.",
    features: [
      "CRUD for subjects, classes, schedules, and academic data",
      "Student course enrollment workflow",
      "Lecturer and student interfaces",
      "Student score management",
      "Authentication and role-based authorization",
      "Clean architecture concepts and SOLID principles",
      "API documentation and validation",
    ],
    stack: [
      "React 19", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "React Router",
      "NestJS 11", "Drizzle ORM", "PostgreSQL", "JWT", "Passport", "Swagger", "Jest", "Docker",
    ],
    repositories: [
      {
        label: "Frontend",
        url: "https://github.com/Adriannathan89/CompfestOprecFE",
      },
      {
        label: "Backend",
        url: "https://github.com/Adriannathan89/CompfestOprecBE",
      },
    ],
    size: "standard",
    visual: "academic",
  },
  {
    name: "DDP-0 Python Grader",
    category: "Distributed online judge and automated grading system",
    description:
      "A distributed Python grading platform designed to process programming submissions asynchronously and execute each test case inside an isolated environment.",
    features: [
      "Redis Streams-based grading job queue",
      "Distributed job consumption",
      "Concurrent workers using Go goroutines",
      "Retry handling and dead-letter queue",
      "Recovery of jobs from unavailable workers",
      "Hardened Docker container execution",
      "Time, memory, process, network, and output limits",
      "Problem, testcase, submission, progress, review, and leaderboard APIs",
      "PostgreSQL persistence and S3-compatible object storage",
    ],
    stack: [
      "Go", "Gin", "Goroutines", "Redis Streams", "GORM", "PostgreSQL", "Docker",
      "Python 3.12", "AWS SDK / S3", "JWT", "GitHub Actions",
    ],
    repositories: [
      {
        label: "View Repository",
        url: "https://github.com/Adriannathan89/ddp0_grader",
      },
    ],
    size: "tall",
    visual: "queue",
  },
];

export const experiences: Experience[] = [
  {
    organization: "BETIS",
    role: "Backend Developer",
    website: "https://betis.id",
    description:
      "Contributed to backend development for BETIS by building and maintaining CRUD-based application capabilities with NestJS. Worked on API structure, request validation, data flow, error handling, and maintainable service organization while collaborating with the development team.",
    highlights: [
      "Designed and maintained RESTful CRUD endpoints",
      "Organized backend logic with NestJS modules, controllers, and services",
      "Applied validation and consistent error handling",
      "Collaborated on feature integration and maintenance",
    ],
    stack: ["NestJS", "TypeScript", "REST API"],
    accent: "blue",
    cta: "Visit betis.id",
  },
  {
    organization: "COMPFEST",
    role: "Software Engineer",
    website: "https://compfest.id",
    description:
      "Worked on backend application features using NestJS and Drizzle ORM, with an emphasis on clean architecture, SOLID principles, maintainable modules, and clear separation of responsibilities.",
    highlights: [
      "Built and maintained CRUD functionality with NestJS",
      "Used Drizzle ORM for typed database access",
      "Applied clean architecture concepts and SOLID principles",
      "Structured features for maintainability and testing",
      "Collaborated across product and engineering requirements",
    ],
    stack: [
      "NestJS",
      "TypeScript",
      "Drizzle ORM",
      "PostgreSQL",
      "Clean Architecture",
      "SOLID",
    ],
    accent: "lime",
    cta: "Visit compfest.id",
  },
  {
    organization: "DDP-0",
    role: "Staff",
    website: "https://ddp0.csui.dev",
    description:
      "Contributed to systems supporting DDP-0 activities, ranging from Django-based CRUD functionality to asynchronous grading infrastructure powered by Redis and distributed Go workers.",
    highlights: [
      "Developed CRUD functionality using Django",
      "Built asynchronous jobs using Redis-backed queues",
      "Distributed grading tasks across concurrent workers",
      "Used Go goroutines for parallel job processing",
      "Worked on reliable execution and task-processing flows",
    ],
    stack: ["Django", "Python", "Go", "Goroutines", "Redis", "Distributed Workers"],
    accent: "amber",
    cta: "Visit ddp0.csui.dev",
  },
];

export const awards: Award[] = [
  {
    title: "Finalist — National Programming Contest (NPC) Junior",
    image: "/Schematic.jpeg",
    issuer: "Schematics, Institut Teknologi Sepuluh Nopember",
    year: "Oct 2024",
    description:
      "One of 20 finalists selected from over 200 participants in a competitive programming contest.",
  },
  {
    title: "Finalist — Indonesia National Competition in Informatics (NOI) 2024",
    image: "/OSN.jpeg",
    issuer: "Balai Pengembangan Talenta Indonesia",
    year: "Aug 2024",
    description:
      "One of 100 finalists selected from over 20,000 contestants through a two-stage selection process.",
  },
  {
    title: "3rd Place — Diponegoro Logic Competition",
    image: "/ANFORCOM.jpeg",
    issuer: "Diponegoro University",
    year: "Sep 2023",
    description:
      "Placed third among over 100 teams of three students in a logic competition.",
  },
];
