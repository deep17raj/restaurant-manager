// src/context/CartContext.js
import React, { createContext, useContext, useState,useEffect } from "react";
import foodMenu from "../helper/menu";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cart, setCart] = useState({});
  const [showCartPopup, setShowCartPopup] = useState(false);

  const updateCart = (id, quant) => {
    setCart(prevCart => {
      const item = foodMenu.find(f => f.id === id);
      if (!item) return prevCart;
      if (quant <= 0) {
        const { [id]: _, ...rest } = prevCart;
        return rest;
      }
      return { ...prevCart, [id]: { ...item, quant,totalPrice:item.price*quant } };
    });
  };
  // const updateShowCart = ()=>{
  //   if(Object.keys(cart).length==0){
  //     setShowCartPopup(false);
  //   }
  //   else{
  //     setShowCartPopup(true)
  //   }
  // }
  useEffect(() => {
    setShowCartPopup(Object.keys(cart).length > 0);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, updateCart,showCartPopup }}>
      {children}
    </CartContext.Provider>
  );
}
