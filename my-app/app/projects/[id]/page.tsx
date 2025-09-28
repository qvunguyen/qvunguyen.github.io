import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Github, TrendingUp, DollarSign, Users, Target } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

// This would typically come from a database or CMS
const projects = [
  {
    id: "customer-churn-prediction",
    title: "Customer Churn Prediction Model",
    category: "SaaS",
    description:
      "Built machine learning model to predict customer churn with 94% accuracy, enabling proactive retention strategies.",
    challenge:
      "TechFlow SaaS was experiencing a concerning 15% monthly churn rate, significantly impacting revenue growth and customer lifetime value. The company lacked visibility into which customers were at risk of churning and had no systematic approach to retention.",
    methodology: [
      "Collected and cleaned 18 months of customer data including usage patterns, support tickets, billing history, and engagement metrics",
      "Performed exploratory data analysis to identify key churn indicators and feature engineering",
      "Tested multiple algorithms including Random Forest, XGBoost, and Neural Networks",
      "Implemented ensemble model combining top-performing algorithms with 94% accuracy",
      "Built automated scoring pipeline to identify at-risk customers daily",
    ],
    solution:
      "Developed a comprehensive churn prediction system that analyzes customer behavior patterns, usage trends, and engagement metrics. The model identifies customers with high churn probability 30 days in advance, enabling proactive retention campaigns.",
    keyFindings: [
      "Customers with declining usage in the first 30 days had 3x higher churn probability",
      "Support ticket volume was a strong predictor, but resolution time was even more critical",
      "Feature usage breadth was more predictive than depth for long-term retention",
      "Payment method and billing frequency significantly impacted churn likelihood",
    ],
    businessRecommendations: [
      "Implement early warning system for new customers with declining engagement",
      "Prioritize support ticket resolution time over volume metrics",
      "Create onboarding program focused on feature adoption breadth",
      "Offer flexible billing options to reduce payment-related churn",
    ],
    impact: [
      { metric: "Churn Reduction", value: "23%", icon: TrendingUp },
      { metric: "Revenue Saved", value: "$800K", icon: DollarSign },
      { metric: "Customers Retained", value: "1,200+", icon: Users },
      { metric: "Model Accuracy", value: "94%", icon: Target },
    ],
    tools: ["Python", "Scikit-learn", "Tableau", "SQL", "AWS"],
    images: ["/churn-prediction-model-results-dashboard.jpg", "/customer-segmentation-analysis-chart.jpg", "/feature-importance-visualization.jpg"],
    githubUrl: "https://github.com/sarahchen/churn-prediction",
    liveUrl: "https://churn-dashboard.example.com",
  },
  // Add other projects here...
]

interface ProjectDetailPageProps {
  params: {
    id: string
  }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="ghost" asChild>
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </div>

          {/* Header */}
          <div className="space-y-6 mb-12">
            <div className="space-y-4">
              <Badge variant="secondary">{project.category}</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-balance">{project.title}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">{project.description}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              {project.liveUrl && (
                <Button asChild>
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live Dashboard
                  </Link>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" asChild>
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Link>
                </Button>
              )}
            </div>
          </div>

          {/* Hero Image */}
          <div className="aspect-video relative overflow-hidden rounded-lg mb-12">
            <Image src={project.images[0] || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>

          {/* Impact Metrics */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {project.impact.map((metric, index) => (
              <Card key={index}>
                <CardContent className="flex items-center gap-4 p-6">
                  <metric.icon className="h-8 w-8 text-chart-1 flex-shrink-0" />
                  <div>
                    <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                    <p className="text-sm text-muted-foreground">{metric.metric}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Challenge */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Challenge & Objectives</h2>
              <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
            </section>

            {/* Methodology */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Data & Methodology</h2>
              <ul className="space-y-3">
                {project.methodology.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-chart-1 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </span>
                    <span className="text-muted-foreground leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Key Findings */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Key Findings & Insights</h2>
              <ul className="space-y-3">
                {project.keyFindings.map((finding, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-chart-1 mr-2 flex-shrink-0">•</span>
                    <span className="text-muted-foreground leading-relaxed">{finding}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Business Recommendations */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Business Recommendations</h2>
              <ul className="space-y-3">
                {project.businessRecommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-chart-2 mr-2 flex-shrink-0">→</span>
                    <span className="text-muted-foreground leading-relaxed">{rec}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Tools & Technologies */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Tools & Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.tools.map((tool) => (
                  <Badge key={tool} variant="secondary" className="px-3 py-1">
                    {tool}
                  </Badge>
                ))}
              </div>
            </section>
          </div>

          {/* Additional Images */}
          {project.images.length > 1 && (
            <div className="mt-12 space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">Additional Visualizations</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-video relative overflow-hidden rounded-lg">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} visualization ${index + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 text-center space-y-6 p-8 bg-secondary/50 rounded-lg">
            <h3 className="text-xl font-semibold text-foreground">Interested in similar analysis for your business?</h3>
            <p className="text-muted-foreground">Let's discuss how data analytics can drive your business forward.</p>
            <Button asChild size="lg">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
