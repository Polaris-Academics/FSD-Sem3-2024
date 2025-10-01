import React from 'react'
import { memo } from 'react';
import { useState , useMemo} from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  let squared =  useMemo (() => {
    for(let i=0;i<1000000000;i++) {
    }
    return count * count;
  },[count])


  return (
    <div className='m-8'>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} className='border-2 m-8'/>
      <button className='border-2 w-10' onClick={() => setCount(prev => prev+1)}>+</button>
      <button className='border-2 w-10' onClick={() => setCount(prev => prev-1)}>-</button>
      <Count count={count}/>
      <Greet/>
      <h3>Squared is {squared}</h3>
    </div>
  )
}

const Count = memo(({count}) =>{
  
  return(
    <div className='m-8'>
      Count is {count}
    </div>
  )
})

// if(prevProps != currProps){
//   cause re-render
// }
// else{
//     donot cause rerender
// }

const Greet = memo(() => <div className='m-8'>Hello there</div>)

export default App