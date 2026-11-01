import { cn } from "@/lib/utils";
export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) { return <section className={cn("surface rounded-3xl border border-[#E9DFE9] bg-white/70 p-5 shadow-[0_12px_40px_rgba(43,31,53,.05)]", className)} {...props} />; }
