import React, { useEffect } from "react";
import TableAndName from "./TableAndName";
import OrderList from "./OrderList";

export default function Order({ cart, updateCart }) {
  const cartItems = Object.values(cart);
  
  return (
    <div>
      <TableAndName />
      <div>
        <p>Plate list 🤤</p>
        <div
          className="overflow-y-auto"
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE 10+
          }}
        >
          <OrderList cart={cart} updateCart={updateCart} />
        </div>
      </div>
    </div>
  );
}
