import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface ProjectCardProps {
  project: {
    id: string
    title: string
    category: string
    description: string
    challenge: string
    solution: string
    impact: {
      metric: string
      value: string
      icon: React.ComponentType<{ className?: string }>
    }[]
    tools: string[]
    image: string
    githubUrl?: string
    liveUrl?: string
    featured?: boolean
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      className={`group hover:shadow-lg transition-all duration-300 ${project.featured ? "ring-2 ring-chart-1" : ""}`}
    >
      <div className="aspect-video relative overflow-hidden rounded-t-lg">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {project.featured && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-chart-1 text-white">Featured</Badge>
          </div>
        )}
      </div>

      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl group-hover:text-chart-1 transition-colors">{project.title}</CardTitle>
            <CardDescription>{project.category}</CardDescription>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed">{project.description}</p>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Impact Metrics */}
        <div className="grid grid-cols-2 gap-4">
          {project.impact.slice(0, 2).map((metric, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
              <metric.icon className="h-5 w-5 text-chart-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground">{metric.value}</p>
                <p className="text-xs text-muted-foreground">{metric.metric}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">Tools Used</p>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <Badge key={tool} variant="secondary" className="text-xs">
                {tool}
              </Badge>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <Button asChild size="sm" className="flex-1">
            <Link href={`/projects/${project.id}`}>View Case Study</Link>
          </Button>
          {project.githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </Link>
            </Button>
          )}
          {project.liveUrl && (
            <Button variant="outline" size="sm" asChild>
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
