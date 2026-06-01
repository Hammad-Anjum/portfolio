import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

type Certification = {
  title: string
  provider: string
  date: string
  href: string
}

const certifications: Certification[] = [
  {
    title: "AI for Data Scientists",
    provider: "DataCamp",
    date: "Jul 2025",
    href: "https://www.datacamp.com/certificate/AEDS0014706321482",
  },
  {
    title: "Data Scientist",
    provider: "DataCamp",
    date: "Jul 2024",
    href: "https://www.datacamp.com/certificate/DS0027319922812",
  },
  {
    title: "Machine Learning with Python",
    provider: "FreeCodeCamp",
    date: "Feb 2024",
    href: "https://www.freecodecamp.org/certification/fcc9901a92f-fcb8-444a-ac45-ac74c0e2b12c/machine-learning-with-python-v7",
  },
  {
    title: "Associate Data Analyst",
    provider: "DataCamp",
    date: "Oct 2023",
    href: "https://www.datacamp.com/certificate/DAA0016430756652",
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-20 py-16">
      <SectionHeading number="04" title="Certifications" />
      <ul className="divide-y divide-border/60">
        {certifications.map((cert) => (
          <li key={cert.title}>
            <a
              href={cert.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-baseline justify-between gap-4 py-4"
            >
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-medium transition-colors group-hover:text-primary md:text-base">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground">{cert.provider}</p>
              </div>
              <div className="flex shrink-0 items-baseline gap-3 font-mono text-xs text-muted-foreground">
                <span>{cert.date}</span>
                <ArrowUpRight className="h-3.5 w-3.5 self-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
