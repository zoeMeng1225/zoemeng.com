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

      <div className={cn("space-y-4 text-text-secondary leading-relaxed mt-1")}>
        <FadeIn>
          <p>
            I'm Zoe. I'm a frontend engineer with a background in design, I
            studied Web Design & New Media at the Academy of Art University in
            San Francisco. That foundation shapes how I approach code: I don't
            just think about whether something works, but whether it feels
            right.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p>
            My focus is on the{" "}
            <span className={cn("text-text-primary font-semibold")}>
              React ecosystem
            </span>
            : TypeScript, Remix, Next.js, with a growing specialization in{" "}
            <span className={cn("text-accent font-semibold")}>
              AI-integrated frontend applications
            </span>{" "}
            from streaming UI pipelines to real-time AI workflows. I enjoy the
            challenge of making complex interfaces feel simple and fast, whether
            that's optimizing{" "}
            <span className={cn("text-text-primary font-semibold")}>
              Core Web Vitals
            </span>{" "}
            , engineering{" "}
            <span className={cn("text-text-primary font-semibold")}>
              state management systems
            </span>{" "}
            that scale, or building intuitive{" "}
            <span className={cn("text-accent font-semibold")}>
              human-AI interaction patterns
            </span>
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p>
            When I'm not coding, you'll find me exploring the intersection of
            technology and creativity, always looking for ways to bridge the gap
            between{" "}
            <span className={cn("text-text-primary font-semibold")}>
              engineering precision
            </span>{" "}
            and{" "}
            <span className={cn("text-text-primary font-semibold")}>
              design intuition
            </span>
            .
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
