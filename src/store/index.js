/* import { createStore } from 'redux'; */
import { createSlice, configureStore } from '@reduxjs/toolkit';

/* export const IDENTIFIERS ={
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    INCREASE: 'INCREASE',
    TOGGLE: 'TOGGLE',
} */

const initialState = {
    counter: 0, 
    showCounter: true,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
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

/* const counterRedux = (state = initialState, action) => {
    switch(action.type) {
        case IDENTIFIERS.INCREMENT:
            return {
                counter : state.counter +1,
                showCounter: state.showCounter,
            }
        case IDENTIFIERS.DECREMENT:
            return {
                counter : state.counter -1,
                showCounter: state.showCounter,
            }
        case IDENTIFIERS.INCREASE:
            return {
                counter : state.counter + action.amount,
                showCounter: state.showCounter,
            }
        case IDENTIFIERS.TOGGLE:
            return {
                counter : state.counter,
                showCounter: !state.showCounter,
            }
        default:
            return state
    }
}

const store = createStore(counterRedux);
*/

const store = configureStore({
    reducer: counterSlice.reducer
})
export const counterActions = counterSlice.actions
export default store;