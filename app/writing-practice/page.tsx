import type { Metadata } from "next"
import Link from "next/link"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Writing Practice - Kids Virsa",
  description: "Download worksheets to practice writing Punjabi characters and words with Kids Virsa",
}

export default function WritingPracticePage() {
  // Mock data for writing practice PDFs
  const practicePDFs = {
    module1: [
      {
        id: 1,
        title: "Punjabi Alphabet Tracing",
        description: "Practice tracing all Punjabi letters with proper stroke order",
        pages: 10,
        level: "Beginner",
        url: "/pdfs/punjabi-alphabet-tracing.pdf",
      },
      {
        id: 2,
        title: "Vowel Sounds Practice",
        description: "Practice writing vowel sounds and their combinations",
        pages: 5,
        level: "Beginner",
        url: "/pdfs/vowel-sounds-practice.pdf",
      },
      {
        id: 3,
        title: "Letter Formation Guide",
        description: "Detailed guide on forming each Punjabi letter correctly",
        pages: 15,
        level: "Beginner",
        url: "/pdfs/letter-formation-guide.pdf",
      },
    ],
    module2: [
      {
        id: 4,
        title: "Common Words Writing",
        description: "Practice writing common Punjabi words",
        pages: 8,
        level: "Beginner",
        url: "/pdfs/common-words-writing.pdf",
      },
      {
        id: 5,
        title: "Numbers and Counting",
        description: "Practice writing Punjabi numbers from 1 to 50",
        pages: 6,
        level: "Beginner",
        url: "/pdfs/numbers-counting.pdf",
      },
    ],
    module3: [
      {
        id: 6,
        title: "Simple Sentences",
        description: "Practice writing simple Punjabi sentences",
        pages: 12,
        level: "Intermediate",
        url: "/pdfs/simple-sentences.pdf",
      },
      {
        id: 7,
        title: "Conversation Practice",
        description: "Write out common Punjabi conversations",
        pages: 10,
        level: "Intermediate",
        url: "/pdfs/conversation-practice.pdf",
      },
    ],
    module4: [
      {
        id: 8,
        title: "Grammar Exercises",
        description: "Practice Punjabi grammar rules through writing exercises",
        pages: 15,
        level: "Intermediate",
        url: "/pdfs/grammar-exercises.pdf",
      },
    ],
    module5: [
      {
        id: 9,
        title: "Story Writing",
        description: "Practice writing simple stories in Punjabi",
        pages: 8,
        level: "Advanced",
        url: "/pdfs/story-writing.pdf",
      },
    ],
    module6: [
      {
        id: 10,
        title: "Cultural Expressions",
        description: "Practice writing cultural expressions and idioms",
        pages: 10,
        level: "Advanced",
        url: "/pdfs/cultural-expressions.pdf",
      },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Writing Practice</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Download these worksheets to practice writing Punjabi characters, words, and sentences. Regular practice is
          essential for mastering Punjabi writing.
        </p>
      </div>

      <Tabs defaultValue="module1" className="w-full">
        <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
          <TabsTrigger value="module1">Module 1</TabsTrigger>
          <TabsTrigger value="module2">Module 2</TabsTrigger>
          <TabsTrigger value="module3">Module 3</TabsTrigger>
          <TabsTrigger value="module4">Module 4</TabsTrigger>
          <TabsTrigger value="module5">Module 5</TabsTrigger>
          <TabsTrigger value="module6">Module 6</TabsTrigger>
        </TabsList>

        {Object.entries(practicePDFs).map(([module, pdfs]) => (
          <TabsContent key={module} value={module} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pdfs.map((pdf) => (
                <Card key={pdf.id}>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>{pdf.title}</CardTitle>
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
                        {pdf.level}
                      </span>
                    </div>
                    <CardDescription>{pdf.pages} pages</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{pdf.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <Link href={pdf.url} className="flex items-center justify-center gap-2 w-full">
                        <Download size={16} />
                        Download PDF
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-12 p-6 bg-amber-50 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips for Effective Writing Practice</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="font-bold mr-2">•</span>
            <span>Practice daily for at least 15-20 minutes for best results.</span>
          </li>
          <li className="flex items-start">
            <span className="font-bold mr-2">•</span>
            <span>Follow the stroke order shown in the worksheets for proper letter formation.</span>
          </li>
          <li className="flex items-start">
            <span className="font-bold mr-2">•</span>
            <span>Start with tracing and then move to writing independently.</span>
          </li>
          <li className="flex items-start">
            <span className="font-bold mr-2">•</span>
            <span>Pay attention to the spacing between letters and words.</span>
          </li>
          <li className="flex items-start">
            <span className="font-bold mr-2">•</span>
            <span>Review your writing and compare it with the examples provided.</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
