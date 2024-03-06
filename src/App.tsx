import { useState } from 'react'

import { RootState } from './redux/store'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement,increment,incrementAsync ,decrementByAmount } from './redux/slices/counterSlice/counterSlice'

function App() {
  //ocupamos seleccionar alguna pieza del state
  const count = useSelector( (state : RootState) => state.counter.value)
  //despachar alguna funcion del slice
  const dispatch = useDispatch()
  const [num, setNum] = useState(0)
//incrementAsync(num) as any
  return (
  <>
    <h1>Redux Example</h1>
    <div>
    <span >{count}</span>
      <div>
      
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <br/>
        <input type='number' placeholder='Digit a number' onChange={ (a) => { setNum( Number(a.target.value) ) } } />
        <button
          aria-label="Increment by amount value"
          onClick={() => dispatch(incrementAsync(num) as any)}
        >
          IncrementByAmount
        </button>
        <button
          aria-label="Decrement by amount value"
          onClick={() => dispatch(decrementByAmount(num))}
        >
          DecrementByAmount
        </button>

      </div>
    </div>
  </>
  )
}

export default App
