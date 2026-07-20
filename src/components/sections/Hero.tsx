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
      <br />
      <br />
      <FadeIn delay={0.1}>
        <p className={cn("text-lg text-text-secondary leading-relaxed mb-4")}>
          I'm a{" "}
          <span className={cn("text-text-primary font-medium")}>
            front-end developer specializing in UX/UI
          </span>{" "}
          based in the San Francisco Bay Area. I design and build responsive,
          accessible web interfaces end to end, user flows, design systems, and
          interaction details on one side; production React and TypeScript on
          the other.
        </p>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p className={cn("text-lg text-text-secondary leading-relaxed mb-8")}>
          I've built a B2B platform that cut quote processing time by 83%, and
          AI tools where the hard problems were as much about trust and
          interaction design as engineering. Trained in design at the Academy of
          Art University, I care about why an interface should work a certain
          way as much as how to build it. Open to front-end, UX/UI, and web
          developer roles.
        </p>
      </FadeIn>
      <FadeIn delay={0.2}>
        <div className={cn("flex items-center gap-6 text-sm")}>
          <a
            href="mailto:zoemeng1225@gmail.com"
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-md",
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
              "font-medium text-text-secondary",
              "hover:text-text-primary hover:-translate-y-0.5",
              "transition-all duration-200",
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
              "font-medium text-text-secondary",
              "hover:text-text-primary hover:-translate-y-0.5",
              "transition-all duration-200",
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
