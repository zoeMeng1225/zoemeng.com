// src/app/projects/tagwise-ai/page.tsx

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "AI-Powered SEO SaaS Platform (TagWise) — Zoe Meng",
  description:
    "AI-powered e-commerce platform that bulk-processes SEO tags for large-scale product catalogs, reducing perceived user latency by 40% with non-destructive staging and real-time SEO scoring.",
};

export default function TagWise() {
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
          AI-Powered SEO SaaS Platform (TagWise)
        </h1>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className="text-lg text-text-secondary leading-relaxed mb-6">
          A SaaS platform architected for high-performance e-commerce catalog
          optimization. It automates SEO tagging for 20,000+ Shopify products
          through batch processing, context-aware AI generation, and a
          proprietary tag scoring system, eliminating manual bottlenecks while
          improving organic search visibility.
        </p>
      </FadeIn>

      {/* key metric*/}
      <FadeIn delay={0.15}>
        <div className={cn("grid grid-cols-3 gap-4 mb-10")}>
          {[
            { value: "40%", label: "Reduced latency" },
            { value: "60 fps", label: "Rendering speed" },
            { value: "20K+", label: "SKUs managed" },
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
            "React 18",
            "Remix",
            "TypeScript",
            "OpenAI API",
            "Prisma ORM",
            "Tailwind CSS",
            "Shopify",
            "Polaris",
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
          <Image
            src="/images/projects/tagwise/tagwise.webp"
            alt="B2B Quote Automation Dashboard"
            width={1200}
            height={675}
            className={cn("w-full")}
            priority
          />
        </div>
      </FadeIn>
    </main>
  );
}
