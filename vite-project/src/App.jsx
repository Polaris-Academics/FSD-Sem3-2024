import React from 'react'
import { useState } from 'react';

const App = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Enter email..' />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder='Enter password..'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App