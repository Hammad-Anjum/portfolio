import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
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
    title: "AI Engineer for Data Scientists",
    provider: "DataCamp",
    image: "/AI-data.png",
    alt: "AI Engineer for Data Scientists exam",
    description:
      "Covered deep learning, model deployment, and AI engineering with TensorFlow, PyTorch, HuggingFace, and Ollama.",
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
    title: "Data Scientist",
    provider: "DataCamp",
    image: "/DS - Twitter.png",
    alt: "Data Scientist exam",
    description:
      "Covered statistical analysis, machine learning, and data visualization in Python with SQL fundamentals.",
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
    title: "Data Analyst Associate",
    provider: "DataCamp",
    image: "/DA Associate - Twitter.png",
    alt: "Data Analyst Associate exam",
    description:
      "Data manipulation, visualization, and exploratory analysis with Python and SQL.",
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
    <section id="exams" className="scroll-mt-20 py-16">
      <SectionHeading number="08" title="Exams" />
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {exams.map((e) => (
          <li
            key={e.title}
            className="group flex flex-col gap-4 rounded-lg border border-border/70 bg-card/30 p-5 transition-colors hover:border-foreground/30"
          >
            <a
              href={e.certificateHref}
              target="_blank"
              rel="noreferrer"
              className="relative block aspect-[16/10] overflow-hidden rounded-md border border-border/60 bg-secondary/20"
              aria-label={e.title}
            >
              <Image src={assetPath(e.image)} alt={e.alt} fill className="object-cover" />
            </a>
            <div className="flex flex-1 flex-col gap-3">
              <h3 className="text-base font-semibold tracking-tight">
                <a
                  href={e.certificateHref}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  {e.title}
                </a>{" "}
                <span className="font-normal text-muted-foreground">· {e.provider}</span>
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{e.description}</p>
              <p className="font-mono text-xs leading-relaxed text-muted-foreground/80">
                {e.topics.join("  ·  ")}
              </p>
              <div className="flex items-center gap-5 pt-1 text-sm">
                <a
                  href={e.certificateHref}
                  target="_blank"
                  rel="noreferrer"
                  className="group/link inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
                >
                  Certificate
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
                <a
                  href={e.projectHref}
                  target="_blank"
                  rel="noreferrer"
                  className="group/link inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
                >
                  Project
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
