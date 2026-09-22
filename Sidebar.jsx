import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaCalendarAlt,
  FaUsers,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaHospital,
  FaChartBar,
  FaCog,
  FaBell,
} from "react-icons/fa";

const menuItems = [
  {
    icon: <FaHome />,
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: <FaCalendarAlt />,
    title: "Events",
    path: "/events",
  },
  {
    icon: <FaUsers />,
    title: "Participants",
    path: "/participants",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Venues",
    path: "/venues",
  },
  {
    icon: <FaShieldAlt />,
    title: "Security",
    path: "/security",
  },
  {
    icon: <FaHospital />,
    title: "Emergency",
    path: "/emergency",
  },
  {
    icon: <FaChartBar />,
    title: "Analytics",
    path: "/analytics",
  },
  {
    icon: <FaBell />,
    title: "Notifications",
    path: "/notifications",
  },
  {
    icon: <FaCog />,
    title: "Settings",
    path: "/settings",
  },
];

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-900/95 backdrop-blur-xl border-r border-slate-700 text-white shadow-2xl flex flex-col z-50">

      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 flex items-center justify-center text-2xl font-bold shadow-lg">
            S
          </div>

          <div>
            <h1 className="text-xl font-bold">Smart Events</h1>
            <p className="text-xs text-slate-400">
              Management System
            </p>
          </div>
        </div>
      </div>

      {/* User Card */}
      <div className="mx-4 mt-6 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-4 shadow-lg">
        <div className="flex items-center gap-3">
          <img
            src="https://ui-avatars.com/api/?name=Admin&background=ffffff&color=2563eb"
            alt="Admin"
            className="w-12 h-12 rounded-full border-2 border-white"
          />

          <div>
            <h3 className="font-semibold">Administrator</h3>
            <p className="text-xs text-blue-100">
              Online
            </p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-6 overflow-y-auto">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `group flex items-center gap-4 rounded-xl px-4 py-3 mb-3 transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg"
                  : "hover:bg-slate-800 hover:translate-x-2"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">
              {item.title}
            </span>
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-700 p-4">
        <div className="rounded-xl bg-slate-800 p-4">
          <p className="text-sm font-semibold">
            Smart Event System
          </p>

          <p className="text-xs text-slate-400 mt-1">
            Version 1.0.0
          </p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;