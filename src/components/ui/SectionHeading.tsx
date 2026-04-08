// src/component/ui/SectionHeading.tsx

interface SectionHeadingProps {
  children: React.ReactNode;
  id?: string;
}

export function SectionHeading({ children, id }: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className="font-display text-sm font-semibold uppercase tracking-widset text-text-tertiary mb-8x"
    >
      {children}
    </h2>
  );
}
