import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { withAuthenticator } from "@aws-amplify/ui-react";

const stripePromise = loadStripe(
  "pk_test_51InRYpETKhgF1UqhaXOYOg7AY9mYMbSoKjjpJEfZG6bvVEQwjpywJI1rEY8EMSmYcrMkh5U8gC4sDHPTBqjcfMSU00CdKJUuKP"
);

function Checkout() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}

export default withAuthenticator(Checkout);
