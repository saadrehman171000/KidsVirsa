import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  return {
    title: `Module ${params.id} - Kids Virsa`,
    description: `Learn Punjabi with our structured Module ${params.id} lessons and activities on Kids Virsa`,
  }
}

export default function ModuleDetailPage({ params }: { params: { id: string } }) {
  const moduleId = Number.parseInt(params.id)

  // Mock data for the module
  const moduleData = {
    id: moduleId,
    title: getModuleTitle(moduleId),
    description: getModuleDescription(moduleId),
    progress: getModuleProgress(moduleId),
    lessons: getModuleLessons(moduleId),
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Module {moduleId}: {moduleData.title}
          </h1>
          <p className="text-gray-600 mt-1">{moduleData.description}</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm text-gray-500">Progress</p>
            <p className="font-semibold">{moduleData.progress}%</p>
          </div>
          <div className="w-32">
            <Progress value={moduleData.progress} className="h-2" />
          </div>
        </div>
      </div>

      <Tabs defaultValue="lessons" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="lessons">Lessons</TabsTrigger>
          <TabsTrigger value="activities">Activities</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="lessons" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {moduleData.lessons.map((lesson, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-40 bg-gradient-to-r from-orange-400 to-orange-600 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">Lesson {index + 1}</span>
                  </div>
                  {lesson.completed && (
                    <div className="absolute top-2 right-2 bg-white rounded-full p-1">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle>{lesson.title}</CardTitle>
                  <CardDescription>{lesson.duration} minutes</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{lesson.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    <Link
                      href={`/modules/${moduleId}/lessons/${index + 1}`}
                      className="flex items-center justify-center gap-2 w-full"
                    >
                      {lesson.completed ? "Review Lesson" : "Start Lesson"}
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="activities" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getModuleActivities(moduleId).map((activity, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{activity.title}</CardTitle>
                  <CardDescription>{activity.type}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{activity.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <Link href={`/games/${activity.slug}`} className="flex items-center justify-center gap-2 w-full">
                      Play Activity
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="resources" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {getModuleResources(moduleId).map((resource, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{resource.title}</CardTitle>
                  <CardDescription>{resource.type}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{resource.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Link href={resource.url} className="flex items-center justify-center gap-2 w-full">
                      {resource.type === "PDF" ? "Download PDF" : "View Resource"}
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Helper functions to get module data
function getModuleTitle(moduleId: number): string {
  const titles = [
    "Punjabi Alphabets & Basic Sounds",
    "Simple Words & Vocabulary Building",
    "Basic Sentences & Conversations",
    "Grammar Fundamentals",
    "Reading Simple Stories",
    "Cultural Knowledge & Expressions",
  ]
  return titles[moduleId - 1] || "Unknown Module"
}

function getModuleDescription(moduleId: number): string {
  const descriptions = [
    "Learn the Punjabi alphabet (Gurmukhi script), their sounds, and how to write them.",
    "Build your vocabulary with common Punjabi words, numbers, colors, and basic phrases.",
    "Learn to form simple sentences and engage in basic conversations in Punjabi.",
    "Understand the basic grammar rules of Punjabi language including tenses and sentence structure.",
    "Practice reading with simple Punjabi stories and dialogues with cultural context.",
    "Learn about Punjabi culture, traditions, festivals, and idiomatic expressions.",
  ]
  return descriptions[moduleId - 1] || "Module description not available"
}

function getModuleProgress(moduleId: number): number {
  const progress = [80, 60, 40, 20, 10, 0]
  return progress[moduleId - 1] || 0
}

function getModuleLessons(moduleId: number) {
  // Generate mock lessons based on module ID
  const lessonCount = moduleId === 3 ? 12 : moduleId === 1 || moduleId === 4 ? 10 : 8
  const lessons = []

  for (let i = 1; i <= lessonCount; i++) {
    const completed =
      moduleId === 1
        ? i <= 8
        : moduleId === 2
          ? i <= 5
          : moduleId === 3
            ? i <= 5
            : moduleId === 4
              ? i <= 2
              : moduleId === 5
                ? i <= 1
                : false

    lessons.push({
      title: getLessonTitle(moduleId, i),
      description: `Learn ${getLessonDescription(moduleId, i)}`,
      duration: 10 + Math.floor(Math.random() * 15),
      completed,
    })
  }

  return lessons
}

function getLessonTitle(moduleId: number, lessonNumber: number): string {
  if (moduleId === 1) {
    return (
      [
        `Introduction to Gurmukhi Script`,
        `First 10 Letters`,
        `Next 10 Letters`,
        `Final Letters`,
        `Vowel Sounds`,
        `Writing Practice`,
        `Letter Combinations`,
        `Reading Simple Words`,
        `Pronunciation Practice`,
        `Module Review`,
      ][lessonNumber - 1] || `Lesson ${lessonNumber}`
    )
  }

  if (moduleId === 2) {
    return (
      [
        `Common Nouns`,
        `Numbers 1-20`,
        `Colors and Shapes`,
        `Family Members`,
        `Food Items`,
        `Animals and Nature`,
        `Common Verbs`,
        `Review and Practice`,
      ][lessonNumber - 1] || `Lesson ${lessonNumber}`
    )
  }

  return `Lesson ${lessonNumber}`
}

function getLessonDescription(moduleId: number, lessonNumber: number): string {
  if (moduleId === 1) {
    return (
      [
        `the basics of Gurmukhi script and its history`,
        `the first 10 letters of the Punjabi alphabet`,
        `the next 10 letters and their sounds`,
        `the remaining letters of the alphabet`,
        `how vowel sounds work in Punjabi`,
        `how to write Punjabi letters correctly`,
        `how letters combine to form sounds`,
        `how to read simple Punjabi words`,
        `proper pronunciation techniques`,
        `everything covered in this module`,
      ][lessonNumber - 1] || `content for lesson ${lessonNumber}`
    )
  }

  return `important content for this lesson`
}

function getModuleActivities(moduleId: number) {
  if (moduleId === 1) {
    return [
      {
        title: "Letter Match",
        type: "Drag and Drop",
        description: "Match Punjabi letters with their correct sounds",
        slug: "letter-match",
      },
      {
        title: "Alphabet Order",
        type: "Sorting Game",
        description: "Arrange Punjabi letters in the correct order",
        slug: "alphabet-order",
      },
      {
        title: "Sound Recognition",
        type: "Audio Quiz",
        description: "Listen and identify the correct Punjabi letter",
        slug: "sound-recognition",
      },
    ]
  }

  if (moduleId === 2) {
    return [
      {
        title: "Word Memory",
        type: "Memory Cards",
        description: "Match Punjabi words with their meanings",
        slug: "word-memory",
      },
      {
        title: "Number Game",
        type: "Interactive Quiz",
        description: "Practice Punjabi numbers through fun activities",
        slug: "number-game",
      },
      {
        title: "Vocabulary Builder",
        type: "Fill in the Blanks",
        description: "Complete sentences with the correct Punjabi words",
        slug: "vocabulary-builder",
      },
    ]
  }

  return [
    {
      title: "Practice Activity 1",
      type: "Interactive Game",
      description: "Practice your skills with this interactive activity",
      slug: `module-${moduleId}-activity-1`,
    },
    {
      title: "Practice Activity 2",
      type: "Quiz",
      description: "Test your knowledge with this quiz",
      slug: `module-${moduleId}-activity-2`,
    },
  ]
}

function getModuleResources(moduleId: number) {
  if (moduleId === 1) {
    return [
      {
        title: "Punjabi Alphabet Chart",
        type: "PDF",
        description: "Printable chart of all Punjabi letters with pronunciation guide",
        url: "/resources/punjabi-alphabet-chart.pdf",
      },
      {
        title: "Letter Writing Practice",
        type: "PDF",
        description: "Worksheets for practicing writing Punjabi letters",
        url: "/resources/letter-writing-practice.pdf",
      },
      {
        title: "Pronunciation Guide",
        type: "Video",
        description: "Video tutorial on pronouncing Punjabi letters correctly",
        url: "/resources/pronunciation-guide",
      },
    ]
  }

  return [
    {
      title: `Module ${moduleId} Workbook`,
      type: "PDF",
      description: "Printable workbook with exercises and practice materials",
      url: `/resources/module-${moduleId}-workbook.pdf`,
    },
    {
      title: `Module ${moduleId} Vocabulary List`,
      type: "PDF",
      description: "Complete list of vocabulary words covered in this module",
      url: `/resources/module-${moduleId}-vocabulary.pdf`,
    },
  ]
}
