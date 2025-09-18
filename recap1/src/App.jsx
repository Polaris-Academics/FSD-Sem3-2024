import React, { useState } from 'react'
import { Counter } from './Counter'
import Lists from './Lists'
import Counter_Class from './Counter_Class'

const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      {isVisible && <Counter/>}
      <button onClick={() => setIsVisible(!isVisible)}>Change toggle</button>
    </div>
  )
}



export default App