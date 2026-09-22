import {
  FaBell,
  FaUserPlus,
  FaTicketAlt,
  FaCalendarCheck,
  FaExclamationTriangle,
} from "react-icons/fa";

const notifications = [
  {
    icon: <FaUserPlus />,
    title: "25 new users registered",
    time: "5 minutes ago",
    color: "bg-green-500",
  },
  {
    icon: <FaTicketAlt />,
    title: "150 tickets sold today",
    time: "20 minutes ago",
    color: "bg-blue-500",
  },
  {
    icon: <FaCalendarCheck />,
    title: "Music Festival starts tomorrow",
    time: "1 hour ago",
    color: "bg-purple-500",
  },
  {
    icon: <FaExclamationTriangle />,
    title: "Venue capacity almost full",
    time: "2 hours ago",
    color: "bg-red-500",
  },
];

function NotificationsPanel() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <FaBell className="text-yellow-500 text-2xl" />

        <h2 className="text-xl font-bold">
          Notifications
        </h2>
      </div>

      <div className="space-y-4">
        {notifications.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition"
          >
            <div
              className={`${item.color} text-white p-3 rounded-full`}
            >
              {item.icon}
            </div>

            <div>
              <h3 className="font-semibold">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500">
                {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotificationsPanel;