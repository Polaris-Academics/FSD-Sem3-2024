import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const obj ={key1:count}
  return (
    <div className='m-8'>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} className='border-2 m-8'/>
      <button className='border-2 w-10' onClick={() => setCount(prev => prev+1)}>+</button>
      <button className='border-2 w-10' onClick={() => setCount(prev => prev-1)}>-</button>
      <Count count={obj}/>
      <Greet/>
    </div>
  )
}

const Count = (({count}) =>{
  return(
    <div className='m-8'>
      Count is {count.key1}
    </div>
  )
})

// if(prevProps != currProps){
//   cause re-render
// }
// else{

// }

const Greet = memo(() => <div className='m-8'>Hello there</div>)

export default App