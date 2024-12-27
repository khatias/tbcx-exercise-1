import React from "react";
import { createCheckoutSession } from "../../app/actions/stripe-payment";

interface BuyNowProps {
  stripe_price_id: string;
  product_id: number;
}

const BuyNow = ({ stripe_price_id, product_id }: BuyNowProps) => {
  const handleBuyNow = async () => {
    try {
      const formData = new FormData();
      formData.append("uiMode", "hosted");
      formData.append("priceId", stripe_price_id);
      formData.append("product_id", String(product_id));
      formData.append("locale", "en");

      const { url } = await createCheckoutSession(formData);

      if (url) {
        window.location.assign(url);
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };

  return (
    <div>
      <button className="text-center w-full" onClick={handleBuyNow}>Buy Now</button>
    </div>
  );
};

export default BuyNow;
