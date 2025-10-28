import React from 'react'
import { useReducer } from 'react'

const initialState={count:0,step:1};

const reducer = (state,action) => {
  if(action.type == 'increment'){
    return {...state, count:state.count+state.step}
  }
  else if (action.type == 'decrement'){
    return {...state, count:state.count-state.step}
  }
  else if(action.type == 'setStep'){
    return {...state, step:action.payload}
  }

}

const App = () => {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
      <h2>{state.count}</h2>
      <input type="Number" value={state.step} onChange={(e) => dispatch({type:'setStep' , payload:Number(e.target.value)})} />
      <button onClick={() => dispatch({type : 'increment'})}>+</button>
      <button onClick={() => dispatch({type : 'decrement'})}>-</button>
    </div>
  )
}

export default App