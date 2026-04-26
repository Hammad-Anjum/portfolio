import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Hammad Anjum | AI / ML Engineer",
  description: "Personal portfolio of Hammad Anjum — AI/ML Engineer, Automation Engineer, and Data Scientist based in Sydney.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div
            aria-hidden
            className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,hsl(var(--primary)/0.12),transparent_60%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none fixed inset-0 -z-10 [background-image:linear-gradient(to_right,hsl(var(--border)/0.35)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.35)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
