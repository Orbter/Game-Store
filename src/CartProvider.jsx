import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const cartObjList = {
    cartList,
    setCartList,
  };

  return (
    <CartContext.Provider value={cartObjList}>{children}</CartContext.Provider>
  );
};
