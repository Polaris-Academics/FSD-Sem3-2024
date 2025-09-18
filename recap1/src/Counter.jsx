import React, { useEffect, useState } from 'react'

export const Counter = ({children}) => {
    const [count, setCount] = useState(0);

    const add = () => {
        setCount(count => count+1);
        setCount(prev => prev+1);
    }

    // useEffect(() => {
    //     console.log(`useEffect called ${count}th time`)
    //     return () => console.log(`Removed ${count}th time`)
    // },[count])

    return (
    <div>
        <div>
            Counter Button {children}
        </div>
        <div>
            <button onClick={() => setCount((c) => c-1)}>-</button>
            <button onClick={add}>+</button>
        </div>
        <div>Result is {count}</div>
    </div>
  )
}