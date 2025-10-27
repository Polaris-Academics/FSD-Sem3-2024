import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();

const WrapperThemeContext = ({children}) => {
    const  [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(prev => !prev)
    }

  return (
    <div>
        <ThemeContext.Provider value={{isDarkMode,toggleDarkMode}}> 
            {children}
        </ThemeContext.Provider>
    </div>
  )
}

export default WrapperThemeContext