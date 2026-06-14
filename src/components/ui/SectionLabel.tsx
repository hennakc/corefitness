import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: string;
  className?: string;
}

export default function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-red/30 bg-brand-red/5 text-brand-red text-xs font-semibold tracking-widest uppercase",
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
      {children}
    </div>
  );
}
