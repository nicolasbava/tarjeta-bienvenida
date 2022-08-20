import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 1
}

export const counterSlice = createSlice({

    name: "counter",
    initialState,
    reducers: {

        increment: function(state){
            console.log('aaa',state)
            state.value += 1
        },
        decrement: function(state){
            state.value -= 1
        }
    }
})

console.log('counterSlice.reducer', counterSlice.reducer.increment)

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer