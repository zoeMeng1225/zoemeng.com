// src/components/sections/Projects.tsx
"use client";

import { cn } from "@/lib/utils";
import { FadeIn } from "../ui/FadeIn";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "../ui/ProjectCard";

const projects = [
  {
    title: "B2B Quote Automation Ecosystem",
    description:
      "Dual-interface system bridging customers and sales teams. Engineered a decoupled quote cart, automated PDF generation, and event-driven email workflows.",
    tags: [
      "React",
      "Remix",
      "Redux Toolkit",
      "GraphQL",
      "AWS SES",
      "Polaris UI",
    ],
    href: "/projects/b2b-quote",
    image: "/images/projects/b2b-quote/b2b-quote-hero1.webp",
    metrics: [
      { label: "Faster processing", value: "83%" },
      { label: "Test coverage", value: "90%" },
    ],
  },
  {
    title: "TagWise AI — SEO Tagging Platform",
    description:
      "AI-powered SEO tag generation with human-in-the-loop staging workflow. Designed a non-destructive staging system to ensure data integrity before committing via Shopify GraphQL API.",
    tags: [
      "React 18",
      "TypeScript",
      "Prisma ORM",
      "OpenAI API",
      "Tailwind CSS",
      "Shopify App Bridge",
    ],
    href: "/projects/tagwise-ai",
    image: "/images/projects/tagwise/tagwise.webp",
    metrics: [
      { label: "Industry categories", value: "13" },
      { label: "Scoring dimensions", value: "6" },
    ],
  },
  {
    title: "AI Component Playground",
    description:
      "Describe a UI in plain English, get a working React + Tailwind component with real-time preview. Features streaming AI generation via Vercel AI SDK and live Sandpack preview.",
    tags: ["Next.js", "TypeScript", "OpenAI API", "Sandpack", "Streaming"],
    href: "/projects/ai-playground",
    image: "/images/projects/ai-playground/aiPlayground_hero.webp",
    metrics: [
      { label: "First token", value: "<2s" },
      { label: "Templates", value: "10" },
      { label: "Live preview", value: "✓" },
    ],
  },
  {
    title: "AI Code Reviewer",
    description:
      "Paste code and get instant, structured AI feedback with real-time streaming. Supports three review modes (Quick, Deep, Security), severity-tagged issues, and a 0-100 code quality score.",
    tags: [
      "Next.js 14",
      "TypeScript",
      "OpenAI API",
      "Streaming",
      "Monaco Editor",
    ],
    href: "/projects/ai-code-reviewer",
    image: "/images/projects/ai-code-reviewer/code-reviewer-hero.webp",
    metrics: [
      { label: "Review modes", value: "3" },
      { label: "Languages", value: "8" },
      { label: "Open source", value: "✓" },
    ],
  },
  {
    title: "High-Performance B2B E-commerce Platform",
    description:
      "Architected a modular Shopify theme with advanced fuzzy search and role-based access control (RBAC) for a 10,000+ SKU catalog, reducing frontend maintenance by 60%.",
    tags: ["Liquid", "JavaScript (ES6+)", "SCSS", "JSON", "Shopify"],
    href: "/projects/mti",
    image: "/images/projects/mti/mti_website.webp",
    metrics: [
      { label: "Maintenance reduction", value: "60%" },
      { label: "Active SKUs", value: "10k+" },
    ],
  },
];

export function Projects() {
  return (
    <section className={cn("mb-24")}>
      <FadeIn>
        <SectionHeading id="projects">Selected Projects</SectionHeading>
      </FadeIn>

      <div className={cn("space-y-12")}>
        {projects.map((project, index) => (
          <FadeIn key={project.title} delay={index * 0.1}>
            <ProjectCard {...project} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
