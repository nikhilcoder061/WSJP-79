import { createSlice } from '@reduxjs/toolkit'

export const AdminSlice = createSlice({
    name: 'admin',
    initialState: {
        data: null,
    },
    reducers: {
        login(state, current) {
            localStorage.setItem('adminLogin', JSON.stringify(current.payload));
            state.data = current.payload;
        },
        logout(state) {
            state.data = null;
            localStorage.removeItem('adminLogin');
            
        }
    },
})

// Action creators are generated for each case reducer function
export const { login, logout } = AdminSlice.actions

export default AdminSlice.reducer