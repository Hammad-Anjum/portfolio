"use client"

import Image from "next/image"
import { Code, Github } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { SectionHeading } from "@/components/section-heading"
import { GlowCard } from "@/components/ui/glow-card"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { assetPath, cn } from "@/lib/utils"
import { projects } from "@/lib/projects"
import { motion, useReducedMotion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

export function Projects() {
  const reduce = useReducedMotion()

  return (
    <AnimatedSection id="projects" className="scroll-mt-20 py-16">
      <SectionHeading icon={Code} title="Projects" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease }}
          >
            <GlowCard className="group flex h-full flex-col overflow-hidden">
              <div className="relative aspect-video overflow-hidden bg-secondary/20">
                <Image
                  src={assetPath(p.image)}
                  alt={p.alt}
                  fill
                  className={cn(
                    "transition-transform duration-500 group-hover:scale-105",
                    p.imageFit === "contain" ? "object-contain p-4" : "object-cover",
                  )}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-60" />
              </div>
              <CardHeader>
                <CardTitle className="text-lg leading-snug">{p.title}</CardTitle>
                <CardDescription>{p.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between space-y-4">
                <p className="text-sm text-muted-foreground">{p.blurb}</p>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <Badge
                        key={t}
                        variant="outline"
                        className="border-border/60 bg-secondary/30 text-xs transition hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                  {p.href ? (
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1"
                      >
                        <Github className="h-4 w-4" />
                        <span>{p.cta ?? "Code"}</span>
                      </a>
                    </Button>
                  ) : null}
                </div>
              </CardContent>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  )
}
