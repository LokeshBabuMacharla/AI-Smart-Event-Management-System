import DashboardLayout from "../components/layout/DashboardLayout";

import StatsCards from "../components/dashboard/StatsCards";
import Charts from "../components/dashboard/Charts";
import CategoryChart from "../components/dashboard/CategoryChart";
import ActivityTimeline from "../components/dashboard/ActivityTimeline";
import QuickActions from "../components/dashboard/QuickActions";
import AIInsights from "../components/dashboard/AIInsights";
import CalendarWidget from "../components/dashboard/CalendarWidget";
import NotificationsPanel from "../components/dashboard/NotificationsPanel";

import RecentEvents from "../components/tables/RecentEvents";

import {
  FaCalendarCheck,
  FaPlusCircle,
  FaDownload,
} from "react-icons/fa";

function Dashboard() {
  return (
    <DashboardLayout>

      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">

        <div>
          <h1 className="text-4xl font-extrabold text-slate-800">
            Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Welcome back! Here's what's happening today.
          </p>
        </div>

        <div className="flex gap-3 mt-5 lg:mt-0">

          <button className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-3 rounded-xl shadow-lg">
            <FaPlusCircle />
            Create Event
          </button>

          <button className="flex items-center gap-2 bg-white border px-5 py-3 rounded-xl shadow">
            <FaDownload />
            Export
          </button>

        </div>

      </div>

      {/* Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 text-white p-8 shadow-2xl mb-8">

        <div className="absolute -top-16 -right-16 w-56 h-56 bg-white/10 rounded-full"></div>

        <div className="absolute -bottom-20 -left-16 w-64 h-64 bg-white/10 rounded-full"></div>

        <div className="relative z-10">

          <div className="flex items-center gap-3 mb-4">

            <FaCalendarCheck size={34} />

            <h2 className="text-3xl font-bold">
              Smart Event Management System
            </h2>

          </div>

          <p className="text-cyan-100 text-lg max-w-3xl">
            Monitor live events, manage participants, track venues,
            view analytics and keep your operations running smoothly.
          </p>

        </div>

      </div>

      {/* Stats */}
      <StatsCards />

      {/* Charts */}
      <div className="grid lg:grid-cols-3 gap-6 mt-8">

        <div className="lg:col-span-2">
          <Charts />
        </div>

        <CategoryChart />

      </div>

      {/* AI & Timeline */}
      <div className="grid lg:grid-cols-2 gap-6 mt-8">

        <AIInsights />

        <ActivityTimeline />

      </div>

      {/* Calendar & Notifications */}
      <div className="grid lg:grid-cols-2 gap-6 mt-8">

        <CalendarWidget />

        <NotificationsPanel />

      </div>

      {/* Quick Actions */}
      <div className="mt-8">

        <QuickActions />

      </div>

      {/* Recent Events */}
      <div className="mt-8 bg-white rounded-3xl shadow-lg p-6">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold">
            Recent Events
          </h2>

          <button className="text-cyan-600 font-semibold hover:text-cyan-700">
            View All →
          </button>

        </div>

        <RecentEvents />

      </div>

    </DashboardLayout>
  );
}

export default Dashboard;