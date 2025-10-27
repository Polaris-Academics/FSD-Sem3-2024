import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

const WrapperAuthContext = ({children}) => {
    const  [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleLoggedIn = () => {
        setIsLoggedIn(prev => !prev)
    }

  return (
    <div>
        <AuthContext.Provider value={{isLoggedIn,toggleLoggedIn}}> 
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default WrapperAuthContext