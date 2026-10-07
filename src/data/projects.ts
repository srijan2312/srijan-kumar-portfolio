import type { Project, ProjectCategory } from "@/types";

/**
 * Project case studies.
 *
 * The portfolio currently contains exactly two projects:
 * 1. LinkGraveyard
 * 2. SkillSwap
 *
 * Content is based on the implemented project functionality.
 *
 * - `github` contains the verified public repository URL.
 * - `live` contains the verified deployed application URL.
 * - `period` is omitted because no project dates are configured.
 * - `results` contains qualitative outcomes only.
 */

export const projects: Project[] = [
  {
    slug: "linkgraveyard",
    title: "LinkGraveyard",
    tagline: "Web Resource Preservation & Health Monitoring Platform",
    category: "full-stack",

    description:
      "A full-stack web application for saving, organizing, and monitoring the health of web resources from a single workspace.",

    problem:
      "Useful web resources often become difficult to manage over time. Saved links can become broken, redirect to different destinations, or simply disappear among bookmarks and scattered notes, making it difficult to know which resources are still reliable.",

    solution:
      "Built LinkGraveyard, a full-stack MERN application where authenticated users can save web resources, organize them with categories and tags, search their collection, manually check link health, detect redirects, and review the history of previous checks. The application keeps each user's links isolated and provides a dashboard showing the current health of their saved resources.",

    architecture: [
      {
        label: "Client",
        detail: "Responsive interface for managing saved resources and link health",
      },
      {
        label: "React.js",
        detail:
          "Dashboard, link management, filtering, categories, history, and settings",
      },
      {
        label: "REST API",
        detail:
          "JSON endpoints for authentication, links, categories, and health checks",
      },
      {
        label: "Node.js / Express",
        detail:
          "Business logic, authentication middleware, ownership checks, and URL checking",
      },
      {
        label: "MongoDB",
        detail:
          "Persistent storage for users, saved links, and link-check history",
      },
    ],

    features: [
      "User registration and login with JWT-based authentication",
      "Protected routes with user-specific data access",
      "Save, edit, and delete web resources",
      "Organize saved links with categories and tags",
      "Search and filter saved resources",
      "Manual health check for individual links",
      "Check multiple saved links from the dashboard",
      "Health states for never checked, healthy, redirected, and broken links",
      "Redirect detection without incorrectly treating a redirected response as a healthy original URL",
      "Link-check history with response information and timestamps",
      "Dashboard with current link-health statistics",
      "Responsive interface for desktop and mobile",
      "Profile, password, theme, and account settings",
    ],

    technologies: [
      "React.js",
      "JavaScript",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "REST APIs",
      "JWT Authentication",
      "bcryptjs",
      "Axios",
      "CSS",
    ],

    challenges: [
      {
        title: "Determining the real health of a URL",
        detail:
          "A URL can respond successfully after being redirected somewhere else. The checker therefore needs to distinguish the original URL's response from the final destination instead of simply treating every reachable final page as healthy.",
      },
      {
        title: "Keeping a useful link-check history",
        detail:
          "Each health check needs to preserve useful information such as status, response time, timestamps, redirect information, and errors so users can understand how a resource has behaved over time.",
      },
      {
        title: "Protecting server-side URL checks",
        detail:
          "URL checking is performed by the backend, so requests need basic safeguards around accepted protocols, request timeouts, redirect handling, and potentially unsafe internal destinations.",
      },
      {
        title: "Keeping user data isolated",
        detail:
          "Saved resources and their check history are personal data. Authentication and ownership checks ensure that users can only access and modify resources belonging to their own account.",
      },
    ],

    engineeringDecisions: [
      "Used a MERN architecture with a React frontend, Express/Node.js REST API, and MongoDB persistence to keep the project straightforward and explainable.",
      "Used JWT-based authentication with protected API routes so every link operation is associated with an authenticated user.",
      "Stored saved links and check history as separate MongoDB collections so the current link state remains simple while historical checks can grow independently.",
      "Made link health an explicit state so the dashboard, filters, and link details can all use the same source of truth.",
      "Kept URL checking on the backend because the server is responsible for making HTTP requests and recording the resulting health information.",
      "Added redirect-aware checking so a redirected URL is represented as redirected rather than being silently classified as healthy.",
    ],

    results: [
      "Delivered a complete full-stack web resource management platform with authentication, link CRUD, categorization, health checking, redirect detection, check history, and a dashboard.",
      "Deployed the application as a live web application with a separate GitHub repository.",
    ],

    github: "https://github.com/srijan2312/LinkGraveyard",
    live: "https://link-graveyard.vercel.app",

    featured: true,
  },

  {
    slug: "skillswap",
    title: "SkillSwap",
    tagline: "Peer-to-Peer Skill Sharing Platform",
    category: "full-stack",

    description:
      "A full-stack platform where users can discover people with specific skills, offer their own skills, and connect with other users for peer-to-peer learning and skill exchange.",

    problem:
      "People who want to learn a skill and people willing to teach one rarely find each other — there was no single place to publish what you can teach, say what you want to learn, and request a skill exchange.",

    solution:
      "Built SkillSwap, a full-stack MERN platform with JWT-based authentication. Users register and create profiles listing the skills they can teach and the skills they want to learn, discover and search the community for relevant users and skills, manage their skill listings, and send, receive, and manage skill-exchange requests from a personal dashboard.",

    architecture: [
      {
        label: "Client",
        detail: "Responsive UI for desktop and mobile",
      },
      {
        label: "React.js",
        detail:
          "Profiles, skill discovery, listings, and request management",
      },
      {
        label: "REST API",
        detail:
          "JSON endpoints for authentication, users, skills, and exchange requests",
      },
      {
        label: "Node.js / Express",
        detail: "Business logic with JWT-protected routes",
      },
      {
        label: "MongoDB",
        detail:
          "Persistent storage for users, skills, and exchange requests",
      },
      {
        label: "Cloudinary",
        detail: "Cloud-based storage for user profile images",
      },
    ],

    features: [
      "User registration, login, and JWT-based authentication",
      "User profiles with skills they can teach and skills they want to learn",
      "Browse and search users and skills",
      "Skill-based matching and discovery",
      "Create, edit, and manage skill listings",
      "Cloudinary-powered profile image uploads",
      "Request or initiate a skill exchange with another user",
      "Manage incoming and outgoing skill requests",
      "User dashboard for managing skills and exchanges",
      "Automatic data refresh for cross-user updates",
      "Responsive UI for desktop and mobile",
    ],

    technologies: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT Authentication",
      "Cloudinary",
      "CSS",
      "Tailwind CSS",
    ],

    challenges: [
      {
        title: "Representing two-sided skill profiles",
        detail:
          "Every user is both a potential teacher and a learner. Profiles model teachable skills and wanted skills as separate facets so discovery can match across both directions.",
      },
      {
        title: "Managing the exchange-request lifecycle",
        detail:
          "An exchange involves two users moving through request, accept/decline, and resolution states. Requests are modeled explicitly so incoming and outgoing queues stay consistent for both sides.",
      },
      {
        title: "Making skill discovery searchable",
        detail:
          "Discovery has to work across users and their skill lists. Skill listings are stored as queryable data so browse and search can work against the application's data rather than relying only on client-side filtering.",
      },
    ],

    engineeringDecisions: [
      "Used JWT-based authentication with protected routes so profiles, listings, and exchange requests are tied to verified users.",
      "Designed the REST API around distinct resources — users, skills, and exchange requests — keeping each lifecycle independent.",
      "Persisted profiles and skill data in MongoDB, matching the flexible structure of user-generated skill information.",
      "Used Cloudinary for profile image storage instead of keeping uploaded images on the application server.",
      "Implemented lightweight polling on relevant pages so changes made by one user can appear for other users without adding the complexity of WebSockets.",
      "Built a dedicated dashboard aggregating each user's listings with their incoming and outgoing requests in one place.",
    ],

    results: [
      "Delivered a production-deployed full-stack skill-sharing platform with JWT authentication, MongoDB persistence, Cloudinary media storage, skill discovery, user profiles, and skill-exchange request management.",
    ],

    github:
      "https://github.com/srijan2312/SkillSwap-Peer-to-Peer-Skill-Exchange-Platform",

    live: "https://skill-swap-peer-to-peer-skill-excha-lovat.vercel.app",

    featured: true,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

/** Filter helper shared by the /projects page and its tests. */
export function filterProjects(
  list: Project[],
  category: ProjectCategory | "all",
): Project[] {
  if (category === "all") return list;
  return list.filter((p) => p.category === category);
}