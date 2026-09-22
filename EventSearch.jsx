function EventSearch({ searchTerm, setSearchTerm }) {
  return (
    <div className="w-full md:w-80">
      <input
        type="text"
        placeholder="🔍 Search events..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default EventSearch;