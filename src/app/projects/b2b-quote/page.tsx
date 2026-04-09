// src/app/projects/b2b-quote/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "B2B Quote Automation Ecosystem — Zoe Meng",
  description:
    "Dual-interface system that reduced quote processing time by 83%.",
};

export default function B2BQuotePage() {
  return (
    <main className={cn("max-w-3xl mx-auto px-6 pt-32 pb-16")}>
      {/* return to nav*/}
      <FadeIn>
        <Link
          href="/"
          className={cn(
            "inline-flex items-center gap-1 text-sm text-text-tertiary",
          )}
        >
          {" "}
          ← Back to home
        </Link>
      </FadeIn>

      {/* hero area*/}

      <FadeIn>
        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
          B2B Quote Automation Ecosystem
        </h1>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className={cn("text-lg text-text-secondary leading-relaxed mb-6")}>
          {" "}
          A dual-interface system designed to bridge the gap between customers
          requesting bulk quotes and the sales team managing them. Reduced quote
          processing from a 10-minute manual workflow to a single click.
        </p>
      </FadeIn>

      {/* key metric*/}
      <FadeIn delay={0.15}>
        <div className={cn("grid grid-cols-3 gap-4 mb-10")}>
          {[
            { value: "83%", label: "Faster processing" },
            { value: "90%", label: "Test coverage" },
            { value: "2", label: "Synced interfaces" },
          ].map((m) => (
            <div
              key={m.label}
              className={cn("text-center py-4 rounded-lg bg-bg-secondary")}
            >
              <div
                className={cn("text-2xl font-display font-bold text-accent")}
              >
                {m.value}
              </div>
              <div className={cn("text-xs text-text-tertiary mt-1")}>
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* tech tags*/}
      <FadeIn delay={0.2}>
        <div className={cn("flex flex-wrap gap-2 mb-10")}>
          {[
            "React",
            "Remix",
            "Redux Toolkit",
            "Polaris UI",
            "GraphQL",
            "AWS SES",
            "jsPDF",
            "Jest",
          ].map((tag) => (
            <span
              key={tag}
              className={cn(
                "text-xs px-2.5 py-1 rounded-full bg-accent-light text-accent-dark font-medium",
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </FadeIn>

      {/* main screenshot*/}
      <FadeIn delay={0.25}>
        <div
          className={cn(
            "rounded-xl overflow-hidden border border-border mb-16",
          )}
        >
          <Image
            src="/images/projects/b2b-quote-hero.webp"
            alt="B2B Quote Automation Dashboard"
            width={1200}
            height={675}
            className={cn("w-full")}
            priority
          />
        </div>
      </FadeIn>

      {/* The main content - prose style, not bullet points*/}
      <article className={cn("space-y-12")}>
        <FadeIn delay={0.25}>
          <section>
            <h2 className={cn("font-display text-xl font-semibold mb-4")}>
              The Problem
            </h2>
            <p className={cn("text-text-secondary leading-relaxed")}>
              {" "}
              MTI Corporation sells precision materials science equipment to
              researchers and labs worldwide. Their B2B quoting process was
              entirely manual — sales reps would spend 10+ minutes per quote,
              copy-pasting product details into emails, manually calculating
              pricing with tax rules, and formatting PDFs by hand. There was no
              centralized system for tracking quote status, and quotes
              frequently fell through the cracks.
            </p>
          </section>
        </FadeIn>
        <FadeIn>
          <section>
            <h2 className={cn("font-display text-xl font-semibold mb-4")}>
              My Approach
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              I designed a dual-interface architecture: a customer-facing
              storefront where buyers can browse products and submit quote
              requests with minimal friction, and an internal admin dashboard
              where sales reps can manage, generate, and track quotes in
              seconds.
            </p>
            <p className="text-text-secondary leading-relaxed">
              The key architectural decision was building a decoupled "Quote
              Cart" system independent of the standard Shopify shopping cart.
              This allowed customers to browse for regular purchases and request
              B2B bulk quotes simultaneously without state conflicts — a problem
              that had been a pain point with previous solutions.
            </p>
          </section>
        </FadeIn>
        <FadeIn>
          <div
            className={cn("rounded-xl overflow-hidden border border-border")}
          >
            <Image
              src="/images/projects/b2b-quote-architecture.webp"
              alt="System Architecture Diagram"
              width={1200}
              height={600}
              className="w-full"
            />
          </div>
        </FadeIn>
        <FadeIn>
          <section>
            <h2 className={cn("font-display text-xl font-semibold mb-4")}>
              {" "}
              Key Technical Decisions
            </h2>
            {/* 技术亮点卡片 */}
            <div className="space-y-6">
              <div
                className={cn(
                  "p-5 rounded-lg bg-bg-secondary border border-border",
                )}
              >
                <h3
                  className={cn(
                    "font-display font-semibold text-text-primary mb-2",
                  )}
                >
                  {" "}
                  Decoupled state with Redux Toolkit
                </h3>
                <p
                  className={cn("text-sm text-text-secondary leading-relaxed")}
                >
                  {" "}
                  Engineered conflict-free simultaneous management of "Retail"
                  and "Wholesale" carts for diverse customer cohorts. Each cart
                  operates independently with its own slice of state, enabling
                  complex multi-modal shopping experiences without data leakage.
                </p>
              </div>

              <div
                className={cn(
                  "p-5 rounded-lg bg-bg-secondary border border-border",
                )}
              >
                <h3
                  className={cn(
                    "font-display font-semibold text-text-primary mb-2",
                  )}
                >
                  {" "}
                  One-click automated response
                </h3>
                <p
                  className={cn("text-sm text-text-secondary leading-relaxed")}
                >
                  {" "}
                  Once a quote is approved, the system automatically generates a
                  PDF with product details (via jsPDF + html2canvas) and
                  triggers a templated email to the customer (via AWS SES). What
                  used to take 10 minutes of manual drafting is now a single
                  click.
                </p>
              </div>
              <div
                className={cn(
                  "p-5 rounded-lg bg-bg-secondary border border-border",
                )}
              >
                <h3
                  className={cn(
                    "font-display font-semibold text-text-primary mb-2",
                  )}
                >
                  {" "}
                  Server-side parallelized API requests
                </h3>
                <p
                  className={cn("text-sm text-text-secondary leading-relaxed")}
                >
                  {" "}
                  Optimized data fetching by parallelizing Shopify GraphQL API
                  requests on the server, reducing quote processing time by 83%.
                  Combined with client-side optimistic updates, the perceived
                  latency for sales reps is near-instant.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="font-display text-xl font-semibold mb-4">
              What I Learned
            </h2>
            <p className="text-text-secondary leading-relaxed">
              This project taught me the value of partnering closely with
              non-technical stakeholders. The sales team's domain knowledge was
              essential for designing workflows that actually fit their
              day-to-day reality. It also reinforced my belief that performance
              optimization isn't just about Lighthouse scores — it's about
              removing friction from real human workflows.
            </p>
          </section>
        </FadeIn>
      </article>

      {/* footer nav */}
      <FadeIn>
        <div className="mt-16 pt-8 border-t border-border flex justify-between items-center">
          <Link
            href="/"
            className="text-sm text-text-tertiary hover:text-text-primary transition-colors"
          >
            ← Back to home
          </Link>
          <Link
            href="/projects/tagwise-ai"
            className="text-sm text-accent hover:text-accent-dark transition-colors"
          >
            Next project: TagWise AI →
          </Link>
        </div>
      </FadeIn>
    </main>
  );
}
