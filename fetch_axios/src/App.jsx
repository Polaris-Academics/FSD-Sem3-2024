import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const App = () => {

  const [postsFetch, setPostsFetch] = React.useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => setPostsFetch(res.data))
  },[])

  

  return (
    <div>
      App

      <div>
        {postsFetch.map(post => <div key={post.id}>{post.title}</div>)}
      </div>
    </div>
  )
}

export default App