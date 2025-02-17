import React, { useState } from 'react'
import Input from './Input'
import Display from './Display'

export default function Website() {

    const [allToDo, setAllToDo] = useState(['sita', 'ram', 'shyam', 'gita', 'hello']);

    const inputHandeler = (value) => {
        const finalToDo = [...allToDo, value];
        setAllToDo(finalToDo);
    }

    const deleteHandeler = (index) => {
        const finalToDo = allToDo.filter(
            (listItem, listIndex) => {
                return listIndex != index
            }
        )
        setAllToDo(finalToDo);
    }


    return (
        <>
            <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
                <Input inputHandeler={inputHandeler} />
                <Display allToDo={allToDo} deleteHandeler={deleteHandeler} />
            </div>
        </>

    )
}
