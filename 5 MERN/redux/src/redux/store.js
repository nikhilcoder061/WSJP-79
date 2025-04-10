import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './reducers/counterSlice'
import cartSlice from './reducers/cartSlice';

const store = configureStore({
    reducer: {
        counter: counterSlice,
        cart: cartSlice
    },
})

export default store;