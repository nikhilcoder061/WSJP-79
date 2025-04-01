import React from 'react'
import { Link } from 'react-router-dom'

export default function ViewColor() {
  return (
    <div className="container mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-700">Color List</h2>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"'>
          <Link to={'/admin/color/add'}>Add Color</Link>
        </button>
      </div> 
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Color Name</th>
            <th className="border p-2">Color Slug</th>
            <th className="border p-2">Color Code</th>
            <th className="border p-2">Color View</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="border p-2">Red</td>
            <td className="border p-2">red-color</td>
            <td className="border p-2">#FF0000</td>
            <td className="border p-2">
              <span
                className="inline-block w-6 h-6 rounded-full"
                style={{ backgroundColor: "#FF0000" }}
              />
            </td>
            <td className="border p-2">
              <button className="bg-green-500 text-white px-3 py-1 rounded-md">
                Active
              </button>
            </td>
            <td className="border p-2">
              <button className="bg-yellow-500 text-white px-3 py-1 rounded-md mr-2">
                Edit
              </button>
              <button className="bg-red-500 text-white px-3 py-1 rounded-md">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
