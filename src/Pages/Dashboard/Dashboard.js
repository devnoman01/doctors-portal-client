import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container bg-[#F1F5F9] mx-auto">
      <div className="drawer drawer-mobile h-full">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content p-3 h-full">
          {/* Page content here */}
          <h2 className="text-3xl">Welcome to your Dashboard</h2>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-fit bg-base-100 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to="/dashboard" className="border mb-3">
                My Appointments
              </Link>
            </li>
            <li>
              <Link to="/dashboard/history" className="border mb-3">
                My History
              </Link>
            </li>
            <li>
              <Link to="/dashboard/review" className="border mb-3">
                My Reviews
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
