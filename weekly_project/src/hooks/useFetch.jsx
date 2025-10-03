import { useState } from 'react'
import { useEffect } from 'react'

const useFetch = (url) => {
    const [data,setData] = useState([]);
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(json => setData(json))
    },[url])
  return data;
}

export default useFetch