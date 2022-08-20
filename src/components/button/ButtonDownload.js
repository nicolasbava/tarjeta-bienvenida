import React, { useCallback, useEffect } from 'react';

import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';

const ButtonDownload = () => {

    let card

    useEffect(() => {
        card = document.querySelector('.card')
    }, []);
    
    // funcion que descarga la tarjeta
    const handleCaptureClick = useCallback(async () => {
        const canvas = await html2canvas(card);
        const dataURL = canvas.toDataURL('image/png');
        downloadjs(dataURL, 'card.png', 'image/png');
    }, []);

    return (
        <div>
            <button onClick={handleCaptureClick}> Descargar Tarjeta </button>
        </div>
    );
}

export default ButtonDownload;
