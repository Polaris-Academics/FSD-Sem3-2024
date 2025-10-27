import React from 'react'
import { createContext } from 'react';
import { useState } from 'react';

export const MyContext = createContext();

const NameContext = ({children}) => {
    const [stateName, setStateName] = useState('Default');
  return (
    <div>
        <MyContext.Provider value={{stateName,setStateName}}>
            {children}
        </MyContext.Provider>
    </div>
  )
}

export default NameContext