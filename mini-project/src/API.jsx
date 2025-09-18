import React, { useEffect, useState } from 'react'

const API = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch('https://dragonball-api.com/api/characters')
        .then(res => res.json())
        .then(json => setData(json))
    },[])

    const prev = () => {
        if(data.links.previous !== ""){
            fetch(data.links.previous)
            .then(res => res.json())
            .then(json => setData(json))
        }
    }
    const next = () => {
        if(data.links.next !== ""){
            fetch(data.links.next)
            .then(res => res.json())
            .then(json => setData(json))
        }
    }
    
  return (
    <div>

    <div className='api'>
        {data.items && data.items.map((card,i) => {
            return(
                <div className='api-card' key={card.id}>
                    <h1>{card.id}</h1>
                    <img src={card.image} alt="" />
                    <h3>{card.name}</h3>
                    <h3>{card.race} - {card.gender}</h3>
                </div>
            )
        }) }
    </div>
    <div className='api-buttons'>
            <button onClick={prev}>prev</button>
            <button onClick={next}>next</button>
    </div>
    </div>
  )
}

export default API