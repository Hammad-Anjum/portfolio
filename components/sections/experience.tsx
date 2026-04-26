import { BookOpen, Briefcase, MapPin } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { SectionHeading } from "@/components/section-heading"
import { GlowCard } from "@/components/ui/glow-card"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Stat = { value: string; label: string }
type Experience = {
  role: string
  company: string
  location: string
  period: string
  summary: string
  stats: Stat[]
  responsibilities: { text: React.ReactNode }[]
  tech: string[]
}

const experiences: Experience[] = [
  {
    role: "AI/ML Associate",
    company: "Nexpred Solutions",
    location: "Hybrid",
    period: "Sept 2025 — Dec 2025",
    summary:
      "Worked on cutting-edge AI projects focusing on natural language processing, retrieval augmented generation (RAG), and computer vision applications.",
    stats: [
      { value: "5+", label: "RAG systems" },
      { value: "95%", label: "model accuracy" },
      { value: "86%", label: "workload reduced" },
    ],
    responsibilities: [
      {
        text: (
          <>
            Developed and successfully deployed <b>5+ RAG systems</b> using LangChain and various
            vector databases to enhance information retrieval and generation capabilities{" "}
            <b>by 73%.</b>
          </>
        ),
      },
      {
        text: (
          <>
            Utilized OpenAI and external APIs to create <b>2-3 multimodal applications</b>{" "}
            leveraging <b>computer vision</b> and <b>NLP</b> to analyze images and text, delivering
            contextual recommendations with <b>85–95%</b> model accuracy.
          </>
        ),
      },
      {
        text: (
          <>
            Created <b>internal tools</b> for automating data processing workflows along with lead
            generation, reducing <b>manual workload by 86%.</b>
          </>
        ),
      },
    ],
    tech: [
      "Python",
      "HuggingFace",
      "LangChain",
      "FAISS",
      "Pinecone",
      "ChromaDB",
      "OpenAI",
      "Streamlit",
      "Docker",
      "AWS",
      "Selenium",
    ],
  },
  {
    role: "RPA Developer",
    company: "Sybros Tech",
    location: "Lahore, Pakistan",
    period: "Sep 2024 — March 2025",
    summary:
      "Developed and maintained Robotic Process Automation (RPA) solutions to streamline business processes and improve operational efficiency.",
    stats: [
      { value: "10+", label: "workflows" },
      { value: "90%", label: "manual work cut" },
      { value: "3", label: "CRMs integrated" },
    ],
    responsibilities: [
      {
        text: (
          <>
            Created <b>10+ automation workflows</b> to streamline business processes and reduce
            hands-on work <b>by 90%.</b>
          </>
        ),
      },
      {
        text: (
          <>
            Developed scripts for multiple CRMs such as <b>HubSpot, Zoho, and Airtable</b> to
            standardize internal workflows.
          </>
        ),
      },
      {
        text: (
          <>
            Utilized PowerBI and Tableau to create dashboards for tracking key performance
            indicators across automation workflows.
          </>
        ),
      },
    ],
    tech: [
      "UiPath",
      "Selenium",
      "n8n",
      "Zoho",
      "Airtable",
      "App Scripts",
      "HubSpot",
      "Python",
      "Mobile Automation",
      "PowerBI",
    ],
  },
]

export function Experience() {
  return (
    <AnimatedSection id="experience" className="scroll-mt-20 py-16">
      <SectionHeading icon={Briefcase} title="Experience" />

      <div className="relative space-y-8 md:pl-8">
        {/* timeline line */}
        <div className="pointer-events-none absolute left-[-2px] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent md:block" />

        {experiences.map((exp) => (
          <div key={exp.role} className="relative">
            {/* timeline dot */}
            <div className="pointer-events-none absolute -left-[12px] top-7 hidden h-3 w-3 rounded-full bg-primary shadow-[0_0_12px_2px_hsl(var(--primary)/0.7)] md:block" />

            <GlowCard>
              <CardHeader>
                <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
                  <div className="flex-1">
                    <CardTitle className="text-xl">{exp.role}</CardTitle>
                    <CardDescription>
                      <span className="mt-2 flex flex-wrap items-center gap-3">
                        <span className="font-medium text-foreground">{exp.company}</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </span>
                      </span>
                    </CardDescription>
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    <BookOpen className="h-3.5 w-3.5" />
                    {exp.period}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-5">
                <p className="text-sm text-muted-foreground">{exp.summary}</p>

                <div className="grid grid-cols-3 gap-3">
                  {exp.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-lg border border-border/60 bg-background/40 p-3 text-center backdrop-blur-sm"
                    >
                      <div className="text-xl font-bold text-gradient-primary md:text-2xl">
                        {stat.value}
                      </div>
                      <div className="mt-0.5 text-[11px] uppercase tracking-wider text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="mb-2 text-sm font-medium">Key Responsibilities</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{r.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2 text-sm font-medium">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <Badge
                        key={t}
                        variant="outline"
                        className="border-border/60 bg-secondary/30 transition hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </GlowCard>
          </div>
        ))}
      </div>
    </AnimatedSection>
  )
}
