import { Progress } from "@/components/ui/progress"

interface Skill {
  name: string
  level: number
  category: string
}

const skills: Skill[] = [
  // Data Collection
  { name: "SQL", level: 95, category: "Data Collection" },
  { name: "Python", level: 90, category: "Data Collection" },
  { name: "APIs & Web Scraping", level: 85, category: "Data Collection" },
  { name: "Database Management", level: 88, category: "Data Collection" },

  // Analysis & Modeling
  { name: "Statistical Analysis", level: 92, category: "Analysis & Modeling" },
  { name: "A/B Testing", level: 87, category: "Analysis & Modeling" },
  { name: "Machine Learning", level: 80, category: "Analysis & Modeling" },
  { name: "R Programming", level: 85, category: "Analysis & Modeling" },

  // Visualization
  { name: "Tableau", level: 95, category: "Visualization" },
  { name: "Power BI", level: 90, category: "Visualization" },
  { name: "Excel Advanced", level: 95, category: "Visualization" },
  { name: "D3.js", level: 75, category: "Visualization" },

  // Business Skills
  { name: "Stakeholder Communication", level: 93, category: "Business Skills" },
  { name: "Project Management", level: 88, category: "Business Skills" },
  { name: "Business Intelligence", level: 90, category: "Business Skills" },
  { name: "Data Storytelling", level: 92, category: "Business Skills" },
]

const categories = Array.from(new Set(skills.map((skill) => skill.category)))

export function SkillsGrid() {
  return (
    <div className="space-y-12">
      {categories.map((category) => (
        <div key={category} className="space-y-6">
          <h3 className="text-xl font-semibold text-foreground">{category}</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {skills
              .filter((skill) => skill.category === category)
              .map((skill) => (
                <div key={skill.name} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}
