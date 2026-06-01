import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

type Achievement = {
  title: string
  source: string
  year: string
  description: string
  href: string
}

const achievements: Achievement[] = [
  {
    title: "Participated in EduX Hackathon Oceania 2026",
    source: "Cambridge x InCubed",
    year: "2026",
    description:
      "Built an AI-powered teacher–parent platform for AU K-12 — curriculum RAG, multilingual chat, wellbeing tracking, voice TTS, CurricuLLM.",
    href: "/Performative Coders.pdf",
  },
  {
    title: "Associate AI Engineer for Data Scientists",
    source: "DataCamp track",
    year: "2025",
    description:
      "40-hour career track covering model deployment, MLOps, deep learning (TensorFlow/PyTorch), and scalable AI solutions.",
    href: "https://www.datacamp.com/completed/statement-of-accomplishment/track/d84c9dc78a87df7be2c875b7ea9f513fbd4b8658",
  },
  {
    title: "Introducing Generative AI with AWS",
    source: "Udacity (AWS AI/ML Scholar)",
    year: "2025",
    description:
      "20+ hour track covering LLMs, Generative AI, and AWS tooling — SageMaker, PartyRock, Bedrock.",
    href: "https://www.udacity.com/certificate/e/018e3e5c-4148-11f0-930d-9b64663606bf",
  },
  {
    title: "Data Analyst with Power BI",
    source: "DataCamp track",
    year: "2024",
    description:
      "50+ hour track covering Power BI, DAX, dashboards, and reporting.",
    href: "https://www.datacamp.com/completed/statement-of-accomplishment/track/86ebddbd98be7c91ac20848a6f8a710ac6da9962",
  },
  {
    title: "Associate Data Scientist",
    source: "DataCamp track",
    year: "2023",
    description:
      "80+ hour track covering Python, R, SQL, and machine learning fundamentals.",
    href: "https://www.datacamp.com/completed/statement-of-accomplishment/track/a13939fcc9e7b3ce37c30d1455579d1e7f40dfd2",
  },
  {
    title: "Data Analyst",
    source: "DataCamp track",
    year: "2023",
    description:
      "30+ hour track covering Python, R, data literacy, and visualization.",
    href: "https://www.datacamp.com/completed/statement-of-accomplishment/track/e21801983883725c8b8e6f9d0cbc00cb1df26ced",
  },
]

export function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-20 py-16">
      <SectionHeading number="07" title="Achievements" />
      <ol className="grid gap-4">
        {achievements.map((a) => (
          <li key={a.title}>
            <a
              href={a.href}
              target="_blank"
              rel="noreferrer"
              className="group grid gap-3 rounded-lg border border-border/70 bg-card/30 p-5 transition-colors hover:border-foreground/30 md:grid-cols-[80px_1fr_auto] md:gap-8"
            >
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {a.year}
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-medium transition-colors group-hover:text-primary">
                  {a.title}
                </h3>
                <p className="text-sm text-muted-foreground">{a.source}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{a.description}</p>
              </div>
              <ArrowUpRight className="hidden h-4 w-4 self-start text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground md:block" />
            </a>
          </li>
        ))}
      </ol>
    </section>
  )
}
