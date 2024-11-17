
import ProductCard from './ProductCard';

import Search from '../../../../components/Search/Search';
import Sort from '../../../../components/Sort/Sort';

async function ProductList({ productList }) {
  return (
        <div className='container'>
          <div className='md:flex md:w-full md:items-center md:justify-between'>
            <Search/>
            <Sort/>
          </div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4 pt-4 lg:pt-8">
            {productList && productList.length > 0 ? (
              productList.map((product) => (
                <ProductCard key={product.id} product={product} /> 
                 ))
                ) : (
                  <p>No products available</p>
                )}
          </div>
        </div>
      );
    }


export default ProductList;

