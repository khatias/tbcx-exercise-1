import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { useLocale } from "next-intl";
function ProductCard({ product }) {
  const locale = useLocale();
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar key={i} color={i <= product.rating ? "#d218f5" : "gray"} />
      );
    }
    return stars;
  };

  return (
    <div className="product-card shadow-lg dark:shadow-xl p-3 bg-white dark:bg-[#1a1a1a] rounded-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <img
        className="w-full h-52 object-fit rounded-lg"
        src={product.images[0]}
        alt={product.title}
      />

      <h4 className="mt-4 text-lg font-semibold text-gray-800 dark:text-white">
        {product.title}
      </h4>

      <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
        {product.description.length > 70
          ? product.description.substring(0, 70) + "..."
          : product.description}
      </p>

      <div className="flex items-center gap-1 text-gray-500 dark:text-white mt-2">
        {renderStars()}
        <span className="text-sm">{product.rating}</span>
      </div>

      <div className="flex justify-between items-center mt-4">
        <p className="text-xl font-semibold text-customPurple dark:text-customPurple">
          ${product.price}
        </p>
        <Link href={`/${locale}/products/${product.id}`}>
          <button className="bg-customPurple text-white py-2 px-4 rounded-full hover:bg-customPurple-dark transition-colors duration-300 dark:bg-customPurple-dark dark:hover:bg-customPurple">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
