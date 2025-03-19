import React from 'react'

export default function Form() {
    return (
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">User Information Form</h2>
            <form action="#" method="POST">
                <div className="grid grid-cols-1 gap-6">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="font-medium mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required=""
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required=""
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="phone" className="font-medium mb-2">
                            Phone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required=""
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="age" className="font-medium mb-2">
                            Age
                        </label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required=""
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="font-medium mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required=""
                        />
                    </div>
                    <div className="flex justify-center mt-6">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>

    )
}
