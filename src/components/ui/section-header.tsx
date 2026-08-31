export function SectionHeader({
  label,
  icon: Icon,
}: {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <h2 className="mb-12 border-b border-border pb-4 text-sm font-mono text-accent uppercase tracking-widest flex items-center gap-2">
      <Icon className="size-4" />
      {label}
    </h2>
  );
}
