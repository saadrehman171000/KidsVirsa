interface LessonVideoProps {
  moduleId: number
  lessonId: number
}

export default function LessonVideo({ moduleId, lessonId }: LessonVideoProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Video Tutorial</h2>

      {/* Video placeholder */}
      <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="text-gray-600">
            Video Tutorial for Module {moduleId}, Lesson {lessonId}
          </p>
          <p className="text-sm text-gray-500 mt-2">Click to play the lesson video</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">What you'll learn in this video:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Proper pronunciation techniques</li>
          <li>Visual demonstrations of letter formation</li>
          <li>Common mistakes to avoid</li>
          <li>Cultural context and usage examples</li>
        </ul>
      </div>

      <div className="bg-amber-50 p-4 rounded-lg">
        <p className="text-amber-800">
          <strong>Tip:</strong> Watch the video multiple times and practice along. Don't worry about getting it perfect
          on the first try!
        </p>
      </div>
    </div>
  )
}
