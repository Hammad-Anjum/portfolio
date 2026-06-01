import { SectionHeading } from "@/components/section-heading"

type Experience = {
  role: string
  company: string
  location: string
  period: string
  summary: string
  bullets: React.ReactNode[]
  tech: string[]
}

const experiences: Experience[] = [
  {
    role: "AI/ML Associate",
    company: "Nexpred Solutions",
    location: "Hybrid",
    period: "Sept 2025 — Dec 2025",
    summary:
      "Working on NLP, retrieval-augmented generation, and computer vision applications for client products.",
    bullets: [
      <>
        Deployed <strong className="font-medium text-foreground">5+ RAG systems</strong> with
        LangChain and vector DBs (FAISS, Pinecone, ChromaDB), lifting retrieval quality by 73%.
      </>,
      <>
        Built 2–3 multimodal apps combining computer vision and NLP for contextual recommendations,
        reaching 85–95% model accuracy.
      </>,
      <>
        Shipped internal tools for data processing and lead generation that reduced manual workload
        by 86%.
      </>,
    ],
    tech: [
      "Python",
      "LangChain",
      "FAISS",
      "Pinecone",
      "ChromaDB",
      "OpenAI",
      "HuggingFace",
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
    period: "Sept 2024 — March 2025",
    summary:
      "Built and maintained Robotic Process Automation solutions to remove repetitive operational work.",
    bullets: [
      <>
        Created <strong className="font-medium text-foreground">10+ automation workflows</strong>{" "}
        across HubSpot, Zoho, and Airtable that cut hands-on work by 90%.
      </>,
      <>
        Developed scripts for multiple CRMs (HubSpot, Zoho, Airtable) to standardise internal
        workflows.
      </>,
      <>
        Built PowerBI and Tableau dashboards to track KPIs across the automation pipelines.
      </>,
    ],
    tech: [
      "UiPath",
      "Selenium",
      "n8n",
      "Python",
      "Zoho",
      "Airtable",
      "HubSpot",
      "App Scripts",
      "Mobile Automation",
      "PowerBI",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-16">
      <SectionHeading number="02" title="Experience" />

      <ol className="divide-y divide-border/60">
        {experiences.map((exp) => (
          <li
            key={`${exp.role}-${exp.company}`}
            className="grid gap-6 py-8 md:grid-cols-[200px_1fr] md:gap-10"
          >
            <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {exp.period}
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {exp.role}{" "}
                  <span className="text-primary">· {exp.company}</span>
                </h3>
                <p className="mt-0.5 text-sm text-muted-foreground">{exp.location}</p>
              </div>
              <p className="max-w-2xl text-sm text-muted-foreground">{exp.summary}</p>
              <ul className="max-w-2xl space-y-2 text-sm text-muted-foreground">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 h-px w-3 shrink-0 bg-muted-foreground/40" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="font-mono text-xs leading-relaxed text-muted-foreground/80">
                {exp.tech.join("  ·  ")}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
