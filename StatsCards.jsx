import {
  FaCalendarAlt,
  FaUsers,
  FaMapMarkerAlt,
  FaExclamationTriangle,
  FaArrowUp,
} from "react-icons/fa";

const stats = [
  {
    title: "Total Events",
    value: "42",
    change: "+12%",
    icon: <FaCalendarAlt />,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Participants",
    value: "12,540",
    change: "+18%",
    icon: <FaUsers />,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Venues",
    value: "18",
    change: "+6%",
    icon: <FaMapMarkerAlt />,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Alerts",
    value: "5",
    change: "-2%",
    icon: <FaExclamationTriangle />,
    gradient: "from-red-500 to-orange-500",
  },
];

function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map((item, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
        >
          {/* Decorative Gradient */}
          <div
            className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${item.gradient}`}
          ></div>

          <div className="p-6">

            {/* Top Section */}
            <div className="flex justify-between items-center">

              <div>
                <p className="text-gray-500 text-sm">
                  {item.title}
                </p>

                <h2 className="text-4xl font-bold text-slate-800 mt-3">
                  {item.value}
                </h2>
              </div>

              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.gradient}
                text-white flex items-center justify-center text-3xl
                shadow-xl group-hover:scale-110 transition duration-300`}
              >
                {item.icon}
              </div>

            </div>

            {/* Bottom */}
            <div className="mt-6 flex justify-between items-center">

              <div className="flex items-center gap-2 text-green-600 font-semibold">

                <FaArrowUp />

                <span>{item.change}</span>

              </div>

              <span className="text-gray-400 text-sm">
                Since last month
              </span>

            </div>

            {/* Progress Bar */}
            <div className="mt-5 h-2 bg-gray-200 rounded-full overflow-hidden">

              <div
                className={`h-full bg-gradient-to-r ${item.gradient} rounded-full`}
                style={{
                  width: `${70 + index * 7}%`,
                }}
              ></div>

            </div>

          </div>

        </div>
      ))}

    </div>
  );
}

export default StatsCards;