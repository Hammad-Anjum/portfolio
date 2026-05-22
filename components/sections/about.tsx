import { MapPin, User } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { SectionHeading } from "@/components/section-heading"
import { GlowCard } from "@/components/ui/glow-card"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const interests = ["Machine Learning", "AI", "LLMs", "Vibe Coding", "Automation"]

export function About() {
  return (
    <AnimatedSection id="about" className="scroll-mt-20 py-16">
      <SectionHeading icon={User} title="About Me" />
      <div className="grid gap-8 md:grid-cols-3">
        <div className="space-y-4 leading-relaxed text-muted-foreground md:col-span-2">
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
            I&apos;m fine-tuning a model to 95% accuracy or building automation workflows
            that reduce manual labor by 90%.
          </p>
          <p>
            When I&apos;m not in the IDE, you&apos;ll likely find me hiking around New South Wales,
            hunting for Sydney&apos;s best espresso, or experimenting with new recipes in the
            kitchen.
          </p>
        </div>

        <GlowCard accent>
          <CardHeader>
            <CardTitle className="text-lg">Quick Info</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5 text-sm">
            <div>
              <span className="font-medium">Location</span>
              <div className="mt-1 flex items-center gap-1.5 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Sydney, Australia</span>
              </div>
            </div>
            <div>
              <span className="font-medium">Education</span>
              <div className="mt-1 text-muted-foreground">M.S. Artificial Intelligence</div>
            </div>
            <div>
              <span className="font-medium">Interests</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {interests.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="transition hover:scale-105 hover:bg-primary/15 hover:text-primary"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </GlowCard>
      </div>
    </AnimatedSection>
  )
}
