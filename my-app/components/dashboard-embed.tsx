"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Maximize2 } from "lucide-react"
import Link from "next/link"

interface DashboardEmbedProps {
  title: string
  embedUrl: string
  liveUrl?: string
  description?: string
}

export function DashboardEmbed({ title, embedUrl, liveUrl, description }: DashboardEmbedProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div className="space-y-1">
          <CardTitle className="text-lg">{title}</CardTitle>
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </div>
        <div className="flex gap-2">
          {liveUrl && (
            <Button variant="outline" size="sm" asChild>
              <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                <Maximize2 className="h-4 w-4 mr-2" />
                Full Screen
              </Link>
            </Button>
          )}
          {liveUrl && (
            <Button variant="outline" size="sm" asChild>
              <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-chart-1"></div>
            </div>
          )}
          <iframe
            src={embedUrl}
            className="w-full h-full border-0"
            onLoad={() => setIsLoading(false)}
            title={title}
            allowFullScreen
          />
        </div>
      </CardContent>
    </Card>
  )
}
