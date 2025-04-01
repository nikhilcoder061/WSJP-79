import React from 'react'

export default function AddColor() {
  return (
    <div className='flex justify-center items-center my-5'>
      <div className="bg-white p-6 rounded-lg shadow-md w-96 border">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Add Color</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Color Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter color name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Color Slug</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter color slug"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Pick a Color
            </label>
            <input
              type="color"
              className="w-full h-10 p-1 border rounded-md cursor-pointer"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Add Color
          </button>
        </form>
      </div>
    </div>


  )
}
