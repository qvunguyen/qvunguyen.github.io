"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { DashboardCard } from "@/components/dashboard-card"
import { DashboardEmbed } from "@/components/dashboard-embed"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, TrendingUp, Users, DollarSign } from "lucide-react"

const dashboards = [
  {
    id: "sales-performance",
    title: "Sales Performance Analytics",
    description:
      "Comprehensive sales dashboard tracking revenue, conversion rates, and team performance across regions.",
    category: "Sales & Marketing",
    metrics: [
      { label: "Revenue Growth", value: "+23%" },
      { label: "Conversion Rate", value: "4.2%" },
    ],
    tools: ["Tableau", "Salesforce", "SQL"],
    image: "/sales-performance-tableau-dashboard.jpg",
    embedUrl: "https://public.tableau.com/views/SalesPerformance/Dashboard1?:embed=yes&:display_count=yes",
    liveUrl: "https://public.tableau.com/views/SalesPerformance/Dashboard1",
    views: 15420,
    featured: true,
  },
  {
    id: "customer-analytics",
    title: "Customer Behavior Analytics",
    description: "Deep dive into customer journey, segmentation, and lifetime value analysis with predictive insights.",
    category: "Customer Analytics",
    metrics: [
      { label: "Customer LTV", value: "$2,340" },
      { label: "Retention Rate", value: "87%" },
    ],
    tools: ["Power BI", "Google Analytics", "Python"],
    image: "/customer-behavior-powerbi-dashboard.jpg",
    embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiYWJjZGVmZ2hpamtsbW5vcCIsInQiOiJxcnN0dXZ3eHl6In0%3D",
    liveUrl: "https://app.powerbi.com/view?r=eyJrIjoiYWJjZGVmZ2hpamtsbW5vcCIsInQiOiJxcnN0dXZ3eHl6In0%3D",
    views: 12850,
  },
  {
    id: "financial-kpis",
    title: "Financial KPI Dashboard",
    description: "Executive-level financial dashboard with real-time P&L, cash flow, and budget variance analysis.",
    category: "Finance",
    metrics: [
      { label: "Profit Margin", value: "18.5%" },
      { label: "Budget Variance", value: "-2.1%" },
    ],
    tools: ["Tableau", "SAP", "Excel"],
    image: "/financial-kpi-dashboard-tableau.jpg",
    embedUrl: "https://public.tableau.com/views/FinancialKPIs/Dashboard1?:embed=yes&:display_count=yes",
    liveUrl: "https://public.tableau.com/views/FinancialKPIs/Dashboard1",
    views: 8930,
    featured: true,
  },
  {
    id: "supply-chain",
    title: "Supply Chain Operations",
    description:
      "Real-time supply chain visibility with inventory levels, delivery performance, and cost optimization.",
    category: "Operations",
    metrics: [
      { label: "On-Time Delivery", value: "94.2%" },
      { label: "Cost Reduction", value: "$1.2M" },
    ],
    tools: ["Power BI", "SAP", "Azure"],
    image: "/supply-chain-operations-dashboard.jpg",
    embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiZGVmZ2hpamtsbW5vcHFyc3QiLCJ0IjoidXZ3eHl6YWJjZGVmIn0%3D",
    liveUrl: "https://app.powerbi.com/view?r=eyJrIjoiZGVmZ2hpamtsbW5vcHFyc3QiLCJ0IjoidXZ3eHl6YWJjZGVmIn0%3D",
    views: 7650,
  },
  {
    id: "marketing-attribution",
    title: "Marketing Attribution Model",
    description: "Multi-touch attribution analysis showing true marketing channel performance and ROI optimization.",
    category: "Marketing",
    metrics: [
      { label: "Marketing ROI", value: "3.8x" },
      { label: "Attribution Accuracy", value: "91%" },
    ],
    tools: ["Tableau", "Google Analytics", "R"],
    image: "/marketing-attribution-tableau-dashboard.jpg",
    embedUrl: "https://public.tableau.com/views/MarketingAttribution/Dashboard1?:embed=yes&:display_count=yes",
    liveUrl: "https://public.tableau.com/views/MarketingAttribution/Dashboard1",
    views: 11200,
  },
  {
    id: "hr-analytics",
    title: "HR Analytics & Workforce Planning",
    description: "Comprehensive HR dashboard tracking employee satisfaction, retention, and performance metrics.",
    category: "Human Resources",
    metrics: [
      { label: "Employee Satisfaction", value: "4.3/5" },
      { label: "Turnover Rate", value: "8.2%" },
    ],
    tools: ["Power BI", "Workday", "SQL"],
    image: "/hr-analytics-workforce-dashboard.jpg",
    embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiaGlqa2xtbm9wcXJzdHV2dyIsInQiOiJ4eXphYmNkZWZnaGlqIn0%3D",
    liveUrl: "https://app.powerbi.com/view?r=eyJrIjoiaGlqa2xtbm9wcXJzdHV2dyIsInQiOiJ4eXphYmNkZWZnaGlqIn0%3D",
    views: 6420,
  },
]

const categories = Array.from(new Set(dashboards.map((d) => d.category)))

export default function DashboardsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredDashboards =
    selectedCategory === "All" ? dashboards : dashboards.filter((d) => d.category === selectedCategory)

  const featuredDashboards = dashboards.filter((d) => d.featured)

  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="space-y-6 mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-balance">Dashboard Gallery</h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Interactive dashboards and data visualizations showcasing business intelligence solutions across various
              industries and functional areas.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="flex items-center gap-4 p-6 bg-secondary/50 rounded-lg">
              <BarChart3 className="h-8 w-8 text-chart-1" />
              <div>
                <p className="text-2xl font-bold text-foreground">{dashboards.length}</p>
                <p className="text-sm text-muted-foreground">Live Dashboards</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-secondary/50 rounded-lg">
              <TrendingUp className="h-8 w-8 text-chart-2" />
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {dashboards.reduce((sum, d) => sum + (d.views || 0), 0).toLocaleString()}
                </p>
                <p className="text-sm text-muted-foreground">Total Views</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-secondary/50 rounded-lg">
              <Users className="h-8 w-8 text-chart-3" />
              <div>
                <p className="text-2xl font-bold text-foreground">{categories.length}</p>
                <p className="text-sm text-muted-foreground">Business Areas</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-secondary/50 rounded-lg">
              <DollarSign className="h-8 w-8 text-chart-4" />
              <div>
                <p className="text-2xl font-bold text-foreground">$8.5M+</p>
                <p className="text-sm text-muted-foreground">Business Impact</p>
              </div>
            </div>
          </div>

          <Tabs defaultValue="gallery" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 max-w-md">
              <TabsTrigger value="gallery">Dashboard Gallery</TabsTrigger>
              <TabsTrigger value="live">Live Dashboards</TabsTrigger>
            </TabsList>

            <TabsContent value="gallery" className="space-y-8">
              {/* Category Filter */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  Filter by Category
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={selectedCategory === "All" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory("All")}
                  >
                    All
                  </Button>
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Dashboard Grid */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredDashboards.map((dashboard) => (
                  <DashboardCard key={dashboard.id} dashboard={dashboard} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="live" className="space-y-8">
              <div className="space-y-8">
                <p className="text-muted-foreground">
                  Experience interactive dashboards directly embedded from Tableau Public and Power BI. Click the full
                  screen button for the best viewing experience.
                </p>

                {featuredDashboards.map((dashboard) => (
                  <DashboardEmbed
                    key={dashboard.id}
                    title={dashboard.title}
                    embedUrl={dashboard.embedUrl || ""}
                    liveUrl={dashboard.liveUrl}
                    description={dashboard.description}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}
