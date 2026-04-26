import { Award, ExternalLink } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { SectionHeading } from "@/components/section-heading"
import { GlowCard } from "@/components/ui/glow-card"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type Achievement = {
  title: string
  source: string
  description: string
  href: string
}

const achievements: Achievement[] = [
  {
    title: "Participated in EduX Hackathon Oceania 2026",
    source: "Cambridge x InCubed, 2026",
    description:
      "Created an AI-powered teacher–parent platform for AU K-12. Curriculum RAG, multilingual chat, wellbeing tracking, voice TTS, and CurricuLLM integration.",
    href: "https://github.com/Hammad-Anjum/EduX-Hackathon-HomeRoom",
  },
  {
    title: "Associate AI Engineer for Data Scientists",
    source: "DataCamp track, 2025",
    description:
      "This career track equips data scientists with essential AI engineering skills, covering model deployment, MLOps, deep learning (TensorFlow/PyTorch), and building scalable AI solutions of 40 hours.",
    href: "https://www.datacamp.com/completed/statement-of-accomplishment/track/d84c9dc78a87df7be2c875b7ea9f513fbd4b8658",
  },
  {
    title: "Introducing Generative AI with AWS",
    source: "Udacity, 2025",
    description:
      "Completed a comprehensive track as part of the AWS AI/ML Scholars program covering LLMs, Generative AI, and building AI applications with AWS, including SageMaker, PartyRock, and more — 20+ hours.",
    href: "https://www.udacity.com/certificate/e/018e3e5c-4148-11f0-930d-9b64663606bf",
  },
  {
    title: "Data Analyst with Power BI",
    source: "DataCamp track, 2024",
    description:
      "Completed a comprehensive track on DataCamp covering essential data visualization methods and practices with Power BI, along with DAX, dashboards, and reports — 50+ hours.",
    href: "https://www.datacamp.com/completed/statement-of-accomplishment/track/86ebddbd98be7c91ac20848a6f8a710ac6da9962",
  },
  {
    title: "Associate Data Scientist",
    source: "DataCamp track, 2023",
    description:
      "Completed a comprehensive track on DataCamp covering essential data science skills, including Python, R, SQL, and machine learning — 80+ hours.",
    href: "https://www.datacamp.com/completed/statement-of-accomplishment/track/a13939fcc9e7b3ce37c30d1455579d1e7f40dfd2",
  },
  {
    title: "Data Analyst",
    source: "DataCamp track, 2023",
    description:
      "Completed a comprehensive track on DataCamp covering essential data science skills, including Python, R, data literacy, and visualizations — 30+ hours.",
    href: "https://www.datacamp.com/completed/statement-of-accomplishment/track/e21801983883725c8b8e6f9d0cbc00cb1df26ced",
  },
]

export function Achievements() {
  return (
    <AnimatedSection id="achievements" className="scroll-mt-20 py-16">
      <SectionHeading icon={Award} title="Achievements & Awards" />
      <div className="grid gap-5 md:grid-cols-2">
        {achievements.map((a) => (
          <GlowCard key={a.title} accent>
            <CardHeader>
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <CardTitle className="text-base leading-snug">{a.title}</CardTitle>
                  <CardDescription className="mt-1">{a.source}</CardDescription>
                </div>
                <Award className="h-5 w-5 shrink-0 text-primary/70" />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm leading-relaxed text-muted-foreground">{a.description}</p>
              <Button size="sm" variant="outline" asChild>
                <a
                  href={a.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>View Accomplishment</span>
                </a>
              </Button>
            </CardContent>
          </GlowCard>
        ))}
      </div>
    </AnimatedSection>
  )
}
