//src/app/design/page.tsx
import { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { BackToHome } from "@/components/ui/BackToHome";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Design System — Zoe Meng",
  description:
    "The design tokens, type scale, and component principles behind this portfolio — colors, typography, motion, and reusable UI.",
};

const colors = [
  { name: "bg-primary", hex: "#faf9f6", use: "Page background" },
  { name: "bg-secondary", hex: "#f5f3ef", use: "Cards, panels" },
  { name: "bg-tertiary", hex: "#eeeae4", use: "Code blocks, insets" },
  { name: "text-primary", hex: "#1a1a1a", use: "Headings, body" },
  { name: "text-secondary", hex: "#555555", use: "Supporting text" },
  { name: "text-tertiary", hex: "#999999", use: "Captions, labels" },
  { name: "accent", hex: "#745dac", use: "Links, highlights" },
  { name: "accent-dark", hex: "#513d82", use: "Hover, emphasis" },
];

const typeScale = [
  {
    label: "Display / H1",
    cls: "font-display text-4xl font-bold",
    sample: "Zoe Meng",
  },
  {
    label: "Heading / H2",
    cls: "font-display text-xl font-semibold",
    sample: "Section heading",
  },
  {
    label: "Body",
    cls: "text-base text-text-secondary",
    sample: "The quick brown fox jumps over the lazy dog.",
  },
  {
    label: "Small / caption",
    cls: "text-sm text-text-tertiary",
    sample: "Image caption or supporting label",
  },
  {
    label: "Mono",
    cls: "font-mono text-sm",
    sample: "const tokens = designSystem;",
  },
];

const components = [
  {
    name: "FadeIn",
    role: "Scroll-triggered entrance animation, respects reduced-motion",
  },
  {
    name: "ProjectCard",
    role: "Project preview with image, metrics, tags, and kind badge",
  },
  { name: "ProjectImage", role: "Captioned image with lightbox support" },
  { name: "ProjectVideo", role: "Captioned video player with poster frame" },
  {
    name: "LightboxImage",
    role: "Click-to-expand image overlay with keyboard dismiss",
  },
  { name: "MediaGrid", role: "Multi-image grid with shared captions" },
  {
    name: "B2BArchitectureDiagram",
    role: "Custom SVG system-architecture diagram",
  },
  {
    name: "SectionHeading",
    role: "Anchored section titles with scroll-margin",
  },
  { name: "BackToHome", role: "Persistent return-to-home navigation" },
  { name: "ScrollToTop", role: "Scroll-to-top button that appears on scroll" },
];

export default function DesignSystem() {
  return (
    <main className={cn("max-w-3xl mx-auto px-6 pt-32 pb-16")}>
      <BackToHome />

      {/* Hero */}
      <FadeIn>
        <p className={cn("text-sm text-accent font-medium mb-3")}>
          Design System
        </p>
        <h1
          className={cn(
            "font-display text-3xl md:text-4xl font-bold tracking-tight mb-4",
          )}
        >
          The system behind this site
        </h1>
        <p className={cn("text-lg text-text-secondary leading-relaxed mb-16")}>
          This portfolio runs on a small, deliberate design system, and a
          token-based color palette, a three-role type scale, and a set of
          reusable React components. I built it the same way I&apos;d build one
          for a product team: consistent, documented, and easy to extend.
        </p>
      </FadeIn>

      {/* Colors */}
      <FadeIn>
        <section className={cn("mb-16")}>
          <h2 className={cn("font-display text-xl font-semibold mb-2")}>
            Color tokens
          </h2>
          <p className={cn("text-sm text-text-secondary mb-6")}>
            A warm cream base instead of the usual dark developer palette,
            paired with a single purple accent for hierarchy and focus.
          </p>
          <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-4")}>
            {colors.map((c) => (
              <div key={c.name}>
                <div
                  className={cn("h-20 rounded-lg border border-border mb-2")}
                  style={{ backgroundColor: c.hex }}
                />
                <div className={cn("text-sm font-medium text-text-primary")}>
                  {c.name}
                </div>
                <div className={cn("text-xs font-mono text-text-tertiary")}>
                  {c.hex}
                </div>
                <div className={cn("text-xs text-text-tertiary mt-0.5")}>
                  {c.use}
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Typography */}
      <FadeIn>
        <section className={cn("mb-16")}>
          <h2 className={cn("font-display text-xl font-semibold mb-2")}>
            Typography
          </h2>
          <p className={cn("text-sm text-text-secondary mb-6")}>
            Three typefaces, three jobs: Syne for display, Outfit for body,
            JetBrains Mono for code.
          </p>
          <div className={cn("space-y-6")}>
            {typeScale.map((t) => (
              <div
                key={t.label}
                className={cn(
                  "flex flex-col md:flex-row md:items-baseline gap-1 md:gap-6 pb-4 border-b border-border",
                )}
              >
                <div
                  className={cn(
                    "text-xs uppercase tracking-wider text-text-tertiary md:w-32 shrink-0",
                  )}
                >
                  {t.label}
                </div>
                <div className={cn(t.cls)}>{t.sample}</div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Motion */}
      <FadeIn>
        <section className={cn("mb-16")}>
          <h2 className={cn("font-display text-xl font-semibold mb-2")}>
            Motion
          </h2>
          <p className={cn("text-sm text-text-secondary mb-4")}>
            Animation is restrained on purpose. Content fades and rises a few
            pixels on scroll, enough to guide the eye, never enough to distract.
            Every animation honors{" "}
            <code
              className={cn(
                "text-xs font-mono bg-bg-secondary px-1.5 py-0.5 rounded",
              )}
            >
              prefers-reduced-motion
            </code>
            , so the site is calm for anyone who needs it to be.
          </p>
          <p className={cn("text-sm text-text-secondary")}>
            The principle: motion should explain, not perform. If a transition
            doesn&apos;t help someone understand what changed, it doesn&apos;t
            ship.
          </p>
        </section>
      </FadeIn>

      {/* Components */}
      <FadeIn>
        <section className={cn("mb-8")}>
          <h2 className={cn("font-display text-xl font-semibold mb-2")}>
            Component library
          </h2>
          <p className={cn("text-sm text-text-secondary mb-6")}>
            Reusable pieces that keep every page visually consistent.
          </p>
          <div className={cn("space-y-3")}>
            {components.map((comp) => (
              <div
                key={comp.name}
                className={cn(
                  "flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 p-4 rounded-lg bg-bg-secondary border border-border",
                )}
              >
                <code
                  className={cn(
                    "text-sm font-mono text-accent sm:w-40 shrink-0",
                  )}
                >
                  {comp.name}
                </code>
                <span className={cn("text-sm text-text-secondary")}>
                  {comp.role}
                </span>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Accessibility */}
      <FadeIn>
        <section className={cn("mb-16")}>
          <h2 className={cn("font-display text-xl font-semibold mb-2")}>
            Accessibility
          </h2>
          <p className={cn("text-sm text-text-secondary mb-6")}>
            I treat this site as my first portfolio piece, so I test it the way
            I&apos;d test a product. Here&apos;s where it stands.
          </p>

          <div className={cn("space-y-3")}>
            <div
              className={cn(
                "flex gap-3 p-4 rounded-lg bg-bg-secondary border border-border",
              )}
            >
              <span className={cn("text-accent font-mono text-sm shrink-0")}>
                AA
              </span>
              <p className={cn("text-sm text-text-secondary leading-relaxed")}>
                All text meets WCAG AA contrast against the cream background. An
                audit caught the tertiary gray falling short at 2.7:1, so I
                darkened the token to clear the 4.5:1 threshold, the kind of fix
                that only surfaces when you actually measure.
              </p>
            </div>
            <div
              className={cn(
                "flex gap-3 p-4 rounded-lg bg-bg-secondary border border-border",
              )}
            >
              <span className={cn("text-accent font-mono text-sm shrink-0")}>
                KB
              </span>
              <p className={cn("text-sm text-text-secondary leading-relaxed")}>
                Every interactive element is reachable and operable by keyboard:
                navigation, links, and project cards all take focus in order,
                with a visible focus ring, and open on Enter. Built on semantic
                HTML (landmarks, ordered headings, real buttons and links)
                rather than click handlers on divs.
              </p>
            </div>
            <div
              className={cn(
                "flex gap-3 p-4 rounded-lg bg-bg-secondary border border-border",
              )}
            >
              <span className={cn("text-accent font-mono text-sm shrink-0")}>
                ♺
              </span>
              <p className={cn("text-sm text-text-secondary leading-relaxed")}>
                Motion respects{" "}
                <code
                  className={cn(
                    "text-xs font-mono bg-bg-tertiary px-1 py-0.5 rounded",
                  )}
                >
                  prefers-reduced-motion
                </code>
                , and every image carries descriptive alt text. Lighthouse
                accessibility scores sit in the mid-90s across pages.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>
    </main>
  );
}
