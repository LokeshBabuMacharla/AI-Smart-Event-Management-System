import {
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const events = [
  {
    id: 1,
    name: "Tech Conference 2025",
    venue: "Main Hall",
    date: "15 Jul 2025",
    status: "Upcoming",
  },
  {
    id: 2,
    name: "Music Festival",
    venue: "City Stadium",
    date: "20 Jul 2025",
    status: "Completed",
  },
  {
    id: 3,
    name: "Business Summit",
    venue: "Conference Center",
    date: "25 Jul 2025",
    status: "Upcoming",
  },
  {
    id: 4,
    name: "Food Carnival",
    venue: "Downtown",
    date: "30 Jul 2025",
    status: "Cancelled",
  },
];

function badgeColor(status) {
  switch (status) {
    case "Upcoming":
      return "bg-blue-100 text-blue-700";

    case "Completed":
      return "bg-green-100 text-green-700";

    case "Cancelled":
      return "bg-red-100 text-red-700";

    default:
      return "bg-gray-100 text-gray-700";
  }
}

function RecentEvents() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b text-left text-gray-600">
            <th className="py-3">Event</th>
            <th className="py-3">Venue</th>
            <th className="py-3">Date</th>
            <th className="py-3">Status</th>
            <th className="py-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {events.map((event) => (
            <tr
              key={event.id}
              className="border-b hover:bg-gray-50 transition"
            >
              <td className="py-4 font-semibold text-slate-700">
                {event.name}
              </td>

              <td>{event.venue}</td>

              <td>{event.date}</td>

              <td>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${badgeColor(
                    event.status
                  )}`}
                >
                  {event.status}
                </span>
              </td>

              <td>
                <div className="flex justify-center gap-3">
                  <button className="text-blue-600 hover:text-blue-800">
                    <FaEye />
                  </button>

                  <button className="text-green-600 hover:text-green-800">
                    <FaEdit />
                  </button>

                  <button className="text-red-600 hover:text-red-800">
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentEvents;