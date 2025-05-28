interface LessonContentProps {
  moduleId: number
  lessonId: number
}

export default function LessonContent({ moduleId, lessonId }: LessonContentProps) {
  // Generate content based on module and lesson
  const getContent = () => {
    if (moduleId === 1 && lessonId === 1) {
      return (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Introduction to Gurmukhi Script</h2>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to your first lesson in learning Punjabi! Today we'll explore the beautiful Gurmukhi script, which
              is used to write the Punjabi language.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">What is Gurmukhi?</h3>
            <p className="text-gray-700">
              Gurmukhi (ਗੁਰਮੁਖੀ) literally means "from the mouth of the Guru." It's the script used to write Punjabi and
              was standardized by the second Sikh Guru, Guru Angad Dev Ji, in the 16th century.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Key Features</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Contains 35 consonants (ਵਿਅੰਜਨ)</li>
              <li>Has 10 vowel symbols (ਸਵਰ)</li>
              <li>Written from left to right</li>
              <li>Each letter represents a syllable</li>
            </ul>

            <div className="bg-orange-50 p-6 rounded-lg mt-6">
              <h4 className="font-semibold text-orange-800 mb-2">Did You Know?</h4>
              <p className="text-orange-700">
                The word "Gurmukhi" comes from "Gur" (Guru) and "Mukhi" (mouth/face), emphasizing its sacred origin in
                Sikh tradition.
              </p>
            </div>
          </div>
        </div>
      )
    }

    if (moduleId === 1 && lessonId === 2) {
      return (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">First 10 Letters</h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
            {["ਸ", "ਹ", "ਕ", "ਖ", "ਗ", "ਘ", "ਙ", "ਚ", "ਛ", "ਜ"].map((letter, index) => (
              <div key={index} className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-4xl font-bold text-orange-600 mb-2">{letter}</div>
                <div className="text-sm text-gray-600">Letter {index + 1}</div>
              </div>
            ))}
          </div>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              Let's start with the first 10 letters of the Punjabi alphabet. Each letter has its own unique sound and
              shape. Practice writing and pronouncing each one.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Pronunciation Guide</h3>
            <div className="space-y-2">
              <p>
                <strong>ਸ (sa)</strong> - as in "sun"
              </p>
              <p>
                <strong>ਹ (ha)</strong> - as in "house"
              </p>
              <p>
                <strong>ਕ (ka)</strong> - as in "kite"
              </p>
              <p>
                <strong>ਖ (kha)</strong> - aspirated "k" sound
              </p>
              <p>
                <strong>ਗ (ga)</strong> - as in "go"
              </p>
            </div>
          </div>
        </div>
      )
    }

    // Default content for other lessons
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Lesson {lessonId} Content</h2>
        <p className="text-lg text-gray-700">
          This is the content for Module {moduleId}, Lesson {lessonId}. Here you would find detailed explanations,
          examples, and practice exercises related to this specific lesson.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">Learning Objectives</h3>
          <ul className="list-disc list-inside space-y-1 text-blue-700">
            <li>Understand the key concepts of this lesson</li>
            <li>Practice pronunciation and writing</li>
            <li>Apply knowledge through interactive exercises</li>
          </ul>
        </div>
      </div>
    )
  }

  return <div>{getContent()}</div>
}
