// src/components/ui/ProjectImage.tsx
"use client";

import { cn } from "@/lib/utils";
import { LightboxImage } from "./lightboxImage";

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
  gif = false,
}: ProjectImageProps) {
  return (
    <figure className="my-8">
      <div className={cn("rounded-xl overflow-hidden border border-border")}>
        <LightboxImage
          src={src}
          alt={alt}
          width={1200}
          height={675}
          gif={gif}
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
