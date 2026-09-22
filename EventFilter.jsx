function EventFilter({ category, setCategory }) {
  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="border rounded-xl px-4 py-3"
    >
      <option value="All">All Categories</option>
      <option value="Technology">Technology</option>
      <option value="Workshop">Workshop</option>
      <option value="Sports">Sports</option>
      <option value="Seminar">Seminar</option>
      <option value="Conference">Conference</option>
    </select>
  );
}

export default EventFilter;