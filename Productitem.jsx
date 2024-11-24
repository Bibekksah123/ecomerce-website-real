import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

function Productitem({products}) {
  const {_id,name,image,price}=products
  const {currency} =useContext(ShopContext)
  return (
    <Link className='curser-pointer text-gray-600' to={`/prodcut/${_id}`}>
      <div className='overflow-hidden'>
      <img src={image[0]} alt="" className='hover:scale-110 transitio ease-in-out' />
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
      </div>
    </Link>
  )
}

export default Productitem