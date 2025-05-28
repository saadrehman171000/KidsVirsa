import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function RecommendedLessons() {
  const recommendations = [
    {
      title: "Vowel Sounds Practice",
      module: "Module 1",
      description: "Master the pronunciation of Punjabi vowel sounds",
      url: "/modules/1/lessons/5",
    },
    {
      title: "Common Verbs",
      module: "Module 2",
      description: "Learn essential Punjabi verbs for daily conversation",
      url: "/modules/2/lessons/7",
    },
    {
      title: "Letter Match Game",
      module: "Games",
      description: "Practice alphabet recognition with this fun game",
      url: "/games/letter-match",
    },
  ]

  return (
    <div className="space-y-4">
      {recommendations.map((item, index) => (
        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div>
            <h4 className="font-medium">{item.title}</h4>
            <p className="text-sm text-gray-600">{item.module}</p>
            <p className="text-xs text-gray-500">{item.description}</p>
          </div>
          <Button size="sm" variant="ghost">
            <Link href={item.url}>
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      ))}
    </div>
  )
}
