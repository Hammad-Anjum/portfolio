"use client"

import { useEffect, useState } from "react"
import { ChevronUp, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteFooter() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <footer className="border-t border-border/60 py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Hammad Anjum. Built with Next.js & Tailwind.
          </p>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://drive.google.com/file/d/1lT2BK-eIPg9xALYxe8sE1lS2EjzI0qM0/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1"
              >
                <Download className="h-4 w-4" />
                <span>Download Resume</span>
              </a>
            </Button>
          </div>
        </div>
      </footer>

      <a
        href="#hero"
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 bg-background/80 text-primary backdrop-blur-md shadow-[0_0_25px_-8px_hsl(var(--primary)/0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground ${
          showTop ? "opacity-100 translate-y-0" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ChevronUp className="h-5 w-5" />
      </a>
    </>
  )
}
