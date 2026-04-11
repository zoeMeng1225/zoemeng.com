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
    image: "/images/projects/b2b-quote/b2b-quote-hero.webp", // project screenshot
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
      { label: "Latency reduction", value: "40%" },
      { label: "60fps catalog", value: "100+" },
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
  {
    title: "AI Component Playground",
    description:
      "Generate React components from natural language with real-time preview. Features streaming AI responses, Monaco Editor, and sandboxed code execution.",
    tags: ["Next.js", "TypeScript", "OpenAI API", "Monaco Editor", "Sandpack"],
    href: "/projects/ai-playground",
    image: "/images/projects/mti/mti_website.webp",
    metrics: [{ label: "Initial load", value: "<2s" }],
  },
];

export function Projects() {
  return (
    <section className={cn("mb-24")}>
      <FadeIn>
        <SectionHeading id="projects">Selected Projects</SectionHeading>
      </FadeIn>

      <div className={cn("space-y-6")}>
        {projects.map((project, index) => (
          <FadeIn key={project.title} delay={index * 0.1}>
            <ProjectCard {...project} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
