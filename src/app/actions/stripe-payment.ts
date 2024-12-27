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
  const priceId = data.get("priceId") as string;
  const product_id = data.get("product_id") as string;
  const origin: string = (await headers()).get("origin") as string;
  const locale = data.get("locale") || "en";

  if (!priceId || !product_id) {
    throw new Error("Price ID and Product ID are required.");
  }

  const supabase = await createClient();
  const { data: authData, error: authError } = await supabase.auth.getUser();
  const user_id = authData?.user?.id;

  if (authError || !user_id) {
    throw new Error("User authentication failed.");
  }

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
      metadata: {
        product_id,
        user_id,
      },
      ...(ui_mode === "hosted" && {
        success_url: `${origin}/${locale}/pricing/product-result?session_id={CHECKOUT_SESSION_ID}`,
      }),
      ...(ui_mode === "embedded" && {
        return_url: `${origin}/${locale}/subscribe/embedded?session_id={CHECKOUT_SESSION_ID}`,
      }),
      ui_mode,
    });

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
