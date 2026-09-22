function EventStats({ events }) {
  const total = events.length;

  const upcoming = events.filter(
    (event) => new Date(event.date) >= new Date()
  ).length;

  const completed = total - upcoming;

  const openRegistration = events.filter(
    (event) => event.status === "Open"
  ).length;

  const cards = [
    {
      title: "Total Events",
      value: total,
      color: "from-blue-500 to-indigo-500",
      icon: "📅",
    },
    {
      title: "Upcoming",
      value: upcoming,
      color: "from-green-500 to-emerald-500",
      icon: "🚀",
    },
    {
      title: "Completed",
      value: completed,
      color: "from-gray-500 to-slate-600",
      icon: "✅",
    },
    {
      title: "Open Registration",
      value: openRegistration,
      color: "from-orange-500 to-red-500",
      icon: "📝",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`bg-gradient-to-r ${card.color} rounded-2xl p-6 text-white shadow-lg`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">{card.title}</p>
              <h2 className="text-3xl font-bold mt-2">{card.value}</h2>
            </div>

            <div className="text-4xl">{card.icon}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventStats;