import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const upcomingEvents = [
  {
    title: "Music Festival",
    date: "June 15, 2026",
    venue: "City Stadium",
  },
  {
    title: "Business Conference",
    date: "June 20, 2026",
    venue: "Grand Hotel",
  },
  {
    title: "Tech Workshop",
    date: "June 25, 2026",
    venue: "Innovation Hub",
  },
];

function CalendarWidget() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <FaCalendarAlt className="text-blue-600 text-2xl" />

        <h2 className="text-xl font-bold">
          Upcoming Events
        </h2>
      </div>

      <div className="space-y-5">
        {upcomingEvents.map((event, index) => (
          <div
            key={index}
            className="border rounded-xl p-4 hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg">
              {event.title}
            </h3>

            <p className="text-gray-500 mt-2">
              📅 {event.date}
            </p>

            <p className="flex items-center gap-2 text-gray-600 mt-2">
              <FaMapMarkerAlt className="text-red-500" />
              {event.venue}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarWidget;