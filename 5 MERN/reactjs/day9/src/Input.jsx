import React from 'react'

export default function Input({ setSearch }) {

    // const inputHandeler = (event) => {
    //     searchMovie(event.target.value);
    // }

    return (
        <div className="mb-6" >
            <input
                type="text"
                placeholder="Enter something..."
                className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyUp={() => setSearch(event.target.value)}
            />
        </div>
    )
}
