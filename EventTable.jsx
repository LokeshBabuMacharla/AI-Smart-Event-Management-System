function EventTable({
  events,
  onEdit,
  onDelete,
  currentPage,
  eventsPerPage,
}) {
  const startIndex = (currentPage - 1) * eventsPerPage;
  const currentEvents = events.slice(
    startIndex,
    startIndex + eventsPerPage
  );

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <tr>
            <th className="p-4 text-left">Event</th>
            <th className="p-4 text-left">Category</th>
            <th className="p-4 text-left">Venue</th>
            <th className="p-4 text-left">Date</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {currentEvents.length === 0 ? (
            <tr>
              <td
                colSpan="6"
                className="text-center py-8 text-gray-500"
              >
                No events found.
              </td>
            </tr>
          ) : (
            currentEvents.map((event) => (
              <tr
                key={event.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-4 font-medium">{event.name}</td>

                <td className="p-4">{event.category}</td>

                <td className="p-4">{event.venue}</td>

                <td className="p-4">{event.date}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      event.status === "Open"
                        ? "bg-green-100 text-green-700"
                        : event.status === "Closed"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {event.status}
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => onEdit(event)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => onDelete(event.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EventTable;