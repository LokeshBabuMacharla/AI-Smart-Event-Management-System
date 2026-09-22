import {
  FaRobot,
  FaArrowUp,
  FaUsers,
  FaClock,
  FaLightbulb,
} from "react-icons/fa";

const insights = [
  {
    icon: <FaArrowUp />,
    title: "Events Increased",
    value: "+18%",
    color: "bg-green-500",
  },
  {
    icon: <FaUsers />,
    title: "Highest Attendance",
    value: "Saturday",
    color: "bg-blue-500",
  },
  {
    icon: <FaClock />,
    title: "Peak Booking",
    value: "7:00 PM",
    color: "bg-purple-500",
  },
  {
    icon: <FaLightbulb />,
    title: "Recommendation",
    value: "Open 2 More Venues",
    color: "bg-orange-500",
  },
];

function AIInsights() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <div className="flex items-center gap-3 mb-6">
        <FaRobot className="text-cyan-600 text-3xl" />
        <h2 className="text-2xl font-bold">
          AI Insights
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-5">

        {insights.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 hover:bg-cyan-50 transition"
          >
            <div className={`${item.color} text-white p-4 rounded-full`}>
              {item.icon}
            </div>

            <div>
              <p className="text-gray-500">
                {item.title}
              </p>

              <h3 className="font-bold text-lg">
                {item.value}
              </h3>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default AIInsights;