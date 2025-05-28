import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export const metadata: Metadata = {
  title: "Learning Modules - Learn Punjabi",
  description: "Explore our structured Punjabi learning modules from alphabets to advanced sentences",
}

export default function ModulesPage() {
  // Mock data for modules
  const modules = [
    {
      id: 1,
      title: "Punjabi Alphabets & Basic Sounds",
      description: "Learn the Punjabi alphabet (Gurmukhi script), their sounds, and how to write them.",
      lessons: 10,
      progress: 80,
      image: "/placeholder.svg?height=200&width=300",
      color: "from-orange-400 to-orange-600",
    },
    {
      id: 2,
      title: "Simple Words & Vocabulary Building",
      description: "Build your vocabulary with common Punjabi words, numbers, colors, and basic phrases.",
      lessons: 8,
      progress: 60,
      image: "/placeholder.svg?height=200&width=300",
      color: "from-green-400 to-green-600",
    },
    {
      id: 3,
      title: "Basic Sentences & Conversations",
      description: "Learn to form simple sentences and engage in basic conversations in Punjabi.",
      lessons: 12,
      progress: 40,
      image: "/placeholder.svg?height=200&width=300",
      color: "from-blue-400 to-blue-600",
    },
    {
      id: 4,
      title: "Grammar Fundamentals",
      description: "Understand the basic grammar rules of Punjabi language including tenses and sentence structure.",
      lessons: 10,
      progress: 20,
      image: "/placeholder.svg?height=200&width=300",
      color: "from-purple-400 to-purple-600",
    },
    {
      id: 5,
      title: "Reading Simple Stories",
      description: "Practice reading with simple Punjabi stories and dialogues with cultural context.",
      lessons: 8,
      progress: 10,
      image: "/placeholder.svg?height=200&width=300",
      color: "from-red-400 to-red-600",
    },
    {
      id: 6,
      title: "Cultural Knowledge & Expressions",
      description: "Learn about Punjabi culture, traditions, festivals, and idiomatic expressions.",
      lessons: 10,
      progress: 0,
      image: "/placeholder.svg?height=200&width=300",
      color: "from-amber-400 to-amber-600",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Learning Modules</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Our structured learning path takes you from the basics of Punjabi alphabets to forming complex sentences and
          understanding cultural nuances.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {modules.map((module) => (
          <Card key={module.id} className="overflow-hidden flex flex-col h-full">
            <div className={`h-40 bg-gradient-to-r ${module.color} relative`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-5xl font-bold text-white">{module.id}</span>
              </div>
            </div>
            <CardHeader>
              <CardTitle>{module.title}</CardTitle>
              <CardDescription>{module.lessons} lessons</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-700 mb-4">{module.description}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{module.progress}%</span>
                </div>
                <Progress value={module.progress} className="h-2" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                <Link href={`/modules/${module.id}`} className="flex items-center justify-center gap-2 w-full">
                  {module.progress > 0 ? "Continue Learning" : "Start Learning"}
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
