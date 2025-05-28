import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight, BookOpen, Gamepad, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LessonContent from "@/components/lessons/LessonContent"
import LessonVideo from "@/components/lessons/LessonVideo"
import LessonActivity from "@/components/lessons/LessonActivity"

export function generateMetadata({ params }: { params: { id: string; lessonId: string } }): Metadata {
  return {
    title: `Lesson ${params.lessonId} - Module ${params.id} - Kids Virsa`,
    description: `Learn Punjabi with our interactive lesson ${params.lessonId} from module ${params.id} on Kids Virsa`,
  }
}

export default function LessonPage({ params }: { params: { id: string; lessonId: string } }) {
  const moduleId = Number.parseInt(params.id)
  const lessonId = Number.parseInt(params.lessonId)

  // Get lesson data
  const lessonData = getLessonData(moduleId, lessonId)

  // Navigation links
  const prevLesson = lessonId > 1 ? `/modules/${moduleId}/lessons/${lessonId - 1}` : null
  const nextLesson = lessonId < getLessonCount(moduleId) ? `/modules/${moduleId}/lessons/${lessonId + 1}` : null

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <Link
            href={`/modules/${moduleId}`}
            className="text-orange-600 hover:text-orange-700 flex items-center gap-1 mb-2"
          >
            <ArrowLeft size={16} />
            <span>Back to Module {moduleId}</span>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">{lessonData.title}</h1>
          <p className="text-gray-600 mt-1">{lessonData.description}</p>
        </div>
        <div className="mt-4 md:mt-0">
          <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
            {lessonData.duration} minutes
          </span>
        </div>
      </div>

      <Tabs defaultValue="content" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="content" className="flex items-center gap-2">
            <BookOpen size={16} />
            <span>Lesson</span>
          </TabsTrigger>
          <TabsTrigger value="video" className="flex items-center gap-2">
            <Video size={16} />
            <span>Video</span>
          </TabsTrigger>
          <TabsTrigger value="activity" className="flex items-center gap-2">
            <Gamepad size={16} />
            <span>Activity</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="content">
          <Card className="p-6">
            <LessonContent moduleId={moduleId} lessonId={lessonId} />
          </Card>
        </TabsContent>

        <TabsContent value="video">
          <Card className="p-6">
            <LessonVideo moduleId={moduleId} lessonId={lessonId} />
          </Card>
        </TabsContent>

        <TabsContent value="activity">
          <Card className="p-6">
            <LessonActivity moduleId={moduleId} lessonId={lessonId} />
          </Card>
        </TabsContent>
      </Tabs>

      {/* Navigation buttons */}
      <div className="flex justify-between mt-8">
        {prevLesson ? (
          <Button variant="outline">
            <Link href={prevLesson} className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Previous Lesson
            </Link>
          </Button>
        ) : (
          <div></div>
        )}

        {nextLesson ? (
          <Button className="bg-orange-600 hover:bg-orange-700 text-white">
            <Link href={nextLesson} className="flex items-center gap-2">
              Next Lesson
              <ArrowRight size={16} />
            </Link>
          </Button>
        ) : (
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            <Link href={`/modules/${moduleId}`} className="flex items-center gap-2">
              Complete Module
              <ArrowRight size={16} />
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}

// Helper functions
function getLessonCount(moduleId: number): number {
  return moduleId === 3 ? 12 : moduleId === 1 || moduleId === 4 ? 10 : 8
}

function getLessonData(moduleId: number, lessonId: number) {
  // Generate lesson data based on module and lesson ID
  let title = ""
  let description = ""

  if (moduleId === 1) {
    const titles = [
      "Introduction to Gurmukhi Script",
      "First 10 Letters",
      "Next 10 Letters",
      "Final Letters",
      "Vowel Sounds",
      "Writing Practice",
      "Letter Combinations",
      "Reading Simple Words",
      "Pronunciation Practice",
      "Module Review",
    ]

    const descriptions = [
      "Learn about the history and basics of Gurmukhi script used in Punjabi.",
      "Learn the first 10 letters of the Punjabi alphabet and their sounds.",
      "Continue learning the next 10 letters of the Punjabi alphabet.",
      "Complete your knowledge of the Punjabi alphabet with the remaining letters.",
      "Learn about vowel sounds and how they modify consonants in Punjabi.",
      "Practice writing Punjabi letters with proper form and technique.",
      "Understand how letters combine to form different sounds in Punjabi.",
      "Start reading simple Punjabi words using the letters you've learned.",
      "Perfect your pronunciation of Punjabi sounds and letters.",
      "Review everything you've learned in this module about Punjabi alphabets.",
    ]

    title = titles[lessonId - 1] || `Lesson ${lessonId}`
    description = descriptions[lessonId - 1] || "Learn important Punjabi alphabet concepts."
  } else if (moduleId === 2) {
    const titles = [
      "Common Nouns",
      "Numbers 1-20",
      "Colors and Shapes",
      "Family Members",
      "Food Items",
      "Animals and Nature",
      "Common Verbs",
      "Review and Practice",
    ]

    const descriptions = [
      "Learn common nouns in Punjabi for everyday objects.",
      "Learn to count from 1 to 20 in Punjabi.",
      "Learn colors and basic shapes in Punjabi.",
      "Learn Punjabi words for family members and relationships.",
      "Learn Punjabi words for common food items and meals.",
      "Learn Punjabi words for animals and nature elements.",
      "Learn common verbs and action words in Punjabi.",
      "Review and practice all the vocabulary learned in this module.",
    ]

    title = titles[lessonId - 1] || `Lesson ${lessonId}`
    description = descriptions[lessonId - 1] || "Build your Punjabi vocabulary with important words."
  } else {
    title = `Lesson ${lessonId}`
    description = `Learn important concepts in Module ${moduleId}, Lesson ${lessonId}.`
  }

  return {
    title,
    description,
    duration: 10 + Math.floor(Math.random() * 15),
  }
}
