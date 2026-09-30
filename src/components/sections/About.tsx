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
            I came to engineering from design. My M.A. in Web Design & New
            Media at the Academy of Art University covered interaction design
            and prototyping, and I wanted to build the interfaces I was
            designing rather than hand them off. So I spent two years in an
            intensive software engineering program (LaiOffer) before joining
            MTI in 2022.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p>
            The part I care about most sits{" "}
            <span className={cn("text-text-primary font-medium")}>
              between the mock-up and the shipped product
            </span>
            : the loading state, the error state, what happens on the keyboard,
            how a catalog of 30,000 things stays navigable. As the sole
            engineer at MTI, I&apos;ve owned problems end to end, from sitting
            with the sales team to see where they stalled to shipping and
            maintaining the tool that replaced their spreadsheet.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p>
            Lately I&apos;ve been working on AI interfaces, where the hard
            problems are trust and legibility: showing what a model is doing
            so people can check it before it touches anything real.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}