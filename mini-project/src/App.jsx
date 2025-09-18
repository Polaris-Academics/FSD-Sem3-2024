import React, { useState } from 'react'
import Calc from './Calc'
import API from './API'
import ToDo from './Todo'

const App = () => {
  const [checked, setChecked] = useState("nothing");
  return (
    <div className='app'>
      <input type='radio' value="calc" onChange={(e) => setChecked(e.target.value)} checked = {checked === "calc"}/>
      <label>Calculator</label>
      <input type='radio' value="api" onChange={(e) => setChecked(e.target.value)} checked = {checked === "api"}/>
      <label>API</label>
      <input type='radio' value="todo" onChange={(e) => setChecked(e.target.value)} checked = {checked === "todo"}/>
      <label>ToDo</label>
      {checked === "calc" ? <Calc/> : checked === "api" ? <API/> : checked === 'todo' ? <ToDo/> : <div>Nothing</div>}



    </div>
  )
}

export default App