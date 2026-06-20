import { cn } from "@/lib/utils";

type Props = {
  label: string;
  className?: string;
};

export function StackTag({ label, className }: Props) {
  return (
    <span
      className={cn(
        "inline-block rounded border border-accent/20 bg-accent-dim px-2 py-0.5",
        "font-mono text-label text-accent/80 transition-colors hover:border-accent/40 hover:text-accent",
        className
      )}
    >
      {label}
    </span>
  );
}
