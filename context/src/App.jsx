import React from 'react'
import Greet from './Greet';
import Hello from './Hello';
import About from './About';
import NameContext from './NameContext';



const App = () => {


  return (
    <div>
      <NameContext>
          <Greet/>
          <Hello/>
          <About/>
      </NameContext>

      
    </div>
  )
}

export default App