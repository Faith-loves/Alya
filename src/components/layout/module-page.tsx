import { Card } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { DisplayHeading, Eyebrow } from "@/components/ui/typography";
export function ModulePage({ eyebrow, title, subtitle, emptyTitle, emptyDescription, children }: { eyebrow: string; title: string; subtitle: string; emptyTitle?: string; emptyDescription?: string; children?: React.ReactNode }) { return <div><div className="mb-10 max-w-3xl"><Eyebrow>{eyebrow}</Eyebrow><DisplayHeading className="mt-3">{title}</DisplayHeading><p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">{subtitle}</p></div>{children ?? <Card><EmptyState title={emptyTitle ?? "Nothing here yet"} description={emptyDescription ?? "This space is ready for a future Alya module."} /></Card>}</div>; }
