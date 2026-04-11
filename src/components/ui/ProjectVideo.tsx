// src/components/ui/ProjectVideo.tsx
"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ProjectVideoProps {
  src: string;
  poster?: string;
  caption?: string;
}

export function ProjectVideo({ src, poster, caption }: ProjectVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <figure className={cn("border-b border-border pb-3")}>
      <div
        className={cn(
          "relative rounded-xl overflow-hidden border",
          " border-border cursor-pointer group",
        )}
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          onEnded={() => setIsPlaying(false)}
          className={cn("w-full")}
        />

        {/* play button: overlay —when no playing  */}
        {!isPlaying && (
          <div
            className={cn(
              "absolute inset-0 flex items-center justify-center",
              "bg-text-primary/5 group-hover:bg-text-primary/10",
              "transition-colors",
            )}
          >
            <div
              className={cn(
                "w-14 h-14 rounded-full bg-accent/90",
                "flex items-center justify-center shadow-lg",
              )}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="white"
                className={cn("ml-1")}
              >
                <polygon points="5,3,17,10,5,17" />
              </svg>
            </div>
          </div>
        )}
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
