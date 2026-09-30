// src/components/sections/Projects.tsx
"use client";

import { cn } from "@/lib/utils";
import { FadeIn } from "../ui/FadeIn";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "../ui/ProjectCard";

const projects = [
  {
    title: "B2B Quote — Replacing Excel with a two-sided flow",
    description:
      "Sales quoted by Excel and email. After watching where they stalled, I designed a cart-style builder for buyers and an admin for staff.",
    tags: [
      "Product design",
      "Remix",
      "GraphQL",
      "AWS SES",
      "Polaris",
    ],
    href: "/projects/b2b-quote",
    image: "/images/projects/b2b-quote/b2b-quote-hero1.webp",
    kind: "Case study",
    meta: "MTI Corporation · 2022 – present",
    video: "/images/projects/b2b-quote/quote_flow_done.mp4",
    metrics: [
      { label: "Faster processing", value: "83%" },
      { label: "Products", value: "30K+" },
    ],
  },
  {
    title: "TagWise AI — Designing trust into AI tagging",
    kind: "UX Case Study",
    description:
      "Merchants didn't trust AI writing to their live store. I designed a staging state where every AI tag is visible, editable, and reversible before it ships.",
    tags: [
      "Interaction design",
      "UX research",
      "React",
    ],
    meta: "2025",
    href: "/projects/tagwise-ai",
    image: "/images/projects/tagwise/tagwise.webp",
    metrics: [
      { label: "Lower perceived latency", value: "40%" },
      { label: "At 100+ items", value: "60fps" },
    ],
  },
    {
    title: "AI Component Playground — Making streaming legible",
    description:
      "A text-to-component tool where the hard part was the wait. A two-phase display turns generation into readable progress.",
    tags: ["Interaction design", "Next.js", "Sandpack"],
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
      title: "MTI Storefront — Information architecture for 30K products",
      description:
        "Rebuilt a 30K-product B2B catalog on Shopify: modular sections marketing can edit on their own, multi-level navigation, search that understands industrial part numbers, and product pages that adapt to guests, verified customers, and staff.",
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
