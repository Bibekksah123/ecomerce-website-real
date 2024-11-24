import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import { assets } from '../assets/assets'

function Product() {
 const {prodcutid}= useParams()
  const {products}=useContext(ShopContext)
  const [ProductData, setProductData] = useState(false)
  const [images, setimages] = useState([])

  const FetchId=()=>{
       products.map((item)=>{
        if(item._id==prodcutid){
          setProductData(item)
          setimages(item.image[0])
        return null;
      }
  })
  } 
  useEffect(()=>{
   FetchId()
  },[])
  return( ProductData?
   <div className='border-t-2 pt-10 transition-opacity easy-in duration-500 opacity-100 '>
    <div className="flex flex-col sm:flex-row gap-12">
      <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
        <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll sm:justify-normal justify-between w-full sm:w-[18.7%]">
          {ProductData.image.map((item,index)=>(
          <img src={item} onClick={()=>setimages(item)} key={index} alt="image" />
         ) )}
        </div>
        <div className="w-full sm:w-[80%]">
          <img src={images} alt="" />
        </div>
      </div>
    </div>
   </div>
  :<div className='opacity-0'></div>)
}

export default Product