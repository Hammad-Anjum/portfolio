"use client"

import Image from "next/image"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import { ArrowRight, FileText, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { assetPath } from "@/lib/utils"

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const reduce = useReducedMotion()

  const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  }
  const item: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
  }

  return (
    <section id="hero" className="relative py-20 md:py-28">
      {/* gradient orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-10 left-0 h-72 w-72 rounded-full bg-primary/30 blur-3xl opacity-60 animate-pulse-slow" />
        <div className="absolute top-32 right-0 h-80 w-80 rounded-full bg-[hsl(var(--accent-2)/0.25)] blur-3xl opacity-50 animate-pulse-slow [animation-delay:1.5s]" />
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger}
        className="flex flex-col items-center gap-12 md:flex-row md:gap-16"
      >
        <div className="flex-1 space-y-5 text-center md:text-left">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Open to opportunities
          </motion.div>

          <motion.h1
            variants={item}
            className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">Hammad Anjum</span>
          </motion.h1>

          <motion.h2
            variants={item}
            className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-base font-medium text-muted-foreground md:justify-start md:text-xl"
          >
            <span>AI / ML Engineer</span>
            <span className="text-primary">·</span>
            <span>Automation Engineer</span>
            <span className="text-primary">·</span>
            <span>Data Scientist</span>
          </motion.h2>

          <motion.p
            variants={item}
            className="mx-auto max-w-xl text-muted-foreground leading-relaxed md:mx-0"
          >
            Passionate about creating intuitive and impactful digital experiences. Currently
            pursuing a Masters of Artificial Intelligence at the University of Technology Sydney
            with hands-on experience in AI/ML and RPA development.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap justify-center gap-3 pt-2 md:justify-start"
          >
            <Button size="lg" asChild className="glow-primary">
              <a href="#contact">
                Get in touch <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#projects">View projects</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://drive.google.com/file/d/1lT2BK-eIPg9xALYxe8sE1lS2EjzI0qM0/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <FileText className="h-4 w-4" /> My Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="flex items-center justify-center gap-5 pt-2 text-muted-foreground md:justify-start"
          >
            <a
              href="https://github.com/Hammad-Anjum"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-primary"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/hammad6271"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:hammad95632@gmail.com"
              aria-label="Email"
              className="transition-colors hover:text-primary"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        <motion.div variants={item} className="relative shrink-0">
          <div className="absolute -inset-3 rounded-full bg-[conic-gradient(from_0deg,hsl(var(--primary)),hsl(var(--primary-glow)),hsl(var(--accent-2)),hsl(var(--primary)))] opacity-70 blur-xl animate-spin-slow" />
          <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-background shadow-2xl md:h-72 md:w-72">
            <Image
              src={assetPath("/pfp.png")}
              alt="Hammad Anjum"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
