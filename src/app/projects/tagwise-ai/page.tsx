// src/app/projects/tagwise-ai/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { MediaGrid } from "@/components/ui/MediaGrid";
import { BackToHome } from "@/components/ui/BackToHome";
import {
  body,
  Eyebrow,
  SectionTitle,
  Strong,
  Card,
  Metrics,
  TagList,
  TechCard,
  DeepDive,
} from "@/components/ui/CaseStudy";

export const metadata: Metadata = {
  title: "TagWise AI",
  description:
    "A Shopify app that drafts SEO tags with AI and lets merchants review them before anything goes live.",
};

const stateCode = `// Original -> AI draft (review) -> Final (saved)
// productUpdate only runs when the merchant clicks "Confirm Tags"
const mutation = \`
  mutation productUpdate($input: ProductInput!) {
    productUpdate(input: $input) {
      product { id, tags }
      userErrors { field, message }
    }
  }
\`;`;

const keywordCode = `// 13 industry keyword lists
const KEYWORD_MAP = {
  fashion: { function, material, scene },
  electronics: { function, material, scene },
  industrial: { function, material, scene },
  // ...10 more
};
// The scorer picks the list for the product type
const keywords = KEYWORD_MAP[productType] || generalKeywords;`;

const tagCrawlCode = `// Collect every unique tag in the store, 100 products at a time
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
}`;

export default function TagWise() {
  return (
    <main className={cn("max-w-3xl mx-auto px-6 pt-32 pb-16")}>
      <BackToHome />

      {/* ---------- Hero ---------- */}
      <FadeIn>
        <p className={cn("text-sm text-accent font-medium mb-3")}>
          TagWise AI · Personal project · Beta
        </p>
        <h1
          className={cn(
            "font-display text-3xl md:text-4xl font-bold tracking-tight mb-4",
          )}
        >
          AI tagging that waits for a yes
        </h1>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className={cn("text-lg text-text-secondary leading-relaxed mb-4")}>
          TagWise is a Shopify app that writes and scores SEO tags for products.
          Merchants told me they didn&apos;t want AI changing their live store
          without seeing it first, so every AI tag lands as a{" "}
          <Strong>draft they can edit</Strong>, and nothing is saved until they
          confirm.
        </p>
      </FadeIn>
      <FadeIn delay={0.15}>
        <p className={cn("text-text-secondary leading-relaxed mb-10")}>
          It also scores existing tags out of 100, using my own rules and
          keyword lists for 13 industries, and tells merchants what to fix.
        </p>
      </FadeIn>

      <FadeIn delay={0.2}>
        <Metrics
          items={[
            { value: "40%", label: "Lower perceived latency" },
            { value: "60fps", label: "At 100+ products" },
            { value: "13", label: "Industry keyword lists" },
            { value: "6", label: "Scoring checks" },
          ]}
        />
      </FadeIn>

      <FadeIn delay={0.25}>
        <TagList
          tags={[
            "Interaction design",
            "UX research",
            "React",
            "Remix",
            "Shopify Polaris",
            "OpenAI API",
          ]}
        />
      </FadeIn>

      <FadeIn delay={0.3}>
        <ProjectImage
          src="/images/projects/tagwise/tagwise.webp"
          alt="TagWise dashboard with a product list, tags, scores, and suggestions"
          priority
          caption="The TagWise dashboard: search, filter, generate tags, and score them."
        />
      </FadeIn>

      <article className={cn("space-y-16 mt-16")}>
        {/* ---------- The problem ---------- */}
        <FadeIn>
          <section>
            <Eyebrow>The problem</Eyebrow>
            <SectionTitle title="Tagging a big catalog by hand doesn't work" />
            <div className={body}>
              <p>
                Shopify merchants use tags for collections, filters, and search,
                so bad tags cause real problems. On a big catalog, tagging by
                hand takes forever and gets inconsistent over time. People also
                reach for vague tags like &quot;hot,&quot; &quot;new,&quot; or
                &quot;best-seller,&quot; which don&apos;t help anyone find the
                product.
              </p>
              <p>
                AI can write tags quickly, but merchants were nervous about
                letting it change their live store. That worry ended up shaping
                the whole app.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* ---------- Decision 1: the review step ---------- */}
        <FadeIn>
          <section>
            <Eyebrow>Decision 1</Eyebrow>
            <SectionTitle
              title="Adding a review step on purpose"
              subtitle="Merchants cared more about control than speed"
            />
            <div className={cn(body, "mb-6")}>
              <p>
                My first sketch had no review step: pick products, click
                Generate, and the tags go straight to the store. Talking to
                merchants changed that. Speed wasn&apos;t what worried them.{" "}
                <Strong>Control was.</Strong> Tags run their collections,
                filters, and search, so an AI quietly changing them is exactly
                the kind of automation they&apos;d learned not to trust. They
                wanted to see what it would do <em>before</em> it did it.
              </p>
            </div>

            <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-4 mb-6")}>
              <Card label="Considered" title="Fully automatic">
                The fastest option, and the one merchants said they
                wouldn&apos;t use. One bad batch could quietly break collections
                and filters.
              </Card>
              <Card label="Considered" title="Confirm every tag">
                Safe in theory, but on a big catalog the pop-ups turn into
                noise, and people click through without reading.
              </Card>
              <Card label="Shipped" title="Batch review" highlight>
                Generate tags for up to 10 products at once. They show up as
                drafts that look different from live tags, and one Confirm saves
                the whole batch.
              </Card>
            </div>

            <p className={cn("text-text-secondary leading-relaxed")}>
              I bet that one clear review step would earn more trust than no
              step at all, and be less tiring than confirming everything. That
              choice drove the rest of the UI. Draft tags are orange and live
              tags are gray, and the state doesn&apos;t rely on color alone:
              drafts have an &quot;×&quot; to remove them and an input to add
              more. Saving only happens when you press Confirm. There&apos;s no
              autosave.
            </p>

            {/* TODO(Figma): export the flow comparison to
                /public/images/projects/tagwise/flow-comparison.webp, then uncomment */}
            {/*
            <ProjectImage
              src="/images/projects/tagwise/flow-comparison.webp"
              alt="Three flows compared: fully automatic, confirm every tag, batch review"
              caption="The three options side by side, made in Figma."
            />
            */}
          </section>
        </FadeIn>

        {/* ---------- How the review step works ---------- */}
        <FadeIn>
          <section>
            <Eyebrow>How it works</Eyebrow>
            <SectionTitle
              title="Generating and reviewing tags"
              subtitle="AI suggests, the merchant decides"
            />
            <div className={body}>
              <p>
                Pick up to 10 products and click &quot;Generate AI Tags.&quot;
                The OpenAI API reads each product&apos;s title and description
                and suggests tags for things like material, use, and who
                it&apos;s for. Nothing is saved yet.
              </p>
              <p>
                The new tags show up in orange next to the existing gray ones.
                Merchants can delete any they don&apos;t like, fix the wording,
                or type in their own. Only{" "}
                <Strong>&quot;Confirm Tags&quot;</Strong> calls Shopify&apos;s{" "}
                <code
                  className={cn(
                    "text-xs font-mono bg-bg-secondary px-1.5 py-0.5 rounded",
                  )}
                >
                  productUpdate
                </code>{" "}
                mutation. There&apos;s also an option to replace all existing
                tags with the AI ones, and Cancel throws away every change.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <ProjectImage
            src="/images/projects/tagwise/ai-tags-generated.webp"
            alt="A product with orange AI draft tags next to gray live tags"
            caption="Gray tags are already live. Orange tags are AI drafts you can edit. Nothing saves until you click Confirm."
          />
        </FadeIn>

        <FadeIn>
          <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-4")}>
            <Card title="Drafts stay in the app">
              AI tags live in the app&apos;s state until Confirm. Shopify
              isn&apos;t touched before that.
            </Card>
            <Card title="The merchant has the last word">
              Each tag has an &quot;×&quot; to remove it, and there&apos;s an
              input for adding your own.
            </Card>
            <Card title="Batches of 10">
              Generate and save tags for up to 10 products at a time.
            </Card>
          </div>
        </FadeIn>

        {/* ---------- Decision 2: scoring by industry ---------- */}
        <FadeIn>
          <section>
            <Eyebrow>Decision 2</Eyebrow>
            <SectionTitle
              title="Scoring tags by industry"
              subtitle="A score, plus what to fix"
            />
            <div className={body}>
              <p>
                Select products and click &quot;Score Selected Tags.&quot; Each
                product gets a score out of 100 across six checks: how many tags
                it has (5 to 10 is the target), duplicates, weak words like
                &quot;hot&quot; or &quot;new,&quot; whether the tags cover
                function, material, and use, whether they match the title, and
                how varied they are.
              </p>
              <p>
                One set of rules can&apos;t work for every store. A good tag for
                a snowboard looks nothing like a good tag for a lab instrument.
                So I wrote <Strong>keyword lists for 13 industries</Strong>,
                including fashion, electronics, industrial, beauty, sports, and
                food, each split into function, material, and use keywords. That
                way &quot;waterproof&quot; counts for sports gear, and food
                products don&apos;t get marked down for missing it.
              </p>
              <p>
                Scores and the top suggestion show up right in the product list.
                &quot;View Report&quot; opens the full breakdown with up to
                three suggestions, like &quot;Contains weak words (e.g.,
                &apos;hot&apos;). Try using more specific terms.&quot;
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <MediaGrid
            items={[
              {
                src: "/images/projects/tagwise/scored-products.webp",
                alt: "Product list with SEO scores and suggestions",
              },
              {
                src: "/images/projects/tagwise/score-report.webp",
                alt: "Full score report with suggestions",
              },
            ]}
            columns={2}
            caption="Left: scores and suggestions in the product list. Right: the full report."
          />
        </FadeIn>

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
              How the 100 points break down
            </h4>
            <div
              className={cn("grid grid-cols-2 md:grid-cols-3 gap-4 text-sm")}
            >
              {[
                { pts: 20, name: "Tag count", note: "5 to 10 tags" },
                { pts: 15, name: "No duplicates", note: "Each tag is unique" },
                {
                  pts: 10,
                  name: "No weak words",
                  note: "No vague or spammy tags",
                },
                {
                  pts: 15,
                  name: "Keyword coverage",
                  note: "Function, material, and use",
                },
                {
                  pts: 20,
                  name: "Matches the title",
                  note: "Tags reflect the title",
                },
                { pts: 20, name: "Variety", note: "Covers different angles" },
              ].map((d) => (
                <div key={d.name}>
                  <div
                    className={cn(
                      "text-accent font-body font-semibold tabular-nums text-lg",
                    )}
                  >
                    {d.pts}
                  </div>
                  <div className={cn("text-text-primary font-medium")}>
                    {d.name}
                  </div>
                  <div className={cn("text-text-tertiary text-xs")}>
                    {d.note}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* ---------- Details: finding products ---------- */}
        <FadeIn>
          <section>
            <Eyebrow>The details</Eyebrow>
            <SectionTitle
              title="Finding the products that need work"
              subtitle="Search, filter, and sort a large catalog"
            />
            <div className={body}>
              <p>
                Merchants can search by product name, filter by tags a product
                already has, filter by collection (loaded live from Shopify
                GraphQL), and sort by last updated or by name. Together that
                makes it practical to find a group of products and fix them in
                batches.
              </p>
              <p>
                Each row shows the product image, name, description, current
                tags, SEO score if it has one, the top suggestion, and a
                &quot;View Report&quot; link. Products with low scores or
                missing info are easy to spot.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <ProjectImage
            src="/images/projects/tagwise/tagwise_dashboard_filter.webp"
            alt="Dashboard with search, sort, tag filter, and collection filter"
            caption="Search by name, sort, filter by existing tags, and filter by collection."
          />
        </FadeIn>

        {/* ---------- Technical deep dive (collapsed) ---------- */}
        <FadeIn>
          <DeepDive>
            <TechCard n={1} title="Three tag states" code={stateCode}>
              The app keeps three versions of a product&apos;s tags at once: the
              original tags from Shopify, the AI drafts, and the final tags that
              get saved. That covers the messy cases, like generating again for
              a product that already has drafts, mixing in manual tags, or going
              back to the originals on Cancel.
            </TechCard>
            <TechCard
              n={2}
              title="Keyword lists for 13 industries"
              code={keywordCode}
            >
              Fashion, electronics, industrial, beauty, baby, sports, pet, food,
              craft, digital, home and kitchen, adult, and general. Each list is
              split into function, material, and use keywords, and the scorer
              picks the list based on product type.
            </TechCard>
            <TechCard
              n={3}
              title="Collecting every tag in the store"
              code={tagCrawlCode}
            >
              The tag filter needs every unique tag in the store. A server-side
              loop asks Shopify for products 100 at a time with cursor
              pagination and adds each tag to a Set to drop duplicates. It runs
              in a Remix loader, so the browser isn&apos;t doing the work.
            </TechCard>
            {/* TODO(Zoe): 加一张卡讲 40% 和 60fps 是怎么来的（虚拟列表用的什么、optimistic UI 怎么做、40% 怎么测的） */}
            <TechCard n={4} title="Keeping keys on the server">
              All OpenAI calls and Shopify admin requests run in Remix loaders
              and actions, so API keys never reach the browser. Shopify App
              Bridge handles the session, and Prisma stores settings and tag
              history. TypeScript types describe the GraphQL responses, so shape
              mismatches show up while I&apos;m writing code.
            </TechCard>
          </DeepDive>
        </FadeIn>

        {/* ---------- What I learned ---------- */}
        <FadeIn>
          <section>
            <SectionTitle title="What I learned" />
            <div className={body}>
              <p>
                The biggest lesson was that an AI feature needs extra care in
                the interface. I wanted the flow to be &quot;click a button, get
                tags, done.&quot; Merchants didn&apos;t trust that. The review
                step adds one click, and it&apos;s the reason they&apos;re
                willing to use the tool at all.
              </p>
              <p>
                The scoring taught me how much the domain matters. Writing 13
                keyword lists was tedious, but without them the score would just
                be a number nobody trusts.
              </p>
            </div>
          </section>
        </FadeIn>
      </article>

      <FadeIn>
        <div
          className={cn(
            "mt-16 pt-8 border-t border-border flex justify-between items-center",
          )}
        >
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