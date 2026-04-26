import { ExternalLink, FileText } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { SectionHeading } from "@/components/section-heading"
import { GlowCard } from "@/components/ui/glow-card"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

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
    date: "July 2025",
    href: "https://www.datacamp.com/certificate/AEDS0014706321482",
  },
  {
    title: "Data Scientist",
    provider: "DataCamp",
    date: "July 2024",
    href: "https://www.datacamp.com/certificate/DS0027319922812",
  },
  {
    title: "Machine Learning with Python",
    provider: "FreeCodeCamp",
    date: "February 2024",
    href: "https://www.freecodecamp.org/certification/fcc9901a92f-fcb8-444a-ac45-ac74c0e2b12c/machine-learning-with-python-v7",
  },
  {
    title: "Associate Data Analyst",
    provider: "DataCamp",
    date: "October 2023",
    href: "https://www.datacamp.com/certificate/DAA0016430756652",
  },
]

export function Certifications() {
  return (
    <AnimatedSection id="certifications" className="scroll-mt-20 py-16">
      <SectionHeading icon={FileText} title="Certifications" />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <GlowCard key={cert.title} accent>
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <CardTitle className="text-base leading-snug">{cert.title}</CardTitle>
                  <CardDescription className="mt-1">{cert.provider}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <Badge
                variant="secondary"
                className="bg-primary/10 text-primary hover:bg-primary/15"
              >
                {cert.date}
              </Badge>
              <Button variant="link" size="sm" className="px-0 text-primary" asChild>
                <a
                  href={cert.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group/link inline-flex items-center gap-1"
                >
                  <span className="bg-gradient-to-r from-primary to-primary bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-all duration-300 group-hover/link:bg-[length:100%_1px]">
                    Verify
                  </span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </Button>
            </CardContent>
          </GlowCard>
        ))}
      </div>
    </AnimatedSection>
  )
}
