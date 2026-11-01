import { cn } from "@/lib/utils";
export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) { return <section className={cn("surface rounded-3xl border border-border bg-card/70 p-5 shadow-sm", className)} {...props} />; }
