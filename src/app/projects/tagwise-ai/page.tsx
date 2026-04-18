// src/app/projects/tagwise-ai/page.tsx

import { Metadata } from "next";
import { ProjectImage } from "@/components/ui/ProjectImage";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";
import { MediaGrid } from "@/components/ui/MediaGrid";
import { BackToHome } from "@/components/ui/BackToHome";

export const metadata: Metadata = {
  title: "TagWise AI — SEO Tagging Platform — Zoe Meng",
  description:
    "AI-powered SEO tag generation and scoring platform for Shopify merchants. Human-in-the-loop workflow with proprietary scoring engine across 13 industry categories.",
};

export default function TagWise() {
  return (
    <main className={cn("max-w-3xl mx-auto px-6 pt-32 pb-16")}>
      {/* return to nav*/}

      <BackToHome />
      {/* ============================================
          HERO
          ============================================ */}

      <FadeIn>
        <p className={cn("text-sm text-accent font-medium mb-3")}>
          Personal Project · MVP in Beta
        </p>
        <h1
          className={cn(
            "font-display text-3xl md:text-4xl font-bold tracking-tight mb-4",
          )}
        >
          TagWise AI — SEO Tagging Platform
        </h1>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className={cn("text-lg text-text-secondary leading-relaxed mb-6")}>
          An AI-powered Shopify embedded app that generates, scores, and
          optimizes product tags for SEO. Instead of blindly overwriting
          metadata, TagWise uses a{" "}
          <span className={cn("text-text-primary font-medium")}>
            human-in-the-loop staging workflow
          </span>{" "}
          , AI-generated tags are reviewed and edited before they ever touch the
          database.
        </p>
      </FadeIn>

      <FadeIn delay={0.15}>
        <p className={cn("text-text-secondary leading-relaxed mb-10")}>
          The platform includes a{" "}
          <span className={cn("text-text-primary font-medium")}>
            proprietary scoring engine
          </span>{" "}
          with industry-specific keyword databases across 13 categories, giving
          merchants actionable feedback on tag quality, not just a number, but
          specific optimization suggestions.
        </p>
      </FadeIn>

      {/* ---- Metrics ---- */}
      <FadeIn delay={0.2}>
        <div className={cn("grid grid-cols-4 gap-3 mb-8")}>
          {[
            { value: "13", label: "Industry categories" },
            { value: "6", label: "Scoring dimensions" },
            { value: "10", label: "Batch processing" },
            { value: "0", label: "Data accidents" },
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
            "React 18",
            "Remix",
            "TypeScript",
            "Shopify Polaris",
            "Shopify App Bridge",
            "GraphQL",
            "OpenAI API",
            "Prisma ORM",
            "Tailwind CSS",
            "Vite",
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
          src="/images/projects/tagwise/tagwise.webp"
          alt="TagWise AI dashboard showing product list with tags, scores, and suggestions"
          priority
          caption="TagWise AI dashboard: search, filter, generate, and score tags for your entire product catalog"
        />
      </FadeIn>

      {/* ============================================
          CONTENT
          ============================================ */}
      <article className={cn("space-y-16 mt-16")}>
        {/* ---- The Problem ---- */}
        <FadeIn>
          <section>
            <h2 className={cn("font-display text-xl font-semibold mb-4")}>
              The problem
            </h2>
            <p className={cn("text-text-secondary leading-relaxed mb-4")}>
              For Shopify merchants with large catalogs, product tagging is a
              nightmare. Manually tagging thousands of products is a time sink
              that leads to inconsistency; humans tend to use spammy, generic
              tags like &quot;hot&quot;, &quot;new&quot;, or
              &quot;best-seller&quot; that actually hurt SEO. There&apos;s no
              strategy behind the tags, no way to know which ones drive traffic,
              and no quality control before they go live.
            </p>
            <p className={cn("text-text-secondary leading-relaxed")}>
              Existing solutions either blindly overwrite tags with AI output (
              risking data loss) or provide no intelligence at all. Merchants
              need something in between: an AI that understands SEO, combined
              with human oversight to ensure nothing breaks.
            </p>
          </section>
        </FadeIn>

        {/* ============================================
            STORY 1: Product Discovery
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
              Product discovery & filtering
            </h2>
            <p className={cn("text-sm text-accent mb-6")}>
              Find the right products to optimize across a 20k+ catalog
            </p>

            <div
              className={cn("space-y-4 text-text-secondary leading-relaxed")}
            >
              <p>
                The dashboard provides four search and filter dimensions that
                work together: search by{" "}
                <span className={cn("text-text-primary font-medium")}>
                  product name
                </span>
                , filter by{" "}
                <span className={cn("text-text-primary font-medium")}>
                  existing Shopify tags
                </span>{" "}
                (to find products that already use a specific tag), filter by{" "}
                <span className={cn("text-text-primary font-medium")}>
                  collection
                </span>{" "}
                (fetched live via Shopify GraphQL), and sort by{" "}
                <span className={cn("text-text-primary font-medium")}>
                  newest/oldest update or product name A-Z
                </span>
                . For a catalog of 20,000+ items, this makes it practical to
                find and batch-process the products that need attention.
              </p>
              <p>
                Each row in the product table shows the product image, name,
                description, current tags, SEO score (if scored), the top
                optimization suggestion, and a &quot;View Report&quot; link for
                the full analysis. This gives merchants a health check view of
                their entire catalog at a glance — products with low scores or
                missing data stand out immediately.
              </p>
            </div>
          </section>
        </FadeIn>
        <FadeIn>
          <ProjectImage
            src="/images/projects/tagwise/tagwise_dashboard_filter.webp"
            alt="Dashboard with search, sort, tag filter, and collection filter"
            caption="Four-dimensional product search: by name, sort order, existing tags, and collection"
          />
        </FadeIn>

        {/* ============================================
            STORY 2: AI Tag Generation + Human-in-the-Loop
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
              AI tag generation with human-in-the-loop
            </h2>
            <p className={cn("text-sm text-accent mb-6")}>
              Safety first — AI suggests, humans decide
            </p>

            <div
              className={cn("space-y-4 text-text-secondary leading-relaxed")}
            >
              <p>
                Select up to 10 products and click &quot;Generate AI Tags.&quot;
                The OpenAI API analyzes each product&apos;s title and
                description to generate context-aware tags, understanding
                material, usage, target audience, and SEO relevance. But
                here&apos;s the key difference from other tools:{" "}
                <span className={cn("text-text-primary font-medium")}>
                  nothing is saved automatically
                </span>
                .
              </p>
              <p>
                AI-generated tags appear in a{" "}
                <span className={cn("text-accent font-medium")}>
                  staging state
                </span>{" "}
                (shown in orange) alongside the existing tags (shown in gray).
                Merchants can review each tag, delete ones they disagree with,
                edit spelling or wording, and manually add their own tags via
                the input field. Only when they click{" "}
                <span className={cn("text-text-primary font-medium")}>
                  &quot;Confirm Tags&quot;
                </span>{" "}
                does the Shopify{" "}
                <code
                  className={cn(
                    "text-xs font-mono bg-bg-secondary px-1.5 py-0.5 rounded",
                  )}
                >
                  productUpdate
                </code>{" "}
                mutation fire. There&apos;s also a &quot;Replace Existing Tags
                with AI Tags&quot; option for merchants who want a clean slate,
                and a &quot;Cancel&quot; button that discards all changes.
              </p>
              <p>
                This non-destructive staging workflow is the core architectural
                decision of the entire app. I designed it because the cost of a
                bad tag update on a live store is high, broken filters,
                incorrect search results, lost customer trust. Zero data
                accidents is a feature, not a coincidence.
              </p>
            </div>
          </section>
        </FadeIn>
        <FadeIn>
          <ProjectImage
            src="/images/projects/tagwise/ai-tags-generated.webp"
            alt="Product with AI-generated tags in orange staging state, editable before commit"
            caption="Staging workflow: gray = existing tags, orange = AI-generated (editable). Nothing saves until you click Confirm."
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
                Non-destructive staging
              </h4>
              <p className={cn("text-sm text-text-secondary leading-relaxed")}>
                AI tags stored in local frontend state first. Shopify API only
                called on explicit &quot;Confirm&quot; zero risk of accidental
                overwrites.
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
                Full user control
              </h4>
              <p className={cn("text-sm text-text-secondary leading-relaxed")}>
                Delete, edit, or add tags manually before committing. Each tag
                has an &quot;x&quot; button; an input field allows custom
                additions.
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
                Batch processing
              </h4>
              <p className={cn("text-sm text-text-secondary leading-relaxed")}>
                Generate and commit tags for up to 10 products simultaneously.
                Practical for large catalogs that need systematic optimization.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* ============================================
            STORY 3: Scoring Engine
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
              Proprietary SEO scoring engine
            </h2>
            <p className={cn("text-sm text-accent mb-6")}>
              Not just a number — actionable feedback across 6 dimensions
            </p>

            <div
              className={cn("space-y-4 text-text-secondary leading-relaxed")}
            >
              <p>
                Select products and click &quot;Score Selected Tags&quot; to run
                the analysis. The scoring algorithm evaluates existing tags
                across{" "}
                <span className={cn("text-text-primary font-medium")}>
                  six dimensions
                </span>
                : tag quantity (5-10 is optimal), duplicate detection, weak word
                filtering (flags terms like &quot;hot&quot; or &quot;new&quot;
                that hurt SEO), function/material/scene keyword coverage, title
                keyword matching, and overall diversity.
              </p>
              <p>
                What makes this more than a generic checker is the{" "}
                <span className={cn("text-text-primary font-medium")}>
                  industry-specific keyword databases
                </span>
                . I built 13 category-specific dictionaries, fashion,
                electronics, industrial, beauty, sports, food, and more, each
                containing curated lists of functional, material, and
                scene-based keywords. The algorithm matches tags against the
                relevant industry dictionary, so a &quot;waterproof&quot; tag
                scores well for sports equipment but wouldn&apos;t be flagged as
                missing for food products.
              </p>
              <p>
                Scores and the top suggestion appear inline in the product list.
                Clicking &quot;View Report&quot; opens a detailed breakdown page
                with the full score and up to three specific optimization
                recommendations, for example, &quot;Contains weak words (e.g.,
                &apos;hot&apos;). Try using more specific terms&quot; or
                &quot;Try including keywords from the product title.&quot;
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <MediaGrid
            items={[
              {
                src: "/images/projects/tagwise/scored-products.webp",
                alt: "Products with SEO scores and inline suggestions",
              },
              {
                src: "/images/projects/tagwise/score-report.webp",
                alt: "Detailed SEO Tag Score Report with optimization suggestions",
              },
            ]}
            columns={2}
            caption="Left: Inline scores + suggestions in the product list — Right: Detailed score report with recommendations"
          />
        </FadeIn>

        {/* ---- Scoring breakdown card ---- */}
        <FadeIn>
          <div
            className={cn(
              "p-6 rounded-xl bg-bg-secondary border border-border",
            )}
          >
            <h4
              className={cn(
                "font-display font-semibold text-text-primary mb-4",
              )}
            >
              Scoring dimensions (100 points)
            </h4>
            <div
              className={cn("grid grid-cols-2 md:grid-cols-3 gap-4 text-sm")}
            >
              <div>
                <div
                  className={cn("text-accent font-display font-bold text-lg")}
                >
                  20
                </div>
                <div className={cn("text-text-primary font-medium")}>
                  Tag quantity
                </div>
                <div className={cn("text-text-tertiary text-xs")}>
                  5-10 tags = optimal range
                </div>
              </div>
              <div>
                <div
                  className={cn("text-accent font-display font-bold text-lg")}
                >
                  15
                </div>
                <div className={cn("text-text-primary font-medium")}>
                  Uniqueness
                </div>
                <div className={cn("text-text-tertiary text-xs")}>
                  No duplicate tags detected
                </div>
              </div>
              <div>
                <div
                  className={cn("text-accent font-display font-bold text-lg")}
                >
                  10
                </div>
                <div className={cn("text-text-primary font-medium")}>
                  Quality filter
                </div>
                <div className={cn("text-text-tertiary text-xs")}>
                  No weak/spam words
                </div>
              </div>
              <div>
                <div
                  className={cn("text-accent font-display font-bold text-lg")}
                >
                  15
                </div>
                <div className={cn("text-text-primary font-medium")}>
                  Keyword coverage
                </div>
                <div className={cn("text-text-tertiary text-xs")}>
                  Function + material + scene
                </div>
              </div>
              <div>
                <div
                  className={cn("text-accent font-display font-bold text-lg")}
                >
                  20
                </div>
                <div className={cn("text-text-primary font-medium")}>
                  Title matching
                </div>
                <div className={cn("text-text-tertiary text-xs")}>
                  Tags reflect product title
                </div>
              </div>
              <div>
                <div
                  className={cn("text-accent font-display font-bold text-lg")}
                >
                  20
                </div>
                <div className={cn("text-text-primary font-medium")}>
                  Diversity
                </div>
                <div className={cn("text-text-tertiary text-xs")}>
                  Broad category coverage
                </div>
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
              Technical deep dive
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
                    Three-state tag management
                  </h4>
                </div>
                <p
                  className={cn(
                    "text-sm text-text-secondary leading-relaxed mb-3",
                  )}
                >
                  The frontend manages three distinct tag states simultaneously:
                  &quot;Original Tags&quot; (from Shopify), &quot;AI Draft
                  Tags&quot; (staged, shown in orange), and &quot;Final
                  Tags&quot; (committed). This state machine handles edge cases
                  like re-generating tags for an already-staged product, adding
                  manual tags alongside AI-generated ones, and reverting to
                  original tags on cancel.
                </p>
                <div
                  className={cn(
                    "rounded-lg bg-bg-tertiary p-4 font-mono text-xs text-text-secondary overflow-x-auto",
                  )}
                >
                  <pre className="language-typescript">{`// State flow: Original → AI Draft (staging) → Final (committed)
// Shopify productUpdate mutation ONLY fires on explicit confirm
const mutation = \`
  mutation productUpdate($input: ProductInput!) {
    productUpdate(input: $input) {
      product { id, tags }
      userErrors { field, message }
    }
  }
\`;
// Called only when user clicks "Confirm Tags"`}</pre>
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
                    Industry-specific keyword databases
                  </h4>
                </div>
                <p
                  className={cn(
                    "text-sm text-text-secondary leading-relaxed mb-3",
                  )}
                >
                  Built 13 curated keyword dictionaries (fashion, electronics,
                  industrial, beauty, baby, sports, pet, food, craft, digital,
                  home/kitchen, adult, general), each containing three
                  categories: functional keywords, material keywords, and
                  scene/usage keywords. The scoring algorithm loads the relevant
                  dictionary based on product type and matches against it.
                </p>
                <div
                  className={cn(
                    "rounded-lg bg-bg-tertiary p-4 font-mono text-xs text-text-secondary overflow-x-auto",
                  )}
                >
                  <pre>{`// 13 industry keyword maps
const KEYWORD_MAP = {
  fashion: { function, material, scene },
  electronics: { function, material, scene },
  industrial: { function, material, scene },
  // ... 10 more categories
};
// Scoring matches tags against relevant industry dictionary
const keywords = KEYWORD_MAP[productType] || generalKeywords;`}</pre>
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
                    Exhaustive tag aggregation via cursor pagination
                  </h4>
                </div>
                <p
                  className={cn(
                    "text-sm text-text-secondary leading-relaxed mb-3",
                  )}
                >
                  The tag search filter needs to know every unique tag across
                  the entire product catalog. I built a paginated GraphQL
                  crawler that fetches all products 100 at a time using
                  cursor-based pagination, aggregates every tag into a Set (for
                  O(1) dedup), and returns the complete unique tag list. For a
                  20k+ catalog, this runs on the server via Remix loader to
                  avoid blocking the UI.
                </p>
                <div
                  className={cn(
                    "rounded-lg bg-bg-tertiary p-4 font-mono text-xs text-text-secondary overflow-x-auto",
                  )}
                >
                  <pre>{`// Cursor-paginated tag aggregation across entire catalog
const allTags = new Set();
while (hasNextPage) {
  const data = await admin.graphql(query, {
    variables: { first: 100, after: cursor }
  });
  for (const edge of data.products.edges) {
    edge.node.tags.forEach(tag => allTags.add(tag));
    cursor = edge.cursor;
  }
  hasNextPage = data.products.pageInfo.hasNextPage;
}`}</pre>
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
                    4
                  </span>
                  <h4
                    className={cn(
                      "font-display font-semibold text-text-primary",
                    )}
                  >
                    Remix SSR for secure API handling
                  </h4>
                </div>
                <p
                  className={cn("text-sm text-text-secondary leading-relaxed")}
                >
                  All OpenAI API calls and Shopify admin authentication happen
                  server-side via Remix loader/action patterns. API keys never
                  touch the client. The Shopify App Bridge handles session
                  authentication, and Prisma ORM provides local data persistence
                  for settings and tag history. TypeScript interfaces enforce
                  strict data validation between the Shopify GraphQL Admin API
                  and the frontend, preventing runtime errors in the tagging
                  workflow.
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
              What I learned
            </h2>
            <p className={cn("text-text-secondary leading-relaxed mb-4")}>
              Building TagWise taught me that AI features need more UX
              guardrails, not fewer. The temptation was to make the flow as
              frictionless as possible, &quot;click button, get tags,
              done.&quot; But talking to merchants revealed that trust is the
              bottleneck: they don&apos;t want AI silently changing their live
              store data. The staging workflow adds one extra step, but
              it&apos;s the step that makes merchants actually use the tool
              instead of being afraid of it.
            </p>
            <p className={cn("text-text-secondary leading-relaxed")}>
              The scoring engine was also a lesson in domain specificity. A
              generic &quot;tag quality&quot; algorithm is nearly useless, what
              makes a good tag for a snowboard is completely different from what
              makes a good tag for a lab instrument. Building 13 keyword
              databases was tedious, but it&apos;s what makes the scoring
              genuinely useful rather than just a vanity metric.
            </p>
          </section>
        </FadeIn>
      </article>

      <FadeIn>
        <div className="mt-20 pt-8 border-t border-border flex justify-between items-center">
          <Link
            href="/projects/b2b-quote"
            className={cn(
              "text-sm text-text-tertiary hover:text-text-primary transition-colors",
            )}
          >
            ← Previous: B2B Quote Platform
          </Link>
          <Link
            href="/projects/ai-playground"
            className={cn(
              "text-sm text-accent hover:text-accent-dark transition-colors",
            )}
          >
            Next project: AI Playground →
          </Link>
        </div>
      </FadeIn>
    </main>
  );
}
