import React, { useContext } from "react";
import { CartContext } from "../contexts/cart";

function Cart() {
  const { cart } = useContext(CartContext);
  return (
    <div>
      {cart.map(({ id, title, image, amount }) => (
        <div key={id}>
          <img src={image} alt={title} height={100} />
          {title}: {amount}
        </div>
      ))}
    </div>
  );
}

export default Cart;
