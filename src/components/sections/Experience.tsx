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
      "Joined when the site was on Network Solutions with no custom code. Migrated to Shopify and rebuilt both the customer-facing storefront (Liquid theme with JSON section schemas) and staff-facing admin tools (Remix + Polaris embedded apps) from scratch.",
      "Designed and built a two-sided quote system replacing a manual Excel + email workflow: a customer quote cart in the Liquid storefront, a staff admin in Remix + Polaris; server-side data fetching and parallelized API calls cut processing time by 83%.",
      "Redesigned the information architecture for 30K+ products using Shopify's Collection and Tag APIs,  multi-level categorization, hierarchy-based breadcrumb navigation, and A-Z sorting for large categories.",
      "Rebuilt the Product Detail Page around user needs: accordion layout, wholesale tiered pricing, add-ons, cross-sell modules, staff-only notes, and purchase-gated manuals via the Shopify Customer ID API,  fully responsive across breakpoints.",
      "Set up automated PDF quote generation with jsPDF, html2canvas, and AWS SES for email delivery, matching print output to the on-screen design.",
      "Wrote unit tests for the critical quote and checkout flows with Jest and React Testing Library.",
    ],
  },
  {
    period: "May 2020 — Feb 2022",
    title: "Frontend Developer (Independent Projects)",
    company: "Remote",
    companyDetail: null,
    location: "Remote",
    highlights: [
      "Designed and built marketing sites and real-time dashboards with React, Next.js (SSG/ISR), and Google Maps API; reduced LCP by 25% through route-based code splitting and lazy loading.",
      "Designed and built a WordPress blog for a community organization: multi-level category structure, custom theming, and per-post commenting.",
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
