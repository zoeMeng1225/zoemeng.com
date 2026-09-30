// src/components/sections/Hero.tsx
"use client";

import { cn } from "@/lib/utils";
import { FadeIn } from "../ui/FadeIn";

export function Hero() {
  return (
    <section className={cn("mb-24 pt-32 md:pt-40")}>
      <FadeIn>
        <h1
          className={cn(
            "font-brand text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-3",
          )}
        >
          Zoe Meng
        </h1>
        <p className={cn("text-sm font-medium text-accent mb-10")}>
          Frontend & Design Engineer · San Francisco Bay Area
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className={cn("text-lg text-text-secondary leading-relaxed mb-4")}>
          I{" "}
          <span className={cn("text-text-primary font-medium")}>
            design and build product interfaces
          </span>
          . I trained as a designer (M.A., Web Design) and have spent four
          years shipping React and TypeScript, so I work from the user flow
          through to the shipped component instead of handing off in the
          middle.
        </p>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className={cn("text-lg text-text-secondary leading-relaxed mb-8")}>
          Most recently I owned the front end of a 30K-product B2B site end to
          end as the sole engineer, including a quote flow that cut processing
          time 83%. I care about the details that make an interface feel
          trustworthy: states, motion, and accessibility.
        </p>
      </FadeIn>

      <FadeIn delay={0.3}>
        <p className={cn("text-sm text-text-tertiary mb-4")}>
          Open to design engineer, UI engineer, and frontend roles.
        </p>
      </FadeIn>

      <FadeIn delay={0.4}>
        <div className={cn("flex items-center gap-6 text-sm")}>
          <a
            href="mailto:zoemeng1225@gmail.com"
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-md",
              "bg-accent text-white text-sm font-medium",
              "hover:bg-accent-dark transition-colors",
            )}
          >
            Get in touch
          </a>
          <a
            href="https://github.com/zoeMeng1225"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "font-medium text-text-secondary",
              "hover:text-text-primary hover:-translate-y-0.5",
              "transition-all duration-200",
            )}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/zoe-meng"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "font-medium text-text-secondary",
              "hover:text-text-primary hover:-translate-y-0.5",
              "transition-all duration-200",
            )}
          >
            LinkedIn
          </a>
        </div>
      </FadeIn>
    </section>
  );
}