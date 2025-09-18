import React, { useState } from 'react'
import './App.css'

const Calc = () => {
    const [num1,setNum1] = useState("")
    const [num2,setNum2] = useState("")
    const [result,setResult] = useState("")

    const add =() => {
        setResult(Number(num1) + Number(num2))
        setNum1("")
        setNum2("")
    }
    const sub =() => {
        setResult(Number(num1) - Number(num2))
        setNum1("")
        setNum2("")
    }
    const mul =() => {
        setResult(Number(num1) * Number(num2))
        setNum1("")
        setNum2("")
    }
    const div =() => {
        setResult(Number(num1) / Number(num2))
        setNum1("")
        setNum2("")
    }
    const pow =() => {
        setResult(Number(num1) ** Number(num2))
        setNum1("")
        setNum2("")
    }
    const mod =() => {
        setResult(Number(num1) % Number(num2))
        setNum1("")
        setNum2("")
    }

    return (
        <div className='calc'>
        <div className='calc-inputs'>
        <input value={num1} onChange={(e) => setNum1(e.target.value)} type="number" placeholder='Enter first number...' />
        <input value={num2} onChange={(e) => setNum2(e.target.value)} type="number" placeholder='Enter second number...'/>
        </div>
        <div className='calc-buttons'>
        <button onClick={add}>Add</button>
        <button onClick={sub}>Sub</button>
        <button onClick={mul}>Mul</button>
        <button onClick={div}>Div</button>
        <button onClick={pow}>Pow</button>
        <button onClick={mod}>Mod</button>
        </div>
        <h5 className='calc-result'>{result}</h5>
    </div>
  )
}

export default Calc