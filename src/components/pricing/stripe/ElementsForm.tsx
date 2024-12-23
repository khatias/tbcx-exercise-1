"use client";

import * as React from "react";
import { Elements } from "@stripe/react-stripe-js";
import getStripe from "../../../utils/stripe/get-stripejs";
import CheckoutForm from "../../../components/pricing/stripe/checkoutForm";  // Import CheckoutForm

export default function ElementsForm(): JSX.Element {
  const [clientSecret, setClientSecret] = React.useState<string | null>(null);

  React.useEffect(() => {
    // Get the clientSecret from the server after form submission
    async function createSession() {
      const response = await fetch("/api/create-checkout-session");
      const sessionData = await response.json();
      setClientSecret(sessionData.clientSecret); // Assuming clientSecret is returned
    }

    createSession();
  }, []);

  if (!clientSecret) {
    return <div>Loading...</div>;
  }

  return (
    <Elements stripe={getStripe()} options={{ clientSecret }}>
      <CheckoutForm clientSecret={clientSecret} />
    </Elements>
  );
}
