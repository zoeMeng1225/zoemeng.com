// src/components/sections/Experience.tsx
"use client";
import { cn } from "@/lib/utils";
import { FadeIn } from "../ui/FadeIn";
import { SectionHeading } from "../ui/SectionHeading";

const experiences = [
  {
    period: "Mar 2022 — Present",
    title: "Full Stack Web Engineer (Contract)",
    company: "MTI Corporation",
    companyDetail:
      "Materials Science Equipment, Est. by MIT & UC Berkeley Researchers",
    location: "Richmond, CA",
    highlights: [
      "Joined when the site was on Network Solutions with no custom code. Migrated to Shopify and built the full stack from scratch – Remix (Node.js) on the server, Prisma ORM for data, React on the frontend.",
      "Replaced a manual quote workflow (Excel + email) with a full-stack quote system. Built server-side data loaders and REST/GraphQL endpoints to handle Retail vs. Wholesale pricing logic, cutting processing time by 83%.",
      "Built a multi-level tagging and categorization system for 30K+ products using Shopify's Collection and Tag APIs. Set up server-side logic to auto-assign products to collections based on tag hierarchy.",
      "Rebuilt the Product Detail Page with wholesale tiered pricing, add-on products, staff-only internal notes, and purchase-gated product manuals – gating logic built with Shopify Customer ID API on the server side.",
      "Set up a server-side pipeline with Node.js, html2canvas, and AWS SES that generates PDF quotes and emails them automatically, replacing a fully manual process.",
      "Added E2E tests with Cypress and unit tests with Jest, reaching 90% coverage on critical data mutations.",
    ],
  },
  {
    period: "May 2020 — Feb 2022",
    title: "Frontend Developer (Independent Projects)",
    company: "Remote",
    companyDetail: null,
    location: "Remote",
    highlights: [
      "Built marketing sites and real-time dashboards with React, Next.js (SSG/ISR), and Google Maps API during a training program.",
      "Practiced performance tuning on these projects, reduced LCP by 25% through route-based code splitting and lazy loading.",
    ],
  },
];

export function Experiences() {
  return (
    <section className={cn("mb-24")}>
      <FadeIn>
        <SectionHeading id="work">Work Experience</SectionHeading>
      </FadeIn>

      <div className={cn("space-y-12 mt-1")}>
        {experiences.map((exp, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <div className={cn("flex items-baseline justify-between mb-1")}>
              <h3
                className={cn("font-display font-semibold text-text-primary")}
              >
                {exp.title}
              </h3>
              <span
                className={cn(
                  "text-sm text-text-tertiary whitespace-nowrap ml-4",
                )}
              >
                {exp.period}
              </span>
            </div>
            <p className={cn("text-sm text-accent mb-4")}>
              {exp.company}
              {exp.companyDetail && <span> · {exp.companyDetail}</span>}
            </p>

            <ul className={cn("space-y-2")}>
              {exp.highlights.map((h, j) => (
                <li
                  key={j}
                  className={cn(
                    "text-sm text-text-secondary leading-relaxed pl-4",
                    "border-l-2 border-border hover:border-accent",
                    "transition-colors",
                  )}
                >
                  {h}
                </li>
              ))}
            </ul>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
