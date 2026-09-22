import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 relative overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      {/* Sidebar */}
      <Sidebar />

      {/* Top Navigation */}
      <Topbar />

      {/* Main Content */}
      <main className="relative z-10 ml-64 mt-16 p-8 min-h-screen">
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;