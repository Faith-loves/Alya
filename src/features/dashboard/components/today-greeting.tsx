"use client";
import { useEffect, useState } from "react";
import { Eyebrow, DisplayHeading } from "@/components/ui/typography";
import { localDateISO } from "@/lib/utils";
export function TodayGreeting() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => { const timer = window.setTimeout(() => setNow(new Date()), 0); return () => window.clearTimeout(timer); }, []);
  const hour = now?.getHours() ?? 12;
  const greeting = hour < 12 ? "Good morning." : hour < 18 ? "Good afternoon." : "Good evening.";
  const date = now ? new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric" }).format(now) : "Your local day";
  return <div><Eyebrow>{date}</Eyebrow><DisplayHeading className="mt-3">{greeting}</DisplayHeading><p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">A gentle place to begin what matters today.</p><span className="sr-only">Local date key: {now ? localDateISO(now) : "loading"}</span></div>;
}
