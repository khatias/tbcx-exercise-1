import type { Stripe } from "stripe";
import PrintObject from "../../../../../components/pricing/stripe/PrintObject";
import { stripe } from "../../../../../lib/stripe/stripe";

export default async function ProductResultPage({
  searchParams,
}: {
  searchParams: { session_id: string };
}): Promise<JSX.Element> {
  if (!searchParams.session_id)
    throw new Error("Please provide a valid session_id (`cs_test_...`)");

  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.retrieve(searchParams.session_id, {
      expand: ["line_items", "payment_intent"],
    });

  const paymentIntent =
    checkoutSession.payment_intent as Stripe.PaymentIntent | null;

  console.log(paymentIntent);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className=" p-8 rounded-lg text-center">
        <h1 className="text-4xl font-bold text-purple-700 mb-4">
          🎉 Your Order is Confirmed
        </h1>
        <p className="text-4xl text-gray-700 mb-6">
          You will be charged{" "}
          <span className="font-semibold">
            {(paymentIntent!.amount - (paymentIntent!.amount % 100)) / 100}.
            {paymentIntent!.amount % 100} $
          </span>
        </p>
        <p className="text-gray-600 mb-8">
          For any questions, please contact our support team.
        </p>
        <a
          href="/"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-6 px-8 rounded-full transition-all"
        >
          Go to the homepage
        </a>
      </div>
    </div>
  );
}
