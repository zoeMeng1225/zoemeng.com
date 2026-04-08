// src/components/layout/Footer.tsx
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer
      className={cn("max-w-3xl mx-auto px-6 py-12 border-t border-border")}
    >
      <div
        className={cn(
          "flex items-center justify-between text-sm text-text-tertiary",
        )}
      >
        <p>Zoe Meng · 2026</p>
        <div className={cn("flex items-center gap-6")}>
          <a
            href="https://github.com/zoeMeng1225"
            target="_blank"
            rel="noopener noreferrer"
            className={cn("hover:text-text-primary transition-colors")}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/zoe-meng"
            target="_blank"
            rel="noopener noreferrer"
            className={cn("hover:text-text-primary transition-colors")}
          >
            Linkedin
          </a>
          <a
            href="mailto:zoemeng1225@gmail.com"
            className={cn("hover:text-text-primary transition-colors")}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
