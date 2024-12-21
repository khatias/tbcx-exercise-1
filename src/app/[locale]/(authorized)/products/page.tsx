import { getProducts } from "../utils/supabase/server"; 
import ProductCard from "./ProductCard";

export default async function ProductsPage() {
  const products = await getProducts();
 

  return (
    <div className=" container mx-auto px-4    2xl:px-20 2xl:pt-10">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
