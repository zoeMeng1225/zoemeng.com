// src/components/ui/MadiaGrid.tsx
"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface MadiaItem {
  src: string;
  alt: string;
  gif: boolean;
}

interface MadiaGridProps {
  items: MadiaItem[];
  columns?: 2 | 3 | 4;
  caption?: string;
}

export function MediaGrid({ items, columns = 2, caption }: MadiaGridProps) {
  const colClass =
    columns === 2
      ? "grid-cols-2"
      : columns === 3
        ? "grid-cols-3"
        : "grid-col2-2 md:grid-cols-4";

  return (
    <figure className={cn("border-b border-border pb-3")}>
      <div className={`grid ${colClass} gap-3`}>
        {items.map((item, i) => (
          <div
            className={cn(
              "rounded-lg overflow-hidden border border-border bg-bg-secondary",
            )}
            key={i}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={600}
              height={400}
              className={cn("w-full h-full object-cover")}
              unoptimized={item.gif}
            />
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
