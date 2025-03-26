import React from 'react'

export default function AdminSidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col shadow-lg">
      <div className="text-2xl font-bold p-6 border-b border-gray-700">
        Admin Panel
      </div>
      <nav className="flex-1 p-4 space-y-4">
        <a href="#" className="block p-3 rounded-lg hover:bg-gray-700">
          Dashboard
        </a>
        <a href="#" className="block p-3 rounded-lg hover:bg-gray-700">
          Category
        </a>
        <a href="#" className="block p-3 rounded-lg hover:bg-gray-700">
          Colors
        </a>
        <a href="#" className="block p-3 rounded-lg hover:bg-gray-700">
          Products
        </a>
      </nav>
      <div className="p-4 border-t border-gray-700">
        <a
          href="#"
          className="block p-3 rounded-lg bg-red-600 hover:bg-red-700 text-center"
        >
          Logout
        </a>
      </div>
    </div>

  )
}
