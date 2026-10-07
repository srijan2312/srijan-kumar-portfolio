# Srijan Kumar — Developer Portfolio

<p align="center">
  <strong>Full-Stack Software Engineer</strong>
</p>

<p align="center">
  A modern, production-oriented developer portfolio built with Next.js, TypeScript and Tailwind CSS.
</p>

<p align="center">
  <a href="https://srijan-kumar-portfolio-alpha.vercel.app">
    <img src="https://img.shields.io/badge/Live%20Portfolio-Visit-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Portfolio" />
  </a>
  <a href="https://github.com/srijan2312/srijan-kumar-portfolio">
    <img src="https://img.shields.io/badge/Source%20Code-GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repository" />
  </a>
  <a href="https://www.linkedin.com/in/srijan-kumar-2b41b124a">
    <img src="https://img.shields.io/badge/LinkedIn-Profile-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
</p>

---

## 🌐 Live Website

**[Visit Portfolio →](https://srijan-kumar-portfolio-alpha.vercel.app)**

The portfolio presents my:

- Technical skills
- Professional experience
- Full-stack projects
- Project architecture and engineering decisions
- Certifications
- Achievements
- Resume
- Contact information

---

## 👨‍💻 About

I am a **Computer Science Engineering graduate** focused on full-stack web development and building practical, production-oriented applications.

My development interests include:

- Full-stack web applications
- REST API development
- Database-driven systems
- Authentication and authorization
- Modern React applications
- Next.js applications
- Cloud deployment
- Containerized applications

### Primary Technologies

`JavaScript` · `TypeScript` · `React` · `Next.js` · `Node.js` · `Express` · `MongoDB` · `Docker` · `AWS`

---

# ✨ Portfolio Highlights

The portfolio is designed as more than a static resume page.

### Project Case Studies

Each featured project contains structured information including:

- Project overview
- Problem statement
- Solution
- Key features
- Technology stack
- System architecture
- Engineering challenges
- Engineering decisions
- Project links

### Interactive Project Explorer

Projects can be explored through:

- Category filtering
- Dedicated project pages
- GitHub repositories
- Live demonstrations
- Architecture diagrams

### Professional Sections

The website includes dedicated sections for:

- About
- Skills
- Experience
- Projects
- Certifications
- Achievements
- Resume
- Contact

### Production Features

- Responsive design
- SEO metadata
- Open Graph metadata
- Sitemap
- Robots configuration
- Custom error handling
- Loading states
- Custom 404 page
- GitHub integration
- Accessible navigation
- Responsive project layouts

---

# 🚀 Featured Projects

## 01 — LinkGraveyard

### Web Resource Preservation & Health Monitoring Platform

**LinkGraveyard** is a full-stack web application for saving, organizing and monitoring the health of web resources.

Instead of simply bookmarking URLs, the application allows users to keep track of whether saved resources are still reachable, redirected or broken.

### Core Features

- User authentication
- JWT-based sessions
- Secure password hashing
- URL management
- Categories
- Tags
- Search and filtering
- Manual link health checks
- Bulk link checking
- Healthy / Redirected / Broken status
- Never Checked state
- Redirect detection
- Link check history
- Dashboard statistics
- User-specific data isolation
- Responsive interface

### Architecture

```text
┌──────────────────────┐
│      React Client    │
│   Vite + JavaScript  │
└──────────┬───────────┘
           │
           │ REST API
           ▼
┌──────────────────────┐
│   Node.js + Express  │
│    Authentication    │
│   Link Health Logic  │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│       MongoDB        │
│      Mongoose        │
│                      │
│ Users                │
│ Links                │
│ Link Check History   │
└──────────────────────┘
```

### Technology Stack

**Frontend**

- React
- JavaScript
- Vite
- React Router
- Axios
- Lucide React

**Backend**

- Node.js
- Express.js
- REST APIs
- JWT
- bcryptjs

**Database**

- MongoDB
- Mongoose

### Links

- **Live Demo:** https://link-graveyard.vercel.app/
- **Source Code:** https://github.com/srijan2312/LinkGraveyard

---

# 02 — SkillSwap

### Peer-to-Peer Skill Exchange Platform

**SkillSwap** is a full-stack platform designed around peer-to-peer skill discovery and exchange.

Users can create profiles, showcase their skills and discover other users with complementary skills.

### Core Features

- User authentication
- User profiles
- Skill discovery
- Skill exchange
- Search
- Filtering
- Connection workflows
- Responsive interface

### Technology Stack

- React
- JavaScript
- Node.js
- Express.js
- MongoDB
- REST APIs

### Links

- **Live Demo:** https://skill-swap-peer-to-peer-skill-excha-lovat.vercel.app
- **Source Code:** https://github.com/srijan2312/SkillSwap-Peer-to-Peer-Skill-Exchange-Platform

---

# 🧰 Technology Stack

## Frontend

| Technology | Purpose |
|---|---|
| Next.js | Application framework |
| React | UI development |
| TypeScript | Type safety |
| JavaScript | Application logic |
| Tailwind CSS | Styling |
| Lucide React | UI icons |

## Backend & Data

| Technology | Purpose |
|---|---|
| Node.js | Runtime |
| Express.js | REST API development |
| MongoDB | Database |
| Mongoose | MongoDB ODM |
| REST API | Client-server communication |

## Development & Deployment

| Technology | Purpose |
|---|---|
| Git | Version control |
| GitHub | Source control and repository hosting |
| Vercel | Production deployment |
| npm | Dependency management |
| Docker | Containerization |

---

# 🏗️ Application Architecture

The portfolio follows a component-driven Next.js architecture.

```text
                        ┌─────────────────────┐
                        │     Next.js App     │
                        │                     │
                        │  App Router         │
                        │  TypeScript         │
                        │  React Components   │
                        └──────────┬──────────┘
                                   │
              ┌────────────────────┼────────────────────┐
              │                    │                    │
              ▼                    ▼                    ▼
       ┌─────────────┐      ┌─────────────┐      ┌─────────────┐
       │    Pages    │      │ Components  │      │    Data     │
       │             │      │             │      │             │
       │ Home        │      │ Hero        │      │ Projects    │
       │ Projects    │      │ Sections    │      │ Skills      │
       │ Case Study  │      │ Projects    │      │ Experience  │
       └─────────────┘      └─────────────┘      └─────────────┘
                                   │
                                   ▼
                           ┌─────────────┐
                           │  Utilities  │
                           │             │
                           │ GitHub API  │
                           │ Helpers     │
                           └─────────────┘
```

---

# 📁 Project Structure

```text
srijan-kumar-portfolio/
│
├── public/
│   ├── resume/
│   │   └── Srijan_Kumar_Resume.pdf
│   └── ...
│
├── src/
│   │
│   ├── app/
│   │   ├── api/
│   │   │   └── github/
│   │   │       └── route.ts
│   │   │
│   │   ├── projects/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── error.tsx
│   │   ├── loading.tsx
│   │   ├── not-found.tsx
│   │   ├── opengraph-image.tsx
│   │   ├── robots.ts
│   │   ├── sitemap.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── hero/
│   │   ├── icons/
│   │   ├── layout/
│   │   ├── projects/
│   │   └── sections/
│   │
│   ├── data/
│   │   ├── achievements.ts
│   │   ├── certifications.ts
│   │   ├── experience.ts
│   │   ├── nav.ts
│   │   ├── projects.ts
│   │   ├── site.ts
│   │   ├── skills.ts
│   │   └── socials.ts
│   │
│   ├── lib/
│   │   ├── github.ts
│   │   └── utils.ts
│   │
│   └── types/
│       └── index.ts
│
├── tests/
│   ├── github.test.ts
│   ├── project-filters.test.tsx
│   ├── projects-data.test.ts
│   └── site-data.test.ts
│
├── docs/
│   └── ENGINEERING_REPORT.md
│
├── .env.example
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
├── vitest.config.ts
└── README.md
```

---

# ⚙️ Getting Started

## Prerequisites

Make sure the following are installed:

- Node.js
- npm
- Git

## 1. Clone the Repository

```bash
git clone https://github.com/srijan2312/srijan-kumar-portfolio.git
```

## 2. Enter the Project

```bash
cd srijan-kumar-portfolio
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Start Development Server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

---

# 🧪 Development Commands

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Production Server

```bash
npm run start
```

### Tests

```bash
npm run test
```

---

# 🔍 Testing

The project includes automated tests covering important application behaviour.

Current test areas include:

- Project data integrity
- Project slug validation
- Project category validation
- Project URL validation
- Project filtering
- Project lookup
- GitHub-related functionality
- Site data validation

Run the test suite with:

```bash
npm run test
```

Before deploying a major change, a production build can be verified with:

```bash
npm run build
```

---

# 🔐 Environment Configuration

Environment-specific configuration can be supplied through:

```text
.env.local
```

Example configuration is provided through:

```text
.env.example
```

Private credentials and environment variables should never be committed to GitHub.

---

# 🚢 Deployment

The portfolio is deployed on **Vercel** and connected to the GitHub repository.

### Production URL

**https://srijan-kumar-portfolio-alpha.vercel.app**

The project uses Next.js and Vercel's native deployment workflow.

### Deployment Workflow

```text
Local Development
       │
       ▼
   Git Commit
       │
       ▼
   Git Push
       │
       ▼
     GitHub
       │
       ▼
     Vercel
       │
       ▼
Production Deployment
```

Changes can be deployed by pushing to the configured production branch:

```bash
git add .
git commit -m "update portfolio"
git push origin main
```

---

# 📄 Resume

The portfolio includes my resume at:

```text
public/resume/Srijan_Kumar_Resume.pdf
```

The resume can also be accessed directly through the portfolio's Resume section.

---

# 🔗 Important Links

| Resource | Link |
|---|---|
| 🌐 Portfolio | https://srijan-kumar-portfolio-alpha.vercel.app |
| 💼 LinkedIn | https://www.linkedin.com/in/srijan-kumar-2b41b124a |
| 🐙 GitHub | https://github.com/srijan2312 |

---

# 📦 Project Repositories

### LinkGraveyard

**Repository**

https://github.com/srijan2312/LinkGraveyard

**Live Application**

https://link-graveyard.vercel.app/

---

### SkillSwap

**Repository**

https://github.com/srijan2312/SkillSwap-Peer-to-Peer-Skill-Exchange-Platform

**Live Application**

https://skill-swap-peer-to-peer-skill-excha-lovat.vercel.app

---

# 🎯 Development Philosophy

The portfolio is intentionally focused on:

- Clean component architecture
- Strong TypeScript usage
- Reusable UI components
- Structured project data
- Maintainable code
- Responsive design
- Accessibility
- Performance
- SEO
- Production-ready deployment

The goal is to keep the codebase understandable while still demonstrating practical engineering practices.

---

# 📈 Future Improvements

Potential future improvements include:

- Additional project case studies
- More GitHub activity integrations
- Enhanced project analytics
- Additional performance optimizations
- More interactive architecture visualizations
- Custom domain configuration

---

# 📬 Contact

For professional opportunities, collaboration, or technical discussions:

**LinkedIn:**  
https://www.linkedin.com/in/srijan-kumar-2b41b124a

**GitHub:**  
https://github.com/srijan2312

---

<p align="center">
  Built with Next.js · React · TypeScript · Tailwind CSS
</p>

<p align="center">
  © Srijan Kumar
</p>
