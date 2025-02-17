import React from 'react'

export default function Display({ allToDo, deleteHandeler }) {


    const deleteToDo = (indexNum) => {
        deleteHandeler(indexNum)
    }

    return (
        <ul className="mt-4 space-y-3" >
            {
                allToDo.map(
                    (listItem, listIndex) => {
                        return (
                            <li key={listIndex} className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
                                <span className="flex-1">{listItem}</span>
                                <button onClick={() => deleteToDo(listIndex)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                                    Delete
                                </button>
                            </li>
                        )
                    }
                )
            }

        </ul>
    )
}
