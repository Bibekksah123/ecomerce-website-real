import React from 'react'

function Newsletter() {
  function onschange(e){
    e.preventDefault()
  }
  return (
    <div className='text-center'>
   <p className="regularprata- text-xl font-medium text-gray-800">Subscribe Now To Get 20% Off</p>
   <p className="text-gray-400 mt-3">
   "🎉 Subscribe now and enjoy 20% OFF on your next order! Don't miss out on exclusive deals—sign up today! 🚀"
   </p>
   <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto pl-3 my-6 border' onSubmit={onschange}>
    <input type="email" placeholder='Enter Your email' required className='w-full sm:flex-1 outline-none' />
    <button type='submit' className='bg-black text-white px-10 py-4 rounded-lg'>Subscribe</button>
   </form>
    </div>
  )
}

export default Newsletter