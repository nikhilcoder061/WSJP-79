import axios from 'axios';
import React, { createContext, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

export const MainContext = createContext();

export default function Context({ children }) {
    const [allCategory, setAllCategory] = useState([]);
    const [allColor, setAllColor] = useState([]);
    const [allProduct, setAllProduct] = useState([]);

    const API_BASE_URL = "http://localhost:5000";
    const CATEGORY_URL = "/category";
    const COLOR_URL = "/color";
    const PRODUCT_URL = "/product";
    const toastNotify = (msg, status) => toast(msg, { type: status == true ? 'success' : 'error' });

    // fetch all category start
    const fetchAllCategory = (category_id = null) => {

        let categoryApiURL = API_BASE_URL + CATEGORY_URL

        if (category_id) {
            categoryApiURL += `/${category_id}`
        }

        axios.get(categoryApiURL).then(
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

    // fetch all color start
    const fetchAllColor = (color_id = null) => {

        let colorApiURL = API_BASE_URL + COLOR_URL

        if (color_id) {
            colorApiURL += `/${color_id}`
        }

        axios.get(colorApiURL).then(
            (success) => {
                setAllColor(success.data.color);
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )
    }
    // fetch all color end

    // fetch products start
    const fetchAllProduct = (product_id = null) => {

        let productApiURL = API_BASE_URL + PRODUCT_URL

        if (product_id) {
            productApiURL += `/${product_id}`
        }

        axios.get(productApiURL).then(
            (success) => {
                setAllProduct(success.data.product);
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )
    }
    // fetch products end

    return (
        <MainContext.Provider value={{
            toastNotify, fetchAllCategory, fetchAllColor, fetchAllProduct, allColor, allCategory, allProduct,
            API_BASE_URL, CATEGORY_URL, COLOR_URL, PRODUCT_URL
        }}>
            {children}
            <ToastContainer autoClose={500} />
        </MainContext.Provider>
    )
}
