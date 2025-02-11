import React, { useState } from 'react'

export default function Layout({ price }) {

    const [count, setCount] = useState(1);

    const inc = () => {
        setCount(count + 1)
    }

    const decs = () => {
        setCount(count - 1)
    }

    return (
        <div className={`d-flex justify-content-center align-items-center mx-auto my-2 w-75 gap-5 ${count >= 5 ? 'bg-info' : 'bg-secondary-subtle'}`}>
            <h1>{price}</h1>
            <button disabled={count <= 1 ? true : false} className='btn btn-primary' onClick={decs}>-</button>
            <h1>{count}</h1>
            <button className='btn btn-primary' onClick={inc}>+</button>
            <h1 className={`${count >= 5 ? 'text-success' : ''}`}>{count * price}</h1>
        </div>
    )
}
