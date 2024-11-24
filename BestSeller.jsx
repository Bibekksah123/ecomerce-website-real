import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Productitem from './Productitem'
import Title from './Title'

function BestSeller() {
  const {products}=useContext(ShopContext)
  const [bestSeller, setBestSeller] = useState([])

  useEffect(()=>{
    const bestfilter=products.filter((item)=>item.bestseller==true)
    setBestSeller(bestfilter.slice(0,5))
  },[products])
  return (
   <div className="my-10">
    <div className='text-center py-8 text-3xl'>
        <Title tit={'Best'} tit2={'Seller'}></Title>
        <p className=' w-3/4 m-auto text-sm sm:text-sm md:text-base text-geay-500 '>"Discover the Best Selling trends in fashion with our exclusive collection! From stylish casual wear to elegant formal outfits, our new arrivals feature premium-quality fabrics, vibrant colors, and modern designs to keep your wardrobe fresh and fashionable. Shop now and redefine your style!"</p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
    {bestSeller.map((products)=>(
      <Productitem key={products._id} products={products}/>
    ))}
     </div>
   </div>

  )
}

export default BestSeller