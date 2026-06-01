import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { SiDatacamp } from "react-icons/si"
import { SectionHeading } from "@/components/section-heading"
import ContactForm from "@/components/contact-form"

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-16">
      <SectionHeading number="09" title="Contact" />

      <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
        <div className="space-y-5">
          <p className="text-base leading-relaxed text-muted-foreground">
            I&apos;m open to AI/ML, automation, and data science roles, hackathons, or just a chat
            about anything interesting. The fastest way to reach me is email.
          </p>

          <dl className="space-y-4 text-sm">
            <div className="flex items-baseline gap-3">
              <dt className="w-20 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Email
              </dt>
              <dd>
                <a
                  href="mailto:hammad95632@gmail.com"
                  className="group inline-flex items-center gap-1 transition-colors hover:text-primary"
                >
                  hammad95632@gmail.com
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </dd>
            </div>
            <div className="flex items-baseline gap-3">
              <dt className="w-20 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Based in
              </dt>
              <dd className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                Sydney, Australia
              </dd>
            </div>
          </dl>

          <div className="flex items-center gap-5 pt-2 text-muted-foreground">
            <a
              href="https://github.com/Hammad-Anjum"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/hammad6271"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:hammad95632@gmail.com"
              aria-label="Email"
              className="transition-colors hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://www.datacamp.com/portfolio/Hammad-Anjum"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DataCamp"
              className="transition-colors hover:text-foreground"
            >
              <SiDatacamp className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
