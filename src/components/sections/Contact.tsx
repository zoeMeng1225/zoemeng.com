// src/components/sections/Contact.tsx
"use client";
import { cn } from "@/lib/utils";
import { FadeIn } from "../ui/FadeIn";
import { SectionHeading } from "../ui/SectionHeading";

export function Contact() {
  return (
    <section className={cn("mb-16")}>
      <FadeIn>
        <SectionHeading id="contact">Get In Touch</SectionHeading>
      </FadeIn>

      <FadeIn delay={0.1} className={cn("mt-1")}>
        <p className={cn("text-text-secondary leading-relaxed mb-6")}>
          I&apos;m looking for my next design engineer, UI engineer, or
          frontend role, hybrid in the Bay Area or remote. If you&apos;re
          building a product where the details matter, I&apos;d love to hear
          about it.
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
            Say hello
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