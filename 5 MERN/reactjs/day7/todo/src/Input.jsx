import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

export default function Input({ inputHandeler }) {


    const addToDo = (event) => {
        if (event.key == "Enter") {
            inputHandeler(event.target.value);
            event.target.value = '';
            toast.error("New Todo Added")
        }
    }

    return (
        <>
            <h1 className="text-2xl font-semibold text-center mb-6">To-Do List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Add a new task..."
                    className="w-full p-2 border border-gray-300 rounded-md mb-4"
                    onKeyUp={addToDo}
                />
            </div>
            <ToastContainer />
        </>
    )
}
