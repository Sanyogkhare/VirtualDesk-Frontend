import React, { useEffect, useState } from "react";
import API from "../api/axios";
import {
  LogoutIcon,
  ClipboardListIcon,
  CheckCircleIcon,
  ChatAlt2Icon,
} from "@heroicons/react/outline";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/users/me")
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err.response?.data))
      .finally(() => setLoading(false));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
        <p className="text-gray-700 dark:text-gray-200 text-lg">
          Loading your dashboard...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-24 px-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Here's your personalized dashboard. Manage your profile and tasks.
          </p>
        </div>
        <div className="flex items-center mt-4 md:mt-0 space-x-4">
          <img
            src={`https://ui-avatars.com/api/?name=${user?.name}&background=4f46e5&color=fff&size=64`}
            alt="Avatar"
            className="w-16 h-16 rounded-full shadow-md"
          />
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          >
            <LogoutIcon className="h-5 w-5 mr-2" />
            Logout
          </button>
        </div>
      </div>

      {/* User Info Card */}
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Information</h2>
        <div className="space-y-2 text-gray-700 dark:text-gray-200">
          <p>
            <span className="font-medium">Name:</span> {user?.name}
          </p>
          <p>
            <span className="font-medium">Email:</span> {user?.email}
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-50 dark:bg-blue-800 hover:scale-105 transition-transform shadow-lg rounded-lg p-6 flex flex-col items-center justify-center">
          <ClipboardListIcon className="h-12 w-12 text-blue-500 dark:text-blue-300 mb-2" />
          <p className="text-3xl font-bold">5</p>
          <p className="text-gray-700 dark:text-gray-200 mt-1">Projects</p>
        </div>
        <div className="bg-green-50 dark:bg-green-800 hover:scale-105 transition-transform shadow-lg rounded-lg p-6 flex flex-col items-center justify-center">
          <CheckCircleIcon className="h-12 w-12 text-green-500 dark:text-green-300 mb-2" />
          <p className="text-3xl font-bold">12</p>
          <p className="text-gray-700 dark:text-gray-200 mt-1">Tasks Completed</p>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-800 hover:scale-105 transition-transform shadow-lg rounded-lg p-6 flex flex-col items-center justify-center">
          <ChatAlt2Icon className="h-12 w-12 text-yellow-500 dark:text-yellow-300 mb-2" />
          <p className="text-3xl font-bold">3</p>
          <p className="text-gray-700 dark:text-gray-200 mt-1">Messages</p>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
        <ul className="space-y-3 text-gray-700 dark:text-gray-200">
          <li className="p-3 bg-gray-100 dark:bg-gray-700 rounded-md">
            Logged in from new device
          </li>
          <li className="p-3 bg-gray-100 dark:bg-gray-700 rounded-md">
            Updated profile information
          </li>
          <li className="p-3 bg-gray-100 dark:bg-gray-700 rounded-md">
            Completed task: Design Landing Page
          </li>
        </ul>
      </div>
    </div>
  );
}
