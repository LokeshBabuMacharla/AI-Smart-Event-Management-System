import { useEffect, useState } from "react";

function EditEventModal({
  isOpen,
  onClose,
  onSave,
  selectedEvent,
}) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    venue: "",
    date: "",
    status: "Open",
  });

  useEffect(() => {
    if (selectedEvent) {
      setFormData(selectedEvent);
    }
  }, [selectedEvent]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl p-8 w-full max-w-lg shadow-xl">

        <h2 className="text-2xl font-bold mb-6">
          Edit Event
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Event Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            type="text"
            name="venue"
            placeholder="Venue"
            value={formData.venue}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option>Open</option>
            <option>Closed</option>
            <option>Upcoming</option>
          </select>

          <div className="flex justify-end gap-3 pt-4">

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Update Event
            </button>

          </div>
        </form>
      </div>
    </div>
  );
}

export default EditEventModal;