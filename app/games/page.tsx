import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Games & Activities - Kids Virsa",
  description: "Interactive games and activities to help you learn Punjabi in a fun way with Kids Virsa",
}

export default function GamesPage() {
  // Mock data for games
  const games = [
    {
      id: "letter-match",
      title: "Letter Match",
      description: "Match Punjabi letters with their correct sounds",
      type: "Drag and Drop",
      level: "Beginner",
      module: 1,
      image: "/placeholder.svg?height=200&width=300",
      color: "from-orange-400 to-orange-600",
    },
    {
      id: "word-memory",
      title: "Word Memory",
      description: "Match Punjabi words with their meanings",
      type: "Memory Cards",
      level: "Beginner",
      module: 2,
      image: "/placeholder.svg?height=200&width=300",
      color: "from-green-400 to-green-600",
    },
    {
      id: "fill-blanks",
      title: "Fill in the Blanks",
      description: "Complete sentences with the correct Punjabi words",
      type: "Interactive Quiz",
      level: "Intermediate",
      module: 3,
      image: "/placeholder.svg?height=200&width=300",
      color: "from-blue-400 to-blue-600",
    },
    {
      id: "grammar-challenge",
      title: "Grammar Challenge",
      description: "Test your knowledge of Punjabi grammar rules",
      type: "Multiple Choice",
      level: "Intermediate",
      module: 4,
      image: "/placeholder.svg?height=200&width=300",
      color: "from-purple-400 to-purple-600",
    },
    {
      id: "story-sequence",
      title: "Story Sequence",
      description: "Arrange sentences to form a coherent Punjabi story",
      type: "Sequencing Game",
      level: "Advanced",
      module: 5,
      image: "/placeholder.svg?height=200&width=300",
      color: "from-red-400 to-red-600",
    },
    {
      id: "cultural-quiz",
      title: "Cultural Quiz",
      description: "Test your knowledge of Punjabi culture and traditions",
      type: "Quiz",
      level: "All Levels",
      module: 6,
      image: "/placeholder.svg?height=200&width=300",
      color: "from-amber-400 to-amber-600",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Games & Activities</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Learn Punjabi through fun and interactive games and activities designed to reinforce your learning.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {games.map((game) => (
          <Card key={game.id} className="overflow-hidden flex flex-col h-full">
            <div className={`h-40 bg-gradient-to-r ${game.color} relative`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">{game.title}</span>
              </div>
            </div>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>{game.title}</CardTitle>
                <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
                  {game.level}
                </span>
              </div>
              <CardDescription>
                Module {game.module} • {game.type}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-700">{game.description}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                <Link href={`/games/${game.id}`} className="w-full">
                  Play Game
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
