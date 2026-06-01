import { SectionHeading } from "@/components/section-heading"

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
    period: "2026 — Present",
    degree: "Masters of Artificial Intelligence",
  },
  {
    school: "FAST NUCES",
    location: "Lahore, Pakistan",
    period: "2021 — 2025",
    degree: "B.S. Data Science",
    gpa: "3.14 / 4.0",
    coursework: [
      "Data Structures & Algorithms",
      "Data Analysis & Visualization",
      "Generative AI",
      "Artificial Intelligence",
    ],
  },
  {
    school: "New Middle East International School",
    location: "Riyadh, Saudi Arabia",
    period: "— 2021",
    degree: "O / A Levels",
    coursework: ["Maths", "Physics", "Computer Science"],
  },
]

export function Education() {
  return (
    <section id="education" className="scroll-mt-20 py-16">
      <SectionHeading number="03" title="Education" />

      <ol className="divide-y divide-border/60">
        {education.map((ed) => (
          <li key={ed.school} className="grid gap-6 py-8 md:grid-cols-[160px_1fr] md:gap-10">
            <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {ed.period}
            </div>
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {ed.school} <span className="text-muted-foreground">· {ed.location}</span>
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {ed.degree}
                  {ed.gpa ? <span className="text-muted-foreground/70"> · GPA {ed.gpa}</span> : null}
                </p>
              </div>
              {ed.coursework?.length ? (
                <p className="font-mono text-xs leading-relaxed text-muted-foreground/80">
                  {ed.coursework.join("  ·  ")}
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
