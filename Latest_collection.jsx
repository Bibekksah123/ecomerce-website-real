import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import Productitem from './Productitem'


function Latest_collection() {

  const [latestpro, setLatestpro] = useState([])
  const {products} =useContext(ShopContext)
  useEffect(()=>{
    setLatestpro(products.slice(0,10))
},[])
  return (
    <div className='my-10'>
      <div className='regularprata- text-center py-8 text-3xl'>
        <Title tit={'Latest'} tit2={'Collection'}></Title>
        <p className=' w-3/4 m-auto text-sm sm:text-sm md:text-base text-geay-500 '>"Discover the latest trends in fashion with our exclusive collection! From stylish casual wear to elegant formal outfits, our new arrivals feature premium-quality fabrics, vibrant colors, and modern designs to keep your wardrobe fresh and fashionable. Shop now and redefine your style!"</p>
      </div>
  {/*rendering prodcut */}
  <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
    {latestpro.map((products)=>(
      <Productitem key={products._id} products={products}/>
    ))}
     </div>
    </div>
  )
}

export default Latest_collection