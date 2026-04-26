import Image from "next/image"
import { Award, ExternalLink } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { SectionHeading } from "@/components/section-heading"
import { GlowCard } from "@/components/ui/glow-card"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { assetPath } from "@/lib/utils"

type Exam = {
  title: string
  provider: string
  image: string
  alt: string
  description: string
  topics: string[]
  certificateHref: string
  projectHref: string
}

const exams: Exam[] = [
  {
    title: "AI Engineer for Data Scientists Exam",
    provider: "DataCamp Certification Exam",
    image: "/AI-data.png",
    alt: "AI Engineer for Data Scientists Exam",
    description:
      "Completed the AI Engineer for Data Scientists certification exam covering deep learning, model deployment, and AI engineering concepts.",
    topics: [
      "Deep Learning",
      "Model Deployment",
      "MLOps",
      "TensorFlow",
      "PyTorch",
      "HuggingFace",
      "Ollama",
    ],
    certificateHref: "https://www.datacamp.com/certificate/AEDS0014706321482",
    projectHref:
      "https://github.com/Hammad-Anjum/DataCamp-projects/tree/master/AI%20Engineer%20for%20Data%20Scientists%20Associate%20Exam",
  },
  {
    title: "Data Scientist Exam",
    provider: "DataCamp Certification Exam",
    image: "/DS - Twitter.png",
    alt: "Data Scientist Exam",
    description:
      "Completed the Data Scientist certification exam covering statistical analysis, machine learning, and data visualization.",
    topics: [
      "Machine Learning",
      "Statistics",
      "Data Visualization",
      "Python",
      "SQL",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "SciPy",
    ],
    certificateHref: "https://www.datacamp.com/certificate/DS0027319922812",
    projectHref:
      "https://github.com/Hammad-Anjum/DataCamp-projects/tree/master/Data%20Scientist%20Professional%20Exam",
  },
  {
    title: "Data Analyst Associate Exam",
    provider: "DataCamp Certification Exam",
    image: "/DA Associate - Twitter.png",
    alt: "Data Analyst Associate Exam",
    description:
      "Completed the Data Analyst Associate certification exam covering data manipulation, visualization, and exploratory analysis.",
    topics: [
      "Data Cleaning",
      "Exploratory Analysis",
      "Data Visualization",
      "Pandas",
      "Seaborn",
      "Matplotlib",
      "SQL",
      "Python",
    ],
    certificateHref: "https://www.datacamp.com/certificate/DAA0016430756652",
    projectHref:
      "https://github.com/Hammad-Anjum/DataCamp-projects/tree/master/Data%20Analyst%20Associate%20Exam",
  },
]

export function Exams() {
  return (
    <AnimatedSection id="exams" className="scroll-mt-20 py-16">
      <SectionHeading icon={Award} title="Exams" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {exams.map((e) => (
          <GlowCard key={e.title} className="group flex h-full flex-col overflow-hidden">
            <div className="relative aspect-video overflow-hidden bg-secondary/20">
              <Image
                src={assetPath(e.image)}
                alt={e.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-60" />
            </div>
            <CardHeader>
              <CardTitle className="text-base leading-snug">{e.title}</CardTitle>
              <CardDescription>{e.provider}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col justify-between space-y-4">
              <p className="text-sm text-muted-foreground">{e.description}</p>
              <div className="space-y-4">
                <div>
                  <h4 className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Topics Covered
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {e.topics.map((t) => (
                      <Badge
                        key={t}
                        variant="outline"
                        className="border-border/60 bg-secondary/30 text-xs transition hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href={e.certificateHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Certificate</span>
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href={e.projectHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Project</span>
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </GlowCard>
        ))}
      </div>
    </AnimatedSection>
  )
}
