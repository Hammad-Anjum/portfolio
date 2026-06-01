import Image from "next/image"
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react"
import { assetPath } from "@/lib/utils"

export function Hero() {
  return (
    <section id="hero" className="pt-16 md:pt-24 lg:pt-28 pb-16">
      <div className="flex flex-col-reverse items-start gap-10 md:flex-row md:items-center md:gap-14">
        <div className="flex-1 space-y-5">
          <p className="font-mono text-sm text-primary">Hi, my name is</p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">Hammad Anjum.</h1>
          <p className="font-mono text-sm text-muted-foreground md:text-base">
            AI / ML Engineer <span className="text-border">·</span> Automation Engineer{" "}
            <span className="text-border">·</span> Data Scientist
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-muted-foreground md:text-4xl">
            I build AI products and automate the boring parts.
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            I&apos;m an AI/ML engineer based in Sydney, currently doing my Masters of Artificial
            Intelligence at UTS. I&apos;ve shipped RAG systems, multimodal apps, and automation that
            cuts manual work by 90%. Lately I&apos;m most interested in on-device AI and agentic
            tooling.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 text-sm">
            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 font-medium text-primary hover:underline underline-offset-4"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#projects"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              View projects
            </a>
            <a
              href="https://drive.google.com/file/d/1lT2BK-eIPg9xALYxe8sE1lS2EjzI0qM0/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Resume
            </a>
          </div>

          <div className="flex items-center gap-5 pt-2 text-muted-foreground">
            <a
              href="https://github.com/Hammad-Anjum"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/hammad6271"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:hammad95632@gmail.com"
              aria-label="Email"
              className="transition-colors hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-full md:h-56 md:w-56">
          <Image
            src={assetPath("/pfp.png")}
            alt="Hammad Anjum"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
