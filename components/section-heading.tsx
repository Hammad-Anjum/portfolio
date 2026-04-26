import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type Props = {
  icon: LucideIcon
  title: string
  description?: string
  className?: string
}

export function SectionHeading({ icon: Icon, title, description, className }: Props) {
  return (
    <div className={cn("mb-10 flex items-start gap-4", className)}>
      <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent shadow-[0_0_20px_-8px_hsl(var(--primary)/0.6)]">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div className="space-y-1">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
        {description ? (
          <p className="text-sm text-muted-foreground">{description}</p>
        ) : null}
      </div>
    </div>
  )
}
