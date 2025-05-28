export default function AchievementBadges() {
  const badges = [
    { emoji: "🎯", title: "First Steps", earned: true },
    { emoji: "📝", title: "Alphabet Master", earned: true },
    { emoji: "🔤", title: "Word Builder", earned: true },
    { emoji: "💬", title: "Conversation Starter", earned: false },
  ]

  return (
    <div className="grid grid-cols-2 gap-3">
      {badges.map((badge, index) => (
        <div
          key={index}
          className={`text-center p-3 rounded-lg ${
            badge.earned ? "bg-yellow-50 border border-yellow-200" : "bg-gray-50 border border-gray-200"
          }`}
        >
          <div className={`text-2xl mb-1 ${badge.earned ? "" : "grayscale opacity-50"}`}>{badge.emoji}</div>
          <p className={`text-xs font-medium ${badge.earned ? "text-yellow-800" : "text-gray-500"}`}>{badge.title}</p>
        </div>
      ))}
    </div>
  )
}
