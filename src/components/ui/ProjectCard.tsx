// src/components/ui/ProjectCard.text
"use client";

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
  metrics?: { label: string; value: string }[];
}

export function ProjectCard({
  title,
  description,
  tags,
  href,
  image,
  metrics,
}: ProjectCardProps) {
  return (
    <Link href={href}>
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={cn(
          "group relative rounded-xl border-border bg-bg-secondary",
          "p-6 transition-all duration-300 ",
          "hover:border-accent/40 hover:shadow-[0_0_0_1px_rgba(124,92,252,0.1),0_4px_20px_rgba(124,92,252,06)]",
        )}
      >
        {/*project image*/}
        {image && (
          <div className={cn("mb-4 overflow-hidden rounded-lg bg-bg-tertiary")}>
            <Image
              src={image}
              alt={title}
              width={600}
              height={340}
              className={cn(
                "w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]",
              )}
            />
          </div>
        )}

        {/*title*/}
        <h3
          className={cn(
            "font-display font-semibold text-text-primary ",
            "mb-2 group-hover: text-accent transition-colors",
          )}
        >
          {title}
          <span
            className={cn(
              "inline-block ml-1 opacity-0 -translate-x-1",
              "group-hover:opacity-100 group-hover:translate-x-0",
              "transtion-all duration-200",
            )}
          >
            {" "}
            →
          </span>
        </h3>

        {/*description*/}
        <p className={cn("text-sm text-text-secondary leading-relaxed mb-4")}>
          {description}
        </p>

        {/*key metric*/}
        {metrics && metrics.length > 0 && (
          <div className={cn("flex gap-4 mb-4")}>
            {metrics.map((m) => (
              <div key={m.label} className={cn("text-center")}>
                <div
                  className={cn("text-lg font-display font-bold text-accent")}
                >
                  {m.value}
                </div>
                <div className={cn("text-xs text-text-tertiary")}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/*skill tag*/}
        <div className={cn("flex flex-wrap gap-2")}>
          {tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                "text-xs px-2.5 py-1 rounded-full bg-accent-light text-accent-dark font-medium",
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.article>
    </Link>
  );
}
