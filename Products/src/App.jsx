import React from 'react'
import { RouterProvider } from 'react-router-dom'
import'./App.css'
import { router } from './routes'

const App = () => {
  return (
      <RouterProvider router={router}/>
  )
}

export default App