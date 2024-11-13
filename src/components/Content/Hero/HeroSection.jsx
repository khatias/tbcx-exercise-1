import contentImg from '../../../assets/food.jpg'
import {useTranslations} from 'next-intl';

// import {Link} from '../../i18n/routing';
function HeroSection() {
  const t = useTranslations('HeroSection');
  return (
    <div className=' p-4 flex flex-col md:flex-row items-center justify-between md:gap-8 md:pt-10 '>
    <img className='pb-4 md:w-1/2' src={contentImg.src} alt="food image" />
    <div className='hero-content md:w-1/2'>
    <h1 className="text-2xl pb-4 font-semibold xl:text-4xl xl:pb-6">
      {t('heroTitle')}
    </h1>
      <p className='text-sm italic pb-6 xl:text-lg '> {t('heroDescription')}</p>
      <button className=' text-sm px-4 py-2 border border-gray-300 rounded bg-[#b32929] dark:bg-gray-700 text-white xl:px-8 xl:py-4 ' > {t('menuButtonText')}</button>
    </div>
 
</div>
  )
}

export default HeroSection