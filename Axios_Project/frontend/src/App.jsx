import React, { useState } from 'react'
import axios from 'axios'

const url = 'http://localhost:5000';

const App = () => {
  const [isAuthorised, setIsAuthorised] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [contacts,setContacts] = useState([]);


  const handleSignup = async (e) => {
    e.preventDefault();
    
    try{
      await axios.post(url+'/signup',{username,password});
      alert('Signup Successful');
    }
    catch(err){

    }

  }

  const handleLogin =  async () => {
    const temp_token = await axios.post(url+'/login',{username,password});
    if(temp_token){
      alert('Login Successful');
      localStorage.setItem('token',temp_token.data.token);
      setToken(temp_token.data.token);
      handleContacts(temp_token.data.token);
      setIsAuthorised(true);
    }
    else{
      alert('Login failed');
    }
  }

  const handleContacts = async (authToken = null) => {
    console.log(authToken);
    const temp_contacts =  await axios.get(url+'/contacts',{headers:{Authorization:`Bearer ${authToken}`}})
    console.log(temp_contacts.data);
    setContacts(temp_contacts.data)
  }


  return (
    <div>
      {isAuthorised ? (
        <div>
          <h2>Contacts</h2>
          <div>
            {contacts.length > 0 && contacts.map((contact) => <div key={contact.id}>{contact.name}</div>)}
          </div>
        </div>
      ) : (
        <div>
          <div>
            <h3>
              Signup
            </h3>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleSignup}>Signup</button>
          </div>
            <div>
              <h3>
                Login
              </h3>
              <div>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={handleLogin}>Login</button>
              </div>
            </div>
        </div>
      )}
    </div>
  )
}

export default App