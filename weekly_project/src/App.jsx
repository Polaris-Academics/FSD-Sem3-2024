import React from 'react'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Contact from './pages/Contact'
import ShowList from './pages/ShowList'
import ShowDetail from './pages/ShowDetail'
import usePrevious from './hooks/usePrev'
import { useState } from 'react'


const App = () => {
  const [selected,setSelected] = useState('');
  const previous = usePrevious(selected);
  return (
    <div>
      <BrowserRouter>
      <nav>
        <Link to='/'>Shows</Link>
        <Link to='/contacts?email=1'>Contacts (Email)</Link>
        <Link to='/contacts?phone=1'>Contacts (Phone)</Link>
      </nav>
      <h2>Precious Value : {previous}</h2>
      <Routes>
        <Route path='/' element={<ShowList setSelected={setSelected}/>}/>
        <Route path='/contacts' element={<Contact/>}/>
        <Route path='/shows/:id' element={<ShowDetail/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App