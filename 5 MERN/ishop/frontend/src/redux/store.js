import { configureStore } from '@reduxjs/toolkit'
import AdminSlice from './reducers/AdminSlice';
import CartSlice from './reducers/CartSlice';
import UserSlice from './reducers/UserSlice';

const store = configureStore({
    reducer: {
        admin: AdminSlice,
        cart: CartSlice,
        user: UserSlice
    },
})

export default store;