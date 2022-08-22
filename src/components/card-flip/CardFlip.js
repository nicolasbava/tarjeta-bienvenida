import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import './CardFlip.css'



const CardFlip = () => {

    const img = useSelector( ( state ) =>  state.counter.img)
    const name = useSelector( ( state ) =>  state.counter.name)
    const charge = useSelector( ( state ) =>  state.counter.charge)
    const text = useSelector( ( state ) =>  state.counter.text)

    // let cardFlip = useRef()
   
    // const flip = function (e) {
    //     cardFlip.classList.toggle('is-flipped');
    // }

    useEffect(() => {
        const card = document.querySelector(".card__inner");

        card.addEventListener("mouseenter", function (e) {
            card.classList.toggle('is-flipped');
        });

        card.addEventListener("mouseleave", function (e) {
            card.classList.toggle('is-flipped');
        });

    }, []);

    

    return (

            <div className="card" >
		        <div className="card__inner">
                    <div className="card__face card__face--front" >
                        <div className="card__header--point-front"></div>
                        <img src='/img/these-logo.jpg' alt="" className="pp" />
                        <h2>THESE</h2>
                    </div>
                    <div className="card__face card__face--back" >
                        <div id='card__download' className="card__content" >
                            <div className="card__header">
                                <div className="card__header--point-back"></div>
                                <img src={img} alt="" className="pp" />
                                <h2>{name}</h2>
                            </div>
                            <div className="card__body">
                                <h3>{charge}</h3>
                                <p>{text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );
}

export default CardFlip;

/*

                    */
