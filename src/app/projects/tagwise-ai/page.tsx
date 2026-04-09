// src/app/projects/tagwise-ai/page.tsx

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "AI-Powered SEO SaaS Platform (TagWise) — Zoe Meng",
  description:
    "Dual-interface system that reduced quote processing time by 83%",
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
          B2B Quote Automation Ecosystem
        </h1>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className="text-lg text-text-secondary leading-relaxed mb-6">
          A dual-interface system designed to bridge the gap between customers
          requesting bulk quotes and the sales team managing them. Reduced quote
          processing from a 10-minute manual workflow to a single click.
        </p>
      </FadeIn>
    </main>
  );
}
