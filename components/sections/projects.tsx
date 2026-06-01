import Image from "next/image"
import { ArrowUpRight, Github } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { assetPath, cn } from "@/lib/utils"
import { projects } from "@/lib/projects"

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-16">
      <SectionHeading number="05" title="Projects" />
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <li
            key={p.title}
            className="group flex flex-col gap-4 rounded-lg border border-border/70 bg-card/30 p-5 transition-colors hover:border-foreground/30"
          >
            <a
              href={p.href ?? "#"}
              target={p.href ? "_blank" : undefined}
              rel={p.href ? "noreferrer" : undefined}
              className="relative block aspect-[16/10] overflow-hidden rounded-md border border-border/60 bg-secondary/20"
              aria-label={p.title}
              tabIndex={p.href ? 0 : -1}
            >
              <Image
                src={assetPath(p.image)}
                alt={p.alt}
                fill
                className={cn(
                  p.imageFit === "contain" ? "object-contain p-4" : "object-cover",
                )}
              />
            </a>

            <div className="flex flex-1 flex-col gap-3">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-base font-semibold tracking-tight">
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-primary"
                    >
                      {p.title}
                    </a>
                  ) : (
                    p.title
                  )}
                </h3>
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} — open`}
                    className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {p.cta?.toLowerCase().includes("all") ? (
                      <ArrowUpRight className="h-4 w-4" />
                    ) : (
                      <Github className="h-4 w-4" />
                    )}
                  </a>
                ) : null}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
              <p className="font-mono text-xs leading-relaxed text-muted-foreground/80">
                {p.tech.join("  ·  ")}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
