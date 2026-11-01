import { cn } from "@/lib/utils";
export function DisplayHeading({ children, className }: { children: React.ReactNode; className?: string }) { return <h1 className={cn("font-serif text-[clamp(2.5rem,7vw,5rem)] leading-[.95] tracking-[-.03em]", className)}>{children}</h1>; }
export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) { return <p className={cn("text-xs font-bold uppercase tracking-[.18em] text-orchid", className)}>{children}</p>; }
