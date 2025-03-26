import React from 'react'
import { Link } from 'react-router-dom'

export default function ViewCategory() {
  return (


    <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Category List</h2>
        {/* Add Category Button */}
        <Link
          to={'/admin/category/add'}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Category
        </Link>
      </div>
      <table className="w-full text-center border border-gray-300">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="p-3 border">#</th>
            <th className="p-3 border">Category Name</th>
            <th className="p-3 border">Slug</th>
            <th className="p-3 border">Image</th>
            <th className="p-3 border">Status</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100 ">
            <td className="p-1 border">1</td>
            <td className="p-1 border">Electronics</td>
            <td className="p-1 border">electronics</td>
            <td className="p-1 border">
              <img
                src="https://via.placeholder.com/50"
                alt="category"
                className="w-12 h-12 object-cover rounded"
              />
            </td>
            <td className="p-1 border">
              <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                Active
              </button>
            </td>
            <td className="p-1 border space-x-2">
              <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
                Edit
              </button>
              <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                Delete
              </button>
            </td>
          </tr>
          {/* More rows can be added here */}
        </tbody>
      </table>
    </div>

  )
}
