/********* BUTTON TO DOWNLOAD IMAGE  ***********/

import React, { useCallback, useEffect } from 'react';
import './ButtonDownload.css'
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';


const ButtonDownload = () => {

    // define the card to download
    let card

    // once DOM rendered we select the html element to download
    useEffect(() => {
        card = document.querySelector('#card__download')
    }, []);
    
    // canvas does a screenshot from an html 
    // in this case the html is the card
    // then it makes a url to download the image
    // then download front and back image
    const handleCaptureClick = useCallback(async () => {
        const canvas = await html2canvas(card);
        const dataURL = canvas.toDataURL('image/png');
        downloadjs(dataURL, 'card.png', 'image/png');
    }, []);

    return (
        <div className='container__button'>
            <button onClick={handleCaptureClick}> Descargar Tarjeta </button>
            <a className='container__button--a' href="/img/these-logo.jpg" target="_blank" download>Descargar contra tarjeta</a>
        </div>
    );
}

export default ButtonDownload;
