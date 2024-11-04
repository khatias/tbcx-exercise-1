

import Card from './Cards/Card'
import HeroSection from './Hero/HeroSection'


function Content() {
  return (
    <main className='bg-gray-100 dark:bg-black  pb-10 ' >
     <div className='container mx-auto 2xl:px-20'>
        <HeroSection />
        
        <Card/>
        </div>
    </main>

  )
}

export default Content