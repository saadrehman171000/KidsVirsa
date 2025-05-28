"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface LessonActivityProps {
  moduleId: number
  lessonId: number
}

export default function LessonActivity({ moduleId, lessonId }: LessonActivityProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)

  // Sample quiz question based on module/lesson
  const getQuizData = () => {
    if (moduleId === 1 && lessonId === 1) {
      return {
        question: "What does 'Gurmukhi' literally mean?",
        options: ["Sacred script", "From the mouth of the Guru", "Punjabi writing", "Holy language"],
        correctAnswer: 1,
        explanation: "Gurmukhi literally means 'from the mouth of the Guru' (Gur = Guru, Mukhi = mouth/face).",
      }
    }

    if (moduleId === 1 && lessonId === 2) {
      return {
        question: "Which letter makes the 'sa' sound?",
        options: ["ਹ", "ਸ", "ਕ", "ਗ"],
        correctAnswer: 1,
        explanation: "The letter ਸ (sa) makes the 'sa' sound, similar to the 's' in 'sun'.",
      }
    }

    return {
      question: `What is the main focus of Module ${moduleId}, Lesson ${lessonId}?`,
      options: [
        "Learning new vocabulary",
        "Understanding grammar rules",
        "Practicing pronunciation",
        "All of the above",
      ],
      correctAnswer: 3,
      explanation: "Each lesson combines multiple learning aspects for comprehensive understanding.",
    }
  }

  const quizData = getQuizData()

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const handleSubmit = () => {
    setShowResult(true)
  }

  const resetQuiz = () => {
    setSelectedAnswer(null)
    setShowResult(false)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Interactive Activity</h2>

      <Card>
        <CardHeader>
          <CardTitle>Quick Quiz</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <h3 className="text-lg font-medium">{quizData.question}</h3>

          <div className="space-y-2">
            {quizData.options.map((option, index) => (
              <Button
                key={index}
                variant={selectedAnswer === index ? "default" : "outline"}
                className={`w-full text-left justify-start h-auto p-4 ${
                  showResult
                    ? index === quizData.correctAnswer
                      ? "bg-green-100 border-green-300 text-green-800"
                      : selectedAnswer === index && index !== quizData.correctAnswer
                        ? "bg-red-100 border-red-300 text-red-800"
                        : ""
                    : selectedAnswer === index
                      ? "bg-orange-600 text-white"
                      : "hover:bg-orange-50"
                }`}
                onClick={() => !showResult && handleAnswerSelect(index)}
                disabled={showResult}
              >
                {option}
              </Button>
            ))}
          </div>

          {!showResult && selectedAnswer !== null && (
            <Button onClick={handleSubmit} className="w-full bg-orange-600 hover:bg-orange-700 text-white">
              Submit Answer
            </Button>
          )}

          {showResult && (
            <div className="space-y-4">
              <div
                className={`p-4 rounded-lg ${selectedAnswer === quizData.correctAnswer ? "bg-green-50" : "bg-red-50"}`}
              >
                <p
                  className={`font-medium ${
                    selectedAnswer === quizData.correctAnswer ? "text-green-800" : "text-red-800"
                  }`}
                >
                  {selectedAnswer === quizData.correctAnswer ? "Correct! 🎉" : "Not quite right. 🤔"}
                </p>
                <p className="text-gray-700 mt-2">{quizData.explanation}</p>
              </div>

              <Button onClick={resetQuiz} variant="outline" className="w-full">
                Try Again
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Practice Exercise</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Complete the writing practice for this lesson by tracing the letters or words you've learned.
            </p>
            <Button variant="outline" className="w-full">
              Open Writing Practice
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Audio Practice</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Listen to the pronunciation and repeat the sounds to improve your speaking skills.
            </p>
            <Button variant="outline" className="w-full">
              Start Audio Practice
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
