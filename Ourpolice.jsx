import React from 'react'
import { assets } from '../assets/assets'

function Ourpolice() {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 sm:text-sm md:text-base text-gray-700'>
      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='regularprata- font-semibold'>Easy Exchange Policy</p>
        <p className="regularprata- text-gray-400">We offer hassle free exchange policy</p>
      </div>
      <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='regularprata- font-semibold'>7 days free return policy</p>
        <p className="regularprata- text-gray-400">We provide 7 days free return policy</p>
      </div>
      <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
        <p className='regularprata- font-semibold'>Best Customer Support</p>
        <p className="regularprata- text-gray-400">24/7 Customer Support Policy</p>
      </div>
    </div>
  )
}

export default Ourpolice