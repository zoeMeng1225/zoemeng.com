// src/components/sections/Hero.tsx
"use client";

import { cn } from "@/lib/utils";
import { FadeIn } from "../ui/FadeIn";

export function Hero() {
  return (
    <section className={cn("mb-24")}>
      <FadeIn>
        <h1
          className={cn(
            "font-display text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-4",
          )}
        >
          Zoe Meng
        </h1>
      </FadeIn>
      <FadeIn delay={0.1}>
        <p className={cn("text-lg text-text-secondary leading-relaxed mb-4")}>
          I'm a{" "}
          <span className={cn("text-text-primary font-medium")}>
            product-focused frontend engineer
          </span>{" "}
          based in the San Francisco Bay Area. I specialize in React,
          TypeScript, and web performance — building interfaces that are fast,
          accessible, and crafted with care.
        </p>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p className={cn("text-lg text-text-secondary leading-relaxed md-8")}>
          Previously, I engineered internal automation tools that{" "}
          <span className={cn("text-accent font-medium")}>
            reduced manual workflows by 83%
          </span>{" "}
          and built AI-powered SaaS products to optimize SEO efficiency.
        </p>
      </FadeIn>
      <FadeIn delay={0.2}>
        <div className={cn("flex items-center gap-6 text-sm")}>
          <a
            href="mailto:zoemeng1225@gmail.com"
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full",
              "bg-accent text-white text-sm font-medium",
              "hover:bg-accent-dark transition-colors",
            )}
          >
            {" "}
            Get in touch
          </a>
          <a
            href="https://github.com/zoeMeng1225"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "text-text-tertiary hover:text-text-primary transition-colors",
            )}
          >
            {" "}
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/zoe-meng"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "text-text-tertiary hover:text-text-primary transition-colors",
            )}
          >
            {" "}
            LinkedIn
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
