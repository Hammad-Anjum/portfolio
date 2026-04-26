import { BookOpen, GraduationCap } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { SectionHeading } from "@/components/section-heading"
import { GlowCard } from "@/components/ui/glow-card"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type Education = {
  school: string
  location: string
  period: string
  degree: string
  gpa?: string
  coursework?: string[]
}

const education: Education[] = [
  {
    school: "University of Technology Sydney",
    location: "Sydney, Australia",
    period: "Feb 2026 — Current",
    degree: "Masters of Artificial Intelligence",
  },
  {
    school: "FAST NUCES",
    location: "Lahore, Pakistan",
    period: "June 2021 — June 2025",
    degree: "Bachelor of Science in Data Science",
    gpa: "3.14 / 4.0",
    coursework: [
      "Data Structures & Algorithms",
      "Data Analysis and Visualization",
      "Generative AI",
      "Artificial Intelligence",
    ],
  },
  {
    school: "New Middle East International School",
    location: "Riyadh, Saudi Arabia",
    period: "May 2021",
    degree: "O / A Levels",
    coursework: ["Maths", "Physics", "Computer Science"],
  },
]

export function Education() {
  return (
    <AnimatedSection id="education" className="scroll-mt-20 py-16">
      <SectionHeading icon={GraduationCap} title="Education" />

      <div className="relative space-y-6 md:pl-8">
        <div className="pointer-events-none absolute left-[-2px] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent md:block" />

        {education.map((ed) => (
          <div key={ed.school} className="relative">
            <div className="pointer-events-none absolute -left-[12px] top-7 hidden h-3 w-3 rounded-full bg-primary shadow-[0_0_12px_2px_hsl(var(--primary)/0.7)] md:block" />

            <GlowCard>
              <CardHeader>
                <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
                  <div>
                    <CardTitle className="text-xl">{ed.school}</CardTitle>
                    <CardDescription>{ed.location}</CardDescription>
                  </div>
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {ed.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium">{ed.degree}</h3>
                  {ed.gpa ? (
                    <p className="text-sm text-muted-foreground">GPA: {ed.gpa}</p>
                  ) : null}
                </div>
                {ed.coursework?.length ? (
                  <div>
                    <h4 className="mb-2 text-sm font-medium">Relevant Coursework</h4>
                    <ul className="grid grid-cols-1 gap-2 text-sm md:grid-cols-2">
                      {ed.coursework.map((c) => (
                        <li
                          key={c}
                          className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <BookOpen className="h-4 w-4 text-primary" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </CardContent>
            </GlowCard>
          </div>
        ))}
      </div>
    </AnimatedSection>
  )
}
