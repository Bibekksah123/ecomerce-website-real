import React from 'react'

import logo from "../assets/tc.png";
function Footer() {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm'>
      <div>
        <img src={logo} className='w-32 mb-5' alt="" />
        <p className='w-full md:w-3/4 text-gray-600'>"🌟 Crafting unique and memorable e-commerce logos that reflect your brand's identity and captivate your audience. Elevate your online store with a professional, sleek, and standout logo! 🚀"</p>
      </div>
  <div>
    <p className='text-xl font-medium mb-5'>Company</p>
    <ul className='flex flex-col gap-2 text-gray-600'>
      <li>Home</li>
      <li>About US</li>
      <li>Delivery</li>
      <li>Privacy Policy</li>
    </ul>
  </div>
         <div>
          <p>Stay in Touch Forver</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
      <li>+97798340384784674</li>
      <li>Imake@gmail.com</li>
      
    </ul>
         </div>

      </div>
      <div>
        <hr className='w-full h-2 border-gray-800' />
        <p className='regularprata- text-sm font-base'>"©Imkae 2003.All rights reserved. Your trusted partner in online shopping. Reproduction or redistribution without permission is prohibited."</p>
      </div>
    </div>
  )
}

export default Footer