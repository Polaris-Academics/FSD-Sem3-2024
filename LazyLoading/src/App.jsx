import React, { lazy, Suspense } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const LazyHome = lazy(() => import('./Home'));
const LazyAbout = lazy(() => import('./About'));
const LazyContacts = lazy(() => import('./Contacts'));

const App = () => {
  
  return (
    <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
              <Route path='/' element={<LazyHome/>}/>
              <Route path='/about' element={<LazyAbout/>}/>
              <Route path='/contacts' element={<LazyContacts/>}/>
          </Routes> 
        </Suspense> 
    </BrowserRouter>
  )
}

export default App