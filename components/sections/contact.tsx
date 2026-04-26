import { Github, Linkedin, Mail, MapPin, MessageSquare } from "lucide-react"
import { SiDatacamp } from "react-icons/si"
import { AnimatedSection } from "@/components/animated-section"
import { SectionHeading } from "@/components/section-heading"
import { GlowCard } from "@/components/ui/glow-card"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact-form"

export function Contact() {
  return (
    <AnimatedSection id="contact" className="scroll-mt-20 py-16">
      <SectionHeading icon={MessageSquare} title="Contact" />
      <div className="grid gap-6 md:grid-cols-2">
        <GlowCard accent>
          <CardHeader>
            <CardTitle className="text-lg">Get in Touch</CardTitle>
            <CardDescription>
              Fill out the form and I&apos;ll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </GlowCard>

        <GlowCard accent>
          <CardHeader>
            <CardTitle className="text-lg">Contact Information</CardTitle>
            <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <a
                  href="mailto:hammad95632@gmail.com"
                  className="text-sm text-muted-foreground transition hover:text-primary"
                >
                  hammad95632@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Sydney, Australia</span>
              </div>
            </div>

            <div className="pt-2">
              <h3 className="mb-3 text-sm font-medium">Connect with me</h3>
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="transition hover:-translate-y-0.5 hover:border-[#0a66c2]/60 hover:text-[#0a66c2] hover:shadow-[0_0_18px_-4px_rgba(10,102,194,0.55)]"
                >
                  <a
                    href="https://linkedin.com/in/hammad6271"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="transition hover:-translate-y-0.5 hover:border-foreground/60 hover:shadow-[0_0_18px_-4px_hsl(var(--foreground)/0.4)]"
                >
                  <a
                    href="https://github.com/Hammad-Anjum"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="transition hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary hover:shadow-[0_0_18px_-4px_hsl(var(--primary)/0.55)]"
                >
                  <a
                    href="https://www.datacamp.com/portfolio/Hammad-Anjum"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="DataCamp"
                  >
                    <SiDatacamp className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="transition hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary hover:shadow-[0_0_18px_-4px_hsl(var(--primary)/0.55)]"
                >
                  <a
                    href="https://www.datacamp.com/portfolio/hammad9"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="DataCamp (alt)"
                  >
                    <SiDatacamp className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </GlowCard>
      </div>
    </AnimatedSection>
  )
}
