import React from 'react'
import './App.css'

const RandomColor = () => {
    const [color,setColor] = React.useState("#FFFFFF")

    const randomColor = () => {
       let newColor = '#';
       newColor += Math.floor(Math.random()*16777215).toString(16).padStart(6,'0');
       setColor(newColor);
    }

  return (
    <div className={`min-h-screen flex`} style={{backgroundColor:color}}>
        <button className={`w-36 h-12 border-2 m-auto rounded-md text-white bg-blue-700 border-blue-700 hover:cursor-pointer`} onClick={randomColor}>Random</button>
    </div>
  )
}

export default RandomColor