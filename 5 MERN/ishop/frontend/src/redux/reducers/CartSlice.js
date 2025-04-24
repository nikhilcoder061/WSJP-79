import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        data: [],
    },
    reducers: {
        addToCart(state, current) {

            const product = state.data.find((product) => product.product_id == current.payload.product_id);
            if (product) {
                product.qty++;
            } else {
                state.data.push({ product_id: current.payload.product_id, qty: 1 });
            }

            localStorage.setItem("cartItem", JSON.stringify(state.data));
        },
        removeToCart(state) {

        },

        lsGetdata(state) {
            const oldCartData = JSON.parse(localStorage.getItem("cartItem")) ?? [];
            state.data = oldCartData;
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeToCart, lsGetdata } = CartSlice.actions

export default CartSlice.reducer