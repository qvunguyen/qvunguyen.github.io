import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">Sarah Chen</h1>
              <p className="text-xl sm:text-2xl text-muted-foreground font-medium">Data Analyst</p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                I transform complex data into actionable business insights through advanced analytics, compelling
                visualizations, and strategic recommendations that drive measurable results.
              </p>
            </div>

            {/* Key Skills Overview */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Core Expertise</p>
              <div className="flex flex-wrap gap-3">
                {["Python", "SQL", "Tableau", "Power BI", "Excel", "R", "Statistical Analysis"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="group">
                <Link href="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/resume">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <Link
                href="https://linkedin.com/in/sarahchen"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/sarahchen"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:sarah@example.com"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto lg:max-w-none">
              {/* Professional Photo Placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                <img
                  src="/professional-headshot-of-data-analyst.jpg"
                  alt="Sarah Chen - Data Analyst"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Floating Data Visualization Elements */}
              <div className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-chart-1 rounded-full"></div>
                  <span className="text-sm font-medium">95% Accuracy</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-chart-2 rounded-full"></div>
                  <span className="text-sm font-medium">$2M+ Impact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
