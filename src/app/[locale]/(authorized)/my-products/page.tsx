import React from "react";
import { createClient } from "@/src/utils/supabase/server";
import MyProductCard from "../../../../components/MyProductCard";

export default async function page() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <div>Please log in to view your orders.</div>;
  }

  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .eq("user_id", user.id);

  if (error) {
    return <div>Error fetching products: {error.message}</div>;
  }

  return (
    <div className="flex items-center justify-center flex-grow bg-gray-100 dark:bg-gray-900 pt-10">
      <MyProductCard products={products} />
    </div>
  );
}
