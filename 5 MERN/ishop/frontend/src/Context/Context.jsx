import axios from 'axios';
import React, { createContext, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

export const MainContext = createContext();

export default function Context({ children }) {
    const [allCategory, setAllCategory] = useState([]);
    const API_BASE_URL = "http://localhost:5000";
    const CATEGORY_URL = "/category"
    const toastNotify = (msg, status) => toast(msg, { type: status == true ? 'success' : 'error' });

    // fetch all category start
    const fetchAllCategory = () => {
        axios.get(API_BASE_URL + CATEGORY_URL).then(
            (success) => {
                setAllCategory(success.data.category);
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )
    }
    // fetch all category end

    return (
        <MainContext.Provider value={{ toastNotify, fetchAllCategory, allCategory, API_BASE_URL, CATEGORY_URL }}>
            {children}
            <ToastContainer autoClose={500}/>
        </MainContext.Provider>
    )
}
