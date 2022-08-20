import logo from './logo.svg';
import './App.css';

import { useSelector, useDispatch } from 'react-redux'
// import { increase, decrease } from './redux/action'
import { increment, decrement, incrementByAmount } from './toolkit/reducer'

import Form from './components/form/Form';
import Card from './components/card/Card'
import ButtonDownload from './components/button/ButtonDownload';

function App() {

  const count = useSelector( ( state ) =>  state.counter.value)
  console.log('count:',count)

  let dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Tarjeta de Bienvenida</h1>

      {/* <button onClick={ () => dispatch(decrement()) }>Decrement</button>
      <span> {count} </span>
      <button onClick={ () => dispatch(incrementByAmount(5)) }>Increment</button> */}
      <Form />
      <Card />
      <ButtonDownload />
    </div>
  );
}

export default App;
