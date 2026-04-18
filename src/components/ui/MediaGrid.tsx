// src/components/ui/MadiaGrid.tsx
"use client";

import { cn } from "@/lib/utils";
import { LightboxImage } from "./lightboxImage";

interface MediaItem {
  src: string;
  alt: string;
  gif?: boolean;
}

interface MediaGridProps {
  items: MediaItem[];
  columns?: 2 | 3 | 4;
  caption?: string;
}

export function MediaGrid({ items, columns = 2, caption }: MediaGridProps) {
  const colClass =
    columns === 2
      ? "grid-cols-2"
      : columns === 3
        ? "grid-cols-3"
        : "grid-cols-2 md:grid-cols-4";

  return (
    <figure className="my-8">
      <div className={`grid ${colClass} gap-3`}>
        {items.map((item, i) => (
          <div
            key={i}
            className={cn(
              "rounded-lg overflow-hidden border border-border bg-bg-secondary",
            )}
          >
            <LightboxImage src={item.src} alt={item.alt} gif={item.gif} />
          </div>
        ))}
      </div>
      {caption && (
        <figcaption
          className={cn("mt-3 text-sm text-text-tertiary text-center")}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
