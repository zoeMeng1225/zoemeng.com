// src/app/projects/b2b-quote/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "B2B Quote Automation Ecosystem — Zoe Meng",
  description:
    "Dual-interface system that reduced quote processing time by 83%.",
};

export default function B2BQuotePage() {
  return (
    <main className={cn("max-w-3xl mx-auto px-6 pt-32 pb-16")}>
      {/* return to nav*/}
      <FadeIn>
        <Link
          href="/"
          className={cn(
            "inline-flex items-center gap-1 text-sm text-text-tertiary",
          )}
        >
          {" "}
          ← Back to home
        </Link>
      </FadeIn>

      <FadeIn></FadeIn>
    </main>
  );
}
