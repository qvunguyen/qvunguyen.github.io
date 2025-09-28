import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Eye, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface DashboardCardProps {
  dashboard: {
    id: string
    title: string
    description: string
    category: string
    metrics: {
      label: string
      value: string
    }[]
    tools: string[]
    image: string
    embedUrl?: string
    liveUrl?: string
    views?: number
    featured?: boolean
  }
}

export function DashboardCard({ dashboard }: DashboardCardProps) {
  return (
    <Card
      className={`group hover:shadow-lg transition-all duration-300 ${dashboard.featured ? "ring-2 ring-chart-1" : ""}`}
    >
      <div className="aspect-video relative overflow-hidden rounded-t-lg">
        <Image
          src={dashboard.image || "/placeholder.svg"}
          alt={dashboard.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {dashboard.featured && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-chart-1 text-white">Featured</Badge>
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <Button size="sm" className="bg-white text-black hover:bg-white/90">
            <Eye className="mr-2 h-4 w-4" />
            View Dashboard
          </Button>
        </div>
      </div>

      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl group-hover:text-chart-1 transition-colors">{dashboard.title}</CardTitle>
            <CardDescription>{dashboard.category}</CardDescription>
          </div>
          {dashboard.views && (
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Eye className="h-4 w-4" />
              <span>{dashboard.views.toLocaleString()}</span>
            </div>
          )}
        </div>
        <p className="text-muted-foreground leading-relaxed">{dashboard.description}</p>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-4">
          {dashboard.metrics.slice(0, 2).map((metric, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
              <TrendingUp className="h-5 w-5 text-chart-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground">{metric.value}</p>
                <p className="text-xs text-muted-foreground">{metric.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">Built With</p>
          <div className="flex flex-wrap gap-2">
            {dashboard.tools.map((tool) => (
              <Badge key={tool} variant="secondary" className="text-xs">
                {tool}
              </Badge>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <Button asChild size="sm" className="flex-1">
            <Link href={`/dashboards/${dashboard.id}`}>View Details</Link>
          </Button>
          {dashboard.liveUrl && (
            <Button variant="outline" size="sm" asChild>
              <Link href={dashboard.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
