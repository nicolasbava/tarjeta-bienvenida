import { createSlice } from "@reduxjs/toolkit"

// creo el estado inicial y las props
const initialState = {
    value: 1,
    name: 'Nombre',
    charge: 'Cargo',
    text: 'Intereses personales',
    img: '/img/these-logo.jpg'
}


export const counterSlice = createSlice({

    name: "counter",
    initialState,
    reducers: {

        setName: function(state, action){
            state.name = action.payload
        },

        setCharge: function(state, action){
            state.charge = action.payload
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

export const { setName, setCharge, setText, setImage } = counterSlice.actions
export default counterSlice.reducer