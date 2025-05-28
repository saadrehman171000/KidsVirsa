import type { Metadata } from "next"
import AssessmentTest from "@/components/assessment/AssessmentTest"

export const metadata: Metadata = {
  title: "Assessment Test - Kids Virsa",
  description: "Take our assessment test to determine your Punjabi proficiency level with Kids Virsa",
}

export default function AssessmentPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Punjabi Proficiency Assessment</h1>
          <p className="text-lg text-gray-700">
            Take this short assessment to help us determine your current level of Punjabi proficiency. This will allow
            us to personalize your learning experience.
          </p>
        </div>

        <AssessmentTest />
      </div>
    </div>
  )
}
