import { useState } from "react";

function AddEventModal({ isOpen, onClose, onSave }) {
  const [formData, setFormData] = useState({
    title: "",
    category: "Conference",
    date: "",
    venue: "",
    capacity: "",
    description: "",
  });

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

    setFormData({
      title: "",
      category: "Conference",
      date: "",
      venue: "",
      capacity: "",
      description: "",
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">

      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl p-8">

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-800">
            Add New Event
          </h2>

          <button
            onClick={onClose}
            className="text-2xl text-gray-500 hover:text-red-500"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="font-medium">Event Name</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full mt-2 rounded-xl border p-3"
            />
          </div>

          <div className="grid grid-cols-2 gap-5">

            <div>
              <label className="font-medium">Category</label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full mt-2 rounded-xl border p-3"
              >
                <option>Conference</option>
                <option>Workshop</option>
                <option>Seminar</option>
                <option>Festival</option>
                <option>Sports</option>
              </select>
            </div>

            <div>
              <label className="font-medium">Date</label>

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full mt-2 rounded-xl border p-3"
              />
            </div>

          </div>

          <div className="grid grid-cols-2 gap-5">

            <div>
              <label className="font-medium">Venue</label>

              <input
                type="text"
                name="venue"
                value={formData.venue}
                onChange={handleChange}
                className="w-full mt-2 rounded-xl border p-3"
              />
            </div>

            <div>
              <label className="font-medium">Capacity</label>

              <input
                type="number"
                name="capacity"
                value={formData.capacity}
                onChange={handleChange}
                className="w-full mt-2 rounded-xl border p-3"
              />
            </div>

          </div>

          <div>
            <label className="font-medium">Description</label>

            <textarea
              rows="4"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full mt-2 rounded-xl border p-3"
            />
          </div>

          <div className="flex justify-end gap-4">

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border px-6 py-3 hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
            >
              Save Event
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default AddEventModal;