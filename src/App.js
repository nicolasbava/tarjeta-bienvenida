import logo from './logo.svg';
import './App.css';

import { useSelector, useDispatch } from 'react-redux'
// import { increase, decrease } from './redux/action'
import { increment, decrement } from './toolkit/reducer'

function App() {

  const count = useSelector( ( state ) =>  state.counter.value)

  console.log('count:',count)

  let dispatch = useDispatch()

  console.log('dispatch', dispatch)

  return (
    <div className="App">
      <h1>Redux Toolkit</h1>

      <button onClick={ () => dispatch(decrement()) }>Decrement</button>
      <span> {count} </span>
      <button onClick={ () => dispatch(increment()) }>Increment</button>
    </div>
  );
}

export default App;
