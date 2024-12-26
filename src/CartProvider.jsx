import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([
    {
      background_image:
        'https://media.rawg.io/media/games/547/5473d5c6bab9de2a4a4d5c195a57a1d2.jpg',
      name: 'poding of the alfa sigma',
      genre: 'alot of poding',
      price: 60,
    },
  ]);

  const cartObjList = {
    cartList,
    setCartList,
  };

  return (
    <CartContext.Provider value={cartObjList}>{children}</CartContext.Provider>
  );
};
