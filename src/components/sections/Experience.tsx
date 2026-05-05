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
      "Built a B2B quote management app using Remix and Polaris Design System. Set up server-side data fetching and parallelized API calls, which reduced quote processing time by 83%.",
      "Created a dual-cart system with Redux Toolkit so Retail and Wholesale customers could be managed separately without data conflicts.",
      "Set up an automated PDF generation flow using jsPDF, html2canvas, and AWS SES to create quotes and send them via email, replacing a manual process",
      "Added unit tests with Jest and React Testing Library, reaching 90% coverage on checkout flows and catching regressions earlier.",
      "Worked with sales and ops teams to scope features, and wrote internal docs to help new devs get up to speed faster",
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
