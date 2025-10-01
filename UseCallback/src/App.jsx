import React from 'react'

const App = () => {
  const [count,setCount] = React.useState(0);
  const [step,setStep] = React.useState(1);


  const handleClick = React.useCallback(() => setCount(prev => prev + Number(step)) ,[step]);
  
  return (
    <div>
      <input type="number" value={step} onChange={(e) => setStep(e.target.value)}/>
      <h2>Count is {count}</h2>
      <Buttons click={handleClick}/>
    </div>
  )
}

const Buttons = React.memo(({click}) =>{
  return(
    <div>
      <button onClick={click}>+</button>
    </div>
  )
})

export default App