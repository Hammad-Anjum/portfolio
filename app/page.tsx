import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import Navigation from "@/components/navigation"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Experience } from "@/components/sections/experience"
import { Education } from "@/components/sections/education"
import { Certifications } from "@/components/sections/certifications"
import { Projects } from "@/components/sections/projects"
import { Skills } from "@/components/sections/skills"
import { Achievements } from "@/components/sections/achievements"
import { Exams } from "@/components/sections/exams"
import { Contact } from "@/components/sections/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/50">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold tracking-tight">
            <span className="text-gradient">Hammad Anjum</span>
          </Link>
          <div className="flex items-center gap-4">
            <Navigation />
            <ModeToggle />
          </div>
        </div>
      </header>

      <main className="container pb-16">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Certifications />
        <Projects />
        <Skills />
        <Achievements />
        <Exams />
        <Contact />
      </main>

      <SiteFooter />
    </div>
  )
}
