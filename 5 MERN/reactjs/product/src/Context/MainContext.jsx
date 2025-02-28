import React, { createContext, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';


export const Context = createContext();

export default function MainContext({ children }) {

    const oldCartData = JSON.parse(localStorage.getItem("CART")) ?? [];

    const [cart, setCart] = useState(oldCartData);

    useEffect(
        () => {
            localStorage.setItem("CART", JSON.stringify(cart));
        }, [cart]
    )

    return (
        <>
            <Context.Provider value={{ cart, setCart, toast }}>
                {children}
            </Context.Provider>
            <ToastContainer autoClose={1000} position="bottom-right" />
        </>
    )
}
