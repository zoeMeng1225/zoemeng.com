import { FadeIn } from "./FadeIn";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function BackToHome() {
  return (
    <FadeIn>
      <Link
        href="/"
        className={cn(
          "inline-flex items-center gap-1 text-sm text-text-tertiary mb-8",
          "hover:text-text-primary transition-colors",
        )}
      >
        ← Back to home
      </Link>
    </FadeIn>
  );
}
