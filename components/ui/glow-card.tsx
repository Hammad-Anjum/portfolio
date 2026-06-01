import * as React from "react"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

type Props = React.HTMLAttributes<HTMLDivElement> & {
  accent?: boolean
}

const GlowCard = React.forwardRef<HTMLDivElement, Props>(
  ({ className, accent: _accent, ...props }, ref) => (
    <Card
      ref={ref}
      className={cn(
        "border-border/70 bg-card/40 shadow-none transition-colors duration-200 hover:border-border",
        className,
      )}
      {...props}
    />
  ),
)
GlowCard.displayName = "GlowCard"

export { GlowCard }
