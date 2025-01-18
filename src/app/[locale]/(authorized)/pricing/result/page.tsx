import React from "react";
import type { Stripe } from "stripe";
import PrintObject from "../../../../../components/pricing/stripe/PrintObject";
import { stripe } from "../../../../../lib/stripe/stripe";
import Link from "next/link";

export default async function ProductResultPage({
  searchParams,
}: {
  searchParams: Record<string, string>;
}): Promise<JSX.Element> {
  if (!searchParams.session_id) {
    return (
      <div className="flex items-center justify-center h-screen bg-red-100">
        <p className="text-xl text-red-500">Invalid session ID. Please try again.</p>
      </div>
    );
  }

  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.retrieve(searchParams.session_id, {
      expand: ["line_items", "payment_intent"],
    });

  const paymentIntent = checkoutSession.payment_intent as Stripe.PaymentIntent | null;

  if (!paymentIntent) {
    return (
      <div className="flex items-center justify-center h-screen bg-red-100">
        <p className="text-xl text-red-500">Payment Intent not found. Please contact support.</p>
      </div>
    );
  }

  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(paymentIntent.amount / 100);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-8 rounded-lg text-center">
        <h1 className="text-4xl font-bold text-purple-700 mb-4">🎉 Your Order is Confirmed</h1>
        <p className="text-4xl text-gray-700 mb-6">
          You will be charged <span className="font-semibold">{formattedAmount}</span>
        </p>
        <p className="text-gray-600 mb-8">For any questions, please contact our support team.</p>

        <PrintObject content={checkoutSession} />

        <Link
          href="/"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-6 px-8 rounded-full transition-all"
        >
          Go to the homepage
        </Link>
      </div>
    </div>
  );
}
