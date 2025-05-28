import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import DashboardStats from "@/components/dashboard/DashboardStats"
import ModuleCard from "@/components/dashboard/ModuleCard"
import RecommendedLessons from "@/components/dashboard/RecommendedLessons"
import RecentActivity from "@/components/dashboard/RecentActivity"
import AchievementBadges from "@/components/dashboard/AchievementBadges"

export const metadata: Metadata = {
  title: "Dashboard - Learn Punjabi",
  description: "Track your progress and continue your Punjabi learning journey",
}

export default function Dashboard() {
  // Mock data for demonstration
  const overallProgress = 35
  const modules = [
    { id: 1, title: "Punjabi Alphabets", progress: 80, lessons: 10, completed: 8 },
    { id: 2, title: "Simple Words", progress: 60, lessons: 8, completed: 5 },
    { id: 3, title: "Basic Sentences", progress: 40, lessons: 12, completed: 5 },
    { id: 4, title: "Grammar Fundamentals", progress: 20, lessons: 10, completed: 2 },
    { id: 5, title: "Simple Stories", progress: 10, lessons: 8, completed: 1 },
    { id: 6, title: "Cultural Knowledge", progress: 0, lessons: 10, completed: 0 },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Your Dashboard</h1>
          <p className="text-gray-600 mt-1">Track your progress and continue learning</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button className="bg-orange-600 hover:bg-orange-700 text-white">
            <Link href="/assessment">Take Assessment Test</Link>
          </Button>
        </div>
      </div>

      {/* Overall Progress */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Overall Progress</CardTitle>
          <CardDescription>Your journey to mastering Punjabi</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="10" />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="10"
                  strokeDasharray={`${(2 * Math.PI * 45 * overallProgress) / 100} ${2 * Math.PI * 45 * (1 - overallProgress / 100)}`}
                  strokeDashoffset={2 * Math.PI * 45 * 0.25}
                  strokeLinecap="round"
                />
                <text x="50" y="55" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#1e293b">
                  {overallProgress}%
                </text>
              </svg>
            </div>
            <div className="flex-1">
              <DashboardStats />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Modules and Progress - Left Column */}
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Your Learning Modules</CardTitle>
              <CardDescription>Continue where you left off</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {modules.map((module) => (
                  <ModuleCard key={module.id} module={module} />
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Link href="/modules">View All Modules</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recommended For You</CardTitle>
              <CardDescription>Based on your progress and interests</CardDescription>
            </CardHeader>
            <CardContent>
              <RecommendedLessons />
            </CardContent>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <RecentActivity />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <AchievementBadges />
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Link href="/rewards">View All Badges</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
