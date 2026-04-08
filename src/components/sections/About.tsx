// src/components/sections/About.tsx
"use client";

import { cn } from "@/lib/utils";
import { FadeIn } from "../ui/FadeIn";
import { SectionHeading } from "../ui/SectionHeading";

export function About() {
  return (
    <section className={cn("mb-24")}>
      <FadeIn>
        <SectionHeading id="about">About Me</SectionHeading>
      </FadeIn>

      <div className={cn("space-y-4 text-text-secondary leading-relaxed")}>
        <FadeIn>
          <p>
            I'm Zoe. I'm a frontend engineer with a background in design — I
            studied Web Design & New Media at the Academy of Art University in
            San Francisco. That foundation shapes how I approach code: I don't
            just think about whether something works, but whether it{" "}
            <em>feels</em> right.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p>
            My focus is on the React ecosystem — TypeScript, Remix, Next.js —
            with a particular interest in web performance and developer
            experience. I enjoy the challenge of making complex interfaces feel
            simple and fast, whether that's optimizing Core Web Vitals or
            engineering state management systems that scale.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p>
            When I'm not coding, you'll find me exploring the intersection of
            technology and creativity, always looking for ways to bridge the gap
            between engineering precision and design intuition.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
