export function SectionHeader({
  index,
  label,
  icon: Icon,
}: {
  index: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="mb-12 flex items-baseline justify-between border-b border-border pb-4">
      <h2 className="text-sm font-mono text-accent uppercase tracking-widest flex items-center gap-2">
        <Icon className="size-4" />
        {label}
      </h2>
      <span className="text-xs text-muted-foreground font-mono">{index}</span>
    </div>
  );
}
