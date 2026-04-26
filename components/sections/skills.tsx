import {
  Bot,
  Braces,
  Code,
  Database,
  Layers,
  Wrench,
  type LucideIcon,
} from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { SectionHeading } from "@/components/section-heading"
import { GlowCard } from "@/components/ui/glow-card"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type SkillGroup = {
  title: string
  icon: LucideIcon
  items: string[]
}

const technicalGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    icon: Braces,
    items: ["Python", "C++", "HTML/CSS", "SQL", "R"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    items: [
      "HuggingFace",
      "LangChain",
      "OpenAI",
      "Scikit-Learn",
      "TensorFlow",
      "PyTorch",
      "NLTK",
      "NumPy",
      "Pandas",
      "Seaborn",
      "Matplotlib",
      "Flask",
      "Selenium",
      "BeautifulSoup",
      "OpenCV",
      "Ollama",
      "GradioUI",
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    items: [
      "Git & GitHub",
      "AWS",
      "CI/CD",
      "Google Cloud",
      "Weights & Biases",
      "Pinecone",
      "ChromaDB",
      "Streamlit",
      "GradioUI",
      "Tensorboard",
    ],
  },
  {
    title: "Automation & RPA",
    icon: Bot,
    items: [
      "UiPath",
      "Power Automate",
      "n8n",
      "Zoho",
      "Airtable",
      "HubSpot",
      "Selenium",
      "App Scripts",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "MySQL"],
  },
]

const softSkills = [
  {
    title: "Communication",
    body: "Excellent written and verbal communication skills. Experienced in presenting technical concepts to both technical and non-technical audiences. Skilled in documentation and technical writing.",
  },
  {
    title: "Problem Solving",
    body: "Strong analytical thinking and creative problem-solving abilities. Capable of breaking down complex problems into manageable components and developing effective solutions.",
  },
  {
    title: "Teamwork",
    body: "Collaborative team player with experience working in diverse groups. Comfortable giving and receiving feedback, and adapting to different team dynamics and work styles.",
  },
  {
    title: "Time Management",
    body: "Excellent at prioritizing tasks, meeting deadlines, and managing multiple projects simultaneously. Experienced with agile methodologies and project management tools.",
  },
]

export function Skills() {
  return (
    <AnimatedSection id="skills" className="scroll-mt-20 py-16">
      <SectionHeading icon={Code} title="Skills" />

      <Tabs defaultValue="technical" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
          <TabsTrigger value="technical">Technical</TabsTrigger>
          <TabsTrigger value="soft">Soft Skills</TabsTrigger>
        </TabsList>

        <TabsContent value="technical" className="mt-6">
          <div className="grid gap-5 md:grid-cols-2">
            {technicalGroups.map(({ title, icon: Icon, items }) => (
              <GlowCard key={title}>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <CardTitle className="text-base">{title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <Badge
                        key={item}
                        variant="secondary"
                        className="bg-secondary/60 transition hover:scale-105 hover:bg-primary/15 hover:text-primary"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </GlowCard>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="soft" className="mt-6">
          <div className="grid gap-5 md:grid-cols-2">
            {softSkills.map((s) => (
              <GlowCard key={s.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{s.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </CardContent>
              </GlowCard>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </AnimatedSection>
  )
}
