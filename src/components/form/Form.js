import React, { useRef } from 'react';
import './form.css'
import { useDispatch } from 'react-redux'
import { setName, setCharge, setText, setImage } from '../../toolkit/reducer'

const Form = () => {

    // dispatch is used to update the state
    let dispatch = useDispatch()

    // ref to set every state
    let img = useRef() 
    let name = useRef()
    let charge = useRef()
    let text = useRef()

    // function that create the url for the image uploaded
    function handleChange(e){
        dispatch(setImage(URL.createObjectURL(e.target.files[0])));
    }

    return (
        // FORM
        <form className='form' id='form'>
            {/* IMAGE */}
            <label for='img'>Imagen:</label>
            <input className='form__input--file'  ref={img} name='img' onChange={handleChange} type='file'></input>
           
            {/* NAME */}
            <label for='name'>Nombre:</label>
            <input className='form__input' onChange={()=> dispatch(setName(name.current.value))} ref={name} type='text' name='name' placeholder='Inserte su nombre...'></input>
           
            {/* CHARGE */}
            <label for='name'>Cargo:</label>
            <input className='form__input' ref={charge}  onChange={()=> dispatch(setCharge(charge.current.value))} type='text' name='charge' placeholder='Inserte su cargo...'></input>
           
            {/* TEXT */}
            <label for='name'>Intereses</label>
            <textarea className='form__input form__textarea' ref={text} onChange={()=> dispatch(setText(text.current.value))} name='text' placeholder='Inserte sus intereses...'></textarea>

        </form>
    );
}


export default Form;
