"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface ProjectFilterProps {
  categories: string[]
  tools: string[]
  onFilterChange: (filters: { category: string; tool: string }) => void
}

export function ProjectFilter({ categories, tools, onFilterChange }: ProjectFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedTool, setSelectedTool] = useState("All")

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    onFilterChange({ category, tool: selectedTool })
  }

  const handleToolChange = (tool: string) => {
    setSelectedTool(tool)
    onFilterChange({ category: selectedCategory, tool })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Industry</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === "All" ? "default" : "outline"}
            size="sm"
            onClick={() => handleCategoryChange("All")}
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Primary Tool</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedTool === "All" ? "default" : "outline"}
            size="sm"
            onClick={() => handleToolChange("All")}
          >
            All
          </Button>
          {tools.map((tool) => (
            <Button
              key={tool}
              variant={selectedTool === tool ? "default" : "outline"}
              size="sm"
              onClick={() => handleToolChange(tool)}
            >
              {tool}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
