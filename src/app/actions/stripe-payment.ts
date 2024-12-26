"use server";
 
import type { Stripe } from "stripe";
import { headers } from "next/headers";
import { stripe } from "../../lib/stripe/stripe";
import { createClient } from "@/src/utils/supabase/server";
 
export async function createCheckoutSession(
  data: FormData
): Promise<{ client_secret: string | null; url: string | null }> {
  const ui_mode = data.get(
    "uiMode"
  ) as Stripe.Checkout.SessionCreateParams.UiMode;
 
  const origin: string = (await headers()).get("origin") as string;
  const locale = data.get("locale") || "en";
  const priceId = data.get("priceId") as string;
  const name = data.get("name") as string;
  const price = Number(data.get("price"));
  const image = data.get("image") as string;
 
  if (!priceId) {
    throw new Error("Price ID is required.");
  }
 
  const supabase = await createClient();
  const userResponse = await supabase.auth.getUser();
  const user_id = userResponse.data?.user?.id;
 
  // Create Stripe checkout session
  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      ...(ui_mode === "hosted" && {
        success_url: `${origin}/${locale}/pricing/product-result?session_id={CHECKOUT_SESSION_ID}`,
      }),
      ...(ui_mode === "embedded" && {
        return_url: `${origin}/${locale}/subscribe/embedded?session_id={CHECKOUT_SESSION_ID}`,
      }),
      ui_mode,
    });
  const paymentIntent =
    (await checkoutSession.payment_intent) as Stripe.PaymentIntent | null;
  const paymentId = paymentIntent?.id;
 
  try {
    const { data: order, error: orderError } = await supabase
      .from("orders")
      .insert({
        stripe_price_id: priceId,
        user_id: user_id,
        name: name,
        price: price,
        image: image,
        payment_id: paymentId,
      })
      .select("id")
      .single();
 
    if (orderError) {
      console.error("Error inserting order:", orderError);
      throw new Error(`Failed to insert order: ${orderError.message}`);
    }
 
    console.log("Order inserted successfully:", order);
  } catch (error) {
    console.error("Error inserting order into database:", error);
    throw new Error(`Failed to insert order: ${error}`);
  }
 
  return {
    client_secret: checkoutSession.client_secret,
    url: checkoutSession.url,
  };
}
 
export async function createPaymentIntent(
  data: FormData
): Promise<{ client_secret: string }> {
  throw new Error("PaymentIntent is not used for subscriptions.");
}