import { createSlice, configureStore } from '@reduxjs/toolkit';


const counterInitialState = { counter: 0, showCounter: true, }
const authInitialState = { auth: false}

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
})

const counterSlice = createSlice({
    name: 'counter',
    initialState: counterInitialState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter = state.counter + action.payload
        },
        decrease(state, action) {
            state.counter = state.counter - action.payload
        },
        toggle(state) {
            state.showCounter = !state.showCounter
        },
    }
})

const store = configureStore({
    reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}
})
export const authActions = authSlice.actions;
export const counterActions = counterSlice.actions;
export default store;