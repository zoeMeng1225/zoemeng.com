// src/components/ui/SectionHeading.tsx

interface SectionHeadingProps {
  children: React.ReactNode;
  id?: string;
}

export function SectionHeading({ children, id }: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className="font-display text-sm font-semibold uppercase tracking-widest text-text-tertiary mb-8"
    >
      {children}
    </h2>
  );
}