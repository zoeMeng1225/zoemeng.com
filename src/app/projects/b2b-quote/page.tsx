// src/app/projects/b2b-quote/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";
import { ProjectVideo } from "@/components/ui/ProjectVideo";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { MediaGrid } from "@/components/ui/MadiaGrid";

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
          <ProjectVideo
            src="/images/projects/b2b-quote/quote_flow_done.mp4"
            poster="/images/projects/b2b-quote/quote_flow_hero.webp"
            caption="Full workflow: Seamless End-to-End Journey: Demonstrating the zero-friction transition from a self-service customer quote build (Cart + Company CRM Data) to immediate back-end admin accessibility on the dashboard."
          />
        </div>
      </FadeIn>

      {/* The main content - prose style, not bullet points*/}
      <article className={cn("space-y-16 mt-16")}>
        <FadeIn>
          <section>
            <h2 className={cn("font-display text-xl font-semibold mb-4")}>
              System Architecture
            </h2>
            <p className={cn("text-text-secondary leading-relaxed mb-4")}>
              {" "}
              The ecosystem consists of two synchronized applications: a{" "}
              <span className={cn("text-text-primary font-medium")}>
                {" "}
                customer-facing storefront
              </span>{" "}
              embedded in the existing Shopify site for seamless quoting, and an{" "}
              <span className={cn("text-text-primary font-medium")}>
                {" "}
                internal admin dashboard
              </span>{" "}
              that gives sales reps a power-tool to manage, generate, and track
              quotes in seconds rather than minutes.
            </p>
            <p className={cn("text-text-secondary leading-relaxed")}>
              {" "}
              The two interfaces share a unified data layer through
              Shopify&apos;s GraphQL API, with Prisma ORM handling the
              relational data and Redux Toolkit managing client-side state
              across both apps without conflicts.
            </p>
          </section>
        </FadeIn>

        {/* ============================================
            2. Part I: Storefront (Customer Facing)
            ============================================ */}
        <FadeIn>
          <section>
            <p
              className={cn(
                "text-xs font-semibold uppercase tracking-widest text-text-tertiary mb-2",
              )}
            >
              Part I
            </p>
            <h2 className={cn("font-display text-xl font-semibold mb-2")}>
              The Storefront Experience
            </h2>
            <p className={cn("text-sm text-accent mb-6")}>
              Goal: capture customer intent with minimal friction
            </p>
            <div
              className={cn("space-y-4 text-text-secondary leading-relaxed")}
            >
              <p>
                The core challenge on the customer side was allowing buyers to
                request bulk quotes{" "}
                <span className="text-text-primary font-medium">
                  without disrupting their regular shopping experience
                </span>
                . I engineered a standalone Quote Cart system completely
                independent of Shopify&apos;s standard shopping cart. This
                decoupled architecture means customers can browse for regular
                purchases and build B2B bulk quotes simultaneously — no state
                conflicts, no confusion.
              </p>
              <p>
                Users add products to their quote via a custom &quot;Request
                Quote&quot; button, managing items in a dedicated React-based
                drawer. A smart inquiry form with dynamic validation captures
                all necessary personal and company information upfront, reducing
                the back-and-forth emails that previously plagued the process.
              </p>
              <p>
                Before final submission, a Review Page lets users verify their
                product selection and contact details. I designed this for
                editability — users can jump back to modify items or contact
                info instantly before the final commit, which significantly
                reduced submission errors.
              </p>
            </div>
          </section>
        </FadeIn>
        {/* ---- Storefront screenshots ---- */}
        <FadeIn></FadeIn>
        <FadeIn>
          <div
            className={cn("rounded-xl overflow-hidden border border-border")}
          >
            <Image
              src="/images/projects/b2b-quote/b2b-quote-architecture.webp"
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
