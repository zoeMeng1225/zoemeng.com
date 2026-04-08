//src/components/layout/Header/tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.screenY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        scrolled ? "bg-bg-primary shadow-sm" : "bg-transparent",
      )}
    >
      <nav
        className={cn(
          "max-w-3xl mx-auto px-6 h-16 flex items-center justify-between",
        )}
      >
        <Link
          href="/"
          className={cn(
            "font-display font-semibold text-text-primary text-lg hover:text-accent transition-colors",
          )}
        >
          {" "}
          Zoe Meng
        </Link>
        <div className={cn("flex items-center gap-8")}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm text-text-tertiary hover:text-text-primary transition-colors",
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/FrontendEngineer_ZoeMeng_Resume.pdf"
            target="_blank"
            className={cn(
              "text-sm text-accent hover:text-accent-dark transition-colors",
            )}
          ></a>
        </div>
      </nav>
    </header>
  );
}
