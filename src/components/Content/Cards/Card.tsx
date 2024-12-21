import malayChickenImage from '../../../assets/malay-chicken.jpg'; 
import fragrantDuck from '../../../assets/fragrant-duck.jpg'; 
import assamPrawn from '../../../assets/assam-prawn.jpg'; 

type Product = {
  title: string;
  description: string;
  imageSrc: { src: string };
};

type CardProps = {
  product: Product;
  className?: string;
}

const Card: React.FC<CardProps> = ({ product, className }) => {
  return (
    <div className={`rounded-lg p-4 bg-white dark:bg-gray-900 ${className}`}> 
      <img
        className='pb-6 h-60 w-full' 
        src={product.imageSrc.src} 
        alt={product.title} 
      />
      <div className='card-content'>
        <h2 className="font-semibold text-lg pb-2">{product.title}</h2>
        <p className='pb-5'>{product.description}</p>
        <button className=' text-sm px-4 py-2 border border-gray-300 rounded bg-[#f7c1fb] dark:bg-gray-700 text-white' >Add to Cart</button>
      </div>
    </div>
  );
}

export default function Cards() {
  return (
    <div className="p-4">
      <div className='flex flex-col gap-5 md:grid grid-cols-3 xl:gap-24 xl:pt-12'>
        <Card 
          className="shadow-md dark:shadow-lg" 
          product={{
            title: 'Malay Chicken',
            description: '6 skewers marinated in lemongrass, ginger, shallots, and spices. Served with a peanut dipping sauce.',
            imageSrc: malayChickenImage 
          }}
        />

        <Card 
          className="shadow-md dark:shadow-lg" 
          product={{
            title: 'Fragrant Duck',
            description: 'Twice cooked fresh duck spiced with Sichuan Peppercorn and 5 spice. Served with steamed buns, Sichuan peppercorn salt.',
            imageSrc: fragrantDuck 
          }}
        />

        <Card 
          className="shadow-md dark:shadow-lg" 
          product={{
            title: 'Assam Prawn',
            description: 'When we say assam we mean irresistibly sour. Prawns are wok-fried in a tamarind sauce with shallots, garlic, and turmeric.',
            imageSrc: assamPrawn 
          }}
        />
      </div>
    </div>
  );
}
