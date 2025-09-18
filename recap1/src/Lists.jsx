import React from 'react'

const Lists = () => {
  const arr = ["cricket","football","TT"];
    return (
    <div>
        <ol>
        {arr.map((sports,i) => {
            return(
                <li key={i}>{sports}</li>
            )    
        })}
        </ol>
    </div>
  )
}

export default Lists