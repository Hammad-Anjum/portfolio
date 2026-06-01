export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="container flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} Hammad Anjum</p>
        <p className="font-mono">Built with Next.js · Tailwind</p>
      </div>
    </footer>
  )
}
