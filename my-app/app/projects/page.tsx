"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { ProjectFilter } from "@/components/project-filter"
import { ProjectCard } from "@/components/project-card"
import { TrendingUp, DollarSign, Users, Clock, Target, Zap } from "lucide-react"

const projects = [
  {
    id: "customer-churn-prediction",
    title: "Customer Churn Prediction Model",
    category: "SaaS",
    description:
      "Built machine learning model to predict customer churn with 94% accuracy, enabling proactive retention strategies.",
    challenge: "High customer churn rate of 15% monthly was impacting revenue growth and customer lifetime value.",
    solution:
      "Developed ensemble model using customer behavior, usage patterns, and engagement metrics to predict churn probability.",
    impact: [
      { metric: "Churn Reduction", value: "23%", icon: TrendingUp },
      { metric: "Revenue Saved", value: "$800K", icon: DollarSign },
      { metric: "Customers Retained", value: "1,200+", icon: Users },
      { metric: "Model Accuracy", value: "94%", icon: Target },
    ],
    tools: ["Python", "Scikit-learn", "Tableau", "SQL", "AWS"],
    image: "/customer-churn-prediction-dashboard.jpg",
    githubUrl: "https://github.com/sarahchen/churn-prediction",
    liveUrl: "https://churn-dashboard.example.com",
    featured: true,
  },
  {
    id: "sales-performance-optimization",
    title: "Sales Performance Optimization",
    category: "E-commerce",
    description:
      "Comprehensive analysis of sales data to identify growth opportunities and optimize marketing spend across channels.",
    challenge: "Declining conversion rates and unclear ROI attribution across multiple marketing channels.",
    solution:
      "Built attribution model and cohort analysis to optimize marketing spend and improve sales funnel performance.",
    impact: [
      { metric: "Conversion Rate", value: "+18%", icon: TrendingUp },
      { metric: "Marketing ROI", value: "3.2x", icon: DollarSign },
      { metric: "Revenue Growth", value: "$2.1M", icon: DollarSign },
      { metric: "Time to Insight", value: "75% faster", icon: Clock },
    ],
    tools: ["Tableau", "Google Analytics", "SQL", "Python", "Excel"],
    image: "/sales-performance-dashboard-with-charts.jpg",
    githubUrl: "https://github.com/sarahchen/sales-optimization",
    liveUrl: "https://sales-dashboard.example.com",
  },
  {
    id: "supply-chain-analytics",
    title: "Supply Chain Analytics Platform",
    category: "Manufacturing",
    description:
      "Real-time analytics platform for supply chain optimization, reducing costs and improving delivery times.",
    challenge:
      "Manual reporting processes and lack of visibility into supply chain bottlenecks causing delays and cost overruns.",
    solution:
      "Automated ETL pipeline and real-time dashboard providing end-to-end supply chain visibility and predictive insights.",
    impact: [
      { metric: "Cost Reduction", value: "$1.5M", icon: DollarSign },
      { metric: "Delivery Time", value: "-30%", icon: Clock },
      { metric: "Inventory Efficiency", value: "+25%", icon: TrendingUp },
      { metric: "Reporting Speed", value: "90% faster", icon: Zap },
    ],
    tools: ["Power BI", "SQL Server", "Python", "Azure", "SAP"],
    image: "/supply-chain-analytics-dashboard.png",
    githubUrl: "https://github.com/sarahchen/supply-chain-analytics",
  },
  {
    id: "marketing-attribution-model",
    title: "Multi-Touch Attribution Model",
    category: "Marketing",
    description:
      "Advanced attribution modeling to understand true marketing channel performance and optimize budget allocation.",
    challenge: "Last-click attribution was undervaluing upper-funnel marketing efforts and misallocating budget.",
    solution:
      "Implemented data-driven attribution model using Markov chains to properly credit all touchpoints in customer journey.",
    impact: [
      { metric: "Budget Efficiency", value: "+35%", icon: TrendingUp },
      { metric: "Attribution Accuracy", value: "89%", icon: Target },
      { metric: "Campaign ROI", value: "+42%", icon: DollarSign },
      { metric: "Channels Optimized", value: "12", icon: Users },
    ],
    tools: ["R", "Google Analytics", "Tableau", "BigQuery", "Python"],
    image: "/marketing-attribution-model-visualization.jpg",
    githubUrl: "https://github.com/sarahchen/attribution-model",
    featured: true,
  },
  {
    id: "financial-fraud-detection",
    title: "Financial Fraud Detection System",
    category: "Fintech",
    description:
      "Real-time fraud detection system using anomaly detection and machine learning to prevent financial losses.",
    challenge:
      "Increasing fraud attempts causing $500K monthly losses with high false positive rates in existing system.",
    solution:
      "Developed ensemble model combining supervised and unsupervised learning with real-time scoring and alerting.",
    impact: [
      { metric: "Fraud Reduction", value: "87%", icon: TrendingUp },
      { metric: "False Positives", value: "-60%", icon: Target },
      { metric: "Losses Prevented", value: "$3.2M", icon: DollarSign },
      { metric: "Detection Speed", value: "<100ms", icon: Zap },
    ],
    tools: ["Python", "TensorFlow", "Kafka", "PostgreSQL", "Docker"],
    image: "/fraud-detection-system-dashboard.jpg",
    githubUrl: "https://github.com/sarahchen/fraud-detection",
  },
  {
    id: "healthcare-outcomes-analysis",
    title: "Healthcare Outcomes Analysis",
    category: "Healthcare",
    description:
      "Statistical analysis of patient outcomes to identify factors improving treatment effectiveness and reducing costs.",
    challenge: "Hospital needed to improve patient outcomes while reducing treatment costs and length of stay.",
    solution:
      "Analyzed patient data to identify key factors affecting outcomes and developed predictive models for treatment optimization.",
    impact: [
      { metric: "Patient Outcomes", value: "+22%", icon: TrendingUp },
      { metric: "Cost Reduction", value: "$1.8M", icon: DollarSign },
      { metric: "Length of Stay", value: "-15%", icon: Clock },
      { metric: "Readmission Rate", value: "-18%", icon: Target },
    ],
    tools: ["R", "SPSS", "Tableau", "SQL", "Excel"],
    image: "/healthcare-outcomes-analysis-dashboard.jpg",
  },
]

const categories = Array.from(new Set(projects.map((p) => p.category)))
const tools = Array.from(new Set(projects.flatMap((p) => p.tools)))

export default function ProjectsPage() {
  const [filteredProjects, setFilteredProjects] = useState(projects)

  const handleFilterChange = (filters: { category: string; tool: string }) => {
    let filtered = projects

    if (filters.category !== "All") {
      filtered = filtered.filter((p) => p.category === filters.category)
    }

    if (filters.tool !== "All") {
      filtered = filtered.filter((p) => p.tools.includes(filters.tool))
    }

    setFilteredProjects(filtered)
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="space-y-6 mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-balance">Project Portfolio</h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Detailed case studies showcasing data-driven solutions that delivered measurable business impact across
              diverse industries and analytical challenges.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <ProjectFilter categories={categories} tools={tools} onFilterChange={handleFilterChange} />
              </div>
            </div>

            {/* Projects Grid */}
            <div className="lg:col-span-3">
              <div className="grid gap-8 md:grid-cols-2">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>

              {filteredProjects.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No projects match your current filters.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
