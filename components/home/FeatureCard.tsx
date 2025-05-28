import { BookOpen, Globe, Gamepad2, BarChart, PenLine, Video } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: string
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const getIcon = (iconName: string) => {
    const iconMap = {
      BookOpen: BookOpen,
      Globe: Globe,
      Gamepad2: Gamepad2,
      BarChart: BarChart,
      PenLine: PenLine,
      Video: Video,
    }
    const IconComponent = iconMap[iconName as keyof typeof iconMap] || BookOpen
    return <IconComponent className="h-8 w-8 text-orange-600" />
  }

  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-center mb-4">{getIcon(icon)}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}
