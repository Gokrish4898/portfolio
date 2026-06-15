export const portfolioData = {
  personal: {
    name: "Gokulakrishnan A",
    title: "Senior Full-Stack Developer",
    tagline: "Building enterprise-grade web applications on .NET Core & Angular.",
    email: "agokul4898@gmail.com",
    phone: "+91 80720 30628",
    whatsapp: "918072030628",
    location: "Puducherry, India",
    linkedin: "https://linkedin.com/in/gokulakrishnan-ayanarappin",
    github: "https://github.com/",
    yearsExperience: "4.5+",
    projectsCompleted: "10+",
    certificationsCount: "3",
    summary: "Results-driven Full-Stack Developer with 4.5+ years building enterprise-grade web applications. Expert in clean N-Tier Architecture paired with a strong track record in legacy modernisation. Delivers measurable outcomes: 40% faster DB query times, 30% shorter deployment cycles, and 25% reduction in manual processing.",
  },
  skills: [
    {
      category: "Frontend",
      tools: ["Angular 17/18/19", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind", "RxJS", "Angular Material"],
    },
    {
      category: "Backend",
      tools: [".NET 10", "ASP.NET Core", "C#", "Web API", "RESTful API", "Entity Framework Core"],
    },
    {
      category: "Database",
      tools: ["PostgreSQL", "SQL Server", "MySQL"],
    },
    {
      category: "Tools & DevOps",
      tools: ["Docker", "Git", "GitHub", "GitLab", "CI/CD", "Kubernetes", "Azure DevOps", "Visual Studio"],
    }
  ],
  experience: [
    {
      company: "Lumina Datamatric Private Limited",
      position: "Senior Software Developer",
      duration: "Jan 2022 – Present",
      responsibilities: [
        "Architected ASP.NET Core RESTful APIs using strict N-Tier Architecture — Repository Pattern, Service Layer, and Dependency Injection.",
        "Secured API surfaces with JWT-based authentication and Role-Based Access Control (RBAC).",
        "Embedded OpenAI API into production full-stack pipelines, delivering AI-powered content generation.",
        "Led end-to-end migration of legacy AngularJS codebases to Angular 17/18 Standalone Components.",
        "Redesigned PostgreSQL queries, stored procedures, and indexing achieving 40% performance improvement.",
        "Designed Docker-based CI/CD pipelines cutting deployment time by 30%."
      ],
      technologies: [".NET 10", "Angular 18", "PostgreSQL", "Docker", "OpenAI API"]
    }
  ],
  projects: [
    {
      name: "Rental Raja",
      description: "Cross-Platform Mobile Marketplace featuring live inventory synchronisation and an admin approval workflow enforcing transaction security.",
      technologies: ["Flutter", "Firebase"],
      features: ["Live Sync", "Admin Dashboard", "Transactions"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      name: "College Management System",
      description: "End-to-End UI/UX Design for a multi-module college management platform covering student records and administrative dashboards.",
      technologies: ["Figma", "Adobe XD"],
      features: ["UX Workflows", "Reporting Screens", "Information Architecture"],
      liveLink: "#",
      githubLink: "#",
    }
  ],
  contributions: {
    github: { repos: 45, contributions: "1,200+", languages: "C#, TypeScript, HTML" },
    openSource: ["Contributed to Angular Material documentation.", "Maintained open-source .NET helper libraries."],
  },
  achievements: [
    { title: "Master of Computer Applications (MCA)", details: "Pondicherry Engineering College | Graduated July 2021 | CGPA: 9.46/10.0" },
    { title: "Agile Practitioner & Technical Mentor", details: "Delivered 5+ enterprise client-facing products driving sprint ceremonies and mentoring junior developers." },
  ]
};
