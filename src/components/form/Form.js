import React, { useEffect, useRef } from 'react';
import './form.css'
import { useDispatch, useSelector } from 'react-redux'
import { setName, setCharge, setText, setImage } from '../../toolkit/reducer'

const Form = () => {

    let dispatch = useDispatch()


    let img = useRef()
    let name = useRef()
    let charge = useRef()
    let text = useRef()
    
    useEffect(() => {
    }, []);

    function handleChange(e){
        // console.log('FILES:',e.target.files[0]);
        // console.log('URL',URL.createObjectURL(e.target.files[0]));
        dispatch(setImage(URL.createObjectURL(e.target.files[0])));
    }

    return (
        <form className='form' id='form'>
            {/* IMAGEN */}
            <label for='img'>Imagen:</label>
            <input  ref={img} name='img' onChange={handleChange} type='file'></input>
            {/* NOMBRE */}
            <label for='name'>Nombre:</label>
            <input className='form__input' ref={name} onChange={()=> dispatch(setName(name.current.value))} type='text' name='name' placeholder='Inserte su nombre...'></input>
            {/* CARGO */}
            <label for='name'>Cargo:</label>
            <input className='form__input' ref={charge}  onChange={()=> dispatch(setCharge(charge.current.value))} type='text' name='charge' placeholder='Inserte su cargo...'></input>
            {/* TEXTO */}
            <label for='name'>Intereses</label>
            <textarea className='form__input' ref={text} onChange={()=> dispatch(setText(text.current.value))} name='text' placeholder='Inserte sus intereses...'></textarea>

        </form>
    );
}


export default Form;
