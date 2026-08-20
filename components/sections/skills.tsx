import { SectionHeading } from "@/components/section-heading"

type SkillGroup = {
  title: string
  items: string[]
}

const groups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Python", "TypeScript", "Swift", "Rust", "C++", "SQL", "R", "HTML/CSS"],
  },
  {
    title: "ML / AI",
    items: [
      "HuggingFace",
      "LangChain",
      "OpenAI",
      "Scikit-Learn",
      "TensorFlow",
      "PyTorch",
      "NLTK",
      "OpenCV",
      "Ollama",
      "MLX",
      "LangGraph",
    ],
  },
  {
    title: "Data & infra",
    items: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Pinecone",
      "ChromaDB",
      "FAISS",
      "Supabase",
    ],
  },
  {
    title: "Web & app",
    items: [
      "Next.js",
      "React",
      "Node.js",
      "Fastify",
      "Express",
      "Tailwind CSS",
      "shadcn/ui",
      "SwiftUI",
    ],
  },
  {
    title: "Tools",
    items: [
      "Git & GitHub",
      "AWS",
      "Google Cloud",
      "CI/CD",
      "Docker",
      "Streamlit",
      "Gradio",
      "Flask",
      "Weights & Biases",
    ],
  },
  {
    title: "Automation",
    items: [
      "UiPath",
      "n8n",
      "Selenium",
      "Power Automate",
      "Zoho",
      "HubSpot",
      "Airtable",
      "App Scripts",
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-16">
      <SectionHeading number="06" title="Skills" />
      <dl className="divide-y divide-border/60">
        {groups.map((g) => (
          <div
            key={g.title}
            className="grid gap-3 py-5 md:grid-cols-[160px_1fr] md:gap-10"
          >
            <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {g.title}
            </dt>
            <dd className="text-sm leading-relaxed">{g.items.join("  ·  ")}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
