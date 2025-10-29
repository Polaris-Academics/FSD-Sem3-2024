import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, handleInput, increment } from '../features/counter/counterSlice'

const Counter = () => {
  const count = useSelector(state => state.myCounter.count);
  const step = useSelector(state => state.myCounter.step);
  const dispatch = useDispatch();
  return (
    <div>
        <h2>{count}</h2>
        <input type="number" value={step} onChange={(e) => dispatch(handleInput(Number(e.target.value)))} />
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
    </div>
  )
}

export default Counter