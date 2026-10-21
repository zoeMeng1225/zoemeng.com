// src/components/sections/Projects.tsx
"use client";

import { cn } from "@/lib/utils";
import { FadeIn } from "../ui/FadeIn";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "../ui/ProjectCard";

const projects = [
  {
    title: "B2B Quote Platform",
    description:
      "Sales quoted with Excel and email. I built a quote cart for buyers and a Remix admin for staff, with live tax, one-click PDFs, and quotes that turn into Shopify orders.",
    tags: ["Remix", "React", "GraphQL", "Redux Toolkit", "Cloudflare D1", "AWS SES"],
    href: "/projects/b2b-quote",
    image: "/images/projects/b2b-quote/b2b-quote-hero1.webp",
    kind: "Case study",
    meta: "MTI Corporation · 2022 – present",
    video: "/images/projects/b2b-quote/quote_flow_done.mp4",
    metrics: [
      { label: "Less time per quote", value: "~80%" },
      { label: "Products", value: "30K+" },
    ],
  },
  {
    title: "TagWise AI",
    kind: "UX Case Study",
    description:
      "A Shopify app that drafts SEO tags with AI. Merchants review every tag in a staging state before anything writes to their live store.",
    tags: ["React", "Remix", "Shopify GraphQL", "Virtualization", "Interaction design"],
    meta: "2025",
    href: "/projects/tagwise-ai",
    image: "/images/projects/tagwise/tagwise.webp",
    metrics: [
      { label: "Lower perceived latency", value: "40%" },
      { label: "At 100+ items", value: "60fps" },
    ],
  },
    {
    title: "AI Component Playground",
    description:
      "A text-to-component tool where the hard part was the wait. A two-phase display turns generation into readable progress.",
    tags: ["Next.js", "Vercel AI SDK", "Streaming", "Sandpack"],
    href: "/projects/ai-playground",
    image: "/images/projects/ai-playground/aiPlayground_hero.webp",
    kind: "Case study",
    meta: "Self-initiated · 2026",
    video: "/images/projects/ai-playground/aiPlayground_done.mp4",
    metrics: [{ label: "First token", value: "<2s" }],
  }
];

const moreWork = [
  {
      title: "AI Code Reviewer",
      description:
        "Paste in code and get a review back as it streams in. Three modes (Quick, Deep, Security), issues tagged by severity, and a quality score from 0 to 100.",
      tags: [
        "Next.js 14",
        "TypeScript",
        "OpenAI API",
        "Streaming",
        "Monaco Editor",
      ],
      href: "/projects/ai-code-reviewer",
      image: "/images/projects/ai-code-reviewer/code-reviewer-hero.webp",
      meta: "Open source · 2026",
      metrics: [
        { label: "Review modes", value: "3" },
        { label: "Languages", value: "8" },
      ],
    },
    {
      title: "MTI Storefront",
      description:
        "Moved a 30K-product B2B catalog from Network Solutions to Shopify. Part-number search that tolerates typos, multi-level categories, and sections the marketing team can edit on their own.",
      tags: ["Information architecture","Shopify","Liquid" ],
      href: "/projects/mti",
      image: "/images/projects/mti/mti_website.webp",
      metrics: [
        { label: "Products", value: "30K+" },
      ],
    },
]

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
      <FadeIn>
      <div className={cn("mt-16")}>
        <h3 className={cn("text-sm font-semibold text-text-primary mb-4")}>
          More work
        </h3>
        <div className={cn("grid gap-6 md:grid-cols-2")}>
          {moreWork.map((project) => (
            <ProjectCard key={project.href} {...project} isCompact />
          ))}
        </div>
      </div>
    </FadeIn>
    </section>
  );
}
