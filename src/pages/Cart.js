import React, { useContext } from "react";
import { useHistory } from "react-router";
import { CartContext } from "../contexts/cart";

function Cart() {
  const { cart, inc, dec, total } = useContext(CartContext);
  const history = useHistory();

  return (
    <div>
      {cart.map(({ id, title, image, price, amount }) => (
        <div key={id}>
          <img src={image} alt={title} height={100} />
          {title}, ${price}: {amount}
          <button onClick={() => dec(id)}>-</button>
          <button onClick={() => inc({ image, id, title })}>+</button>
        </div>
      ))}
      <div>total: ${total}</div>
      <button onClick={() => history.push("/checkout")}>Checkout</button>
    </div>
  );
}

export default Cart;
