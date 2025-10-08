import React from 'react'
import {Link,Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import WrapperAuthContext from './context/AuthContext'
import Navbar from './components/Navbar'
import WrapperThemeContext from './context/ThemeProvider'


const App = () => {
  return (
    <div>
      <WrapperAuthContext>
        <WrapperThemeContext>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
        </WrapperThemeContext>  
      </WrapperAuthContext>
    </div>
  )
}

export default App