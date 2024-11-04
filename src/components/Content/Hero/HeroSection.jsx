import contentImg from '../../../assets/food.jpg'

function HeroSection() {
  return (
    <div className=' p-4 flex flex-col md:flex-row items-center justify-between md:gap-8 md:pt-10 '>
    <img className='pb-4 md:w-1/2' src={contentImg.src} alt="food image" />
    <div className='hero-content md:w-1/2'>
      <h1 className='text-2xl pb-4 font-semibold xl:text-4xl xl:pb-6 '>We’re looking forward to seeing you again.</h1>
      <p className='text-sm italic pb-6 xl:text-lg '>Take a culinary tour of China and Southeast Asia. Family style service, like in classic Asian restaurants, creates an enriching experience where guests share a range of tastes together.</p>
      <button className=' text-sm px-4 py-2 border border-gray-300 rounded bg-[#b32929] dark:bg-gray-700 dark:text-white xl:px-8 xl:py-4 ' >MENU</button>
    </div>
 
</div>
  )
}

export default HeroSection