import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { products } from '../products';

const ProductDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const product = products.find((p) => p.id === parseInt(id))

    const backToProducts = () => [
      navigate('/products')
    ]

  return (
    <div>
      <div className='text-center'>
        <h1>{product.id}</h1>
        <h4>{product.name}</h4>
        <h6>{product.price}</h6>
      </div>
      <div className='flex justify-center'>

        <button className='border-2 p-2 bg-green-600 text-white border-green-600' onClick={backToProducts}>Back to Products</button>
      </div>
    </div>
  )
}

export default ProductDetails