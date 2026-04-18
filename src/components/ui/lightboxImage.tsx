import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface LightboxImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  gif?: boolean;
}

export function LightboxImage({
  src,
  alt,
  width = 600,
  height = 400,
  className = "",
  gif = false,
}: LightboxImageProps) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        unoptimized={gif}
        className={`${className} cursor-zoom-in w-full h-full object-cover`}
        onClick={() => setOpen(true)}
      />

      {open && (
        <div
          className={cn(
            "fixed inset-0 z-50 flex items-center justify-center bg-text-primary/80 backdrop-blur-sm cursor-zoom-out",
          )}
          onClick={close}
        >
          {/* Close button */}
          <button
            onClick={close}
            className={cn(
              "absolute top-6 right-6 w-10 h-10 rounded-full bg-bg-primary/90 flex items-center",
              "justify-center text-text-primary hover:bg-bg-primary transition-colors shadow-lg",
            )}
            aria-label="Close"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="3" y1="3" x2="13" y2="13" />
              <line x1="13" y1="3" x2="3" y2="13" />
            </svg>
          </button>

          <Image
            src={src}
            alt={alt}
            width={1920}
            height={1080}
            unoptimized={gif}
            className={cn(
              "max-w-[90vw] max-h-[90vh] object-contain rounded-lg",
            )}
          />
        </div>
      )}
    </>
  );
}
