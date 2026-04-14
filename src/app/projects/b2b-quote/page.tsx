// src/app/projects/b2b-quote/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";
import { ProjectVideo } from "@/components/ui/ProjectVideo";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { MediaGrid } from "@/components/ui/MadiaGrid";
import { B2BArchitectureDiagram } from "@/components/ui/B2BArchitechtureDiagram";

export const metadata: Metadata = {
  title: "B2B Quote Automation Ecosystem — Zoe Meng",
  description:
    "Dual-interface Shopify embedded app that reduced B2B quote processing from 10 minutes to 30 seconds. Built with React, Remix, Redux Toolkit, Shopify Polaris, and GraphQL.",
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

      {/* ============================================
          HERO
          ============================================ */}
      <FadeIn>
        <p className={cn("text-sm text-accent font-medium mb-3")}>
          MTI Corporation · Richmond, CA
        </p>
        <h1
          className={cn(
            "font-display text-3xl md:text-4xl font-bold tracking-tight mb-4",
          )}
        >
          B2B Quote Automation Ecosystem
        </h1>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className={cn("text-lg text-text-secondary leading-relaxed mb-4")}>
          A dual-interface Shopify embedded app that bridges the gap between
          customers requesting bulk material quotes and the sales team
          processing them. As{" "}
          <span className="text-text-primary font-medium">
            Lead Architect & Full-stack Developer
          </span>
          , I designed and built both the customer-facing storefront experience
          and the internal admin dashboard from scratch, transforming a
          10-minute manual workflow into a 30-second automated process.
        </p>
      </FadeIn>
      <FadeIn delay={0.15}>
        <p className={cn("text-text-secondary leading-relaxed mb-6")}>
          The system handles 20,000+ product catalog search, real-time tax
          calculation via California CDTFA API, event-driven email
          notifications, client-side PDF generation, and one-click conversion
          from quotes to Shopify draft orders.
        </p>
      </FadeIn>

      {/* ---- Metrics ---- */}
      <FadeIn delay={0.2}>
        <div className={cn("grid grid-cols-4 gap-3 mb-8")}>
          {[
            { value: "83%", label: "Faster processing" },
            { value: "90%", label: "Test coverage" },
            { value: "20k+", label: "Products searchable" },
            { value: "2", label: "Synced interfaces" },
          ].map((m) => (
            <div
              key={m.label}
              className={cn("text-center py-4 rounded-lg bg-bg-secondary")}
            >
              <div className={cn("text-xl font-display font-bold text-accent")}>
                {m.value}
              </div>
              <div className={cn("text-xs text-text-tertiary mt-1")}>
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* ---- Tags ---- */}
      <FadeIn delay={0.25}>
        <div className={cn("flex flex-wrap gap-2 mb-10")}>
          {[
            "React",
            "Remix",
            "Redux Toolkit",
            "Shopify Polaris",
            "Shopify App Bridge",
            "GraphQL",
            "Drizzle ORM",
            "Cloudflare Workers",
            "AWS SES",
            "jsPDF",
            "html2canvas",
            "SunEditor",
            "Jest",
            "React Testing Library",
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

      {/* ---- Hero media ---- */}
      <FadeIn delay={0.3}>
        <ProjectVideo
          src="/images/projects/b2b-quote/quote_flow_done.mp4"
          poster="/images/projects/b2b-quote/quote_flow_hero.webp"
          caption="Full workflow: customer submits quote → admin reviews, edits pricing, and sends automated email with PDF"
        />
      </FadeIn>

      {/* ============================================
          CONTENT
          ============================================ */}

      {/* The main content - prose style, not bullet points*/}
      <article className={cn("space-y-16 mt-16")}>
        {/* ---- System Architecture ---- */}
        <FadeIn>
          <section>
            <h2 className={cn("font-display text-xl font-semibold mb-4")}>
              System Architecture
            </h2>
            <p className={cn("text-text-secondary leading-relaxed mb-4")}>
              The ecosystem consists of two synchronized applications: a{" "}
              <span className={cn("text-text-primary font-medium")}>
                customer-facing storefront
              </span>{" "}
              embedded in the Shopify store for seamless quoting, and an{" "}
              <span className={cn("text-text-primary font-medium")}>
                internal admin app
              </span>{" "}
              (Quote List, Quote Create, Quote Detail) that gives sales reps
              full control over the quote lifecycle — from creation to draft
              order conversion.
            </p>
            <p className={cn("text-text-secondary leading-relaxed")}>
              The storefront communicates with the admin through a REST API
              endpoint (
              <code
                className={cn(
                  "text-sm font-mono bg-bg-secondary px-1.5 py-0.5 rounded",
                )}
              >
                api.shopify.jsx
              </code>
              ) that handles quote creation, customer account provisioning, and
              event-driven email notifications. The admin side uses Shopify
              GraphQL for product data, Drizzle ORM on Cloudflare D1 for quote
              persistence, and the California CDTFA API for real-time tax
              calculation.
            </p>
          </section>
        </FadeIn>
        <FadeIn>
          <figure className="my-8">
            <div className="rounded-xl overflow-hidden border border-border p-6 bg-bg-secondary">
              <B2BArchitectureDiagram />
            </div>
            <figcaption className="mt-3 text-sm text-text-tertiary text-center">
              Dual-interface architecture with shared data layer and external
              services
            </figcaption>
          </figure>
        </FadeIn>

        {/* ============================================
            STORY 1: Storefront
            ============================================ */}
        <FadeIn>
          <section>
            <p
              className={cn(
                "text-xs font-semibold uppercase tracking-widest text-text-tertiary mb-2",
              )}
            >
              Story 1
            </p>
            <h2 className={cn("font-display text-xl font-semibold mb-2")}>
              The Storefront Experience
            </h2>
            <p className={cn("text-sm text-accent mb-6")}>
              Customer-facing · Capture intent with minimal friction
            </p>

            <div
              className={cn("space-y-4 text-text-secondary leading-relaxed")}
            >
              <p>
                The core challenge was allowing buyers to request bulk quotes{" "}
                <span className={cn("text-text-primary font-medium")}>
                  without disrupting their regular shopping experience
                </span>
                . I engineered a standalone Quote Cart system completely
                independent of Shopify&apos;s standard shopping cart using Redux
                Toolkit. This decoupled architecture means customers can browse
                for regular purchases and build B2B quotes simultaneously — no
                state conflicts, no confusion.
              </p>
              <p>
                The smart inquiry form captures personal and company information
                with dynamic validation. Customers can also{" "}
                <span className={cn("text-text-primary font-medium")}>
                  choose which staff members to CC
                </span>{" "}
                when submitting their quote — the same email chip system used on
                the admin side. A Review Page lets users verify everything
                before final submission.
              </p>
              <p>
                When a quote is submitted, an{" "}
                <span className={cn("text-text-primary font-medium")}>
                  event-driven triple email workflow
                </span>{" "}
                fires automatically: (1) a notification to the selected staff
                members with quote details and a direct link to the admin detail
                page, (2) an admin-wide alert, and (3) a confirmation email to
                the customer with a summary of their request. If the customer is
                new, the system auto-creates their Shopify account and sends an
                activation email — with optional tax exemption file upload that
                routes to the finance team.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* ---- Storefront screenshots ---- */}
        <FadeIn>
          <MediaGrid
            items={[
              {
                src: "/images/projects/b2b-quote/quote-cart1.webp",
                alt: "Quote Cart drawer",
              },
              {
                src: "/images/projects/b2b-quote/quote-cc.webp",
                alt: "Inquiry form with staff CC",
              },
            ]}
            columns={2}
            caption=""
          />

          <ProjectVideo
            src="/images/projects/b2b-quote/quote_review.mp4"
            poster="/images/projects/b2b-quote/quote-review-hero.webp"
            caption="Customer flow: Add to Quote Cart → Fill inquiry form (select staff CC) → Review → Submit"
          />
        </FadeIn>

        <FadeIn>
          <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-4")}>
            <div
              className={cn(
                "p-5 rounded-lg bg-bg-secondary border border-border",
              )}
            >
              <h4
                className={cn(
                  "font-display text-sm font-semibold text-text-primary mb-2",
                )}
              >
                Decoupled Quote Cart
              </h4>
              <p className={cn("text-sm text-text-secondary leading-relaxed")}>
                Redux Toolkit slice independent of Shopify&apos;s cart, enabling
                simultaneous retail browsing and B2B quoting.
              </p>
            </div>
            <div
              className={cn(
                "p-5 rounded-lg bg-bg-secondary border border-border",
              )}
            >
              <h4
                className={cn(
                  "font-display text-sm font-semibold text-text-primary mb-2",
                )}
              >
                Triple email notification
              </h4>
              <p className={cn("text-sm text-text-secondary leading-relaxed")}>
                Event-driven AWS SES emails to staff, admin, and customer on
                every submission — with deep links to admin.
              </p>
            </div>
            <div
              className={cn(
                "p-5 rounded-lg bg-bg-secondary border border-border",
              )}
            >
              <h4
                className={cn(
                  "font-display text-sm font-semibold text-text-primary mb-2",
                )}
              >
                Auto customer provisioning
              </h4>
              <p className={cn("text-sm text-text-secondary leading-relaxed")}>
                New customers get a Shopify account auto-created via GraphQL
                mutation, with activation email and optional tax exemption flow.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* ============================================
            STORY 2: Quote List + Quote Create
            ============================================ */}
        <FadeIn>
          <section>
            <p
              className={cn(
                "text-xs font-semibold uppercase tracking-widest text-text-tertiary mb-2",
              )}
            >
              Story 2
            </p>
            <h2 className={cn("font-display text-xl font-semibold mb-2")}>
              Quote Management Hub
            </h2>
            <p className={cn("text-sm text-accent mb-6")}>
              Admin-facing · Search, sort, and create quotes
            </p>

            <div
              className={cn("space-y-4 text-text-secondary leading-relaxed")}
            >
              <p>
                The Quote List is the admin entry point. All customer-submitted
                quotes flow here in real time from the storefront. Reps can{" "}
                <span className={cn("text-text-primary font-medium")}>
                  search by Quote ID or customer name
                </span>{" "}
                (fuzzy search powered by Drizzle ORM with SQL LIKE queries),
                sort by date or customer name in either direction, and see
                Read/Unread status at a glance. Pagination handles large volumes
                at 20 quotes per page.
              </p>
              <p>
                The &quot;Create Quote&quot; button opens a full creation form
                for phone or email orders that bypass the storefront. The
                standout feature here is the{" "}
                <span className={cn("text-text-primary font-medium")}>
                  product search across 20,000+ items
                </span>
                — staff can search by product name and filter by Category,
                Collection, Type, or Vendor using Shopify&apos;s ResourcePicker
                API. For items not in the catalog (like shipping fees or custom
                fabrication charges), the{" "}
                <span className={cn("text-text-primary font-medium")}>
                  &quot;Add Customized Product&quot;
                </span>{" "}
                modal lets reps create ad-hoc line items with manual title,
                price, quantity, tax toggle, weight, and description.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <MediaGrid
            items={[
              {
                src: "/images/projects/b2b-quote/quoteList.webp",
                alt: "Quote List with search",
              },
              {
                src: "/images/projects/b2b-quote/quoteSort.webp",
                alt: "Sort by customer or date",
              },
            ]}
            columns={2}
            caption="Quote List: search by ID or customer, sort by date or name"
          />
        </FadeIn>

        <FadeIn>
          <MediaGrid
            items={[
              {
                src: "/images/projects/b2b-quote/productSearch.webp",
                alt: "Product search with category/collection/type/vendor filters",
              },
              {
                src: "/images/projects/b2b-quote/product-custom.webp",
                alt: "Add Customized Item modal",
              },
              {
                src: "/images/projects/b2b-quote/product-mixed.webp",
                alt: "Quote with catalog product + custom shipping fee",
              },
            ]}
            columns={3}
            caption="Left: Search 20k+ products with filters — Center: Custom item modal — Right: Mixed catalog + custom items"
          />
        </FadeIn>

        {/* ============================================
            STORY 3: Quote Detail — The Command Center
            ============================================ */}

        <FadeIn>
          <section>
            <p className="text-xs font-semibold uppercase tracking-widest text-text-tertiary mb-2">
              Story 3
            </p>
            <h2 className="font-display text-xl font-semibold mb-2">
              The Quote Detail Command Center
            </h2>
            <p className="text-sm text-accent mb-6">
              Admin-facing · Everything on one page, fully editable
            </p>

            <p className="text-text-secondary leading-relaxed mb-4">
              This is the core workspace — a 2,300-line React component where
              80% of daily work happens. The design principle was simple:{" "}
              <span className="text-text-primary font-medium">
                never leave the page
              </span>
              . Product details, customer information, pricing, team
              assignments, email composition, and lifecycle actions all live in
              one workspace.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Every B2B customer has unique requirements — different pricing for
              the same product, tax-exempt status on certain items, custom
              shipping terms. Staff can{" "}
              <span className="text-text-primary font-medium">
                inline-edit any product&apos;s price, quantity, and per-item tax
                toggle
              </span>
              , and the subtotal, tax (fetched live from California CDTFA API
              based on the customer&apos;s address), and total recalculate
              instantly. The &quot;Hide Price&quot; badge lets reps suppress
              pricing on specific items in the generated PDF.
            </p>
          </section>
        </FadeIn>
        <FadeIn>
          <ProjectImage
            src="/images/projects/b2b-quote/admin-detail.webp"
            alt="Quote Detail command center"
            caption="Quote Detail: product info, customer details, staff assignment, email — all on one page"
          />
        </FadeIn>

        {/* ---- KEY: Product editing video ---- */}
        <FadeIn>
          <ProjectVideo
            src="/images/projects/b2b-quote/productEdit_done.mp4"
            poster="/images/projects/b2b-quote/productEdit_hero.webp"
            caption="Inline editing: modify price, quantity, and per-item tax — total recalculates instantly"
          />
        </FadeIn>

        {/* ============================================
            STORY 4: One-Click Email + Team Coordination
            ============================================ */}

        <FadeIn>
          <section>
            <p
              className={cn(
                "text-xs font-semibold uppercase tracking-widest text-text-tertiary mb-2",
              )}
            >
              Story 4
            </p>
            <h2 className={cn("font-display text-xl font-semibold mb-2")}>
              One-Click Email & Team Coordination
            </h2>
            <p className={cn("text-sm text-accent mb-6")}>
              Admin-facing · From 10 minutes of manual work to 30 seconds
            </p>

            <div
              className={cn("space-y-4 text-text-secondary leading-relaxed")}
            >
              <p>
                The bottom section of the Quote Detail page is a{" "}
                <span className={cn("text-text-primary font-medium")}>
                  complete email composition tool
                </span>
                . From, To, and CC fields auto-populate from the quote data. The
                subject line auto-generates with the Quote ID. The email body
                loads a pre-written template customizable through SunEditor — a
                rich text editor with formatting, links, and file uploads. The
                auto-generated PDF attaches with one click.
              </p>
              <p>
                Above the email section, the{" "}
                <span className={cn("text-text-primary font-medium")}>
                  staff email chip system
                </span>{" "}
                handles team coordination. If the customer selected specific
                staff during storefront submission, those selections carry over.
                Managers can reassign by clicking different chips. Selected
                assignees appear in the &quot;Selected Emails&quot; area and are
                automatically CC&apos;d on outgoing communication — eliminating
                overlapping work where multiple reps unknowingly respond to the
                same customer.
              </p>
            </div>
          </section>
        </FadeIn>
        <FadeIn>
          <MediaGrid
            items={[
              {
                src: "/images/projects/b2b-quote/email-composer.webp",
                alt: "Email composer with SunEditor",
              },
              {
                src: "/images/projects/b2b-quote/staff-chips.webp",
                alt: "Staff email assignment chips",
              },
            ]}
            columns={2}
            caption="Left: One-click populated email with SunEditor — Right: Staff assignment with Selected Emails"
          />
        </FadeIn>

        {/* ---- Before / After comparison ---- */}
        <FadeIn>
          <div className="p-6 rounded-xl bg-bg-secondary border border-border">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center text-accent text-sm font-bold">
                !
              </span>
              <h4 className="font-display font-semibold text-text-primary">
                10 min → 30 sec transformation
              </h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-text-secondary">
              <div>
                <p className="font-medium text-text-tertiary mb-2 uppercase tracking-wider text-xs">
                  Before (manual)
                </p>
                <ol className="space-y-1.5 list-decimal list-inside">
                  <li>Open Shopify to find product details</li>
                  <li>Copy pricing into a spreadsheet</li>
                  <li>Manually calculate tax and totals</li>
                  <li>Format a PDF in Word/Google Docs</li>
                  <li>Open email client, write message</li>
                  <li>Attach PDF, CC relevant staff</li>
                  <li>Send — ~10 minutes per quote</li>
                </ol>
              </div>
              <div>
                <p className="font-medium text-text-tertiary mb-2 uppercase tracking-wider text-xs">
                  After (automated)
                </p>
                <ol className="space-y-1.5 list-decimal list-inside">
                  <li>Open Quote Detail — all data pre-loaded</li>
                  <li>Adjust pricing inline if needed</li>
                  <li>Click staff email chips for CC</li>
                  <li>Review auto-populated email</li>
                  <li>Attach auto-generated PDF</li>
                  <li>Send — ~30 seconds per quote</li>
                </ol>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ============================================
            STORY 5: Lifecycle Actions
            ============================================ */}
        <FadeIn>
          <section>
            <p
              className={cn(
                "text-xs font-semibold uppercase tracking-widest text-text-tertiary mb-2",
              )}
            >
              Story 5
            </p>
            <h2 className={cn("font-display text-xl font-semibold mb-2")}>
              Quote Lifecycle & Draft Order Conversion
            </h2>
            <p className={cn("text-sm text-accent mb-6")}>
              Admin-facing · From quote to paid order in one click
            </p>

            <div
              className={cn("space-y-4 text-text-secondary leading-relaxed")}
            >
              <p>
                The &quot;More Actions&quot; dropdown exposes four lifecycle
                operations that complete the quote-to-order pipeline:
              </p>
            </div>
          </section>
        </FadeIn>
        <FadeIn>
          <ProjectImage
            src="/images/projects/b2b-quote/more-actions.webp"
            alt="More Actions dropdown: Download & Print, Convert to Draft Order, Duplicate, Delete"
            caption="Lifecycle actions accessible from the Quote Detail toolbar"
          />
        </FadeIn>

        <FadeIn>
          <div className={cn("space-y-4")}>
            <div
              className={cn(
                "p-5 rounded-lg bg-bg-secondary border border-border",
              )}
            >
              <h4
                className={cn(
                  "font-display text-sm font-semibold text-accent mb-2",
                )}
              >
                Convert to Draft Order
              </h4>
              <p className={cn("text-sm text-text-secondary leading-relaxed")}>
                The most business-critical feature. Once a customer approves a
                quote, one click fires a{" "}
                <code
                  className={cn(
                    "text-xs font-mono bg-bg-tertiary px-1 py-0.5 rounded",
                  )}
                >
                  draftOrderCreate
                </code>{" "}
                GraphQL mutation that creates a Shopify Draft Order with all
                line items, customer info, shipping/billing addresses, and
                custom shipping. The draft order is an unpaid order — when the
                customer pays, it automatically converts to a finalized order.
                This eliminates manual data re-entry and closes the quote →
                payment loop entirely within Shopify.
              </p>
            </div>
            <div
              className={cn(
                "p-5 rounded-lg bg-bg-secondary border border-border",
              )}
            >
              <h4
                className={cn(
                  "font-display text-sm font-semibold text-text-primary mb-2",
                )}
              >
                Download & Print as PDF
              </h4>
              <p className={cn("text-sm text-text-secondary leading-relaxed")}>
                Client-side PDF generation using jsPDF + html2canvas. Captures
                the exact layout of the quote — product details, pricing with
                tax breakdown, customer information — as a downloadable PDF. The
                &quot;Hide Price&quot; toggle on individual items is respected
                in the PDF output for cases where pricing is confidential.
              </p>
            </div>
            <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-4")}>
              <div
                className={cn(
                  "p-5 rounded-lg bg-bg-secondary border border-border",
                )}
              >
                <h4
                  className={cn(
                    "font-display text-sm font-semibold text-text-primary mb-2",
                  )}
                >
                  Duplicate Quote
                </h4>
                <p
                  className={cn("text-sm text-text-secondary leading-relaxed")}
                >
                  Deep copy with a new auto-generated Quote ID — useful for
                  repeat orders or creating variations of an existing quote for
                  the same customer.
                </p>
              </div>
              <div
                className={cn(
                  "p-5 rounded-lg bg-bg-secondary border border-border",
                )}
              >
                <h4
                  className={cn(
                    "font-display text-sm font-semibold text-text-primary mb-2",
                  )}
                >
                  Delete with safeguards
                </h4>
                <p
                  className={cn("text-sm text-text-secondary leading-relaxed")}
                >
                  Deletion requires double confirmation through a warning modal
                  (&quot;Once deleted, it cannot be undone!&quot;) and is
                  restricted to authorized accounts only.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ============================================
            Technical Deep Dive
            ============================================ */}
        <FadeIn>
          <section>
            <h2 className={cn("font-display text-xl font-semibold mb-6")}>
              Technical Deep Dive
            </h2>

            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-bg-secondary border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center text-accent text-sm font-bold">
                    1
                  </span>
                  <h4 className="font-display font-semibold text-text-primary">
                    Decoupled state management
                  </h4>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed mb-3">
                  Redux Toolkit slices for Quote Cart vs Shopping Cart operate
                  independently with separate actions and selectors. The Quote
                  Cart manages items, quantities, tax toggles, and custom
                  products without touching the standard Shopify cart state.
                </p>
                <div className="rounded-lg bg-bg-tertiary p-4 font-mono text-xs text-text-secondary overflow-x-auto">
                  <pre>{`// Independent slices prevent state conflicts
const quoteCartSlice = createSlice({
  name: 'quoteCart',
  initialState: { items: [], inquiry: {} },
  reducers: {
    addToQuote, removeFromQuote, updateQuantity,
    toggleItemTax, addCustomProduct
  },
});
// Regular shopping cart remains untouched`}</pre>
                </div>
              </div>

              <div
                className={cn(
                  "p-6 rounded-xl bg-bg-secondary border border-border",
                )}
              >
                <div className={cn("flex items-center gap-3 mb-3")}>
                  <span
                    className={cn(
                      "w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center text-accent text-sm font-bold",
                    )}
                  >
                    2
                  </span>
                  <h4
                    className={cn(
                      "font-display font-semibold text-text-primary",
                    )}
                  >
                    Server-side parallelized API requests
                  </h4>
                </div>
                <p
                  className={cn(
                    "text-sm text-text-secondary leading-relaxed mb-3",
                  )}
                >
                  The Quote Detail loader fetches quote data, then dynamically
                  builds a batch GraphQL query to resolve all product variants
                  in a single request — instead of N sequential calls for N
                  products. Combined with Remix&apos;s loader pattern, data is
                  server-rendered before the page reaches the client.
                </p>
                <div
                  className={cn(
                    "rounded-lg bg-bg-tertiary p-4 font-mono text-xs text-text-secondary overflow-x-auto",
                  )}
                >
                  <pre>{`// Batch GraphQL: resolve N products in 1 request
const productQueries = products.map((p, i) => \`
  variant\${i}: node(id: "gid://shopify/ProductVariant/\${p.variant_id}") {
    ... on ProductVariant { id, title, price, inventoryQuantity,
      product { id, title }
    }
  }
\`);
const { data } = await admin.graphql(\`{ \${productQueries.join("\\n")} }\`);`}</pre>
                </div>
              </div>

              <div
                className={cn(
                  "p-6 rounded-xl bg-bg-secondary border border-border",
                )}
              >
                <div className={cn("flex items-center gap-3 mb-3")}>
                  <span
                    className={cn(
                      "w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center text-accent text-sm font-bold",
                    )}
                  >
                    3
                  </span>
                  <h4
                    className={cn(
                      "font-display font-semibold text-text-primary",
                    )}
                  >
                    Real-time tax via California CDTFA API
                  </h4>
                </div>
                <p
                  className={cn("text-sm text-text-secondary leading-relaxed")}
                >
                  Tax rates are fetched dynamically based on the customer&apos;s
                  shipping address using California&apos;s official tax rate
                  API. The rate updates live as the address changes, and
                  per-item tax toggles let reps mark individual products as
                  tax-exempt — the total recalculates with each toggle.
                </p>
              </div>

              <div
                className={cn(
                  "p-6 rounded-xl bg-bg-secondary border border-border",
                )}
              >
                <div className={cn("flex items-center gap-3 mb-3")}>
                  <span
                    className={cn(
                      "w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center text-accent text-sm font-bold",
                    )}
                  >
                    4
                  </span>
                  <h4
                    className={cn(
                      "font-display font-semibold text-text-primary",
                    )}
                  >
                    Advanced search with fuzzy matching
                  </h4>
                </div>
                <p
                  className={cn(
                    "text-sm text-text-secondary leading-relaxed mb-3",
                  )}
                >
                  The Quick Search in Quote Detail supports exact match by Quote
                  ID, exact match by Shopify Customer ID (with GID format
                  normalization), and fuzzy search across name, email, and phone
                  — with phone number normalization that strips dashes, spaces,
                  parentheses, and plus signs.
                </p>
                <div
                  className={cn(
                    "rounded-lg bg-bg-tertiary p-4 font-mono text-xs text-text-secondary overflow-x-auto",
                  )}
                >
                  <pre>{`// Phone normalization for fuzzy search
const phoneExpr = sql\`
  replace(replace(replace(replace(replace(
    json_extract(customer, '$.phone'),
    '-',''),' ',''),'(',''),')',''),'+','')
\`;
// Matches "858-717-5278" when searching "8587175278"`}</pre>
                </div>
              </div>

              <div
                className={cn(
                  "p-6 rounded-xl bg-bg-secondary border border-border",
                )}
              >
                <div className={cn("flex items-center gap-3 mb-3")}>
                  <span
                    className={cn(
                      "w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center text-accent text-sm font-bold",
                    )}
                  >
                    5
                  </span>
                  <h4
                    className={cn(
                      "font-display font-semibold text-text-primary",
                    )}
                  >
                    90% test coverage on critical paths
                  </h4>
                </div>
                <p
                  className={cn("text-sm text-text-secondary leading-relaxed")}
                >
                  Jest + React Testing Library covering the full quote
                  lifecycle: cart operations, form validation, pricing
                  calculations, PDF generation, and email dispatch. Tests catch
                  regressions across the complex interaction between Shopify
                  GraphQL, Drizzle ORM, and the CDTFA tax API.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>
        {/* ============================================
            What I Learned
            ============================================ */}
        <FadeIn>
          <section>
            <h2 className={cn("font-display text-xl font-semibold mb-4")}>
              What I Learned
            </h2>
            <p className={cn("text-text-secondary leading-relaxed mb-4")}>
              This project taught me that the hardest engineering problems often
              aren&apos;t technical — they&apos;re about understanding how
              people actually work. The sales team&apos;s domain knowledge was
              essential for designing workflows that fit their reality. Features
              I assumed were important turned out to be unnecessary, while the
              Quick-Jump Navigation I almost deprioritized became the most-used
              feature.
            </p>
            <p className={cn("text-text-secondary leading-relaxed")}>
              The 83% processing time reduction didn&apos;t come from frontend
              performance tricks — it came from eliminating manual steps:
              auto-populating email fields, pre-calculating tax, batch-querying
              product data, and making the quote → draft order conversion a
              single click instead of a multi-step manual process. Performance
              optimization in a B2B context is about human workflow, not just
              Lighthouse scores.
            </p>
          </section>
        </FadeIn>
      </article>

      {/* footer nav */}
      <FadeIn>
        <div
          className={cn(
            "mt-16 pt-8 border-t border-border flex justify-between items-center",
          )}
        >
          <Link
            href="/"
            className={cn(
              "text-sm text-text-tertiary hover:text-text-primary transition-colors",
            )}
          >
            ← Back to home
          </Link>
          <Link
            href="/projects/tagwise-ai"
            className={cn(
              "text-sm text-accent hover:text-accent-dark transition-colors",
            )}
          >
            Next project: TagWise AI →
          </Link>
        </div>
      </FadeIn>
    </main>
  );
}
