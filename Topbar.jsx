import {
  FaBell,
  FaSearch,
  FaUserCircle,
  FaEnvelope,
  FaMoon,
  FaCog,
} from "react-icons/fa";

function Topbar() {
  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm flex items-center justify-between px-8 z-40">

      {/* Search */}
      <div className="flex items-center bg-gray-100 rounded-xl px-4 py-2 w-[420px] transition-all duration-300 focus-within:ring-2 focus-within:ring-cyan-500">

        <FaSearch className="text-gray-500" />

        <input
          type="text"
          placeholder="Search events, venues, participants..."
          className="bg-transparent outline-none ml-3 w-full text-sm"
        />

      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">

        {/* Dark Mode */}
        <button className="w-11 h-11 rounded-xl bg-gray-100 hover:bg-cyan-500 hover:text-white transition duration-300 flex items-center justify-center shadow">
          <FaMoon />
        </button>

        {/* Messages */}
        <button className="relative w-11 h-11 rounded-xl bg-gray-100 hover:bg-blue-500 hover:text-white transition duration-300 flex items-center justify-center shadow">

          <FaEnvelope />

          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center">
            5
          </span>

        </button>

        {/* Notifications */}
        <button className="relative w-11 h-11 rounded-xl bg-gray-100 hover:bg-red-500 hover:text-white transition duration-300 flex items-center justify-center shadow">

          <FaBell />

          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-600 text-white text-[10px] flex items-center justify-center animate-pulse">
            3
          </span>

        </button>

        {/* Settings */}
        <button className="w-11 h-11 rounded-xl bg-gray-100 hover:bg-indigo-500 hover:text-white transition duration-300 flex items-center justify-center shadow">
          <FaCog />
        </button>

        {/* Divider */}
        <div className="h-8 w-px bg-gray-300"></div>

        {/* Profile */}
        <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-2 shadow hover:shadow-lg transition duration-300 cursor-pointer">

          <FaUserCircle
            size={42}
            className="text-cyan-600"
          />

          <div>

            <h4 className="font-semibold text-gray-800">
              Administrator
            </h4>

            <p className="text-xs text-gray-500">
              Smart Event Manager
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Topbar;