import { createSlice } from '@reduxjs/toolkit';
import { connectionsApi } from './connectionsApi';

const initialState = {
    userName: '',
    email: '',
    token: '',
    isLogIn: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addMatcher(
            connectionsApi.endpoints.signupUser.matchFulfilled,
            (state, { payload }) => {
                state.userName = payload.user.name;
                state.email = payload.user.email;
                state.token = payload.token;
                state.isLogIn = true;
            }
        )
        builder.addMatcher(
            connectionsApi.endpoints.loginUser.matchFulfilled,
            (state, { payload }) => {
                state.userName = payload.user.name;
                state.email = payload.user.email;
                state.token = payload.token;
                state.isLogIn = true;
            }
        )
        builder.addMatcher(
            connectionsApi.endpoints.logoutUser.matchFulfilled,
            (state, _) => {
                state.userName = '';
                state.email = '';
                state.token = '';
                state.isLogIn = false;
            }
        );
    },
});

export const { getUser } = userSlice.actions;