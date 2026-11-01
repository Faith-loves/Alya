import Image from "next/image";
import { cn } from "@/lib/utils";
const sizes = { small: { width: 120, height: 48, className: "h-10 w-auto" }, medium: { width: 220, height: 88, className: "h-16 w-auto" }, large: { width: 480, height: 192, className: "h-28 w-auto sm:h-36" } } as const;
export function BrandLogo({ size = "medium", className, priority = false }: { size?: keyof typeof sizes; className?: string; priority?: boolean }) { const config = sizes[size]; return <Image src="/branding/alya-logo.png" alt="Alya" width={config.width} height={config.height} priority={priority} className={cn("object-contain object-left", config.className, className)} />; }
