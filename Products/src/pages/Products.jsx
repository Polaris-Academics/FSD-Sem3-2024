import React from 'react'
import { products } from '../products'
import { useNavigate } from 'react-router-dom'

const Products = () => {
    const navigate = useNavigate();

    const handleNavigation = (id) =>{
        navigate(`/products/${id}`)
    }
  return (
    <div className='grid grid-cols-3 m-7'>
        {products.map((p) => {
            return(
                <div key={p.id} className='w-3xs shadow-md h-80 m-5 bg-blue-100' onClick={() => handleNavigation(p.id)}>
                    <h1>{p.id}</h1>
                    <h4>{p.name}</h4>
                </div>
            )
        })}
    </div>
  )
}

export default Products