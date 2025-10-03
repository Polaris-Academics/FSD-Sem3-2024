import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom';

const ShowList = ({setSelected}) => {
    const shows = useFetch(`https://api.tvmaze.com/shows`);
  return (
    <div>
        {shows.slice(0,10).map((show) => {
            return(
                <div key={show.id} onClick={() => setSelected(show.name)}>
                    <Link to={`/shows/${show.id}`} >{show.name}</Link>
                </div>
            )
        })}
    </div>
  )
}

export default ShowList