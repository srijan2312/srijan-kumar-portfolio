import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { site } from "@/data/site";
import { socials } from "@/data/socials";
import { allSkills } from "@/data/skills";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jbmono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  themeColor: "#070709",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Srijan Kumar — Full-Stack Software Engineer",
    template: "%s | Srijan Kumar",
  },
  description:
    "Portfolio of Srijan Kumar, a Computer Science Engineering graduate and Full-Stack Software Engineer building scalable MERN applications with React, Node.js, MongoDB, Docker and AWS.",
  keywords: [
    "Srijan Kumar",
    "Full-Stack Software Engineer",
    "MERN Developer",
    "React Developer",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: `${site.name} — Portfolio`,
    title: "Srijan Kumar — Full-Stack Software Engineer",
    description:
      "I build scalable, production-oriented web applications with modern JavaScript — React and Next.js up front, Node.js APIs and MongoDB behind them.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Srijan Kumar — Full-Stack Software Engineer",
    description:
      "Full-stack MERN developer portfolio: projects, architecture case studies, skills and contact.",
  },
};

function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    jobTitle: site.role,
    description: site.tagline,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bettiah",
      addressRegion: "Bihar",
      addressCountry: "IN",
    },
    email: `mailto:${site.email}`,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Chandigarh University",
    },
    knowsAbout: allSkills,
    sameAs: socials
      .filter((s) => s.id !== "email")
      .map((s) => s.href),
  };
}

function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${site.name} — Portfolio`,
    url: site.url,
    author: { "@type": "Person", name: site.name },
    inLanguage: "en",
  };
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
        suppressHydrationWarning
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink-950 text-paper-50">
        <script
          // Runs before first paint: enables JS-gated CSS states (e.g. scroll
          // reveals) without a flash. No-JS users keep visible content.
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-paper-50 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink-950"
        >
          Skip to content
        </a>
        <div aria-hidden="true" className="noise-overlay" />
        <SiteHeader />
        <div id="main" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
