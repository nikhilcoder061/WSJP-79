import { configureStore } from '@reduxjs/toolkit'
import AdminSlice from './reducers/AdminSlice';

const store = configureStore({
    reducer: {
        admin: AdminSlice
    },
})

export default store;