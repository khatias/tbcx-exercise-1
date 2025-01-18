import React from "react";
import type { Stripe } from "stripe";
import { stripe } from "../../../../../lib/stripe/stripe";
import { createClient } from "@/src/utils/supabase/server";
import { Link } from "@/src/i18n/routing";

export default async function ProductResultPage({
  searchParams,
}: {
  searchParams: { session_id: string };
}): Promise<JSX.Element> {
  if (!searchParams.session_id) {
    throw new Error("Please provide a valid session_id (`cs_test_...`)");
  }

  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.retrieve(searchParams.session_id, {
      expand: ["line_items", "payment_intent"],
    });

  const paymentIntent =
    checkoutSession.payment_intent as Stripe.PaymentIntent | null;
  const metadata = checkoutSession.metadata;
  if (!metadata) {
    throw new Error("Metadata is missing in the checkout session.");
  }
  const productId = metadata.product_id;
  const userId = metadata.user_id;

  if (paymentIntent && paymentIntent.status === "succeeded") {
    const supabase = await createClient();

    const { data: product, error: productError } = await supabase
      .from("products")
      .select("name, image, price")
      .eq("id", productId)
      .single();

    if (productError || !product) {
      console.error("Failed to fetch product details:", productError);
    }

    const { error: orderError } = await supabase.from("orders").insert({
      stripe_price_id: checkoutSession.line_items?.data[0]?.price?.id,
      user_id: userId,
      name: product?.name,
      price: product?.price,
      image: product?.image,
      product_id: productId,
      payment_id: paymentIntent.id,
    });

    if (orderError) {
      console.error("Failed to insert order into database:", orderError);
    } else {
      console.log("Order successfully inserted into database.");
    }
  } else {
    console.error("Payment was not successful.");
  }

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 flex-grow">
      <div className="max-w-lg w-full px-6 py-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-md">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-semibold text-black dark:text-white">
            Order Confirmed
          </h1>
        </div>

        <div className="text-left mb-6">
          <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200">
            Order Summary
          </h2>
          <div className="flex justify-between text-gray-700 dark:text-gray-300 text-sm mb-4">
            <span>Amount:</span>
            <span className="font-medium text-green-600 dark:text-green-400">
              ${(paymentIntent!.amount - (paymentIntent!.amount % 100)) / 100}.
              {paymentIntent!.amount % 100}
            </span>
          </div>
        </div>

        <div className="text-center mb-6">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Your order has been successfully processed. We are now preparing
            your items for shipment.
          </p>
        </div>

        <div className="flex justify-center space-x-4">
          <Link
            href="/"
            className="inline-block text-sm font-medium text-white bg-black py-3 px-6 rounded-md hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-all duration-200 ease-in-out"
          >
            Back to Homepage
          </Link>
          <Link
            href="/my-orders"
            className="inline-block text-sm font-medium text-black border-2 border-black py-3 px-6 rounded-md hover:bg-gray-100 dark:text-white dark:border-white dark:hover:bg-gray-700 transition-all duration-200 ease-in-out"
          >
            View Your Orders
          </Link>
        </div>

        <div className="text-center mt-6 text-sm text-gray-500 dark:text-gray-400">
          <p>
            For any inquiries, please{" "}
            <Link
              href="/contact"
              className="text-blue-600 underline dark:text-blue-400"
            >
              contact our support team
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
