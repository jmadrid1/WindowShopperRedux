import { createSlice } from '@reduxjs/toolkit'
import { AuthUser } from '../../types/AuthUser';

interface IAuthState {
    user: AuthUser;
}

const initialState: IAuthState = {
    user: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, {payload}) => { state.user = payload },
        signOut: (state) => { state.user = null },
    },
})

export const { login, signOut } = authSlice.actions

export const selectUser = (state) => state.auth.user

export default authSlice.reducer