import React from 'react'

const List = ({arr,text}) => {
    filtereredArray = arr.filter()
  return (
    <div>
        {arr.map((c,id) => <div key={id}>{c}</div>)}
    </div>
  )
}

export default List