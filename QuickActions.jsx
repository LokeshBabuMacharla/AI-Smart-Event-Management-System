import {
  FaPlus,
  FaUsers,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";

const actions = [
  {
    title: "Create Event",
    icon: <FaPlus />,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Participants",
    icon: <FaUsers />,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Analytics",
    icon: <FaChartLine />,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Security",
    icon: <FaShieldAlt />,
    color: "from-red-500 to-orange-500",
  },
];

function QuickActions() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">

        {actions.map((item, index) => (

          <button
            key={index}
            className={`bg-gradient-to-r ${item.color}
            rounded-2xl text-white p-6
            hover:scale-105
            transition
            shadow-lg`}
          >

            <div className="text-3xl mb-3">
              {item.icon}
            </div>

            <h3 className="font-semibold">
              {item.title}
            </h3>

          </button>

        ))}

      </div>

    </div>
  );
}

export default QuickActions;