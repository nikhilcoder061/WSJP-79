import { createSlice } from '@reduxjs/toolkit'

export const AdminSlice = createSlice({
    name: 'admin',
    initialState: {
        data: null,
    },
    reducers: {
        login(state) {

        },
        logout(state) {

        }
    },
})

// Action creators are generated for each case reducer function
export const { login, logout } = AdminSlice.actions

export default AdminSlice.reducer