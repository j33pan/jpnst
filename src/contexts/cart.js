import React from "react";
import { v4 as uuidv4 } from "uuid";
import API, { graphqlOperation } from "@aws-amplify/api";
import { processOrder } from "../graphql/mutations";

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cart, setcart] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const total = [...cart].reduce((total, { amount, price }) => {
      return (total += amount * price);
    }, 0);
    setTotal(parseFloat(total.toFixed(2)));
    console.log(total);
    // console.log(cart);
  }, [cart]);

  const inc = ({ id, image, title, price }) => {
    const x = [...cart].find((y) => y.id === id);
    if (x) {
      const newcart = [...cart].map((x) => {
        return x.id === id ? { ...x, amount: x.amount + 1 } : x;
      });
      setcart(newcart);
    } else {
      const newcart = [...cart, { id, image, title, price, amount: 1 }];
      setcart(newcart);
    }
  };

  const dec = (id) => {
    const x = [...cart].find((y) => y.id === id);
    if (x) {
      if (x.amount === 1) {
        const newcart = [...cart].filter((y) => y.id !== id);
        setcart(newcart);
      } else {
        const newcart = [...cart].map((x) => {
          return x.id === id ? { ...x, amount: x.amount - 1 } : x;
        });
        setcart(newcart);
      }
    }
  };

  const checkout = (details) => {
    const payload = {
      id: uuidv4(),
      ...details,
      cart,
      total,
    };
    console.log("checkout input: ", payload);
    API.graphql(graphqlOperation(processOrder, { input: payload }));
  };

  return (
    <CartContext.Provider value={{ cart, inc, dec, total, checkout }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
