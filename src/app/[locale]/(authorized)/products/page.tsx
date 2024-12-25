// 'use client'

import { createClient } from "../../../../utils/supabase/server";
import ProductCard from "../../../../components/ProductCard/ProductCard"; // Component for each product

export default async function Products() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("products").select();

  if (error) {
    return <div>Error fetching products: {error.message}</div>;
  }

  return (
    <div className="container m-auto">
      <div className="products-container flex flex-wrap justify-center gap-4">
        {data?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
