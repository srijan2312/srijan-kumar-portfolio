/**
 * Site-wide identity. Single source of truth for name, role and contact facts.
 * Values mirror the attached resume — do not invent new ones.
 */

export const site = {
  name: "Srijan Kumar",
  firstName: "Srijan",
  role: "Full-Stack Software Engineer",
  tagline:
    "I build scalable, production-oriented web applications with modern JavaScript — React and Next.js up front, Node.js APIs and MongoDB behind them, shipped with Docker and AWS.",
  location: "Bettiah, Bihar, India",
  email: "srijankumar11627@gmail.com",
  phone: "8986480209",
  resumePath: "/resume/Srijan_Kumar_Resume.pdf",
  /** Override at deploy time with NEXT_PUBLIC_SITE_URL. */
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://srijankumar.dev",
} as const;

export const profile = {
  summary:
    "Computer Science Engineering graduate with hands-on experience in full-stack MERN development, building responsive web applications with React.js, Node.js, Express.js, and MongoDB. Skilled in REST API design, JWT-based authentication, and cloud deployment using AWS and Docker. Strong problem-solving foundation with 200+ Data Structures & Algorithms challenges solved, and practical exposure to blockchain development through applied training.",
  education: {
    degree: "Bachelor of Engineering (B.E.), Computer Science Engineering",
    school: "Chandigarh University, Mohali, Punjab",
    period: "July 2022 – June 2026",
  },
} as const;
