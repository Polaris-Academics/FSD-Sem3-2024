import React, { useEffect, useState ,useRef} from 'react'


export const Counter = ({children}) => {
    const [count, setCount] = useState(0);
    let countRef = useRef(0);
    let subRef = useRef(null);

    const add = () => {
        countRef.current += 1;
        console.log(countRef.current);
    }
    const sub = () => {
        setCount(c => c-1);
        if(count<=-5){
            subRef.current.style.backgroundColor = 'red';
        }
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
            {/* <button onClick={() => setCount((c) => c-1)}>-</button> */}
            <button ref={subRef} onClick={sub} >-</button>
        </div>
        <div>Result is {count}</div>
    </div>
  )
}