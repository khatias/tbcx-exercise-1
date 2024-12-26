import React, { useState } from "react";
import { createCheckoutSession } from "../../app/actions/stripe-payment";

const BuyNow: React.FC<{ stripe_price_id: string }> = ({ stripe_price_id }) => {
  const handleBuyNow = async (stripe_price_id: string) => {
    try {
      const formData = new FormData();
      formData.append("uiMode", "hosted");
      formData.append("priceId", stripe_price_id);
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
      <button
        className="bg-blue-950 text-white py-2 px-4 rounded-full hover:bg-blue-800 transition duration-200 dark:bg-gray-600 dark:hover:bg-gray-500"
        onClick={() => handleBuyNow(stripe_price_id)}
      >
        Buy Now
      </button>
    </div>
  );
};

export default BuyNow;
