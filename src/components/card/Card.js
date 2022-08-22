import './card.css'
import React from 'react';
import { useSelector } from 'react-redux'


const Card = () => {

    // useSelector to access global state
    // define every individual state
    const img = useSelector( ( state ) =>  state.counter.img)
    const name = useSelector( ( state ) =>  state.counter.name)
    const text = useSelector( ( state ) =>  state.counter.text)

    return (
        <div className='card' >
            <img src={img} width='300' height='300'/>
            <h3>{name}</h3>
            <p>{text}</p>
        </div>
    );
}

export default Card;
