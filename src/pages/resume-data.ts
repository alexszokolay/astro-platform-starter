export const resume = {
  name: "Alex Szokolay",
  titleLine: "Honours BSc, Computer Science · Cognitive Science · Psychology — University of Toronto",
  blurb:
    "Experienced in enterprise platform maintenance (Jira, Nuxeo, IUCLID, Metabase) and building AI-driven apps. I like reliable systems, clean SQL, and shipping features that help real users.",
  links: {
    email: "alexszokolay02@gmail.com",
    phone: "437-424-0851",
    location: "Toronto, Ontario",
    linkedin: "https://www.linkedin.com/in/alex-szokolay/",
  },
  skills: [
    "Python, Java, JavaScript/TypeScript",
    "SQL (PostgreSQL, Oracle), data modeling, indexing",
    "Web: Astro, React, HTML/CSS",
    "APIs: REST, Flask, Node",
    "Dev: Git, CI/CD, Linux/SSH",
    "Cloud/Platform: Payara, Netlify",
    "AI: OpenAI APIs, NLP basics",
  ],
  edu: {
    school: "University of Toronto",
    degree: "Honours Bachelor of Science: Computer Science, Cognitive Science & Psychology",
    years: "Sep 2020 – Jun 2025",
    location: "Toronto, Ontario",
    courses: [
      "Databases",
      "Artificial Intelligence",
      "Computational Cognition",
      "Stats w/ Computer Applications",
      "Ethics in Computing",
      "Data Computation and the Mind"
    ]
  },
  certs: [
    {
      name: "IBM AI Developer Professional Certificate",
      org: "IBM (Online)",
      years: "Jul 2025 – Sept 2025",
      highlights:
        "Built gen-AI apps & chatbots using Python/Flask; applied unit testing & design patterns; deployed AI web apps."
    }
  ],
  experience: [
    {
      company: "Health Canada",
      role: "IT Software Solutions Developer",
      when: "Jan 2025 – May 2025",
      where: "Toronto, ON",
      bullets: [
        "Resolved Jira SSL trust by importing internal certs; coordinated rollout with Shared Services across dev/training/prod.",
        "Fixed Metabase field truncation by altering PostgreSQL columns and updating 30+ views; restored permissions.",
        "Restored Nuxeo test env by resolving Oracle DB connection issues with Shared Services.",
        "Contributed to IUCLID 6 deployment (Oracle DBs, Payara, secure FTP); produced architecture diagram for security review.",
        "Implemented Jira staging env cloned from prod (DB setup, config updates, license adjustments)."
      ]
    },
    {
      company: "Health Canada",
      role: "Student IT Software Solutions Developer",
      when: "Aug 2023 – Dec 2024",
      where: "Remote",
      bullets: [
        "Led maintenance for Jira, Nuxeo, IUCLID, Metabase (configs, plugin updates, licensing, access control).",
        "Built enhancements with Angular.js, Java, HTML/CSS, SQL for enterprise health info systems.",
        "Refactored Oracle SQL to improve search and backend performance.",
        "Diagnosed MediaWiki VisualEditor issues; upgraded platform via Linux/SSH to restore reliability."
      ]
    },
    {
      company: "Health Canada",
      role: "Intern IT Software Solutions Developer",
      when: "Jun 2023 – Aug 2023",
      where: "Remote",
      bullets: [
        "Gathered requirements, prototyped internal tools, delivered within security & accessibility standards.",
        "Reduced fraudulent submissions by ~40% via reCaptcha v3 integration.",
        "Built responsive UI components (React/JS/HTML/CSS); optimized queries.",
        "Improved team productivity with better Jira/Confluence docs & workflows."
      ]
    }
  ],
  projects: [
    {
      name: "AI-Powered Personal Assistants",
      stack: "Python, Co:Here NLP, OpenAI, Gadget/Shopify, HTML/CSS/JS",
      points: [
        "Chatbot analyzed self-reported emotions and recommended mood-boosting GTA locations.",
        "Shopify assistant generated personalized product ideas from purchase history & interests.",
        "Designed Figma prototypes; implemented responsive UI components."
      ]
    }
  ]
};
