import React, { createContext, useState } from 'react'


export const Context = createContext();

export default function MainContext({ children }) {

    const [cart, setCart] = useState(0);

    return (
        <>
            <Context.Provider value={{ cart, setCart }}>
                {children}
            </Context.Provider>
        </>
    )
}
