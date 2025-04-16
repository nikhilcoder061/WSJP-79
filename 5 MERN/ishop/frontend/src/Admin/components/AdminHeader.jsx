import React from 'react'
import { useSelector } from 'react-redux'

export default function AdminHeader() {

  const admin = useSelector((state) => state.admin.data);

  // console.log(admin);


  return (
    <header className="bg-white shadow flex items-center justify-between px-6 py-2">
      <h1 className="text-2xl font-semibold text-gray-800">Welcome to I Shop Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-700">Welcome, {admin?.name}</span>
        <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
          Logout
        </button>
      </div>
    </header>

  )
}
