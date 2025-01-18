import React from "react";
import { createClient } from "../../../../../utils/supabase/server";
import { notFound } from "next/navigation";
import Image from "next/image";

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
          <Image
            src={image}
            alt={name}
            className="max-w-lg w-full"
            width={500}
            height={500}
            objectFit="contain"
          />
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
