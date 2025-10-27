
import React from 'react'
import usePrevious from './hooks/usePrevious';

const App = () => {
  const [count,setCount] = React.useState(0);
  const prevValue = usePrevious(count);

  return (
    <div>
      <button onClick={() => setCount(prev => prev-1)}>-</button>
      <button onClick={() => setCount(prev => prev+1)}>+</button>
      <h2>Count is :{count}</h2>
      <h2>Precious value was :{prevValue}</h2>
    </div>
  )
}

export default App