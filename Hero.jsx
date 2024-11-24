import React from 'react'
import { assets } from '../assets/assets'

function Hero() {
  return (
    <div className='flex flex-col sm:flex-row border-gray-400 border '>
      {/* hero left*/}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 '>
        <div className='text-[#414141]'>
          <div className="flex items-center gap-4">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className='regularprata- font-mediumtext-sm md:text-base'>Our Best Seller</p>
          </div>
          <h1 className=' regularprata- text-3xl sm:py-3 lg:5xl leading-relaxed'>Latest Arrival</h1>
            <div className='flex items-center gap-2'>
                  <p className=' regularprata- text-semibold text-sm md:text-base'>Shop Now</p>
                  <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            </div>
        </div>
      </div>
      {/*hero right  */}
      <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
    </div>
  )
}

export default Hero