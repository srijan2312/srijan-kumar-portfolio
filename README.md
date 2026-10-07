# Srijan Kumar — Developer Portfolio

> Personal portfolio website showcasing my projects, technical skills, experience, achievements, certifications, and approach to building modern web applications.

🌐 **Live Portfolio:** Add your Vercel URL here  
💻 **GitHub:** https://github.com/srijan2312  
📄 **Resume:** [View Resume](./public/resume/Srijan_Kumar_Resume.pdf)

---

## About

This is my personal developer portfolio, built to present my work and technical background through a clean, professional, and interactive experience.

The portfolio focuses on:

- Full-stack web development
- Modern JavaScript applications
- React and Next.js
- Node.js and REST APIs
- MongoDB
- Docker and cloud technologies
- Practical, production-oriented engineering

The website also provides detailed case studies for my projects, including their architecture, technologies, engineering decisions, challenges, and implementation details.

---

## Featured Projects

### LinkGraveyard

**Web Resource Preservation & Health Monitoring Platform**

A full-stack application for saving, organizing, and monitoring the health of web resources.

**Key Features**

- JWT-based authentication
- Save and manage URLs
- Categories and tags
- Search and filtering
- Manual link health checks
- Bulk link checking
- Healthy / Redirected / Broken / Never Checked states
- Redirect detection
- Link check history
- Dashboard statistics
- Responsive interface
- User-specific data isolation

**Tech Stack**

React.js · JavaScript · Vite · Node.js · Express.js · MongoDB · Mongoose · JWT · Axios

🔗 **Live Demo:** Add LinkGraveyard live URL here  
💻 **Source Code:** https://github.com/srijan2312/LinkGraveyard

---

### SkillSwap

**Peer-to-Peer Skill Exchange Platform**

A full-stack platform designed to help users exchange knowledge and skills with other users.

**Key Features**

- User authentication
- Skill discovery
- User profiles
- Skill exchange workflow
- Search and filtering
- Responsive UI
- Full-stack REST API architecture

**Tech Stack**

React.js · JavaScript · Node.js · Express.js · MongoDB · REST API

🔗 **Live Demo:** https://skill-swap-peer-to-peer-skill-excha-lovat.vercel.app  
💻 **Source Code:** https://github.com/srijan2312/SkillSwap-Peer-to-Peer-Skill-Exchange-Platform

---

## Tech Stack

### Frontend

- React.js
- Next.js
- JavaScript
- TypeScript
- HTML5
- CSS3
- Tailwind CSS
- Vite

### Backend

- Node.js
- Express.js
- REST APIs
- JWT Authentication
- bcrypt

### Database

- MongoDB
- Mongoose

### DevOps & Tools

- Git
- GitHub
- Docker
- AWS
- Vercel
- Render
- Postman
- VS Code

---

## Portfolio Features

### Project Explorer

Projects can be explored through dedicated case-study pages containing:

- Project overview
- Problem statement
- Solution
- Architecture
- Features
- Technologies
- Engineering challenges
- Technical decisions
- Results
- GitHub repository
- Live deployment

### Responsive Design

The portfolio is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile

### Accessibility

The interface includes:

- Semantic HTML
- Keyboard-friendly interactions
- Accessible labels
- Focus states
- Responsive navigation

### Performance & SEO

The portfolio uses Next.js features for:

- Optimized page rendering
- Static generation where appropriate
- Optimized fonts
- Metadata
- Sitemap
- Robots configuration
- Open Graph metadata

---

## Project Structure

    srijan-kumar-portfolio/
    │
    ├── public/
    │   └── resume/
    │       └── Srijan_Kumar_Resume.pdf
    │
    ├── src/
    │   ├── app/
    │   │   ├── api/
    │   │   ├── projects/
    │   │   │   └── [slug]/
    │   │   ├── error.tsx
    │   │   ├── layout.tsx
    │   │   ├── loading.tsx
    │   │   ├── not-found.tsx
    │   │   ├── page.tsx
    │   │   ├── robots.ts
    │   │   └── sitemap.ts
    │   │
    │   ├── components/
    │   │   ├── hero/
    │   │   ├── icons/
    │   │   ├── layout/
    │   │   ├── projects/
    │   │   ├── sections/
    │   │   └── ui/
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
    │
    ├── .env.example
    ├── .gitignore
    ├── next.config.ts
    ├── package.json
    ├── README.md
    └── tsconfig.json

---

## Architecture

The portfolio follows a component-based Next.js architecture.

    Visitor
       │
       ▼
    Next.js App Router
       │
       ├───────────────┬────────────────┐
       ▼               ▼                ▼
    Sections        Projects           Pages
       │               │
       ▼               ▼
    Data Modules   Project Data
                       │
                       ▼
                 Case Studies

The application keeps content-driven data separate from reusable UI components, making projects and other portfolio sections easier to maintain.

---

## Getting Started

### 1. Clone the repository

    git clone https://github.com/srijan2312/srijan-kumar-portfolio.git

### 2. Navigate into the project

    cd srijan-kumar-portfolio

### 3. Install dependencies

    npm install

### 4. Configure environment variables

Create a `.env.local` file if required by the project.

Use `.env.example` as the reference.

    cp .env.example .env.local

Do not commit `.env.local` or any secret values to GitHub.

### 5. Start the development server

    npm run dev

Open `http://localhost:3000` in your browser.

---

## Available Scripts

### Development

    npm run dev

Starts the Next.js development server.

### Production Build

    npm run build

Creates an optimized production build.

### Production Server

    npm run start

Runs the production build locally.

### Tests

    npm run test

Runs the automated test suite.

---

## Environment Variables

Environment variables should be stored locally and never committed to GitHub.

Example:

    NEXT_PUBLIC_SITE_URL=

The actual environment variables required by the project should be defined in `.env.example`.

---

## Testing

The project includes automated tests for important application behavior.

Test files include:

    tests/
    ├── github.test.ts
    ├── project-filters.test.tsx
    ├── projects-data.test.ts
    ├── site-data.test.ts
    └── setup.ts

Run the test suite with:

    npm run test

---

## Deployment

The portfolio is designed to be deployed using Vercel.

Deployment flow:

    GitHub Repository
           │
           ▼
         Vercel
           │
           ▼
      Production Build
           │
           ▼
      Live Portfolio

Once GitHub and Vercel are connected, new pushes to the production branch can trigger new deployments automatically.

---

## Design Philosophy

The portfolio intentionally avoids a generic template-style appearance.

The design focuses on:

- Editorial typography
- Strong visual hierarchy
- Dark professional interface
- Subtle gradients
- Minimal animations
- Structured project presentation
- Clear technical information
- Responsive layouts

The goal is to make the portfolio feel like a developer's engineering workspace rather than a generic portfolio template.

---

## Engineering Principles

### Keep the architecture understandable

The project uses straightforward architecture without unnecessary abstractions or over-engineering.

### Reusable components

Common UI patterns are implemented as reusable components to reduce duplication.

### Data-driven project pages

Project information is maintained through structured project data instead of duplicating the same information across multiple pages.

### Type safety

TypeScript types are used for structured application data and component interfaces.

### Maintainability

The project favors solutions that are easy to understand, modify, test, and explain during technical discussions.

### Performance

Next.js features are used where they provide practical benefits without unnecessarily complicating the application.

---

## Why I Built This

I built this portfolio to demonstrate more than just a list of technologies.

Each project is presented with its:

- Problem
- Solution
- Architecture
- Features
- Technical decisions
- Challenges
- Engineering trade-offs

This makes the portfolio useful both as a personal website and as a technical representation of my development work.

---

## Future Improvements

Potential future improvements include:

- More detailed project case studies
- Additional project demos
- Improved analytics
- More interactive architecture visualizations
- Additional accessibility improvements
- Performance monitoring
- Further SEO optimization

These improvements are intentionally kept outside the current scope to maintain a simple and maintainable codebase.

---

## Contact

**Srijan Kumar**

Full-Stack Software Engineer

📍 Bettiah, Bihar, India

📧 srijankumar11627@gmail.com

### Connect

- GitHub: https://github.com/srijan2312
- LinkedIn: Add your LinkedIn URL here
- Portfolio: Add your deployed portfolio URL here

---

## License

This project is a personal portfolio website.

The source code is publicly available for reference and learning. Personal content, resume information, project-specific content, images, and other personal assets should not be reused without permission.

---

## Author

**Srijan Kumar**

Computer Science Engineering Graduate  
Full-Stack Software Engineer

Built with **Next.js, React, TypeScript, and modern web technologies.**
