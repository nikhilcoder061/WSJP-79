import React from 'react'

export default function Table() {
    return (
        <div className="max-w-7xl mx-auto p-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">User Data Table</h2>
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-blue-500 text-white">
                    <tr>
                        <th className="px-6 py-3 text-left">Name</th>
                        <th className="px-6 py-3 text-left">Email</th>
                        <th className="px-6 py-3 text-left">Phone</th>
                        <th className="px-6 py-3 text-left">Age</th>
                        <th className="px-6 py-3 text-left">Password</th>
                        <th className="px-6 py-3 text-center">Active</th>
                        <th className="px-6 py-3 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Example Row 1 */}
                    <tr className="border-b">
                        <td className="px-6 py-4">John Doe</td>
                        <td className="px-6 py-4">johndoe@example.com</td>
                        <td className="px-6 py-4">123-456-7890</td>
                        <td className="px-6 py-4">25</td>
                        <td className="px-6 py-4">********</td>
                        <td className="px-6 py-4 text-center">
                            <button className="px-4 py-2 bg-green-500 text-white rounded-lg">
                                Active
                            </button>
                        </td>
                        <td className="px-6 py-4 text-center">
                            <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg">
                                Edit
                            </button>
                            <button className="px-4 py-2 bg-red-500 text-white rounded-lg ml-2">
                                Delete
                            </button>
                        </td>
                    </tr>
                    {/* Example Row 2 */}
                    <tr className="border-b">
                        <td className="px-6 py-4">Jane Smith</td>
                        <td className="px-6 py-4">janesmith@example.com</td>
                        <td className="px-6 py-4">098-765-4321</td>
                        <td className="px-6 py-4">30</td>
                        <td className="px-6 py-4">********</td>
                        <td className="px-6 py-4 text-center">
                            <button className="px-4 py-2 bg-red-500 text-white rounded-lg">
                                Inactive
                            </button>
                        </td>
                        <td className="px-6 py-4 text-center">
                            <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg">
                                Edit
                            </button>
                            <button className="px-4 py-2 bg-red-500 text-white rounded-lg ml-2">
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}
