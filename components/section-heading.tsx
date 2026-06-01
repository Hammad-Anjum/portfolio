import { cn } from "@/lib/utils"

type Props = {
  number: string
  title: string
  className?: string
}

export function SectionHeading({ number, title, className }: Props) {
  return (
    <div className={cn("mb-10 flex items-center gap-5", className)}>
      <h2 className="flex items-baseline gap-3 whitespace-nowrap text-2xl font-semibold tracking-tight md:text-3xl">
        <span className="font-mono text-sm font-normal text-primary md:text-base">{number}.</span>
        <span>{title}</span>
      </h2>
      <span className="h-px flex-1 bg-border" />
    </div>
  )
}
