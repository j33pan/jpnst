import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { CartContext } from "../contexts/cart";
import react from "react";

function CheckoutForm() {
  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };
  const stripe = useStripe();
  const elements = useElements();
  const [orderDetails, setOrderDetails] = React.useState({
    address: null,
    token: null,
  });
  const { checkout } = React.useContext(CartContext);

  const handlesubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const cardele = elements.getElement(CardElement);
    const result = await stripe.createToken(cardele);
    if (!result.error) {
      setOrderDetails({ ...orderDetails, token: result.token.id });
    }
  };

  React.useEffect(() => {
    if (orderDetails.token) checkout(orderDetails);
  }, [orderDetails]);

  return (
    <form onSubmit={handlesubmit}>
      <label>Shipping Address</label>
      <input
        type="text"
        onChange={(e) =>
          setOrderDetails({ ...orderDetails, address: e.target.value })
        }
      />
      <CardElement options={CARD_ELEMENT_OPTIONS} />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
}

export default CheckoutForm;
