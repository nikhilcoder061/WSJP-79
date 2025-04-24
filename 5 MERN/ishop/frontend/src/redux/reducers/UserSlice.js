import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
    name: 'user',
    initialState: {
        data: null,
        token: null
    },
    reducers: {
        login(state, current) {
            localStorage.setItem('userLogin', JSON.stringify(current.payload.data));
            localStorage.setItem('userToken', current.payload.token);
            state.data = current.payload.data;
            state.token = current.payload.token;
        },
        logout(state) {
            state.data = null;
            localStorage.removeItem('userLogin');

        }
    },
})

// Action creators are generated for each case reducer function
export const { login, logout } = UserSlice.actions

export default UserSlice.reducer