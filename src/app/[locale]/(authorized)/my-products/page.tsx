import React from "react";
import { createClient } from "@/src/utils/supabase/server";
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
    console.error("Error fetching orders:", error);
    return <div>Error loading orders.</div>;
  }
  return (
    <div className="flex items-center justify-center flex-grow bg-gray-100 dark:bg-gray-900 pt-10">
      <div className="container mx-auto 2xl:px-20 w-full px-6 py-8 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-md">
        <div className="space-y-4">
          {products?.map((product) => (
            <div
              key={product.id}
              className="p-6 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 transition-transform "
            >
              <div className="flex items-center space-x-4">
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                )}
                <div>
                  <div className="flex items-center space-x-2">
                    <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                      {product.name}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
