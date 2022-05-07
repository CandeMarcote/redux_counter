import { createSlice } from '@reduxjs/toolkit';

const authInitialState = { auth: false};

const authSlice = createSlice ({
    name: 'auth',
    initialState: authInitialState,
    reducers: {
        login(state) {
            state.auth = true;
        },
        logout(state) {
            state.auth = false;
        },
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;