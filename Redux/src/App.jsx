import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decremented, incremented } from './store/counterSlice'

export function App() {
  const count = useSelector(state => state.reducer.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incremented())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decremented())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default App;