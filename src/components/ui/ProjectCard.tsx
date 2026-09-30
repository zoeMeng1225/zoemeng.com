// src/components/ui/ProjectCard.tsx
"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
  image?: string;
  video?: string;
  kind?: string;
  meta?: string;
  metrics?: { label: string; value: string }[];
  isCompact?: boolean;
}

export function ProjectCard({
  title,
  description,
  tags,
  href,
  image,
  video,
  kind,
  meta,
  metrics,
  isCompact = false,
}: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    v.play().catch(() => {});
  };

  const stop = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  return (
    <Link
      href={href}
      onMouseEnter={play}
      onMouseLeave={stop}
      onFocus={play}
      onBlur={stop}
      className={cn(
        "group block rounded-xl h-full",
        "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
      )}
    >
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={cn(
          "relative rounded-xl border border-transparent bg-bg-secondary",
          "h-full flex flex-col",
          "p-6 transition-all duration-300",
          "group-hover:border-accent/40 group-hover:shadow-[0_0_0_1px_rgba(124,92,252,0.1),0_4px_20px_rgba(124,92,252,0.06)]",
        )}
      >
        {/* cover: image, with a looping video on hover/focus */}
        {!isCompact && image && (
          <div className={cn("relative mb-4 overflow-hidden rounded-lg bg-bg-tertiary")}>
            <Image
              src={image}
              alt={title}
              width={600}
              height={340}
              className={cn(
                "w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]",
              )}
              priority
            />
            {video && (
              <video
                ref={videoRef}
                src={video}
                muted
                loop
                playsInline
                preload="none"
                aria-hidden="true"
                className={cn(
                  "absolute inset-0 h-full w-full object-cover",
                  "opacity-0 transition-opacity duration-300",
                  "group-hover:opacity-100 group-focus-visible:opacity-100",
                  "motion-reduce:hidden",
                )}
              />
            )}
          </div>
        )}

        {/* meta line: kind · context */}
        {(kind || meta) && (
          <p className={cn("mb-2 text-xs font-medium uppercase tracking-wider text-accent")}>
            {[kind, meta].filter(Boolean).join(" · ")}
          </p>
        )}

        {/* title */}
        <h3
          className={cn(
            "font-body text-lg font-semibold text-text-primary",
            "mb-2 group-hover:text-accent transition-colors",
          )}
        >
          {title}
          <span
            aria-hidden="true"
            className={cn(
              "inline-block ml-1 opacity-0 -translate-x-1",
              "group-hover:opacity-100 group-hover:translate-x-0",
              "transition-all duration-200",
            )}
          >
            →
          </span>
        </h3>

        {/* description */}
        <p className={cn("text-sm text-text-secondary leading-relaxed mb-4")}>
          {description}
        </p>

        <div className={cn("mt-auto")}>
              {/* metrics */}
          {metrics && metrics.length > 0 && (
            <div className={cn("flex gap-6 mb-4")}>
              {metrics.map((m) => (
                <div key={m.label}>
                  <div className={cn("text-lg font-body font-semibold tabular-nums text-accent")}>
                    {m.value}
                  </div>
                  <div className={cn("text-xs text-text-tertiary")}>{m.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* tags */}
          <div className={cn("flex flex-wrap gap-1.5")}>
            {tags.map((tag) => (
              <span
                key={tag}
                className={cn(
                  "text-[11px] px-2 py-0.5 rounded-full font-medium",
                  "bg-accent/10 text-accent",
                )}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </Link>
  );
}