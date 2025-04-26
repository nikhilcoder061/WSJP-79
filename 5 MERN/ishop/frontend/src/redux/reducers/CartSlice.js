import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        data: [],
        totalOriginalPrice: 0,
        totalFinalPrice: 0
    },
    reducers: {
        addToCart(state, current) {

            const product = state.data.find((product) => product.product_id == current.payload.product_id);
            if (product) {
                product.qty++;
            } else {
                state.data.push({ product_id: current.payload.product_id, qty: 1 });
            }

            state.totalOriginalPrice += current.payload.original_price
            state.totalFinalPrice += current.payload.final_price

            localStorage.setItem("cartItem", JSON.stringify(state.data));
            localStorage.setItem("totalOriginalPrice", state.totalOriginalPrice);
            localStorage.setItem("totalFinalPrice", state.totalFinalPrice);
        },

        moveToCart(state, { payload }) {
            state.data = payload.data;
            state.totalOriginalPrice = payload.totalOriginalPrice
            state.totalFinalPrice = payload.totalFinalPrice

            localStorage.setItem("cartItem", JSON.stringify(state.data));
            localStorage.setItem("totalOriginalPrice", state.totalOriginalPrice);
            localStorage.setItem("totalFinalPrice", state.totalFinalPrice);
        },

        lsGetdata(state) {
            const oldCartData = JSON.parse(localStorage.getItem("cartItem")) ?? [];
            state.data = oldCartData;
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeToCart, lsGetdata, moveToCart } = CartSlice.actions

export default CartSlice.reducer