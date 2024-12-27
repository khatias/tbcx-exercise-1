import { createClient } from "../../../../utils/supabase/server";
import ProductCard from "../../../../components/ProductCard/ProductCard";

export default async function Products() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("products").select();

  if (error) {
    return <div>Error fetching products: {error.message}</div>;
  }

  return (
    <div className="container mx-auto py-8 2xl:px-20 pt-10">
      <div className="products-container grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
