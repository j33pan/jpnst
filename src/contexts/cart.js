import React from "react";

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cart, setcart] = React.useState([]);

  React.useEffect(() => {
    console.log(cart);
  }, [cart]);

  const inc = ({ id, image, title }) => {
    const x = [...cart].find((y) => y.id === id);
    if (x) {
      const newcart = [...cart].map((x) => {
        return x.id === id ? { ...x, amount: x.amount + 1 } : x;
      });
      setcart(newcart);
    } else {
      const newcart = [...cart, { id, image, title, amount: 1 }];
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

  return (
    <CartContext.Provider value={{ cart, inc, dec }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
