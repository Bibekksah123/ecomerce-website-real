import React from 'react'

function Title({tit,tit2}) {
  return (
    <div className='inline-flex mb-3 gap-2 items-center'>
      <p className="text-gray-500">{tit}<span className='text-gray-700 ml-2  font-medium'>{tit2}</span></p>
      <p className='w-8 h-1px sm:h-[2px] bg-gray-700'></p>
      
    </div>
  )
}

export default Title