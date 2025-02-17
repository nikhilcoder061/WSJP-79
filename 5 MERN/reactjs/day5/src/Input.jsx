import React, { useState } from 'react'

export default function Input() {

    const [inputValue, setInputValue] = useState(20)

    const newValue = (event) => {
        setInputValue(event.target.name.value);
    }


    return (
        <div>
            <input type="text" value={inputValue} onChange={newValue} name='name' />
        </div>
    )
}
