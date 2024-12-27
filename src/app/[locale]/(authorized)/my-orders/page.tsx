import { createClient } from "@/src/utils/supabase/server";
import { Link } from "@/src/i18n/routing";
import { FaShoppingCart, FaCheckCircle } from "react-icons/fa";

export default async function MyOrdersPage() {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return <div>Please log in to view your orders.</div>;
  }


  const { data: orders, error } = await supabase
    .from("orders")
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
          {orders?.map((order) => (
            <div
              key={order.id}
              className="p-6 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 transition-transform "
            >
              <div className="flex items-center space-x-4">
                {order.image && (
                  <img
                    src={order.image}
                    alt={order.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                )}
                <div>
                  <div className="flex items-center space-x-2">
                    <FaShoppingCart
                      className="text-gray-600 dark:text-gray-300"
                      size={20}
                    />
                    <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                      {order.name}
                    </h2>
                  </div>
                </div>
              </div>
              <Link
                href={`/order-details/${order.id}`}
                className="inline-block text-gray-600 dark:text-gray-400 mt-4 py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
              >
                <FaCheckCircle className="inline-block mr-2" size={16} />
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
