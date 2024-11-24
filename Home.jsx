import React from 'react'
import Hero from '../components/Hero'
import Latest_collection from '../components/Latest_collection'
import BestSeller from '../components/BestSeller'
import Ourpolice from '../components/Ourpolice'
import Newsletter from '../components/Newsletter'

function Home() {
  return (
    <div>
      <Hero/>
      <Latest_collection/>
      <BestSeller/>
      <Ourpolice/>
      <Newsletter/>
    </div>
  )
}

export default Home