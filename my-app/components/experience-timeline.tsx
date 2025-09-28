import { Calendar, MapPin } from "lucide-react"

interface Experience {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  current?: boolean
}

const experiences: Experience[] = [
  {
    title: "Senior Data Analyst",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    period: "2022 — Present",
    current: true,
    description: [
      "Led cross-functional analytics initiatives resulting in $2.5M annual cost savings through process optimization",
      "Built automated reporting dashboards serving 50+ stakeholders across marketing, sales, and operations teams",
      "Developed predictive models improving customer retention by 23% and reducing churn by $800K annually",
      "Mentored junior analysts and established data governance best practices across the organization",
    ],
  },
  {
    title: "Data Analyst",
    company: "Growth Analytics Inc",
    location: "Austin, TX",
    period: "2020 — 2022",
    description: [
      "Analyzed customer behavior data for 15+ SaaS clients, identifying growth opportunities worth $5M+ in revenue",
      "Created comprehensive A/B testing framework that increased conversion rates by average of 18%",
      "Designed and maintained ETL pipelines processing 10M+ daily events with 99.9% accuracy",
      "Collaborated with product teams to implement data-driven feature recommendations",
    ],
  },
  {
    title: "Junior Data Analyst",
    company: "DataFirst Consulting",
    location: "Chicago, IL",
    period: "2019 — 2020",
    description: [
      "Performed statistical analysis on market research data for Fortune 500 clients",
      "Developed interactive Tableau dashboards reducing report generation time by 75%",
      "Conducted data quality assessments and implemented validation procedures",
      "Supported senior analysts in complex modeling projects and client presentations",
    ],
  },
]

export function ExperienceTimeline() {
  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <div key={index} className="relative">
          {/* Timeline line */}
          {index !== experiences.length - 1 && <div className="absolute left-6 top-12 w-px h-full bg-border"></div>}

          <div className="flex gap-6">
            {/* Timeline dot */}
            <div
              className={`flex-shrink-0 w-3 h-3 rounded-full mt-2 ${
                exp.current ? "bg-chart-1" : "bg-muted-foreground"
              }`}
            ></div>

            {/* Content */}
            <div className="flex-1 space-y-3">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                <p className="text-foreground font-medium">{exp.company}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-muted-foreground leading-relaxed flex">
                    <span className="text-chart-1 mr-3 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
