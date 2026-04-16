// src/components/sections/Contact.tsx
"use client";
import { cn } from "@/lib/utils";
import { FadeIn } from "../ui/FadeIn";
import { SectionHeading } from "../ui/SectionHeading";

export function Contact() {
  return (
    <section className={cn("mb-16")}>
      <FadeIn>
        <SectionHeading>Get In Touch</SectionHeading>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className={cn("text-text-secondary leading-relaxed mb-6")}>
          {" "}
          I'm actively looking for my next frontend engineering role in the Bay
          Area. If you think I'd be a good fit for your team, I'd love to chat.
        </p>
      </FadeIn>
      <FadeIn delay={0.2}>
        <a
          href="mailto:zoemeng1225@gmail.com"
          className={cn(
            "inline-flex items-center gap-2 px-4 py-2 rounded-md",
            "bg-accent text-white text-sm font-medium",
            "hover:bg-accent-dark transition-colors",
          )}
        >
          Say hello
        </a>
      </FadeIn>
    </section>
  );
}
