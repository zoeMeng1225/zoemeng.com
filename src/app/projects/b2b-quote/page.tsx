// src/app/projects/b2b-quote/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";
import { ProjectVideo } from "@/components/ui/ProjectVideo";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { MediaGrid } from "@/components/ui/MediaGrid";
import { B2BArchitectureDiagram } from "@/components/ui/B2BArchitectureDiagram";
import { BackToHome } from "@/components/ui/BackToHome";

export const metadata: Metadata = {
  title: "B2B Quote Platform",
  description:
    "How I replaced MTI's Excel-and-email quoting with a quote cart for buyers and one workspace for the sales team.",
};

/* ---------- small building blocks used on this page ---------- */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      className={cn(
        "text-xs font-semibold uppercase tracking-widest text-text-tertiary mb-2",
      )}
    >
      {children}
    </p>
  );
}

function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <>
      <h2
        className={cn(
          "font-display text-xl font-semibold",
          subtitle ? "mb-2" : "mb-4",
        )}
      >
        {title}
      </h2>
      {subtitle && <p className={cn("text-sm text-accent mb-6")}>{subtitle}</p>}
    </>
  );
}

function Strong({ children }: { children: React.ReactNode }) {
  return (
    <span className={cn("text-text-primary font-medium")}>{children}</span>
  );
}

function Card({
  title,
  children,
  accent = false,
}: {
  title: string;
  children: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <div className={cn("p-5 rounded-lg bg-bg-secondary border border-border")}>
      <h4
        className={cn(
          "font-display text-sm font-semibold mb-2",
          accent ? "text-accent" : "text-text-primary",
        )}
      >
        {title}
      </h4>
      <p className={cn("text-sm text-text-secondary leading-relaxed")}>
        {children}
      </p>
    </div>
  );
}

function TechCard({
  n,
  title,
  children,
  code,
}: {
  n: number;
  title: string;
  children: React.ReactNode;
  code?: string;
}) {
  return (
    <div className={cn("p-6 rounded-xl bg-bg-secondary border border-border")}>
      <div className={cn("flex items-center gap-3 mb-3")}>
        <span
          className={cn(
            "w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center text-accent text-sm font-bold",
          )}
        >
          {n}
        </span>
        <h4 className={cn("font-display font-semibold text-text-primary")}>
          {title}
        </h4>
      </div>
      <p
        className={cn(
          "text-sm text-text-secondary leading-relaxed",
          code && "mb-3",
        )}
      >
        {children}
      </p>
      {code && (
        <div
          className={cn(
            "rounded-lg bg-bg-tertiary p-4 font-mono text-xs text-text-secondary overflow-x-auto",
          )}
        >
          <pre>{code}</pre>
        </div>
      )}
    </div>
  );
}

const body = cn("space-y-4 text-text-secondary leading-relaxed");

/* ---------- code samples for the deep dive ---------- */

const quoteCartCode = `// Separate slices, so the quote cart never touches the shopping cart
const quoteCartSlice = createSlice({
  name: 'quoteCart',
  initialState: { items: [], inquiry: {} },
  reducers: {
    addToQuote, removeFromQuote, updateQuantity,
    toggleItemTax, addCustomProduct
  },
});`;

const batchCode = `// One GraphQL request for every product on the quote
const productQueries = products.map((p, i) => \`
  variant\${i}: node(id: "gid://shopify/ProductVariant/\${p.variant_id}") {
    ... on ProductVariant { id, title, price, inventoryQuantity,
      product { id, title }
    }
  }
\`);
const { data } = await admin.graphql(\`{ \${productQueries.join("\\n")} }\`);`;

const phoneCode = `// Compare phone numbers without dashes, spaces, parentheses or "+"
const phoneExpr = sql\`
  replace(replace(replace(replace(replace(
    json_extract(customer, '$.phone'),
    '-',''),' ',''),'(',''),')',''),'+','')
\`;
// "858-717-5278" matches a search for "8587175278"`;

export default function B2BQuotePage() {
  return (
    <main className={cn("max-w-3xl mx-auto px-6 pt-32 pb-16")}>
      <BackToHome />

      {/* ---------- Hero ---------- */}
      <FadeIn>
        <p className={cn("text-sm text-accent font-medium mb-3")}>
          B2B Quote Platform · MTI Corporation · Since 2022
        </p>
        <h1
          className={cn(
            "font-display text-3xl md:text-4xl font-bold tracking-tight mb-4",
          )}
        >
          Getting quotes out of Excel
        </h1>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className={cn("text-lg text-text-secondary leading-relaxed mb-4")}>
          MTI&apos;s sales team built every quote by hand. They looked up the
          product in Shopify, copied prices into a spreadsheet, worked out the
          tax, made a PDF in Word, and then wrote the email. I sat with them to
          see where it slowed down, then designed and built two connected apps:
          a quote cart for buyers on the website, and one page in the Shopify
          admin where staff can finish a quote.
        </p>
      </FadeIn>
      <FadeIn delay={0.15}>
        <p className={cn("text-sm text-text-tertiary mb-6")}>
          I was the only engineer on the project. I watched how the team worked,
          designed the flow, built both apps, and I still maintain them.
        </p>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className={cn("grid grid-cols-2 gap-3 mb-8 max-w-sm")}>
          {[
            { value: "83%", label: "Less time per quote" },
            { value: "30K+", label: "Products in the catalog" },
          ].map((m) => (
            <div
              key={m.label}
              className={cn("py-4 px-4 rounded-lg bg-bg-secondary")}
            >
              <div
                className={cn(
                  "text-xl font-body font-semibold tabular-nums text-accent",
                )}
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

      <FadeIn delay={0.25}>
        <div className={cn("flex flex-wrap gap-2 mb-10")}>
          {[
            "Product design",
            "Interaction design",
            "Remix",
            "Shopify Polaris",
            "Redux Toolkit",
            "GraphQL",
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
        <ProjectVideo
          src="/images/projects/b2b-quote/quote_flow_done.mp4"
          poster="/images/projects/b2b-quote/quote_flow_hero.webp"
          caption="The full flow: a buyer sends a quote request, then staff review it, adjust prices, and email the PDF."
        />
      </FadeIn>

      <article className={cn("space-y-16 mt-16")}>
        {/* ---------- The problem ---------- */}
        <FadeIn>
          <section>
            <Eyebrow>The problem</Eyebrow>
            <SectionTitle title="Seven steps and four different tools" />
            <div className={body}>
              <p>
                Every quote meant switching between Shopify, a spreadsheet, a
                document editor, and email, and typing the same product, price,
                and customer details again at each step. Requests also came in
                two ways. Some buyers asked through the website, and others
                called or emailed a rep. Both kinds had to end up in the same
                place.
              </p>
              <p>
                That meant two separate screens, one for buyers and one for
                staff, working from the same quote.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* ---------- Decision 1 ---------- */}
        <FadeIn>
          <section>
            <Eyebrow>Decision 1</Eyebrow>
            <SectionTitle
              title="Keeping the quote cart separate from the shopping cart"
              subtitle="Buyer side · Order now and ask for a quote in the same visit"
            />
            {/* TODO(Zoe): 补一句当时考虑过、后来没用的方案，和为什么没用。没有就删掉这行注释，不要编。 */}
            <div className={body}>
              <p>
                Buyers needed to ask for bulk pricing without messing up their
                regular order. So I built the quote cart as its own Redux
                Toolkit slice,{" "}
                <Strong>separate from Shopify&apos;s cart</Strong>. Adding
                something to a quote never changes what&apos;s in the cart, and
                the other way around.
              </p>
              <p>
                The request form asks for contact and company details and checks
                them as you type. Buyers can also{" "}
                <Strong>pick which sales reps get copied</Strong>, using the
                same email chips staff use in the admin. There&apos;s a review
                step before they submit.
              </p>
              <p>
                Each request sends three emails through AWS SES: one to the reps
                the buyer picked, with a link straight to the quote in the
                admin, one to the admin team, and a confirmation to the buyer.
                If the buyer is new, the app creates their Shopify account and
                sends an activation email. They can also upload a tax exemption
                form, which goes to the finance team.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <MediaGrid
            items={[
              {
                src: "/images/projects/b2b-quote/quote-cart1.webp",
                alt: "Quote cart drawer",
              },
              {
                src: "/images/projects/b2b-quote/quote-cc.webp",
                alt: "Request form with sales reps to copy",
              },
            ]}
            columns={2}
            caption=""
          />
          <ProjectVideo
            src="/images/projects/b2b-quote/quote_review.mp4"
            poster="/images/projects/b2b-quote/quote-review-hero.webp"
            caption="Buyer flow: add items to the quote cart, fill in the form and pick reps to copy, review, and submit."
          />
        </FadeIn>

        <FadeIn>
          <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-4")}>
            <Card title="Separate quote cart">
              Its own Redux Toolkit slice, so quoting never touches the shopping
              cart.
            </Card>
            <Card title="Three emails per request">
              Reps, the admin team, and the buyer each get one. The reps&apos;
              email links right to the quote.
            </Card>
            <Card title="New customer accounts">
              First-time buyers get a Shopify account created for them, plus an
              activation email.
            </Card>
          </div>
        </FadeIn>

        {/* ---------- Decision 2 ---------- */}
        <FadeIn>
          <section>
            <Eyebrow>Decision 2</Eyebrow>
            <SectionTitle
              title="One page for the whole quote"
              subtitle="Staff side · Edit everything without leaving the page"
            />
            {/* TODO(Zoe): 补一句当时考虑过、后来没用的方案，和为什么没用。没有就删掉这行注释，不要编。 */}
            <div className={body}>
              <p>
                Quote Detail is where staff do the actual work, so I kept
                everything on that one page: products, customer info, pricing,
                who&apos;s assigned, the email, and actions like converting to
                an order. They never have to open another tab to finish a quote.
              </p>
              <p>
                Every customer is a bit different. The same product can have a
                different price for a different customer, some items are tax
                exempt, and shipping terms vary. Staff can{" "}
                <Strong>
                  edit price, quantity, and tax right in the table
                </Strong>
                , and the subtotal, tax, and total update immediately. Tax comes
                from California&apos;s CDTFA rate API, based on the shipping
                address. A &quot;Hide price&quot; option leaves a line&apos;s
                price off the PDF.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <ProjectImage
            src="/images/projects/b2b-quote/admin-detail-v2.webp"
            alt="Quote Detail page"
            caption="Quote Detail: products, customer, staff assignment, and email on one page."
          />
        </FadeIn>

        <FadeIn>
          <ProjectVideo
            src="/images/projects/b2b-quote/productEdit_done.mp4"
            poster="/images/projects/b2b-quote/productEdit_hero.webp"
            caption="Editing price, quantity, and tax inline. The total updates right away."
          />
        </FadeIn>

        {/* ---------- Decision 3 ---------- */}
        <FadeIn>
          <section>
            <Eyebrow>Decision 3</Eyebrow>
            <SectionTitle
              title="Making it clear who owns each quote"
              subtitle="Staff side · One owner per quote, no double replies"
            />
            {/* TODO(Zoe): 补一句当时考虑过、后来没用的方案，和为什么没用。没有就删掉这行注释，不要编。 */}
            <div className={body}>
              <p>
                Before, it was easy for two reps to answer the same customer
                without knowing it. Now each quote shows the sales team as{" "}
                <Strong>email chips</Strong> above the email. If the buyer
                picked reps when they submitted, those are already selected. A
                manager can click to reassign, and whoever is selected is copied
                on every email.
              </p>
              <p>
                The email itself is filled in from the quote: from, to, CC, and
                a subject line with the quote ID. The body starts from a
                template the team can edit in a rich text editor (SunEditor),
                and the PDF attaches with one click.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <MediaGrid
            items={[
              {
                src: "/images/projects/b2b-quote/email-composer.webp",
                alt: "Pre-filled email in SunEditor",
              },
              {
                src: "/images/projects/b2b-quote/staff-chips.webp",
                alt: "Staff email chips",
              },
            ]}
            columns={2}
            caption="Left: the pre-filled email. Right: staff chips and the selected list."
          />
        </FadeIn>

        {/* ---------- Details: finding and creating quotes ---------- */}
        <FadeIn>
          <section>
            <Eyebrow>The details</Eyebrow>
            <SectionTitle
              title="Finding and creating quotes"
              subtitle="Staff side · Search, sort, and create quotes"
            />
            <div className={body}>
              <p>
                Every request from the website shows up in the Quote List. Reps
                can <Strong>search by quote ID or customer name</Strong>, sort
                by date or name, and see which quotes are still unread. It shows
                20 quotes per page.
              </p>
              <p>
                Quotes that come in by phone or email start from &quot;Create
                Quote.&quot; Reps search the{" "}
                <Strong>30K+ product catalog</Strong> by name and filter by
                category, collection, type, or vendor with Shopify&apos;s
                ResourcePicker. For things that aren&apos;t in the catalog, like
                shipping fees or custom fabrication, &quot;Add Customized
                Product&quot; lets them add a line with its own title, price,
                quantity, tax setting, weight, and description.
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
                alt: "Sorting by customer or date",
              },
            ]}
            columns={2}
            caption="Quote List: search by ID or customer, sort by date or name."
          />
        </FadeIn>

        <FadeIn>
          <MediaGrid
            items={[
              {
                src: "/images/projects/b2b-quote/productSearch.webp",
                alt: "Product search with category, collection, type, and vendor filters",
              },
              {
                src: "/images/projects/b2b-quote/product-custom.webp",
                alt: "Add Customized Product dialog",
              },
              {
                src: "/images/projects/b2b-quote/product-mixed.webp",
                alt: "Quote with a catalog product and a custom shipping fee",
              },
            ]}
            columns={3}
            caption="Left: product search with filters. Center: adding a custom item. Right: a quote with both."
          />
        </FadeIn>

        {/* ---------- Details: quote to order ---------- */}
        <FadeIn>
          <section>
            <Eyebrow>The details</Eyebrow>
            <SectionTitle
              title="From quote to order"
              subtitle="Staff side · Turn an approved quote into an order in one click"
            />
            <p className={cn("text-text-secondary leading-relaxed")}>
              The &quot;More Actions&quot; menu on Quote Detail has four
              actions.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <ProjectImage
            src="/images/projects/b2b-quote/more-actions.webp"
            alt="More Actions menu: Download and Print, Convert to Draft Order, Duplicate, Delete"
            caption="The More Actions menu on Quote Detail."
          />
        </FadeIn>

        <FadeIn>
          <div className={cn("space-y-4")}>
            <Card title="Convert to Draft Order" accent>
              When a customer approves a quote, one click runs Shopify&apos;s{" "}
              <code
                className={cn(
                  "text-xs font-mono bg-bg-tertiary px-1 py-0.5 rounded",
                )}
              >
                draftOrderCreate
              </code>{" "}
              mutation with all the line items, customer info, addresses, and
              shipping. The customer pays the draft order and Shopify turns it
              into a regular order, so nobody has to type the quote in again.
            </Card>
            <Card title="Download or print a PDF">
              Made in the browser with jsPDF and html2canvas, so the PDF looks
              like the quote on screen, with prices, tax, and customer info.
              Lines marked &quot;Hide price&quot; stay hidden in the PDF.
            </Card>
            <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-4")}>
              <Card title="Duplicate">
                Makes a copy with a new quote ID. Handy for repeat orders or a
                second version for the same customer.
              </Card>
              <Card title="Delete, with a safety check">
                Asks twice before deleting (&quot;Once deleted, it cannot be
                undone!&quot;), and only some accounts can do it.
              </Card>
            </div>
          </div>
        </FadeIn>

        {/* ---------- Outcome ---------- */}
        <FadeIn>
          <section>
            <Eyebrow>Outcome</Eyebrow>
            <SectionTitle title="83% less time per quote" />
            <p className={cn("text-text-secondary leading-relaxed")}>
              Most of the time saved came from steps that disappeared. The email
              fills itself in, tax is already calculated, the PDF is already
              attached, and an approved quote becomes an order with one click.
            </p>
          </section>
        </FadeIn>

        {/* TODO(Zoe): 下面写的是约 10 分钟到 30 秒（约 95%），和 83% 对不上，确认后统一 */}
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
              About 10 minutes down to 30 seconds
            </h4>
            <div
              className={cn(
                "grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-text-secondary",
              )}
            >
              <div className={cn("border-l-2 border-border-hover pl-4 py-1")}>
                <p
                  className={cn(
                    "font-medium text-text-tertiary mb-2 uppercase tracking-wider text-xs",
                  )}
                >
                  Before
                </p>
                <ol className={cn("space-y-1.5 list-decimal list-inside")}>
                  <li>Find the product in Shopify</li>
                  <li>Copy prices into a spreadsheet</li>
                  <li>Work out tax and totals by hand</li>
                  <li>Make a PDF in Word or Google Docs</li>
                  <li>Open email and write the message</li>
                  <li>Attach the PDF and CC the right people</li>
                  <li>Send. About 10 minutes per quote</li>
                </ol>
              </div>
              <div
                className={cn(
                  "border-l-2 border-accent pl-4 py-1 bg-accent/5 rounded-r-md",
                )}
              >
                <p
                  className={cn(
                    "font-medium text-accent mb-2 uppercase tracking-wider text-xs",
                  )}
                >
                  After
                </p>
                <ol className={cn("space-y-1.5 list-decimal list-inside")}>
                  <li>Open Quote Detail, already filled in</li>
                  <li>Adjust prices if needed</li>
                  <li>Click the reps to CC</li>
                  <li>Check the pre-filled email</li>
                  <li>Attach the generated PDF</li>
                  <li>Send. About 30 seconds per quote</li>
                </ol>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ---------- Technical deep dive (collapsed) ---------- */}
        <FadeIn>
          <details className={cn("group rounded-xl border border-border")}>
            <summary
              className={cn(
                "flex cursor-pointer list-none items-center justify-between px-6 py-5",
                "font-display text-xl font-semibold text-text-primary",
                "[&::-webkit-details-marker]:hidden",
              )}
            >
              Technical deep dive
              <span
                aria-hidden="true"
                className={cn(
                  "text-accent transition-transform duration-200 group-open:rotate-45",
                )}
              >
                +
              </span>
            </summary>

            <div className={cn("space-y-10 px-6 pb-6")}>
              <section>
                <h3
                  className={cn(
                    "font-display font-semibold text-text-primary mb-4",
                  )}
                >
                  How the two apps connect
                </h3>
                <div className={body}>
                  <p>
                    There are two apps. The storefront app runs on the Shopify
                    store and handles quote requests. The admin app (Quote List,
                    Create Quote, Quote Detail) is where staff take a quote from
                    first request to draft order.
                  </p>
                  <p>
                    The storefront talks to the admin through one REST endpoint
                    (
                    <code
                      className={cn(
                        "text-sm font-mono bg-bg-secondary px-1.5 py-0.5 rounded",
                      )}
                    >
                      api.shopify.jsx
                    </code>
                    ), which creates the quote, sets up new customer accounts,
                    and sends the emails. On the admin side, product data comes
                    from Shopify GraphQL, quotes are stored with Drizzle ORM on
                    Cloudflare D1, and tax comes from the California CDTFA API.
                  </p>
                </div>
                <figure className={cn("mt-8")}>
                  <div
                    className={cn(
                      "rounded-xl overflow-hidden border border-border p-6 bg-bg-secondary",
                    )}
                  >
                    <B2BArchitectureDiagram />
                  </div>
                  <figcaption
                    className={cn(
                      "mt-3 text-sm text-text-tertiary text-center",
                    )}
                  >
                    Two apps, one shared data layer, and the outside services
                    they call.
                  </figcaption>
                </figure>
              </section>

              <div className={cn("space-y-4")}>
                <TechCard
                  n={1}
                  title="Separate state for the quote cart"
                  code={quoteCartCode}
                >
                  The quote cart and the shopping cart are separate Redux
                  Toolkit slices with their own actions and selectors. The quote
                  cart keeps track of items, quantities, tax settings, and
                  custom products, and never writes to Shopify&apos;s cart.
                </TechCard>
                <TechCard
                  n={2}
                  title="One request for all products"
                  code={batchCode}
                >
                  The Quote Detail loader loads the quote, then builds a single
                  GraphQL query that fetches every product variant at once,
                  instead of one request per product. Because it runs in a Remix
                  loader, the data is ready when the page renders on the server.
                </TechCard>
                <TechCard n={3} title="Live tax from the CDTFA API">
                  Tax rates come from California&apos;s official rate API, based
                  on the shipping address, and update when the address changes.
                  Reps can mark single items as tax exempt, and the total
                  updates each time.
                </TechCard>
                <TechCard n={4} title="Quote search" code={phoneCode}>
                  Quick Search on Quote Detail matches quote IDs and Shopify
                  customer IDs exactly (including the GID format), and does
                  partial matches on name, email, and phone. Phone numbers are
                  compared without dashes, spaces, parentheses, or plus signs.
                </TechCard>
                <TechCard n={5} title="Tests for the main quote flows">
                  Jest and React Testing Library cover cart actions, form
                  validation, pricing math, PDF generation, and sending email.
                </TechCard>
              </div>
            </div>
          </details>
        </FadeIn>

        {/* ---------- What I learned ---------- */}
        <FadeIn>
          <section>
            <SectionTitle title="What I learned" />
            <div className={body}>
              <p>
                I learned the most just by watching the sales team work. They
                knew things about their process I would never have guessed. Some
                features I thought mattered, they never used. Quick-Jump
                Navigation, which I almost left out, is the one they use most.
              </p>
              <p>
                It also changed what I think of as performance work. In a tool
                like this, saving someone a round of copy and paste matters more
                than shaving milliseconds off a page load.
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
            href="/#projects"
            className={cn(
              "text-sm text-text-tertiary hover:text-text-primary transition-colors",
            )}
          >
            ← All work
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