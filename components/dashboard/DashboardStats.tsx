export default function DashboardStats() {
  const stats = [
    { label: "Lessons Completed", value: "25", color: "text-green-600" },
    { label: "Current Streak", value: "7 days", color: "text-blue-600" },
    { label: "Total Points", value: "1,850", color: "text-purple-600" },
    { label: "Badges Earned", value: "3", color: "text-orange-600" },
  ]

  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
