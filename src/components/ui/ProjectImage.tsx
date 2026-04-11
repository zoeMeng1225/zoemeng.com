// src/components/ui/ProjectImage.tsx
"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProjectImageProps {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  gif?: boolean;
}

export function ProjectImage({
  src,
  alt,
  caption,
  priority = false,
  gif = false,
}: ProjectImageProps) {
  return (
    <figure className={cn("border-b border-border pb-3")}>
      <div className={cn("rounded-xl overflow-hidden border border-border")}>
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={675}
          className={cn("w-full")}
          priority={priority}
          unoptimized={gif}
        />
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
