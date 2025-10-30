import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDarkMode } from '../features/darkMode/darModeSlice';

const DarkMode = () => {
    const isDarkMode = useSelector(state => state.myDarkMode.isDarkMode);
    const dispatch = useDispatch();
    const bgColor = isDarkMode ? 'black' : 'white';
    const buttonText = isDarkMode ? 'Light' : 'Dark';
  return (
    <div style={{backgroundColor:bgColor, height:'100vh'}}>
        <button onClick={() => dispatch(toggleDarkMode())}>{buttonText}</button>
    </div>
  )
}

export default DarkMode