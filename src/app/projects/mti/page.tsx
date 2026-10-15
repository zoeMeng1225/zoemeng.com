// src/app/projects/mti/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";
import { MediaGrid } from "@/components/ui/MediaGrid";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { BackToHome } from "@/components/ui/BackToHome";

export const metadata: Metadata = {
  title: "MTI Storefront",
  description:
    "Rebuilding a 30K-product B2B catalog on Shopify: navigable categories, part-number search, modular sections marketing edits on its own, and pages that adapt to guests, customers, and staff.",
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
          MTI Storefront: 30,000 products on Shopify
        </h1>
      </FadeIn>
      <FadeIn delay={0.1}>
        <p className={cn("text-lg text-text-secondary leading-relaxed mb-4")}>
          As the only engineer, I moved MTI&apos;s catalog of{" "}
          <span className={cn("text-text-primary font-medium")}>
            30,000+ products
          </span>{" "}
          from Network Solutions to Shopify and rebuilt the storefront in
          Liquid. I built it from modular sections, so the marketing team can
          change layouts, turn features on and off, and launch landing pages
          without touching code.
        </p>
      </FadeIn>
      <FadeIn delay={0.15}>
        <p className={cn("text-text-secondary leading-relaxed mb-6")}>
          I also built a search that tolerates typos in part numbers,
          multi-level categories with breadcrumbs, and pages that show
          different content to guests, members, and employees.
        </p>
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
                </span>
                : reusable, configurable UI blocks that the marketing team can
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
                optional link, all set in the visual editor.
              </p>
              <p>
                I built custom sections including: Custom Product Collections,
                Featured Collections, Carousel Announcement Bar, Super
                Multicolumn layouts, Collage grids, and custom contact forms.
                Now non-technical staff launch landing pages on their own,
                without waiting for a developer.
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
            caption="Left: Drag-and-drop sections in the theme editor. Right: Liquid code with configurable schema"
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
                a 30k+ product catalog, improving navigation and SEO structure.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* ============================================
            Story 2: Catalog Engine 
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
              High-performance catalog engine
            </h2>
            <p className={cn("text-sm text-accent mb-6")}>
              Making 30,000+ products discoverable and navigable
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
                numbers, so searching &quot;IMCS 2000&quot; finds
                &quot;IMCS-2000A-LD&quot; correctly.
              </p>
              <p>
                For buyers who are browsing, I set up multi-level categories,
                breadcrumbs, and A to Z sorting, so they can narrow down from a
                broad category to one product.
              </p>
              {/* TODO(Zoe): 简历删了 PDP 那条。产品页如果没重做，删掉这一段和下面的 product-page 图 */}
              <p>
                Product pages show high-resolution images with component
                labels, variant selection, and inventory status, for B2B buyers
                who need technical specs.
              </p>
              {/* TODO(Zoe): 确认注册流程是你做的，不是就删掉这段 */}
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

        {/* ============================================
            Story 3: Content by visitor type
            ============================================ */}
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
              Different content for different visitors
            </h2>
            <p className={cn("text-sm text-accent mb-6")}>
              Three audiences, one storefront
            </p>

            <div
              className={cn("space-y-4 text-text-secondary leading-relaxed")}
            >
              <p>
                The storefront serves three audiences on the same pages:
                guests, verified members, and internal employees. I implemented{" "}
                <span className={cn("text-text-primary font-medium")}>
                  conditional content rendering
                </span>{" "}
                using Liquid&apos;s customer tag system: members see exclusive
                technical manuals (PDFs) that are hidden from guest traffic, and
                employees see a hidden &quot;Staff Communication Layer&quot;
                directly on product pages where they can view internal notes and
                collaborate without leaving the storefront.
              </p>
              {/* TODO(Zoe): 确认 Special Instructions 真的同步到 fulfillment dashboard */}
              <p>
                The cart also includes a &quot;Special Instructions&quot; module where
                customers attach shipping or handling requests that sync directly to the
                fulfillment dashboard.
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
               Exclusive technical manuals (PDFs) and wholesale pricing.
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
                  editor, so non-technical users can only make changes within
                  safe limits.
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
                    {% endschema %}`}
                  </pre>
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
                  based on customer tags. I used them to show each audience
                  different content without a separate login system. The same
                  template renders differently based on who&apos;s logged in.
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
              complex. Most of the work was thinking about the people using it.
              Every schema setting had to be named clearly, every default had
              to make sense, and every block limit had to keep the page from
              looking broken.
            </p>
            <p className={cn("text-text-secondary leading-relaxed")}>
              Working with Shopify Liquid also gave me a deep appreciation for
              server-rendered templating and the constraints of a platform-based
              architecture. Not every problem needs a React app. Sometimes the
              best frontend is a server-rendered page the client can update on
              their own.
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
            href="/projects/ai-code-reviewer"
            className={cn(
              "text-sm text-text-tertiary hover:text-text-primary transition-colors",
            )}
          >
            ← Previous: AI Code Reviewer
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