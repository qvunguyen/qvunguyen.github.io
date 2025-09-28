import { Navigation } from "@/components/navigation"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { Button } from "@/components/ui/button"
import { Download, GraduationCap, Award } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="space-y-6 mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-balance">About Me</h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              I'm a passionate data analyst with 5+ years of experience transforming complex datasets into actionable
              business insights. My journey began in economics and evolved into a love for uncovering stories hidden in
              data.
            </p>
          </div>

          {/* Story Section */}
          <div className="space-y-8 mb-16">
            <h2 className="text-2xl font-semibold text-foreground">My Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
              <p>
                My fascination with data began during my economics degree at UC Berkeley, where I discovered the power
                of statistical analysis to reveal market trends and consumer behavior patterns. What started as academic
                curiosity quickly became a career passion.
              </p>
              <p>
                After graduating, I transitioned from traditional economic research to business analytics, where I could
                see the immediate impact of data-driven decisions. I've had the privilege of working with companies
                ranging from fast-growing startups to Fortune 500 enterprises, each presenting unique analytical
                challenges.
              </p>
              <p>
                Today, I specialize in bridging the gap between complex data and business strategy. I believe the best
                insights come from combining technical rigor with deep business understanding, always keeping the end
                user and business impact in mind.
              </p>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-chart-1" />
                <h2 className="text-2xl font-semibold text-foreground">Education</h2>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Master of Science in Data Science</h3>
                  <p className="text-muted-foreground">Stanford University • 2019</p>
                  <p className="text-sm text-muted-foreground">
                    Specialization in Machine Learning and Statistical Modeling
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Bachelor of Arts in Economics</h3>
                  <p className="text-muted-foreground">UC Berkeley • 2017</p>
                  <p className="text-sm text-muted-foreground">Magna Cum Laude, Phi Beta Kappa</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-chart-2" />
                <h2 className="text-2xl font-semibold text-foreground">Certifications</h2>
              </div>
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground">Tableau Desktop Certified Professional</h3>
                  <p className="text-sm text-muted-foreground">Tableau • 2023</p>
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground">Google Analytics Individual Qualification</h3>
                  <p className="text-sm text-muted-foreground">Google • 2022</p>
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground">AWS Certified Cloud Practitioner</h3>
                  <p className="text-sm text-muted-foreground">Amazon Web Services • 2022</p>
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground">Microsoft Power BI Data Analyst Associate</h3>
                  <p className="text-sm text-muted-foreground">Microsoft • 2021</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8 mb-16">
            <h2 className="text-2xl font-semibold text-foreground">Professional Experience</h2>
            <ExperienceTimeline />
          </div>

          {/* CTA */}
          <div className="text-center space-y-6">
            <p className="text-lg text-muted-foreground">Ready to discuss how data can drive your business forward?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Get In Touch</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/resume">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
