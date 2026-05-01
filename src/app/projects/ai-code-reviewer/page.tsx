// src/app/projects/ai-code-reviewer/page.tsx

import { Metadata } from "next";
import { ProjectImage } from "@/components/ui/ProjectImage";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";
import { BackToHome } from "@/components/ui/BackToHome";

export const metadata: Metadata = {
  title: "AI Code Reviewer — Instant AI-Powered Code Reviews — Zoe Meng",
  description:
    "An open-source AI code review tool with real-time streaming, structured feedback, and multiple review modes. Built with Next.js 14, TypeScript, and GPT-4o-mini.",
};

export default function AICodeReviewer() {
  return (
    <main className={cn("max-w-3xl mx-auto px-6 pt-32 pb-16")}>
      {/* return to nav */}
      <BackToHome />

      {/* ============================================
          HERO
          ============================================ */}
      <FadeIn>
        <p className={cn("text-sm text-accent font-medium mb-3")}>
          Open Source Project · 2026
        </p>
        <h1
          className={cn(
            "font-display text-3xl md:text-4xl font-bold tracking-tight mb-4",
          )}
        >
          AI Code Reviewer
        </h1>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className={cn("text-lg text-text-secondary leading-relaxed mb-6")}>
          An open-source code review tool that provides instant, structured
          feedback powered by GPT-4o-mini. Paste your code, select a review
          mode, and watch the AI analysis{" "}
          <span className={cn("text-text-primary font-medium")}>
            stream in real-time
          </span>{" "}
          , token by token, into categorized, actionable review panels.
        </p>
      </FadeIn>

      <FadeIn delay={0.15}>
        <p className={cn("text-text-secondary leading-relaxed mb-10")}>
          The core technical challenge was building a{" "}
          <span className={cn("text-text-primary font-medium")}>
            streaming UI pipeline
          </span>{" "}
          that consumes the OpenAI response as a ReadableStream, parses markdown
          chunks on the fly, and renders them into structured sections: all
          while handling connection drops, abort signals, and rate limiting
          gracefully.
        </p>
      </FadeIn>

      {/* ---- Metrics ---- */}
      <FadeIn delay={0.2}>
        <div className={cn("grid grid-cols-4 gap-3 mb-8")}>
          {[
            { value: "3", label: "Review modes" },
            { value: "8", label: "Languages supported" },
            { value: "< 5s", label: "Avg review time" },
            { value: "100", label: "Code quality score" },
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
            "Next.js 14",
            "TypeScript",
            "OpenAI GPT-4o-mini",
            "Streaming API",
            "Monaco Editor",
            "Zustand",
            "Tailwind CSS",
            "Vercel",
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
          src="/images/projects/ai-code-reviewer/code-python.webp"
          alt="AI Code Reviewer showing a Python code review with score, issues, and suggestions"
          priority
          caption="AI Code Reviewer: paste code on the left, get structured AI feedback streamed in real-time on the right"
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
              Code reviews are one of the biggest bottlenecks in development
              workflows. Senior engineers spend hours reviewing pull requests,
              often catching the same patterns repeatedly: missing error
              handling, performance anti-patterns, security vulnerabilities.
              Junior developers wait hours or days for feedback, slowing down
              their learning cycle.
            </p>
            <p className={cn("text-text-secondary leading-relaxed")}>
              Existing AI code tools either dump unstructured text that&apos;s
              hard to act on, or they&apos;re embedded in IDEs where the
              feedback loop is too tight to see the big picture. There&apos;s a
              gap for a focused, standalone tool that gives structured,
              categorized feedback — the kind a senior engineer would give in a
              PR review.
            </p>
          </section>
        </FadeIn>

        {/* ============================================
            STORY 1: Streaming UI
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
              Real-time streaming review
            </h2>
            <p className={cn("text-sm text-accent mb-6")}>
              Watch the AI think — token by token
            </p>

            <div
              className={cn("space-y-4 text-text-secondary leading-relaxed")}
            >
              <p>
                The review result streams in real-time as GPT-4o-mini generates
                it. Instead of waiting 5-10 seconds for a complete response,
                users see the analysis appear{" "}
                <span className={cn("text-text-primary font-medium")}>
                  token by token
                </span>{" "}
                with a pulsing cursor indicator, giving immediate feedback that
                the system is working and building trust in the output.
              </p>
              <p>
                Under the hood, the Next.js API route creates an OpenAI
                streaming completion and converts it to a{" "}
                <span className={cn("text-text-primary font-medium")}>
                  ReadableStream
                </span>{" "}
                returned directly to the client. The{" "}
                <code
                  className={cn(
                    "text-xs font-mono bg-bg-secondary px-1.5 py-0.5 rounded",
                  )}
                >
                  useReview
                </code>{" "}
                hook consumes this stream via the Fetch API&apos;s{" "}
                <code
                  className={cn(
                    "text-xs font-mono bg-bg-secondary px-1.5 py-0.5 rounded",
                  )}
                >
                  reader.read()
                </code>{" "}
                loop, decoding chunks with TextDecoder and accumulating them
                into React state. An AbortController handles cancellation if the
                user submits a new review before the current one finishes.
              </p>
            </div>
          </section>
        </FadeIn>
        <FadeIn>
          <ProjectImage
            src="/images/projects/ai-code-reviewer/streaming.webp"
            alt="Streaming review in progress with pulsing cursor"
            caption="Real-time streaming: the review builds up token by token with a live cursor indicator"
            priority
          />
        </FadeIn>

        {/* ============================================
            STORY 2: Review Modes
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
              Three review modes for different needs
            </h2>
            <p className={cn("text-sm text-accent mb-6")}>
              Quick scan, deep analysis, or security audit
            </p>

            <div
              className={cn("space-y-4 text-text-secondary leading-relaxed")}
            >
              <p>
                Different situations call for different levels of scrutiny. A
                quick self-check before pushing doesn&apos;t need the same depth
                as a pre-launch security audit. The app provides three modes,
                each with a{" "}
                <span className={cn("text-text-primary font-medium")}>
                  distinct system prompt
                </span>{" "}
                that shapes the AI&apos;s focus, depth, and output length.
              </p>
              <p>
                <span className={cn("text-text-primary font-medium")}>
                  Quick
                </span>{" "}
                mode limits output to the top 3-5 issues with concise
                explanations, ideal for a fast sanity check.{" "}
                <span className={cn("text-text-primary font-medium")}>
                  Deep
                </span>{" "}
                mode analyzes architecture, edge cases, type safety, and
                refactoring opportunities with code examples.{" "}
                <span className={cn("text-text-primary font-medium")}>
                  Security
                </span>{" "}
                mode focuses exclusively on vulnerabilities: injection, XSS,
                auth flaws, data exposure, and dependency risks.
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
                  "font-display text-sm font-semibold text-text-primary mb-2",
                )}
              >
                ⚡ Quick review
              </h4>
              <p className={cn("text-sm text-text-secondary leading-relaxed")}>
                Top 3-5 issues only. Concise explanations. Fast turnaround for
                pre-commit self-checks and rapid iteration.
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
                🔍 Deep analysis
              </h4>
              <p className={cn("text-sm text-text-secondary leading-relaxed")}>
                Thorough review of architecture, patterns, edge cases, and
                refactoring opportunities. Includes code examples in
                suggestions.
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
                🛡️ Security audit
              </h4>
              <p className={cn("text-sm text-text-secondary leading-relaxed")}>
                Focused on vulnerabilities: SQL injection, XSS, authentication
                flaws, data exposure, CORS issues, and dependency risks.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* ============================================
            STORY 3: Structured Output
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
              Structured, actionable feedback
            </h2>
            <p className={cn("text-sm text-accent mb-6")}>
              Not a wall of text — categorized issues with severity and
              suggestions
            </p>

            <div
              className={cn("space-y-4 text-text-secondary leading-relaxed")}
            >
              <p>
                The AI output is structured into clear sections:{" "}
                <span className={cn("text-text-primary font-medium")}>
                  Summary
                </span>{" "}
                (2-3 sentence overview),{" "}
                <span className={cn("text-text-primary font-medium")}>
                  Score
                </span>{" "}
                (0-100 with a color-coded progress bar),{" "}
                <span className={cn("text-text-primary font-medium")}>
                  Issues
                </span>{" "}
                (each tagged with severity and category),{" "}
                <span className={cn("text-text-primary font-medium")}>
                  Highlights
                </span>{" "}
                (what the code does well), and{" "}
                <span className={cn("text-text-primary font-medium")}>
                  Suggestions
                </span>{" "}
                (general improvements).
              </p>
              <p>
                Each issue is tagged with a severity level: 🔴 Critical for bugs
                and security flaws, 🟡 Warning for performance issues and bad
                practices, 🟢 Info for style and readability improvements, along
                with the specific line number and category (Performance, Bug
                Risk, Readability, Best Practice, Security). A custom
                lightweight markdown renderer parses the streaming output into
                styled React components without any external dependency.
              </p>
              <p>
                Completed reviews can be{" "}
                <span className={cn("text-text-primary font-medium")}>
                  copied as markdown
                </span>{" "}
                (ready to paste into a PR comment) or{" "}
                <span className={cn("text-text-primary font-medium")}>
                  downloaded as a .md file
                </span>
                . Review history is persisted locally via Zustand with
                localStorage, allowing users to revisit and reload previous
                reviews with one click.
              </p>
            </div>
          </section>
        </FadeIn>
        <FadeIn>
          <ProjectImage
            src="/images/projects/ai-code-reviewer/review-result.webp"
            alt="Structured review result showing score, issues with severity, and suggestions"
            caption="Structured output: color-coded score bar, severity-tagged issues with line references, and actionable suggestions"
          />
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
                    Streaming pipeline: API route → ReadableStream → React state
                  </h4>
                </div>
                <p
                  className={cn(
                    "text-sm text-text-secondary leading-relaxed mb-3",
                  )}
                >
                  The API route creates an OpenAI streaming completion, iterates
                  over the async chunks, extracts the delta content, encodes it
                  with TextEncoder, and enqueues it into a Web Streams API
                  ReadableStream. The client consumes this with a{" "}
                  <code
                    className={cn(
                      "text-xs font-mono bg-bg-tertiary px-1.5 py-0.5 rounded",
                    )}
                  >
                    reader.read()
                  </code>{" "}
                  loop, decoding each chunk and accumulating into React state
                  for real-time rendering.
                </p>
                <div
                  className={cn(
                    "rounded-lg bg-bg-tertiary p-4 font-mono text-xs text-text-secondary overflow-x-auto",
                  )}
                >
                  <pre>{`// API Route: convert OpenAI stream → ReadableStream
const readable = new ReadableStream({
  async start(controller) {
    for await (const chunk of stream) {
      const text = chunk.choices[0]?.delta?.content || "";
      if (text) controller.enqueue(encoder.encode(text));
    }
    controller.close();
  },
});

// Client: consume stream in useReview hook
const reader = response.body?.getReader();
const decoder = new TextDecoder();
while (true) {
  const { done, value } = await reader.read();
  if (done) break;
  fullResult += decoder.decode(value, { stream: true });
  setResult(fullResult);
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
                    2
                  </span>
                  <h4
                    className={cn(
                      "font-display font-semibold text-text-primary",
                    )}
                  >
                    Custom markdown renderer
                  </h4>
                </div>
                <p
                  className={cn(
                    "text-sm text-text-secondary leading-relaxed mb-3",
                  )}
                >
                  Instead of pulling in{" "}
                  <code
                    className={cn(
                      "text-xs font-mono bg-bg-tertiary px-1.5 py-0.5 rounded",
                    )}
                  >
                    react-markdown
                  </code>{" "}
                  (35KB+ gzipped), I built a lightweight renderer tailored to
                  the specific review output format. It parses headings, bullet
                  points, numbered lists, code blocks, bold text, and the score
                  line into styled React components. The score line gets special
                  treatment, and it extracts the numeric value via regex and
                  renders a color-coded progress bar (green ≥ 80, amber ≥ 60,
                  red below).
                </p>
                <div
                  className={cn(
                    "rounded-lg bg-bg-tertiary p-4 font-mono text-xs text-text-secondary overflow-x-auto",
                  )}
                >
                  <pre>{`// Score line detection + color-coded rendering
if (text.toLowerCase().startsWith("score")) {
  const score = parseInt(text.match(/(\\d+)\\/100/)?.[1]);
  const color = score >= 80 ? "emerald" 
    : score >= 60 ? "amber" : "red";
  return <ScoreBar score={score} color={color} />;
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
                    3
                  </span>
                  <h4
                    className={cn(
                      "font-display font-semibold text-text-primary",
                    )}
                  >
                    Rate limiting + cost protection
                  </h4>
                </div>
                <p
                  className={cn(
                    "text-sm text-text-secondary leading-relaxed mb-3",
                  )}
                >
                  Since this is a public demo backed by a paid API, cost
                  protection is critical. The API route implements in-memory
                  rate limiting (10 requests per IP per hour) using a Map with
                  TTL-based expiry. Input validation caps code length at 8,000
                  characters. The{" "}
                  <code
                    className={cn(
                      "text-xs font-mono bg-bg-tertiary px-1.5 py-0.5 rounded",
                    )}
                  >
                    max_tokens
                  </code>{" "}
                  parameter is dynamically set per review mode (Quick: 1000,
                  Deep: 2000, Security: 1500) to minimize unnecessary token
                  usage.
                </p>
                <div
                  className={cn(
                    "rounded-lg bg-bg-tertiary p-4 font-mono text-xs text-text-secondary overflow-x-auto",
                  )}
                >
                  <pre>{`// In-memory rate limiting per IP
const RATE_LIMIT = 10;
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour

function checkRateLimit(ip: string): boolean {
  const record = requestCounts.get(ip);
  if (!record || Date.now() > record.resetAt) {
    requestCounts.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return true;
  }
  return record.count++ < RATE_LIMIT;
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
                    Monaco Editor with lazy loading
                  </h4>
                </div>
                <p
                  className={cn("text-sm text-text-secondary leading-relaxed")}
                >
                  Monaco Editor (the engine behind VS Code) provides
                  professional-grade code editing with syntax highlighting for
                  8+ languages, but it ships at 2MB+ uncompressed. To prevent it
                  from blocking the initial page load, it&apos;s loaded via
                  Next.js{" "}
                  <code
                    className={cn(
                      "text-xs font-mono bg-bg-tertiary px-1.5 py-0.5 rounded",
                    )}
                  >
                    dynamic()
                  </code>{" "}
                  with SSR disabled and a skeleton loading state. TypeScript and
                  JavaScript diagnostics are disabled via{" "}
                  <code
                    className={cn(
                      "text-xs font-mono bg-bg-tertiary px-1.5 py-0.5 rounded",
                    )}
                  >
                    beforeMount
                  </code>{" "}
                  to prevent false-positive errors on pasted code that lacks
                  type definitions.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* ============================================
            Architecture Decisions
            ============================================ */}
        <FadeIn>
          <section>
            <h2 className={cn("font-display text-xl font-semibold mb-4")}>
              Architecture decisions
            </h2>
            <div
              className={cn(
                "p-6 rounded-xl bg-bg-secondary border border-border",
              )}
            >
              <div
                className={cn("grid grid-cols-1 md:grid-cols-2 gap-6 text-sm")}
              >
                <div>
                  <div className={cn("text-text-primary font-medium mb-1")}>
                    Raw ReadableStream over Vercel AI SDK
                  </div>
                  <div className={cn("text-text-tertiary text-xs")}>
                    More explicit control over stream consumption; easier to
                    debug chunked responses and handle edge cases
                  </div>
                </div>
                <div>
                  <div className={cn("text-text-primary font-medium mb-1")}>
                    Zustand over Redux
                  </div>
                  <div className={cn("text-text-tertiary text-xs")}>
                    Minimal boilerplate for a small state surface (history
                    only); built-in persist middleware for localStorage
                  </div>
                </div>
                <div>
                  <div className={cn("text-text-primary font-medium mb-1")}>
                    Custom renderer over react-markdown
                  </div>
                  <div className={cn("text-text-tertiary text-xs")}>
                    Zero extra dependencies; tailored to the specific review
                    output format with custom score visualization
                  </div>
                </div>
                <div>
                  <div className={cn("text-text-primary font-medium mb-1")}>
                    In-memory rate limiting over Redis
                  </div>
                  <div className={cn("text-text-tertiary text-xs")}>
                    Simple demo protection without external infrastructure;
                    sufficient for a portfolio project&apos;s traffic level
                  </div>
                </div>
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
              Building AI Code Reviewer taught me that the real complexity of AI
              integration isn&apos;t the API call, it&apos;s the streaming UX.
              Getting a response from GPT-4o-mini is straightforward; making
              that response feel responsive, structured, and trustworthy as it
              streams in required careful state management, error recovery, and
              UI decisions like the pulsing cursor and progressive rendering.
            </p>
            <p className={cn("text-text-secondary leading-relaxed")}>
              Prompt engineering was also more nuanced than expected. Getting
              consistent, well-structured markdown output required iterating on
              the system prompt extensively, specifying the exact heading
              hierarchy, severity format, and score format so the custom
              renderer could parse it reliably. The lesson: when you own both
              the prompt and the renderer, you can build a much tighter feedback
              loop than relying on a generic markdown parser.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <div
            className={cn(
              "p-6 rounded-xl bg-bg-secondary border border-accent/30 text-center",
            )}
          >
            <h4
              className={cn(
                "font-display font-semibold text-text-primary mb-2",
              )}
            >
              Try it yourself{" "}
            </h4>
            <p className={cn("text-sm text-text-secondary mb-4")}>
              Paste any code snippet and get an instant AI-powered review with
              structured feedback.{" "}
            </p>
            <a
              href="https://aireviewer.zoemeng.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md
                         bg-accent text-white text-sm font-medium
                         hover:bg-accent-dark transition-colors"
            >
              Open live demo
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M5 2h7v7" />
                <path d="M12 2L2 12" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </article>

      <FadeIn>
        <div className="mt-20 pt-8 border-t border-border flex justify-between items-center">
          <Link
            href="/projects/ai-playground"
            className={cn(
              "text-sm text-text-tertiary hover:text-text-primary transition-colors",
            )}
          >
            ← Previous: AI Playground
          </Link>
          <Link
            href="/projects/mti"
            className={cn(
              "text-sm text-accent hover:text-accent-dark transition-colors",
            )}
          >
            Next project: B2B E-commerce Platform →
          </Link>
        </div>
      </FadeIn>
    </main>
  );
}
