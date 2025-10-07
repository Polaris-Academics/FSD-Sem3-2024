import React from 'react'

const List = ({arr,text}) => {
    const filtereredArray = arr.filter(elem => elem.toLowerCase().includes(text.toLowerCase()))
  return (
    <div>
        {filtereredArray.map((color,id) => <div key={id}>{color}</div>)}
    </div>
  )
}

export default List