import React, { useEffect, useRef } from 'react';
import './form.css'
import { useDispatch, useSelector } from 'react-redux'
import { setName, setText, setImage } from '../../toolkit/reducer'

const Form = () => {

    let dispatch = useDispatch()


    let img = useRef()
    let name = useRef()
    let text = useRef()
    
    useEffect(() => {
    }, []);

    function handleChange(e){
        // console.log('FILES:',e.target.files[0]);
        // console.log('URL',URL.createObjectURL(e.target.files[0]));
        dispatch(setImage(URL.createObjectURL(e.target.files[0])));
    }

    return (
        <form id='form'>
            <input ref={img} onChange={handleChange} type='file'></input>
            <input onChange={()=> dispatch(setName(name.current.value))} ref={name} type='text' name='name' placeholder='Inserte su nombre...'></input>
            <textarea ref={text} onChange={()=> dispatch(setText(text.current.value))} placeholder='Inserte el texto...'></textarea>
            {/* <img src={file} ></img> */}
            {/* <p 
                onClick={ ()=> {
                    dispatch(setImage(img))
                    dispatch(setName(name.current.value));
                    dispatch(setText(text.current.value))
                }}
            >Cargar datos</p> */}
        </form>
    );
}


export default Form;
