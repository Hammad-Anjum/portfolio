import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type Props = {
  id?: string
  className?: string
  children: ReactNode
}

export function AnimatedSection({ id, className, children }: Props) {
  return (
    <section id={id} className={cn(className)}>
      {children}
    </section>
  )
}
