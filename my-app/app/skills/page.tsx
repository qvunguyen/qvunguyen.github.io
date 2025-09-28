import { Navigation } from "@/components/navigation"
import { SkillsGrid } from "@/components/skills-grid"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, BarChart3, Brain, Users } from "lucide-react"

const skillCategories = [
  {
    icon: Database,
    title: "Data Collection & Management",
    description: "Expert in gathering, cleaning, and organizing data from multiple sources",
    highlights: ["Advanced SQL queries", "ETL pipeline development", "Database optimization", "API integrations"],
  },
  {
    icon: BarChart3,
    title: "Analysis & Visualization",
    description: "Transform complex datasets into compelling visual stories and insights",
    highlights: ["Statistical modeling", "Interactive dashboards", "Data storytelling", "Performance metrics"],
  },
  {
    icon: Brain,
    title: "Advanced Analytics",
    description: "Apply machine learning and predictive modeling to solve business problems",
    highlights: ["Predictive modeling", "A/B testing", "Customer segmentation", "Forecasting"],
  },
  {
    icon: Users,
    title: "Business Intelligence",
    description: "Bridge technical analysis with strategic business decision-making",
    highlights: ["Stakeholder communication", "Business strategy", "ROI analysis", "Process optimization"],
  },
]

export default function SkillsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="space-y-6 mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-balance">Technical Skills</h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              A comprehensive toolkit built through years of hands-on experience in data analysis, business
              intelligence, and strategic consulting across diverse industries.
            </p>
          </div>

          {/* Skill Categories Overview */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <category.icon className="h-6 w-6 text-chart-1" />
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                  <CardDescription className="text-muted-foreground">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center">
                        <span className="w-1.5 h-1.5 bg-chart-1 rounded-full mr-3 flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Skills Grid */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-foreground">Proficiency Levels</h2>
            <SkillsGrid />
          </div>

          {/* Tools & Technologies */}
          <div className="mt-16 space-y-8">
            <h2 className="text-2xl font-semibold text-foreground">Tools & Technologies</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">Programming</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "R", "SQL", "JavaScript", "VBA"].map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">Visualization</h3>
                <div className="flex flex-wrap gap-2">
                  {["Tableau", "Power BI", "Excel", "D3.js", "Plotly"].map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">Databases</h3>
                <div className="flex flex-wrap gap-2">
                  {["PostgreSQL", "MySQL", "MongoDB", "Snowflake", "BigQuery"].map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">Cloud & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {["AWS", "Azure", "Git", "Docker", "Jupyter"].map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
