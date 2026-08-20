import { SectionHeading } from "@/components/section-heading"

const interests = ["Machine Learning", "AI", "LLMs", "Vibe Coding", "Automation"]

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-16">
      <SectionHeading number="01" title="About" />
      <div className="grid gap-10 md:grid-cols-[1.6fr_1fr]">
        <div className="max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            I am an AI/ML Engineer and Data Science professional currently pursuing a Masters of
            Artificial Intelligence at the University of Technology Sydney (UTS). My journey began
            at FAST-NUCES Lahore, where I developed a fascination for transforming raw data into
            actionable intelligence.
          </p>
          <p>
            Recently, I have focused on the cutting edge of Generative AI, successfully deploying
            over five RAG systems and building multimodal applications that bridge the gap between
            Computer Vision and NLP. I thrive at the intersection of innovation and efficiency where
            I&apos;m fine-tuning a model to 95% accuracy or building automation workflows that
            reduce manual labor by 90%.
          </p>
          <p>
            When I&apos;m not in the IDE, you&apos;ll likely find me hiking around New South Wales,
            hunting for Sydney&apos;s best espresso, or experimenting with new recipes in the
            kitchen.
          </p>
        </div>

        <dl className="space-y-5 text-sm">
          <div>
            <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Based in
            </dt>
            <dd className="mt-1">Sydney, Australia</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Currently
            </dt>
            <dd className="mt-1">M.S. Artificial Intelligence @ UTS</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Building
            </dt>
            <dd className="mt-1">
              <a
                href="https://loxa.dev"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-primary"
              >
                Loxa
              </a>{" "}
              <span className="text-muted-foreground">
                — an open-source local AI node
              </span>
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Interests
            </dt>
            <dd className="mt-1 text-muted-foreground">{interests.join(" · ")}</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
