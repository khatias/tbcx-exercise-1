import { createClient } from "../../../../../utils/supabase/server";
import { Product } from '@/src/types/products';
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", params.id)
    .single();

  if (error || !data) {
    notFound();
  }

  const { name, description, price, image } = data;

  return (
    <div className="container m-auto">
      <div className="product-details flex flex-col items-center">
        <div className="image">
          <img src={image} alt={name} className="max-w-lg w-full" />
        </div>
        <div className="content mt-4">
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="mt-2">{description}</p>
          <p className="mt-4 text-xl">Price: ${price}</p>
        </div>
      </div>
    </div>
  );
}