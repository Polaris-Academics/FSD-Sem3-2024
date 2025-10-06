import React from 'react'
import { useState } from 'react'

const InputBox = ({text,setText}) => {

  return (
    <div>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
    </div>
  )
}

export default InputBox