import {
  FaCalendarCheck,
  FaUserPlus,
  FaTicketAlt,
  FaStar,
} from "react-icons/fa";

const activities = [
  {
    icon: <FaCalendarCheck />,
    title: "New Event Created",
    time: "10 mins ago",
    color: "bg-blue-500",
  },
  {
    icon: <FaUserPlus />,
    title: "15 New Users Registered",
    time: "25 mins ago",
    color: "bg-green-500",
  },
  {
    icon: <FaTicketAlt />,
    title: "120 Tickets Sold",
    time: "1 hour ago",
    color: "bg-orange-500",
  },
  {
    icon: <FaStar />,
    title: "Event Rated 4.9★",
    time: "2 hours ago",
    color: "bg-purple-500",
  },
];

function ActivityTimeline() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">
        Recent Activity
      </h2>

      <div className="space-y-6">
        {activities.map((item, index) => (
          <div key={index} className="flex gap-4 items-start">
            <div
              className={`${item.color} text-white p-3 rounded-full`}
            >
              {item.icon}
            </div>

            <div>
              <h3 className="font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm">
                {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityTimeline;