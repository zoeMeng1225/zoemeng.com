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
      "Architected a B2B quote ecosystem using React, Remix, and Polaris UI — reducing quote processing time by 83% through optimized server-side data fetching and parallelized API requests.",
      "Engineered a decoupled state management system using Redux Toolkit, enabling conflict-free simultaneous management of Retail and Wholesale carts.",
      "Built an automated document pipeline combining jsPDF, html2canvas, and AWS SES for client-side PDFs and transactional emails.",
      "Achieved 90% test coverage on critical checkout flows using Jest and React Testing Library.",
    ],
  },
  {
    period: "May 2020 — Feb 2022",
    title: "Frontend Developer (Independent Projects)",
    company: "Remote",
    companyDetail: null,
    location: "Remote",
    highlights: [
      "Built a travel planning dashboard with React and Google Maps API, featuring real-time route optimization across 50+ locations.",
      "Optimized Core Web Vitals (LCP reduced by 25%) for a SaaS application through route-based code splitting and lazy loading.",
      "Developed SEO-optimized marketing sites using Next.js SSG/ISR with responsive Figma-to-code layouts.",
    ],
  },
];

export function Experiences() {
  return (
    <section className={cn("mb-24")}>
      <FadeIn>
        <SectionHeading id="work">Work Experience</SectionHeading>
      </FadeIn>

      <div className={cn("space-y-12")}>
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
                    "border-1-2 border-border hover:border-accent",
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
