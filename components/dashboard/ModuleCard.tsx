import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface ModuleCardProps {
  module: {
    id: number
    title: string
    progress: number
    lessons: number
    completed: number
  }
}

export default function ModuleCard({ module }: ModuleCardProps) {
  return (
    <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">Module {module.id}</h3>
        <span className="text-sm text-gray-500">
          {module.completed}/{module.lessons} lessons
        </span>
      </div>
      <p className="text-sm text-gray-700 mb-3">{module.title}</p>
      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm">
          <span>Progress</span>
          <span>{module.progress}%</span>
        </div>
        <Progress value={module.progress} className="h-2" />
      </div>
      <Button size="sm" variant="outline" className="w-full">
        <Link href={`/modules/${module.id}`} className="flex items-center justify-center gap-2 w-full">
          {module.progress > 0 ? "Continue" : "Start"}
          <ArrowRight size={14} />
        </Link>
      </Button>
    </div>
  )
}
