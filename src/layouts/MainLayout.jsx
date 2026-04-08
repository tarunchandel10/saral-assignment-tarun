import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function MainLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 relative overflow-hidden">

      {/* Sidebar */}
      <div
        className={`
          fixed inset-y-0 left-0 z-40 w-64 bg-[#FDEFFD] border-r p-4 flex flex-col
          transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static
        `}
      >
        <h2 className="text-lg font-semibold mb-6 px-3">Saral</h2>

        <div className="space-y-2 text-sm nav_url">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg ${
                isActive
                  ? "bg-white text-purple-600"
                  : "text-gray-500 hover:bg-gray-100"
              }`
            }
          >
            <img src="/Home.svg" className="w-5 h-5" />
            <span>Home</span>
          </NavLink>

          <NavLink
            to="/insights"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg ${
                isActive
                  ? "bg-white text-purple-600"
                  : "text-gray-500 hover:bg-gray-100"
              }`
            }
          >
            <img src="/Brain.svg" className="w-5 h-5" />
            <span>Insights</span>
          </NavLink>

          <NavLink
            to="/gamification"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg ${
                isActive
                  ? "bg-white text-purple-600"
                  : "text-gray-500 hover:bg-gray-100"
              }`
            }
          >
            <img src="/Briefcase.svg" className="w-5 h-5" />
            <span>Gamification</span>
          </NavLink>

          <NavLink
            to="/applications"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg ${
                isActive
                  ? "bg-white text-purple-600"
                  : "text-gray-500 hover:bg-gray-100"
              }`
            }
          >
            <img src="/applications.svg" className="w-5 h-5" />
            <span>Applications</span>
          </NavLink>

          <NavLink
            to="/payments"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg ${
                isActive
                  ? "bg-white text-purple-600"
                  : "text-gray-500 hover:bg-gray-100"
              }`
            }
          >
            <img src="/Wallet.svg" className="w-5 h-5" />
            <span>Payments</span>
          </NavLink>

        </div>

        <div className="absolute bottom-4 text-sm text-gray-500 px-3">
          Settings
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Right side */}
      <div className="flex-1 flex flex-col w-full">

        {/* Header */}
        <div className="bg-white flex items-center justify-between px-4 md:px-6 py-3 gap-4 ">
          
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          <h2 className="font-semibold text-base md:text-lg">
            Gamification
          </h2>

          <div className="flex items-center gap-2 md:gap-3 ml-auto">
            <img src="/Notification.svg" className="w-6 md:w-8 h-6 md:h-8" />
            <div className="w-6 md:w-8 h-6 md:h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6 overflow-auto">
          {children}
        </div>

      </div>
    </div>
  );
}