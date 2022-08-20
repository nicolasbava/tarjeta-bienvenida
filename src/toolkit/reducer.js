import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 1
}

export const counterSlice = createSlice({

    name: "counter",
    initialState,
    reducer: {

        increment: function(state){
            console.log('aaa',state)
            state.value += 1
        },
        decrement: function(state){
            state.value -= 1
        }
    }
})

console.log('counterSlice.reducer', counterSlice)

export const { increment, decrement } = counterSlice
export default counterSlice.reducer