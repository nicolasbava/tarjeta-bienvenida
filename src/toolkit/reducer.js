import { createSlice } from "@reduxjs/toolkit"

// creo el estado inicial y las props
const initialState = {
    value: 1,
    name: 'Juanita',
    text: 'Some text...',
    img: 'img'
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
        },
        incrementByAmount(state, action) {
            state.value += action.payload
        },
        setName: function(state, action){
            state.name = action.payload
        },
        setText: function(state,action){
            state.text = action.payload
        },
        setImage: function(state,action){
            state.img = action.payload
        }
    }
})

console.log('counterSlice.reducer', counterSlice.reducer.increment)

export const { increment, decrement, incrementByAmount, setName, setText, setImage } = counterSlice.actions
export default counterSlice.reducer