function Pagination({
  currentPage,
  setCurrentPage,
  totalEvents,
  eventsPerPage,
}) {
  const totalPages = Math.ceil(totalEvents / eventsPerPage);

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      <button
        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
      >
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={`px-4 py-2 rounded-lg ${
            currentPage === index + 1
              ? "bg-blue-600 text-white"
              : "bg-gray-200"
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() =>
          setCurrentPage((p) => Math.min(p + 1, totalPages))
        }
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;