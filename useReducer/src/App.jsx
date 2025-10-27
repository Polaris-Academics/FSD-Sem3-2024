import React from 'react'
import { useReducer } from 'react'

const initialState={count:0,step:1};

const reducer = (state,action) => {
  if(action.type == 'increment'){
    return {...state, count:state.count+1}
  }
  else if (action.type == 'decrement'){
    return {...state, count:state.count-1}
  }
}

const App = () => {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({type : 'increment'})}>+</button>
      <button onClick={() => dispatch({type : 'decrement'})}>-</button>
    </div>
  )
}

export default App