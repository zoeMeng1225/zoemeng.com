// src/app/projects/mti/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "High-Performance B2B E-commerce Platform — Zoe Meng",
  description:
    "Architected a modular Shopify theme with advanced fuzzy search and role-based access control (RBAC) for a 10,000+ SKU catalog, reducing frontend maintenance by 60%.",
};

export default function Mti() {
  return (
    <main className={cn("max-w-3xl mx-auto px-6 pt-32 pb-16")}>
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
          High-Performance B2B E-commerce Platform
        </h1>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className={cn("text-lg text-text-secondary leading-relaxed mb-6")}>
          {" "}
          A high-performance B2B Shopify platform engineered for a 10,000+ SKU
          catalog. It features a custom fuzzy search engine, granular role-based
          access control (RBAC), and a modular architecture that empowered the
          marketing team and reduced frontend maintenance by 60%
        </p>
      </FadeIn>

      {/* key metric*/}
      <FadeIn delay={0.15}>
        <div className={cn("grid grid-cols-3 gap-4 mb-10")}>
          {[
            { value: "60%", label: "Less maintenance" },
            { value: "10k+", label: "Active SKUs" },
            { value: "3", label: "Access tiers" },
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
            "Shopify Architecture",
            "Liquid",
            "JavaScript (ES6+)",
            "SCSS",
            "Shopify Scripts",
            "Polaris UI",
            "B2B E-commerce Workflows",
            "JSON",
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
            src="/images/projects/b2b-quote/b2b-quote-hero.webp"
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
