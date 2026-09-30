// src/components/sections/Experience.tsx
"use client";
import { cn } from "@/lib/utils";
import { FadeIn } from "../ui/FadeIn";
import { SectionHeading } from "../ui/SectionHeading";

const experiences = [
  {
    period: "Mar 2022 – Present",
    title: "Full Stack Web Engineer (Contract)",
    company: "MTI Corporation",
    companyDetail:
      "Materials Science Equipment, Est. by MIT & UC Berkeley Researchers",
    summary:
      "As the sole engineer, I migrated a 30K-product B2B site from a static host to Shopify, rebuilt the storefront and staff tools from scratch, and designed a two-sided quote flow that cut processing time 83%.",
  },
  {
    period: "May 2020 – Feb 2022",
    title: "Frontend Developer",
    company: "Independent projects",
    companyDetail: null,
    summary:
      "Built marketing sites and real-time dashboards in React and Next.js alongside an intensive software engineering program (LaiOffer), and a WordPress blog for a community organization. Cut LCP 25% with route-based code splitting.",
  },
];

export function Experiences() {
  return (
    <section className={cn("mb-24")}>
      <FadeIn>
        <SectionHeading id="work">Work Experience</SectionHeading>
      </FadeIn>

      <div className={cn("space-y-10 mt-1")}>
        {experiences.map((exp, index) => (
          <FadeIn key={exp.period} delay={index * 0.1}>
            <div className={cn("flex items-baseline justify-between mb-1")}>
              <h3 className={cn("font-display font-semibold text-text-primary")}>
                {exp.title}
              </h3>
              <span
                className={cn(
                  "text-sm text-text-tertiary whitespace-nowrap ml-4 tabular-nums",
                )}
              >
                {exp.period}
              </span>
            </div>
            <p className={cn("text-sm text-accent mb-3")}>
              {exp.company}
              {exp.companyDetail && <span> · {exp.companyDetail}</span>}
            </p>
            <p
              className={cn(
                "text-sm text-text-secondary leading-relaxed pl-4",
                "border-l-2 border-border",
              )}
            >
              {exp.summary}
            </p>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.2}>
        <a
          href="/ZoeMeng_FrontEnd_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-block mt-10 text-sm font-medium text-accent",
            "hover:text-accent-dark transition-colors",
          )}
        >
          View full resume →
        </a>
      </FadeIn>
    </section>
  );
}