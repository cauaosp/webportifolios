export function IconBadge({ icon: Icon }: { icon: React.ComponentType<{ className?: string }> }) {
  return (
    <div className="size-8 rounded-sm bg-accent/10 ring-1 ring-accent/30 flex items-center justify-center">
      <Icon className="size-4 text-accent" />
    </div>
  );
}
