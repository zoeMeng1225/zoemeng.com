// src/components/ui/CaseStudy.tsx
// Shared building blocks for the case study pages.
import { cn } from "@/lib/utils";

export const body = cn("space-y-4 text-text-secondary leading-relaxed");

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      className={cn(
        "text-xs font-semibold uppercase tracking-widest text-text-tertiary mb-2",
      )}
    >
      {children}
    </p>
  );
}

export function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <>
      <h2
        className={cn(
          "font-display text-xl font-semibold",
          subtitle ? "mb-2" : "mb-4",
        )}
      >
        {title}
      </h2>
      {subtitle && <p className={cn("text-sm text-accent mb-6")}>{subtitle}</p>}
    </>
  );
}

export function Strong({ children }: { children: React.ReactNode }) {
  return (
    <span className={cn("text-text-primary font-medium")}>{children}</span>
  );
}

export function Card({
  title,
  label,
  children,
  accent = false,
  highlight = false,
}: {
  title: string;
  label?: string;
  children: React.ReactNode;
  accent?: boolean;
  highlight?: boolean;
}) {
  return (
    <div
      className={cn(
        "p-5 rounded-lg",
        highlight
          ? "bg-bg-primary border-2 border-accent"
          : "bg-bg-secondary border border-border",
      )}
    >
      {label && (
        <p
          className={cn(
            "text-xs uppercase tracking-wider mb-2",
            highlight ? "text-accent" : "text-text-tertiary",
          )}
        >
          {label}
        </p>
      )}
      <h4
        className={cn(
          "font-display text-sm font-semibold mb-2",
          accent ? "text-accent" : "text-text-primary",
        )}
      >
        {title}
      </h4>
      <p className={cn("text-sm text-text-secondary leading-relaxed")}>
        {children}
      </p>
    </div>
  );
}

export function Metrics({
  items,
}: {
  items: { value: string; label: string }[];
}) {
  return (
    <div
      className={cn(
        "grid gap-3 mb-8",
        items.length > 2
          ? "grid-cols-2 md:grid-cols-4"
          : "grid-cols-2 max-w-sm",
      )}
    >
      {items.map((m) => (
        <div
          key={m.label}
          className={cn("py-4 px-4 rounded-lg bg-bg-secondary")}
        >
          <div
            className={cn(
              "text-xl font-body font-semibold tabular-nums text-accent",
            )}
          >
            {m.value}
          </div>
          <div className={cn("text-xs text-text-tertiary mt-1")}>{m.label}</div>
        </div>
      ))}
    </div>
  );
}

export function TagList({ tags }: { tags: string[] }) {
  return (
    <div className={cn("flex flex-wrap gap-2 mb-10")}>
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
  );
}

export function TechCard({
  n,
  title,
  children,
  code,
}: {
  n: number;
  title: string;
  children: React.ReactNode;
  code?: string;
}) {
  return (
    <div className={cn("p-6 rounded-xl bg-bg-secondary border border-border")}>
      <div className={cn("flex items-center gap-3 mb-3")}>
        <span
          className={cn(
            "w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center text-accent text-sm font-bold",
          )}
        >
          {n}
        </span>
        <h4 className={cn("font-display font-semibold text-text-primary")}>
          {title}
        </h4>
      </div>
      <p
        className={cn(
          "text-sm text-text-secondary leading-relaxed",
          code && "mb-3",
        )}
      >
        {children}
      </p>
      {code && (
        <div
          className={cn(
            "rounded-lg bg-bg-tertiary p-4 font-mono text-xs text-text-secondary overflow-x-auto",
          )}
        >
          <pre>{code}</pre>
        </div>
      )}
    </div>
  );
}

export function DeepDive({ children }: { children: React.ReactNode }) {
  return (
    <details className={cn("group rounded-xl border border-border")}>
      <summary
        className={cn(
          "flex cursor-pointer list-none items-center justify-between px-6 py-5",
          "font-display text-xl font-semibold text-text-primary",
          "[&::-webkit-details-marker]:hidden",
        )}
      >
        Technical deep dive
        <span
          aria-hidden="true"
          className={cn(
            "text-accent transition-transform duration-200 group-open:rotate-45",
          )}
        >
          +
        </span>
      </summary>
      <div className={cn("space-y-4 px-6 pb-6")}>{children}</div>
    </details>
  );
}