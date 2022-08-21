import { render, screen, cleanup } from '@testing-library/react';

import App from './App';
import reducer from './toolkit/reducer';

afterEach(cleanup)

function renderWithRedux(component, {initialState, store = createStore(reducer, initialState) = {}}
){}

it('renders with redux', ()=>{

  const { getByTestId, getByText} = render(<App />)
})

// test('renders title', () => {
//   render(<App />);
//   const title = screen.getByTestId('test-h1');
//   expect(title).toBeInTheDocument();
// });
