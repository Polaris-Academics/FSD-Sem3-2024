import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ThemeContext } from '../context/ThemeProvider';

const About = () => {
    const {isLoggedIn} = useContext(AuthContext);
    const {isDarkMode,toggleDarkMode} = useContext(ThemeContext);

  return (
    <div style={{backgroundColor: isDarkMode ? 'black' : '', color:isDarkMode ? 'white' : '', height:'100vh', textAlign:'center', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <div >
            {isLoggedIn ? "Logged In on About Page" : "Logged Out on About Page"}
        </div>
        <div>
            <button onClick={toggleDarkMode}>Button</button>
        </div>
    </div>
  )
}

export default About