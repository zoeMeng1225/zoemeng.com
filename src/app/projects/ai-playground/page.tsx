// src/app/projects/mti/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProjectVideo } from "@/components/ui/ProjectVideo";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { MediaGrid } from "@/components/ui/MadiaGrid";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "AI Component Playground — Zoe Meng",
  description:
    "Describe a UI in plain English, get a working React + Tailwind component with live preview. Built with Next.js, Vercel AI SDK, and Sandpack.",
};

export default function AIPlaygroundPage() {
  return (
    <main className={cn("max-w-3xl mx-auto px-6 pt-32 pb-16")}>
      <FadeIn>
        <Link
          href="/#projects"
          className={cn(
            "inline-flex items-center gap-1 text-sm text-text-tertiary hover:text-text-primary transition-colors mb-12",
          )}
        >
          ← Back to home
        </Link>
      </FadeIn>

      {/* ============================================
          HERO
          ============================================ */}
      <FadeIn>
        <p className={cn("text-sm text-accent font-medium mb-3")}>
          Personal Project · 2026
        </p>
        <h1
          className={cn(
            "font-display text-3xl md:text-4xl font-bold tracking-tight mb-4",
          )}
        >
          AI Component Playground
        </h1>
      </FadeIn>
      <FadeIn delay={0.1}>
        <p className={cn("text-lg text-text-secondary leading-relaxed mb-4")}>
          Describe a UI component in plain English and get a{" "}
          <span className={cn("text-text-primary font-medium")}>
            working React + Tailwind component
          </span>{" "}
          with live preview — generated in real time via streaming AI. The code
          is fully editable: change a color, swap a layout, add an interaction,
          and watch the preview update instantly.
        </p>
      </FadeIn>
      <FadeIn delay={0.15}>
        <p className={cn("text-text-secondary leading-relaxed mb-6")}>
          Built to explore the intersection of AI code generation and frontend
          developer tooling. The engineering challenge wasn&apos;t calling an
          API, it was making the streaming output, code editor, and live preview
          stay in sync without crashing on incomplete code.
        </p>
      </FadeIn>

      {/* ---- Metrics ---- */}
      <FadeIn delay={0.2}>
        <div className={cn("grid grid-cols-3 gap-3 mb-8")}>
          {[
            { value: "<2s", label: "First token" },
            { value: "5", label: "Preset templates" },
            { value: "Live", label: "Editable preview" },
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
            "Tailwind CSS",
            "Vercel AI SDK",
            "OpenAI API",
            "Sandpack",
            "Streaming",
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

      {/* ---- Hero media ---- */}
      <FadeIn delay={0.3}>
        {/* 方案 A: 有视频用视频 */}
        <ProjectVideo
          src="/images/projects/ai-playground/demo.mp4"
          poster="/images/projects/ai-playground/hero.webp"
          caption="Full workflow: describe a component → AI streams the code → live preview renders in real time"
        />
      </FadeIn>

      {/* ============================================
          CONTENT
          ============================================ */}
      <article className={cn("space-y-16 mt-16")}>
        <FadeIn>
          <section>
            <h2 className={cn("font-display text-xl font-semibold mb-4")}>
              The idea
            </h2>
            <p className={cn("text-text-secondary leading-relaxed mb-4")}>
              AI code generation tools like v0 and Bolt have shown that natural
              language → UI is a real workflow. But most of them are closed
              platforms — you can&apos;t see the code until you export, you
              can&apos;t edit it in real time, and you can&apos;t understand how
              the generation actually works.
            </p>
            <p className={cn("text-text-secondary leading-relaxed")}>
              I wanted to build an{" "}
              <span className={cn("text-text-primary font-medium")}>
                open, transparent version
              </span>{" "}
              where the code streams in character by character, you can see and
              edit it immediately, and the preview updates live as you type.
              It&apos;s both a useful tool and a technical showcase of streaming
              AI + real-time code compilation.
            </p>
          </section>
        </FadeIn>

        {/* ============================================
            STORY 1: Core Experience
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
              Prompt → streaming code → live preview
            </h2>
            <p className={cn("text-sm text-accent mb-6")}>
              The core loop in under 5 seconds
            </p>

            <div
              className={cn("space-y-4 text-text-secondary leading-relaxed")}
            >
              <p>
                Type a description like &quot;a pricing card with 3 tiers&quot;
                and hit Generate. The AI response{" "}
                <span className={cn("text-text-primary font-medium")}>
                  streams token by token
                </span>{" "}
                into the code editor — you can watch the component being written
                in real time. As soon as enough valid JSX accumulates, the
                Sandpack preview compiles and renders it live.
              </p>
              <p>
                Once generation completes, the code is fully yours. Edit
                anything — change a color from{" "}
                <code
                  className={cn(
                    "text-xs font-mono bg-bg-secondary px-1.5 py-0.5 rounded",
                  )}
                >
                  bg-purple-600
                </code>{" "}
                to{" "}
                <code
                  className={cn(
                    "text-xs font-mono bg-bg-secondary px-1.5 py-0.5 rounded",
                  )}
                >
                  bg-blue-600
                </code>
                , add a hover animation, restructure the layout — and the
                preview updates instantly. No save button, no refresh, no
                waiting.
              </p>
              <p>
                For users who don&apos;t know what to type, five{" "}
                <span className={cn("text-text-primary font-medium")}>
                  preset templates
                </span>{" "}
                provide one-click starting points: pricing cards, login form,
                dashboard stats, user profile card, and an interactive todo
                list. Each template includes a detailed prompt that demonstrates
                best practices for getting high-quality AI output.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* ---- Generated component previews ---- */}
        <FadeIn>
          <MediaGrid
            items={[
              {
                src: "/images/projects/ai-playground/preview-pricing.webp",
                alt: "AI-generated pricing card with 3 tiers",
              },
              {
                src: "/images/projects/ai-playground/preview-login.webp",
                alt: "AI-generated login form with social auth buttons",
              },
              {
                src: "/images/projects/ai-playground/preview-dashboard.webp",
                alt: "AI-generated dashboard stats with metric cards",
              },
            ]}
            columns={3}
            caption="Generated from preset templates: pricing cards, login form, and dashboard stats"
          />
        </FadeIn>

        {/* ============================================
            STORY 2: Streaming Architecture
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
              The streaming challenge
            </h2>
            <p className={cn("text-sm text-accent mb-6")}>
              Keeping three systems in sync on incomplete data
            </p>

            <div
              className={cn("space-y-4 text-text-secondary leading-relaxed")}
            >
              <p>
                The hardest engineering problem wasn&apos;t calling the OpenAI
                API — it was managing the{" "}
                <span className={cn("text-text-primary font-medium")}>
                  three-way state synchronization
                </span>{" "}
                between the AI stream, the code editor, and the live preview.
                During generation, the code is incomplete, it might have an
                unclosed tag, a missing bracket, or a half-written className.
                The editor needs to display this partial code, but the preview
                needs to handle compilation errors gracefully without crashing.
              </p>
              <p>
                I solved this with a{" "}
                <span className={cn("text-text-primary font-medium")}>
                  two-phase state model
                </span>
                : during streaming, the UI displays the{" "}
                <code
                  className={cn(
                    "text-xs font-mono bg-bg-secondary px-1.5 py-0.5 rounded",
                  )}
                >
                  completion
                </code>{" "}
                value (still generating, read-only). When streaming finishes, it
                switches to the{" "}
                <code
                  className={cn(
                    "text-xs font-mono bg-bg-secondary px-1.5 py-0.5 rounded",
                  )}
                >
                  code
                </code>{" "}
                state (final result, editable). Sandpack&apos;s built-in error
                boundary catches compilation failures during the streaming phase
                and displays a clean error panel instead of a white screen, once
                the code completes, it automatically recompiles successfully.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* ---- Streaming state diagram ---- */}
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
              Two-phase state model
            </h4>
            <div
              className={cn("grid grid-cols-1 md:grid-cols-2 gap-6 text-sm")}
            >
              <div>
                <p
                  className={cn(
                    "font-medium text-accent mb-2 uppercase tracking-wider text-xs",
                  )}
                >
                  Phase 1: Streaming
                </p>
                <div className={cn("space-y-2 text-text-secondary")}>
                  <p>
                    Source:{" "}
                    <code
                      className={cn(
                        "text-xs font-mono bg-bg-tertiary px-1 py-0.5 rounded",
                      )}
                    >
                      completion
                    </code>{" "}
                    (from useCompletion)
                  </p>
                  <p>Editor: displays partial code, read-only feel</p>
                  <p>
                    Preview: attempts compile, shows error boundary on failure
                  </p>
                  <p>User: watches code appear token by token</p>
                </div>
              </div>
              <div>
                <p
                  className={cn(
                    "font-medium text-accent mb-2 uppercase tracking-wider text-xs",
                  )}
                >
                  Phase 2: Complete
                </p>
                <div className={cn("space-y-2 text-text-secondary")}>
                  <p>
                    Source:{" "}
                    <code
                      className={cn(
                        "text-xs font-mono bg-bg-tertiary px-1 py-0.5 rounded",
                      )}
                    >
                      code
                    </code>{" "}
                    (from useState)
                  </p>
                  <p>Editor: fully editable, changes update preview</p>
                  <p>Preview: renders successfully, live updates on edit</p>
                  <p>User: full control to modify, experiment, iterate</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ============================================
            STORY 3: Sandpack Integration
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
              Live preview with Sandpack
            </h2>
            <p className={cn("text-sm text-accent mb-6")}>
              Browser-based React compiler with zero server round-trips
            </p>

            <div
              className={cn("space-y-4 text-text-secondary leading-relaxed")}
            >
              <p>
                The live preview is powered by{" "}
                <span className={cn("text-text-primary font-medium")}>
                  Sandpack
                </span>{" "}
                (by CodeSandbox) — a browser-based bundler that compiles React +
                TypeScript in a sandboxed iframe. I chose Sandpack over a custom
                iframe solution because it provides a complete React compilation
                pipeline (Babel, module resolution, HMR), a built-in code editor
                with syntax highlighting, and — critically — error boundaries
                that prevent malformed code from crashing the entire page.
              </p>
              <p>
                Tailwind CSS is loaded via CDN (
                <code
                  className={cn(
                    "text-xs font-mono bg-bg-secondary px-1.5 py-0.5 rounded",
                  )}
                >
                  cdn.tailwindcss.com
                </code>
                ) as an external resource in the Sandpack config, so
                AI-generated components can use any Tailwind utility class
                without build configuration. The generated components are
                self-contained — no external imports beyond React, making them
                portable and easy to copy into any project.
              </p>
            </div>
          </section>
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
                    Server-side streaming with Vercel AI SDK
                  </h4>
                </div>
                <p
                  className={cn(
                    "text-sm text-text-secondary leading-relaxed mb-3",
                  )}
                >
                  The API route uses Vercel AI SDK&apos;s{" "}
                  <code
                    className={cn(
                      "text-sm text-text-secondary leading-relaxed mb-3",
                    )}
                  >
                    streamText
                  </code>{" "}
                  to create a ReadableStream from OpenAI&apos;s response. The
                  client-side{" "}
                  <code
                    className={cn(
                      "text-sm text-text-secondary leading-relaxed mb-3",
                    )}
                  >
                    useCompletion
                  </code>{" "}
                  hook consumes this stream and exposes{" "}
                  <code
                    className={cn(
                      "text-sm text-text-secondary leading-relaxed mb-3",
                    )}
                  >
                    completion
                  </code>{" "}
                  (incrementally updated string),{" "}
                  <code
                    className={cn(
                      "text-sm text-text-secondary leading-relaxed mb-3",
                    )}
                  >
                    isLoading
                  </code>
                  , and{" "}
                  <code
                    className={cn(
                      "text-sm text-text-secondary leading-relaxed mb-3",
                    )}
                  >
                    complete()
                  </code>{" "}
                  trigger. The API key stays server-side — never exposed to the
                  client.
                </p>
                <div className="rounded-lg bg-bg-tertiary p-4 font-mono text-xs text-text-secondary overflow-x-auto">
                  <pre>{`// Server: API route streams OpenAI response
import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
 
export async function POST(req: Request) {
  const { prompt } = await req.json();
  const result = streamText({
    model: openai('gpt-4o-mini'),
    system: \`You are a React component generator...\`,
    prompt,
  });
  return result.toDataStreamResponse();
}
 
// Client: useCompletion consumes the stream
const { complete, isLoading, completion } = useCompletion({
  api: "/api/generate",
  onFinish: (_prompt, finalCode) => setCode(finalCode),
});`}</pre>
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
                    Prompt engineering for consistent output
                  </h4>
                </div>
                <p
                  className={cn(
                    "text-sm text-text-secondary leading-relaxed mb-3",
                  )}
                >
                  The system prompt is heavily constrained to ensure the AI
                  outputs compilable code every time: TypeScript with proper
                  types, Tailwind-only styling (no CSS imports), default export,
                  self-contained with no external dependencies, no markdown
                  fences or explanations. These constraints mean the output can
                  be fed directly to Sandpack without any post-processing or
                  parsing.
                </p>
                <div
                  className={cn(
                    "rounded-lg bg-bg-tertiary p-4 font-mono text-xs text-text-secondary overflow-x-auto",
                  )}
                >
                  <pre>{`system: \`You are a React component generator.
Rules:
- Use TypeScript with proper types
- Use only Tailwind CSS for styling
- Export default the component
- Make it responsive
- Self-contained, no external dependencies
- Only output code, no explanations
- Start directly with: export default function\``}</pre>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-bg-secondary border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center text-accent text-sm font-bold">
                    3
                  </span>
                  <h4 className="font-display font-semibold text-text-primary">
                    Sandpack configuration for AI output
                  </h4>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed mb-3">
                  Sandpack runs a full React + TypeScript compilation pipeline
                  in the browser. The configuration loads Tailwind via CDN, maps
                  the AI output to{" "}
                  <code className="text-xs font-mono bg-bg-tertiary px-1 py-0.5 rounded">
                    /App.tsx
                  </code>
                  , and enables inline error display so compilation failures
                  during streaming show a helpful message instead of a blank
                  screen.
                </p>
                <div className="rounded-lg bg-bg-tertiary p-4 font-mono text-xs text-text-secondary overflow-x-auto">
                  <pre>{`<SandpackProvider
  template="react-ts"
  files={{ "/App.tsx": code }}
  options={{
    externalResources: [
      "https://cdn.tailwindcss.com"  // Tailwind via CDN
    ],
  }}
>
  <SandpackCodeEditor showLineNumbers showInlineErrors />
  <SandpackPreview showRefreshButton />
</SandpackProvider>`}</pre>
                </div>
              </div>

              <div
                className={cn(
                  "p-6 rounded-xl bg-bg-secondary border border-border",
                )}
              >
                <div className="flex items-center gap-3 mb-3">
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
                    Error resilience during streaming
                  </h4>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  During the streaming phase, the code is inherently incomplete
                  — unclosed tags, missing brackets, partial classNames. Rather
                  than suppressing errors or debouncing compilation, I rely on
                  Sandpack&apos;s built-in error boundary: it displays a clean
                  error panel while the code is invalid and automatically
                  re-compiles when valid JSX accumulates. The{" "}
                  <code className="text-xs font-mono bg-bg-tertiary px-1 py-0.5 rounded">
                    onError
                  </code>{" "}
                  callback on{" "}
                  <code className="text-xs font-mono bg-bg-tertiary px-1 py-0.5 rounded">
                    useCompletion
                  </code>{" "}
                  catches API-level failures (rate limits, network errors) and
                  displays a user-friendly message in the code panel.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* ---- Live demo CTA ---- */}
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
              Try it yourself
            </h4>
            <p className={cn("text-sm text-text-secondary mb-4")}>
              The playground is live — describe any component and watch it
              generate in real time.
            </p>
            <a
              href="https://ai-playground.zoemeng.com"
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

      {/* ---- Bottom nav ---- */}
      <FadeIn>
        <div
          className={cn(
            "mt-20 pt-8 border-t border-border flex justify-between items-center",
          )}
        >
          <Link
            href="/projects/mti"
            className={cn(
              "text-sm text-text-tertiary hover:text-text-primary transition-colors",
            )}
          >
            ← Previous: MTI Platform
          </Link>
          <Link
            href="/#projects"
            className={cn(
              "text-sm text-accent hover:text-accent-dark transition-colors",
            )}
          >
            Back to all projects →
          </Link>
        </div>
      </FadeIn>
    </main>
  );
}
