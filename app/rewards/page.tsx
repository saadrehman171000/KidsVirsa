import type { Metadata } from "next"
import { Trophy, Award, Medal } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Rewards & Achievements - Learn Punjabi",
  description: "Track your achievements and see how you rank among other learners",
}

export default function RewardsPage() {
  // Mock data for achievements
  const badges = [
    {
      id: 1,
      title: "First Steps",
      description: "Complete your first lesson",
      icon: "🎯",
      earned: true,
      earnedDate: "2024-01-15",
    },
    {
      id: 2,
      title: "Alphabet Master",
      description: "Complete Module 1: Punjabi Alphabets",
      icon: "📝",
      earned: true,
      earnedDate: "2024-01-20",
    },
    {
      id: 3,
      title: "Word Builder",
      description: "Learn 50 Punjabi words",
      icon: "🔤",
      earned: true,
      earnedDate: "2024-01-25",
    },
    {
      id: 4,
      title: "Conversation Starter",
      description: "Complete Module 3: Basic Conversations",
      icon: "💬",
      earned: false,
      progress: 60,
    },
    {
      id: 5,
      title: "Grammar Guru",
      description: "Master Punjabi grammar fundamentals",
      icon: "📚",
      earned: false,
      progress: 20,
    },
    {
      id: 6,
      title: "Story Reader",
      description: "Read 10 Punjabi stories",
      icon: "📖",
      earned: false,
      progress: 10,
    },
    {
      id: 7,
      title: "Cultural Explorer",
      description: "Complete cultural immersion activities",
      icon: "🌍",
      earned: false,
      progress: 0,
    },
    {
      id: 8,
      title: "Game Champion",
      description: "Score 100% in 5 different games",
      icon: "🏆",
      earned: false,
      progress: 40,
    },
  ]

  const leaderboard = [
    { rank: 1, name: "Amrit Singh", points: 2450, avatar: "/placeholder.svg?height=40&width=40" },
    { rank: 2, name: "Priya Kaur", points: 2380, avatar: "/placeholder.svg?height=40&width=40" },
    { rank: 3, name: "Raj Patel", points: 2250, avatar: "/placeholder.svg?height=40&width=40" },
    { rank: 4, name: "Sarah Johnson", points: 2100, avatar: "/placeholder.svg?height=40&width=40" },
    { rank: 5, name: "You", points: 1850, avatar: "/placeholder.svg?height=40&width=40", isCurrentUser: true },
    { rank: 6, name: "Mike Chen", points: 1720, avatar: "/placeholder.svg?height=40&width=40" },
    { rank: 7, name: "Lisa Brown", points: 1650, avatar: "/placeholder.svg?height=40&width=40" },
    { rank: 8, name: "David Kim", points: 1580, avatar: "/placeholder.svg?height=40&width=40" },
  ]

  const stats = {
    totalPoints: 1850,
    badgesEarned: 3,
    totalBadges: 8,
    currentStreak: 7,
    longestStreak: 15,
    lessonsCompleted: 25,
    gamesPlayed: 12,
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rewards & Achievements</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Track your progress, earn badges, and see how you rank among other Punjabi learners.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-orange-600">{stats.totalPoints}</div>
            <p className="text-sm text-gray-600">Total Points</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-green-600">
              {stats.badgesEarned}/{stats.totalBadges}
            </div>
            <p className="text-sm text-gray-600">Badges Earned</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-blue-600">{stats.currentStreak}</div>
            <p className="text-sm text-gray-600">Day Streak</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-purple-600">{stats.lessonsCompleted}</div>
            <p className="text-sm text-gray-600">Lessons Done</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="badges" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="badges">Badges & Achievements</TabsTrigger>
          <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
        </TabsList>

        <TabsContent value="badges" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {badges.map((badge) => (
              <Card
                key={badge.id}
                className={`${badge.earned ? "bg-gradient-to-br from-yellow-50 to-orange-50 border-orange-200" : "bg-gray-50"}`}
              >
                <CardHeader className="text-center">
                  <div className={`text-4xl mb-2 ${badge.earned ? "" : "grayscale opacity-50"}`}>{badge.icon}</div>
                  <CardTitle className={`${badge.earned ? "text-orange-800" : "text-gray-500"}`}>
                    {badge.title}
                  </CardTitle>
                  <CardDescription>{badge.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {badge.earned ? (
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-green-600 mb-2">
                        <Award className="h-4 w-4" />
                        <span className="text-sm font-medium">Earned!</span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Earned on {new Date(badge.earnedDate!).toLocaleDateString()}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{badge.progress || 0}%</span>
                      </div>
                      <Progress value={badge.progress || 0} className="h-2" />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="leaderboard" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                Weekly Leaderboard
              </CardTitle>
              <CardDescription>See how you rank among other learners this week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {leaderboard.map((user) => (
                  <div
                    key={user.rank}
                    className={`flex items-center justify-between p-4 rounded-lg ${
                      user.isCurrentUser ? "bg-orange-50 border border-orange-200" : "bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex items-center justify-center w-8 h-8 rounded-full ${
                          user.rank === 1
                            ? "bg-yellow-500 text-white"
                            : user.rank === 2
                              ? "bg-gray-400 text-white"
                              : user.rank === 3
                                ? "bg-amber-600 text-white"
                                : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {user.rank <= 3 ? (
                          user.rank === 1 ? (
                            <Trophy className="h-4 w-4" />
                          ) : user.rank === 2 ? (
                            <Medal className="h-4 w-4" />
                          ) : (
                            <Award className="h-4 w-4" />
                          )
                        ) : (
                          user.rank
                        )}
                      </div>
                      <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="w-10 h-10 rounded-full" />
                      <div>
                        <p className={`font-medium ${user.isCurrentUser ? "text-orange-800" : "text-gray-900"}`}>
                          {user.name}
                        </p>
                        <p className="text-sm text-gray-600">{user.points} points</p>
                      </div>
                    </div>
                    {user.isCurrentUser && (
                      <span className="px-2 py-1 bg-orange-200 text-orange-800 rounded-full text-xs font-medium">
                        You
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Motivation Section */}
      <div className="mt-16 p-8 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Keep Going! 🎉</h2>
        <p className="text-lg mb-6">
          You're doing great! Complete your next lesson to earn more points and climb the leaderboard.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <div className="text-2xl font-bold">{stats.longestStreak}</div>
            <div className="text-sm">Longest Streak</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <div className="text-2xl font-bold">{stats.gamesPlayed}</div>
            <div className="text-sm">Games Played</div>
          </div>
        </div>
      </div>
    </div>
  )
}
