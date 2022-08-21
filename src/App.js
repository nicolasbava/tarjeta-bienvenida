import React from 'react';
import './App.css';

import { useSelector, useDispatch } from 'react-redux'

import Form from './components/form/Form';
import ButtonDownload from './components/button/ButtonDownload';
import CardFlip from './components/card-flip/CardFlip';

function App() {

   return (
    <div className="App">
      <h1 data-testid='test-h1'>Tarjeta de Bienvenida</h1>
      <div className='app__flex' >
        <Form />
        <CardFlip />
      </div>
      <ButtonDownload />
    </div>
  );
}

export default App;
