import React, { Suspense, useState } from 'react'

const App = () => {
  const [num,setNum] = useState('');
  const [result,setResult] = useState(0);
  const [Result1,setResult1] = useState(null);


  const fact = async () => {
    const {factorial} = await import('./factorial')
    setResult(factorial(Number(num)))
  }

  return (
    <div>
      <input type="number" value={num} onChange={(e) => setNum(e.target.value)}/>
      <button onClick={fact}>Calculate Factorial</button>
      <h3>Result is {result}</h3>
    </div>
  )
}


export default App