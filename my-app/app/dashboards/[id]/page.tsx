import { Navigation } from "@/components/navigation"
import { DashboardEmbed } from "@/components/dashboard-embed"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Eye, TrendingUp, Target } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

const dashboards = [
  {
    id: "sales-performance",
    title: "Sales Performance Analytics",
    description:
      "Comprehensive sales dashboard tracking revenue, conversion rates, and team performance across regions.",
    category: "Sales & Marketing",
    challenge:
      "Sales team lacked visibility into performance metrics and couldn't identify bottlenecks in the sales funnel.",
    solution:
      "Built comprehensive dashboard integrating Salesforce data with real-time performance tracking and predictive analytics.",
    keyFeatures: [
      "Real-time revenue tracking across all sales channels",
      "Sales funnel analysis with conversion rate optimization",
      "Territory and rep performance comparison",
      "Predictive forecasting with confidence intervals",
      "Customer acquisition cost and lifetime value metrics",
    ],
    businessImpact: [
      "Increased sales team productivity by 35%",
      "Improved forecast accuracy from 72% to 91%",
      "Reduced sales cycle length by 18 days",
      "Identified $2.3M in additional revenue opportunities",
    ],
    metrics: [
      { label: "Revenue Growth", value: "+23%", icon: TrendingUp },
      { label: "Conversion Rate", value: "4.2%", icon: Target },
      { label: "Sales Cycle", value: "-18 days", icon: TrendingUp },
      { label: "Forecast Accuracy", value: "91%", icon: Target },
    ],
    tools: ["Tableau", "Salesforce", "SQL", "Python"],
    image: "/sales-performance-tableau-dashboard.jpg",
    embedUrl: "https://public.tableau.com/views/SalesPerformance/Dashboard1?:embed=yes&:display_count=yes",
    liveUrl: "https://public.tableau.com/views/SalesPerformance/Dashboard1",
    views: 15420,
  },
  // Add other dashboards here...
]

interface DashboardDetailPageProps {
  params: {
    id: string
  }
}

export default function DashboardDetailPage({ params }: DashboardDetailPageProps) {
  const dashboard = dashboards.find((d) => d.id === params.id)

  if (!dashboard) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="ghost" asChild>
              <Link href="/dashboards">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Gallery
              </Link>
            </Button>
          </div>

          {/* Header */}
          <div className="space-y-6 mb-12">
            <div className="space-y-4">
              <Badge variant="secondary">{dashboard.category}</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-balance">{dashboard.title}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">{dashboard.description}</p>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                <span>{dashboard.views?.toLocaleString()} views</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              {dashboard.liveUrl && (
                <Button asChild>
                  <Link href={dashboard.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live Dashboard
                  </Link>
                </Button>
              )}
            </div>
          </div>

          {/* Live Dashboard Embed */}
          {dashboard.embedUrl && (
            <div className="mb-12">
              <DashboardEmbed
                title="Interactive Dashboard"
                embedUrl={dashboard.embedUrl}
                liveUrl={dashboard.liveUrl}
                description="Explore the live dashboard below. Use the full screen option for the best experience."
              />
            </div>
          )}

          {/* Impact Metrics */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {dashboard.metrics.map((metric, index) => (
              <Card key={index}>
                <CardContent className="flex items-center gap-4 p-6">
                  <metric.icon className="h-8 w-8 text-chart-1 flex-shrink-0" />
                  <div>
                    <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Challenge */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Business Challenge</h2>
                <p className="text-muted-foreground leading-relaxed">{dashboard.challenge}</p>
              </section>

              {/* Solution */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Solution Approach</h2>
                <p className="text-muted-foreground leading-relaxed">{dashboard.solution}</p>
              </section>

              {/* Tools */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Tools & Technologies</h2>
                <div className="flex flex-wrap gap-3">
                  {dashboard.tools.map((tool) => (
                    <Badge key={tool} variant="secondary" className="px-3 py-1">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Key Features */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Key Features</h2>
                <ul className="space-y-3">
                  {dashboard.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-chart-1 mr-2 flex-shrink-0">•</span>
                      <span className="text-muted-foreground leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Business Impact */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Business Impact</h2>
                <ul className="space-y-3">
                  {dashboard.businessImpact.map((impact, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-chart-2 mr-2 flex-shrink-0">→</span>
                      <span className="text-muted-foreground leading-relaxed">{impact}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          {/* Screenshot */}
          <div className="mt-12">
            <div className="aspect-video relative overflow-hidden rounded-lg">
              <Image src={dashboard.image || "/placeholder.svg"} alt={dashboard.title} fill className="object-cover" />
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center space-y-6 p-8 bg-secondary/50 rounded-lg">
            <h3 className="text-xl font-semibold text-foreground">Need a similar dashboard for your business?</h3>
            <p className="text-muted-foreground">
              Let's discuss how custom analytics can transform your decision-making.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Start a Project</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
