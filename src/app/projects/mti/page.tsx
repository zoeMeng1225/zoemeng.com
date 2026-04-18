// src/app/projects/mti/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";
import { MediaGrid } from "@/components/ui/MediaGrid";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { BackToHome } from "@/components/ui/BackToHome";

export const metadata: Metadata = {
  title: "High-Performance B2B E-commerce Platform — Zoe Meng",
  description:
    "Custom Shopify theme architecture serving 10,000+ SKUs with modular Liquid sections, role-based access, and advanced catalog filtering for MTI Corporation.",
};

export default function Mti() {
  return (
    <main className={cn("max-w-3xl mx-auto px-6 pt-32 pb-16")}>
      <BackToHome />

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
          High-Performance B2B E-commerce Platform
        </h1>
      </FadeIn>
      <FadeIn delay={0.1}>
        <p className={cn("text-lg text-text-secondary leading-relaxed mb-4")}>
          A custom Shopify theme architecture built to serve a catalog of{" "}
          <span className={cn("text-text-primary font-medium")}>
            10,000+ SKUs
          </span>{" "}
          of precision materials science equipment. I re-architected the
          storefront using modular Liquid sections that let the marketing team
          customize layouts, toggle features, and launch landing pages — without
          touching code.
        </p>
      </FadeIn>
      <FadeIn delay={0.15}>
        <p className={cn("text-text-secondary leading-relaxed mb-6")}>
          Beyond the theme, I built role-based access control for guests,
          members, and employees on the same interface, a fuzzy search engine
          for complex industrial part numbers, and an automated tax exemption
          system at the cart level.
        </p>
      </FadeIn>

      {/* ---- Metrics ---- */}
      <FadeIn delay={0.2}>
        <div className={cn("grid grid-cols-3 gap-3 mb-8")}>
          {[
            { value: "10k+", label: "SKUs managed" },
            { value: "60%", label: "Fewer maintenance requests" },
            { value: "3", label: "Access roles" },
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
            "Shopify Liquid",
            "JavaScript (ES6+)",
            "SCSS",
            "JSON Schema",
            "Shopify Theme Editor",
            "Responsive Design",
            "SEO",
            "Performance Optimization",
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

      {/* ---- Hero screenshot ---- */}
      <FadeIn delay={0.3}>
        <ProjectImage
          src="/images/projects/mti/homepage-editor.webp"
          alt="MTI storefront homepage with Shopify theme editor showing modular sections"
          priority
          caption="Modular theme architecture: marketing team customizes layouts via drag-and-drop sections"
        />
      </FadeIn>

      {/* ============================================
          CONTENT
          ============================================ */}
      <article className="space-y-16 mt-16">
        {/* ---- Story 1: Modular Theme Architecture ---- */}
        <FadeIn>
          <section>
            <p className="text-xs font-semibold uppercase tracking-widest text-text-tertiary mb-2">
              Story 1
            </p>
            <h2 className="font-display text-xl font-semibold mb-2">
              Modular theme architecture
            </h2>
            <p className="text-sm text-accent mb-6">
              Giving clients autonomy over their own storefront
            </p>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                The core problem was client dependency on developers for minor
                UI changes. Every new landing page, every banner swap, every
                product highlight required a developer ticket. I solved this by
                re-architecting the Shopify theme using{" "}
                <span className="text-text-primary font-medium">
                  modular Liquid sections
                </span>{" "}
                — reusable, configurable UI blocks that the marketing team can
                drag-and-drop, toggle, and customize through the Shopify Theme
                Editor without writing code.
              </p>
              <p>
                Each section is built with a{" "}
                <code className="text-xs font-mono bg-bg-secondary px-1.5 py-0.5 rounded">
                  {`{% schema %}`}
                </code>{" "}
                block that exposes settings (text, colors, layout alignment, max
                blocks, link targets) as visual controls in the editor. For
                example, the announcement bar section supports up to 12
                configurable blocks, each with editable text, color scheme, and
                optional link — all controlled via the visual editor.
              </p>
              <p>
                I built custom sections including: Custom Product Collections,
                Featured Collections, Carousel Announcement Bar, Super
                Multicolumn layouts, Collage grids, and custom contact forms.
                The result:{" "}
                <span className="text-accent font-medium">
                  60% reduction in frontend maintenance requests
                </span>
                , with non-technical staff launching landing pages
                independently.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <MediaGrid
            items={[
              {
                src: "/images/projects/mti/template-sections.webp",
                alt: "Modular template sections in Shopify theme editor",
              },
              {
                src: "/images/projects/mti/liquid-code.webp",
                alt: "Liquid section code with schema block for visual editor configuration",
              },
            ]}
            columns={2}
            caption="Left: Drag-and-drop sections in the theme editor — Right: Liquid code with configurable schema"
          />
        </FadeIn>

        <FadeIn>
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
                Code-free visual editor
              </h4>
              <p className={cn("text-sm text-text-secondary leading-relaxed")}>
                Each Liquid section exposes its settings via JSON schema blocks,
                making text, colors, layouts, and feature toggles editable
                through the Shopify Theme Editor.
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
                Logic-aware breadcrumbs
              </h4>
              <p className={cn("text-sm text-text-secondary leading-relaxed")}>
                Custom breadcrumb system that understands the deep hierarchy of
                a 10k+ product catalog, improving navigation and SEO structure.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* ---- Story 2: Catalog Engine ---- */}
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
              High-performance catalog engine
            </h2>
            <p className={cn("text-sm text-accent mb-6")}>
              Making 10,000+ products discoverable and navigable
            </p>

            <div
              className={cn("space-y-4 text-text-secondary leading-relaxed")}
            >
              <p>
                MTI sells precision scientific equipment with complex part
                numbers like &quot;EQ-G-Holder&quot; and
                &quot;IMCS-2000A-LD.&quot; Standard Shopify search can&apos;t
                handle these. I built a{" "}
                <span className={cn("text-text-primary font-medium")}>
                  custom fuzzy search algorithm
                </span>{" "}
                that handles typos and partial matches for industrial part
                numbers — so searching &quot;IMCS 2000&quot; finds
                &quot;IMCS-2000A-LD&quot; correctly.
              </p>
              <p>
                The multi-faceted filtering system handles 10k+ SKUs with
                instant sort and filter by specs, availability, and category.
                Product pages are built with rich detail views: high-resolution
                images with component labels, variant selection, and inventory
                status — all optimized for the B2B buyer who needs technical
                specifications, not marketing fluff.
              </p>
              <p>
                I also designed a{" "}
                <span className={cn("text-text-primary font-medium")}>
                  custom B2B registration flow
                </span>{" "}
                that captures business-specific data points (company name, tax
                ID, purchase purpose), streamlining the verification process for
                wholesale accounts.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <ProjectImage
            src="/images/projects/mti/product-page.webp"
            alt="Product detail page for industrial equipment with labeled components"
            caption="Product page: technical detail with labeled component diagram, variant selection, and inventory status"
          />
        </FadeIn>

        {/* ---- Story 3: RBAC ---- */}
        <FadeIn>
          <section>
            <p
              className={cn(
                "text-xs font-semibold uppercase tracking-widest text-text-tertiary mb-2",
              )}
            >
              Story 3
            </p>
            <h2 className={cn("font-display text-xl font-semibold mb-2")}>
              Role-based access & smart automation
            </h2>
            <p className={cn("text-sm text-accent mb-6")}>
              Three audiences, one storefront
            </p>

            <div
              className={cn("space-y-4 text-text-secondary leading-relaxed")}
            >
              <p>
                The storefront serves three distinct audiences — guests,
                verified members, and internal employees — on the same
                interface. I implemented{" "}
                <span className={cn("text-text-primary font-medium")}>
                  conditional content rendering
                </span>{" "}
                using Liquid&apos;s customer tag system: members see exclusive
                technical manuals (PDFs) that are hidden from guest traffic, and
                employees see a hidden &quot;Staff Communication Layer&quot;
                directly on product pages where they can view internal notes and
                collaborate without leaving the storefront.
              </p>
              <p>
                At the cart level, I engineered a{" "}
                <span className={cn("text-text-primary font-medium")}>
                  smart tax exemption system
                </span>{" "}
                that automatically detects customers with specific tax-exempt
                tags. It dynamically recalculates totals and removes tax line
                items — automating what was previously a manual accounting task.
                The cart also includes a &quot;Special Instructions&quot; module
                where customers attach shipping or handling requests that sync
                directly to the fulfillment dashboard.
              </p>
            </div>
          </section>
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
                  "font-display text-sm font-semibold text-accent mb-1",
                )}
              >
                Guest
              </h4>
              <p className={cn("text-sm text-text-secondary leading-relaxed")}>
                Standard storefront with product catalog, search, and quote
                cart. No access to technical manuals or internal notes.
              </p>
            </div>
            <div
              className={cn(
                "p-5 rounded-lg bg-bg-secondary border border-border",
              )}
            >
              <h4
                className={cn(
                  "font-display text-sm font-semibold text-accent mb-1",
                )}
              >
                Member
              </h4>
              <p className={cn("text-sm text-text-secondary leading-relaxed")}>
                Exclusive technical manuals (PDFs), wholesale pricing, and auto
                tax exemption based on customer tags.
              </p>
            </div>
            <div
              className={cn(
                "p-5 rounded-lg bg-bg-secondary border border-border",
              )}
            >
              <h4
                className={cn(
                  "font-display text-sm font-semibold text-accent mb-1",
                )}
              >
                Employee
              </h4>
              <p className={cn("text-sm text-text-secondary leading-relaxed")}>
                Hidden staff communication layer on product pages for internal
                notes and collaboration.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* ---- Technical highlights ---- */}
        <FadeIn>
          <section>
            <h2 className={cn("font-display text-xl font-semibold mb-6")}>
              Technical highlights
            </h2>

            <div className={cn("space-y-4")}>
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
                    1
                  </span>
                  <h4
                    className={cn(
                      "font-display font-semibold text-text-primary",
                    )}
                  >
                    Liquid section schema system
                  </h4>
                </div>
                <p
                  className={cn(
                    "text-sm text-text-secondary leading-relaxed mb-3",
                  )}
                >
                  Each modular section is built with a JSON schema that defines
                  editable settings, block types, and max block limits. The
                  schema acts as a contract between the developer and the theme
                  editor — ensuring non-technical users can only make changes
                  within safe boundaries.
                </p>
                <div
                  className={cn(
                    "rounded-lg bg-bg-tertiary p-4 font-mono text-xs text-text-secondary overflow-x-auto",
                  )}
                >
                  <pre>{`{% schema %}
{
  "name": "Announcement bar",
  "max_blocks": 12,
  "blocks": [{
    "type": "announcement",
    "settings": [
      { "type": "text", "id": "text",
        "default": "Welcome to our store" },
      { "type": "select", "id": "text_alignment",
        "options": ["left", "center", "right"] },
      { "type": "color_scheme", "id": "color_scheme" }
    ]
  }]
}
{% endschema %}`}</pre>
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
                    Conditional rendering with customer tags
                  </h4>
                </div>
                <p
                  className={cn(
                    "text-sm text-text-secondary leading-relaxed mb-3",
                  )}
                >
                  Shopify&apos;s Liquid templating allows conditional rendering
                  based on customer tags. I used this to build the RBAC system
                  without any external auth service — the same template renders
                  different content based on who&apos;s logged in.
                </p>
                <div
                  className={cn(
                    "rounded-lg bg-bg-tertiary p-4 font-mono text-xs text-text-secondary overflow-x-auto",
                  )}
                >
                  <pre>{`{%- if customer and customer.tags contains 'member' -%}
  <!-- Technical manuals section (members only) -->
  {% render 'technical-manuals', product: product %}
{%- endif -%}
 
{%- if customer and customer.tags contains 'staff' -%}
  <!-- Internal notes (employees only) -->
  {% render 'staff-notes', product: product %}
{%- endif -%}`}</pre>
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
                    Cart-level tax exemption automation
                  </h4>
                </div>
                <p
                  className={cn("text-sm text-text-secondary leading-relaxed")}
                >
                  A Shopify Script detects customers with tax-exempt tags at
                  checkout, dynamically removing tax line items and
                  recalculating totals. This eliminated manual accounting work
                  and reduced checkout errors for wholesale customers who
                  previously had to request tax removal via email.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* ---- What I Learned ---- */}
        <FadeIn>
          <section>
            <h2 className={cn("font-display text-xl font-semibold mb-4")}>
              What I learned
            </h2>
            <p className={cn("text-text-secondary leading-relaxed mb-4")}>
              This project taught me the power of designing for non-technical
              users. The modular section architecture wasn&apos;t technically
              complex — it was an exercise in empathy. Every schema setting had
              to be named clearly, every default had to make sense, and every
              block limit had to prevent the page from looking broken. The 60%
              reduction in maintenance requests came not from clever code, but
              from thoughtful configuration boundaries.
            </p>
            <p className={cn("text-text-secondary leading-relaxed")}>
              Working with Shopify Liquid also gave me a deep appreciation for
              server-rendered templating and the constraints of a platform-based
              architecture. Not every problem needs a React SPA — sometimes the
              best frontend is the one that loads in under a second and lets the
              client update it themselves.
            </p>
          </section>
        </FadeIn>
      </article>

      {/* ---- Bottom nav ---- */}
      <FadeIn>
        <div
          className={cn(
            "mt-20 pt-8 border-t border-border flex justify-between items-center",
          )}
        >
          <Link
            href="/projects/ai-playground"
            className={cn(
              "text-sm text-text-tertiary hover:text-text-primary transition-colors",
            )}
          >
            ← Previous: AI Playground
          </Link>
          <Link
            href="/projects/b2b-quote"
            className={cn(
              "text-sm text-accent hover:text-accent-dark transition-colors",
            )}
          >
            Next project: B2B Quote Platform →
          </Link>
        </div>
      </FadeIn>
    </main>
  );
}
