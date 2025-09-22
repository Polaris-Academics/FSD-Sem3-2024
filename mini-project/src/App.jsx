import React, { useState } from 'react'
import Calc from './Calc'
import API from './API'
import ToDo from './Todo'
import Stopwatch from './Stopwatch'

const App = () => {
  const [checked, setChecked] = useState("nothing");
  return (
    <div className='app'>
      <div className='flex flex-col p-7'>

      <input type='radio' value="calc" onChange={(e) => setChecked(e.target.value)} checked = {checked === "calc"}/>
      <label>Calculator</label>
      <input type='radio' value="api" onChange={(e) => setChecked(e.target.value)} checked = {checked === "api"}/>
      <label>API</label>
      <input type='radio' value="todo" onChange={(e) => setChecked(e.target.value)} checked = {checked === "todo"}/>
      <label>ToDo</label>
      <input type='radio' value="stopwatch" onChange={(e) => setChecked(e.target.value)} checked = {checked === "stopwatch"}/>
      <label>Stopwatch</label>
      </div>
      {checked === "calc" ? <Calc/> : checked === "api" ? <API/> : checked === 'todo' ? <ToDo/> : checked === 'stopwatch' ? <Stopwatch/> : <div className='text-center'>Nothing</div>}



    </div>
  )
}

export default App