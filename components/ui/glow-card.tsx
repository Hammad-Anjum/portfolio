import * as React from "react"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

type Props = React.HTMLAttributes<HTMLDivElement> & {
  accent?: boolean
}

const GlowCard = React.forwardRef<HTMLDivElement, Props>(
  ({ className, accent = false, ...props }, ref) => (
    <Card
      ref={ref}
      className={cn(
        "group/card relative overflow-hidden border-border/60 bg-card/70 backdrop-blur-sm transition-all duration-300",
        "hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_12px_40px_-15px_hsl(var(--primary)/0.4)]",
        accent &&
          "before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-primary/60 before:to-transparent",
        className,
      )}
      {...props}
    />
  ),
)
GlowCard.displayName = "GlowCard"

export { GlowCard }
