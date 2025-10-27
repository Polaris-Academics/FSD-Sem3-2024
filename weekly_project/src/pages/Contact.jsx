import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Contact = () => {
    const [search,setSearch] = useSearchParams();
    const type = search.get('email') ? 'email' : search.get('phone') ? 'phone' : 'none';
  return (
    <div>
        <h2>Contact Page</h2>
        {type === 'phone' ? <div>This is Contacts (Phone)</div> :
        type === 'email' ? <div>This is Contacts (Email)</div> : 
        <div>None Selected</div>} 
    </div>
  )
}

export default Contact