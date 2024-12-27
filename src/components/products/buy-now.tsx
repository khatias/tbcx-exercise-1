import React, { useState } from "react";
import { createCheckoutSession } from "../../app/actions/stripe-payment";
interface buy{
  stripe_price_id:string;
  name:string;
  price:string;
  image:string;
}
const BuyNow  = ({ stripe_price_id ,name, price, image }:buy) => {
  const handleBuyNow = async ({stripe_price_id , name, price, image}:buy) => {
    try {
      const formData = new FormData();
      formData.append("uiMode", "hosted");
      formData.append("priceId", stripe_price_id);
      formData.append("locale", "en");
      formData.append("name", name);
      formData.append ("price", price);
      formData.append("image", image);
 
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
        onClick={() => handleBuyNow({stripe_price_id, name, price, image})}
      >
        Buy Now
      </button>
    </div>
  );
};
 
export default BuyNow;