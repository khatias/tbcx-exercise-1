import { createClient } from "@/src/utils/supabase/server";
import { notFound } from "next/navigation";
import { FaShoppingCart, FaCheckCircle, FaCreditCard } from "react-icons/fa";
import { Link } from "@/src/i18n/routing";

export default async function OrderDetailsPage({
  params,
}: {
  params: { id: number };
}) {
  const { id } = params;

  const supabase = await createClient();

  const { data: order, error } = await supabase
    .from("orders")
    .select("id, name, price, created_at, payment_id, stripe_price_id")
    .eq("id", id)
    .single();

  if (error || !order) {
    notFound();
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-6">
      <div className="max-w-3xl w-full px-6 py-8 bg-white dark:bg-gray-800 rounded-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-900 dark:text-gray-100 mb-8">
          Order Details
        </h1>

        <div className="space-y-6">
          <div className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <FaShoppingCart
              className="text-purple-500 dark:text-gray-400"
              size={30}
            />
            <div>
              <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100">
                {order.name}
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-400">
                Ordered on: {new Date(order?.created_at).toLocaleDateString()}
              </p>
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-200">
                ${(order.price / 100).toFixed(2)}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <FaCreditCard
              className="text-gray-600 dark:text-gray-400"
              size={30}
            />
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                Payment Information
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-400">
                Payment ID:{" "}
                <span className="font-medium text-gray-900 dark:text-gray-200">
                  {order.payment_id}
                </span>
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-400">
                Stripe Price ID:{" "}
                <span className="font-medium text-gray-900 dark:text-gray-200">
                  {order.stripe_price_id}
                </span>
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-between space-x-4">
            <Link
              href="/my-orders"
              className="inline-block w-full sm:w-auto text-sm font-medium text-white bg-gray-600 dark:bg-gray-700 py-2 px-4 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 ease-in-out"
            >
              <FaCheckCircle className="inline-block mr-2" size={16} />
              Back to My Orders
            </Link>

            <Link
              href="/"
              className="inline-block w-full sm:w-auto text-sm font-medium text-white bg-purple-600 dark:bg-purple-700 py-2 px-4 rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-all duration-300 ease-in-out"
            >
              <FaCheckCircle className="inline-block mr-2" size={16} />
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
