import { useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import AddEventModal from "../components/forms/AddEventModal";

function Events() {
  const [events, setEvents] = useState([
    {
      id: 1,
      name: "Hackathon 2025",
      category: "Technology",
      date: "20 Jun 2025",
      venue: "Main Hall",
      status: "Upcoming",
    },
    {
      id: 2,
      name: "AI Workshop",
      category: "Workshop",
      date: "25 Jun 2025",
      venue: "Lab 2",
      status: "Open",
    },
    {
      id: 3,
      name: "Sports Meet",
      category: "Sports",
      date: "30 Jun 2025",
      venue: "College Ground",
      status: "Completed",
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  const handleSaveEvent = (newEvent) => {
    const event = {
      id: events.length + 1,
      name: newEvent.title,
      category: newEvent.category,
      date: newEvent.date,
      venue: newEvent.venue,
      status: "Upcoming",
    };

    setEvents([event, ...events]);
  };

  const handleDelete = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-4xl font-bold">Events</h1>
          <p className="text-gray-500 mt-2">
            Manage all college events.
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow"
        >
          + Add Event
        </button>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-4">Event Name</th>
              <th className="text-left p-4">Category</th>
              <th className="text-left p-4">Date</th>
              <th className="text-left p-4">Venue</th>
              <th className="text-left p-4">Status</th>
              <th className="text-center p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {events.map((event) => (
              <tr
                key={event.id}
                className="border-t hover:bg-gray-50"
              >
                <td className="p-4">{event.name}</td>
                <td className="p-4">{event.category}</td>
                <td className="p-4">{event.date}</td>
                <td className="p-4">{event.venue}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      event.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : event.status === "Upcoming"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {event.status}
                  </span>
                </td>

                <td className="p-4 text-center space-x-2">
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded">
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(event.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AddEventModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSaveEvent}
      />
    </DashboardLayout>
  );
}

export default Events;