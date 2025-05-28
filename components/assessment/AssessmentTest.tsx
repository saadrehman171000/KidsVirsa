"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useRouter } from "next/navigation"

export default function AssessmentTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [isCompleted, setIsCompleted] = useState(false)
  const router = useRouter()

  const questions = [
    {
      question: "How familiar are you with the Punjabi alphabet (Gurmukhi script)?",
      options: ["I don't know any letters", "I know a few letters", "I know most letters", "I can read fluently"],
    },
    {
      question: "How many Punjabi words do you know?",
      options: ["None", "1-20 words", "21-100 words", "More than 100 words"],
    },
    {
      question: "Can you form simple sentences in Punjabi?",
      options: ["Not at all", "With great difficulty", "Sometimes", "Yes, easily"],
    },
    {
      question: "How well do you understand spoken Punjabi?",
      options: ["Not at all", "A few words", "Basic conversations", "Fluently"],
    },
    {
      question: "Have you studied Punjabi grammar before?",
      options: ["Never", "A little bit", "Some basics", "Yes, extensively"],
    },
  ]

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = answerIndex
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setIsCompleted(true)
    }
  }

  const calculateLevel = () => {
    const totalScore = answers.reduce((sum, answer) => sum + answer, 0)
    const maxScore = questions.length * 3
    const percentage = (totalScore / maxScore) * 100

    if (percentage < 25) return "Beginner"
    if (percentage < 50) return "Elementary"
    if (percentage < 75) return "Intermediate"
    return "Advanced"
  }

  const getRecommendedModule = () => {
    const level = calculateLevel()
    switch (level) {
      case "Beginner":
        return 1
      case "Elementary":
        return 2
      case "Intermediate":
        return 3
      default:
        return 4
    }
  }

  if (isCompleted) {
    const level = calculateLevel()
    const recommendedModule = getRecommendedModule()

    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-green-600">Assessment Complete!</CardTitle>
          <CardDescription>Here are your results</CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="p-6 bg-green-50 rounded-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Your Level: {level}</h3>
            <p className="text-green-700">
              Based on your responses, we recommend starting with Module {recommendedModule}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Recommended Path</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Start with Module {recommendedModule}</li>
                <li>• Practice daily for 15-20 minutes</li>
                <li>• Complete interactive activities</li>
                <li>• Track your progress</li>
              </ul>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-2">Next Steps</h4>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• Set up your learning schedule</li>
                <li>• Explore cultural content</li>
                <li>• Join practice games</li>
                <li>• Download writing worksheets</li>
              </ul>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex gap-4">
          <Button
            className="flex-1 bg-orange-600 hover:bg-orange-700 text-white"
            onClick={() => router.push(`/modules/${recommendedModule}`)}
          >
            Start Learning
          </Button>
          <Button variant="outline" className="flex-1" onClick={() => router.push("/dashboard")}>
            Go to Dashboard
          </Button>
        </CardFooter>
      </Card>
    )
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-center mb-4">
          <CardTitle>
            Question {currentQuestion + 1} of {questions.length}
          </CardTitle>
          <span className="text-sm text-gray-600">{Math.round(progress)}% Complete</span>
        </div>
        <Progress value={progress} className="h-2" />
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-medium mb-6">{questions[currentQuestion].question}</h3>
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-full text-left justify-start h-auto p-4 hover:bg-orange-50 hover:border-orange-200"
              onClick={() => handleAnswer(index)}
            >
              {option}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
