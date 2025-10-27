import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const ShowDetail = () => {
    const {id} = useParams()
    const specificShow = useFetch(`https://api.tvmaze.com/shows/${id}`)
  return (
    <div>
        <Link to='/'>Back to List</Link>
        <div>{specificShow.name}</div>
        <div>{specificShow.language}</div>
        <div>{specificShow.summary}</div>
        {specificShow.image && <img src={specificShow.image.medium}/>}
    </div>
  )
}

export default ShowDetail