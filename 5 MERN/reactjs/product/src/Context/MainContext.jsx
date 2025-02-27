import React, { createContext, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';


export const Context = createContext();

export default function MainContext({ children }) {

    const [cart, setCart] = useState([]);

    console.log(cart);

    return (
        <>
            <Context.Provider value={{ cart, setCart, toast }}>
                {children}
            </Context.Provider>
            <ToastContainer autoClose={1000}/>
        </>
    )
}
