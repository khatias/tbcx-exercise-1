import React from 'react'
import './Content.css'

import Card from './Cards/Card'
import HeroSection from './Hero/HeroSection'


function Content() {
  return (
    <main>
      <div className='container'>
        <HeroSection />
        
        <Card/>
      </div>
    </main>

  )
}

export default Content