import { CheckCircle, Trophy, BookOpen } from "lucide-react"

export default function RecentActivity() {
  const activities = [
    {
      type: "lesson",
      title: "Completed Lesson 8",
      description: "Reading Simple Words",
      time: "2 hours ago",
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      type: "badge",
      title: "Earned Badge",
      description: "Word Builder",
      time: "1 day ago",
      icon: Trophy,
      color: "text-yellow-600",
    },
    {
      type: "lesson",
      title: "Started Module 2",
      description: "Simple Words & Vocabulary",
      time: "2 days ago",
      icon: BookOpen,
      color: "text-blue-600",
    },
  ]

  return (
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-start gap-3">
          <div className={`p-1 rounded-full ${activity.color}`}>
            <activity.icon size={16} />
          </div>
          <div className="flex-1">
            <p className="font-medium text-sm">{activity.title}</p>
            <p className="text-xs text-gray-600">{activity.description}</p>
            <p className="text-xs text-gray-500">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
