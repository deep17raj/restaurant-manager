import React from "react";
import { Plus, Minus } from "lucide-react";
export default function OrderList({ cart, updateCart }) {
  const cartItems = Object.values(cart);
  const handleSubmitOrder = async()=>{
    
  }
  const totalPrice = cartItems.reduce((sum,item)=>sum+(item.price*item.quant),0);
  if (!cartItems.length) {
    return (
      <div>
        <p>The cart is empty</p>
      </div>
    );
  }
  return (
    <div>
      {cartItems.map((item) => (
        <div className="flex gap-3" key={item.id}>
          <div className="w-[165px] h-[110px] object-cover rounded-lg">
            <img className="w-[100px] h-[100px]" src={item.imageSrc} alt="img" />
          </div>
          <div className="">
            <p>{item.name}</p>
            <p>{item.quant} plate</p>
          </div>
          <div className="flex">
            <button
              onClick={() => updateCart(item.id,item.quant-1)}
              className="flex items-center justify-center w-8 h-8 rounded-xl bg-green-500 transition-colors"
            >
              <Minus size={16} color={"#fff"} strokeWidth={"3px"} />
            </button>
            <span className="font-semibold text-lg mx-3">{item.quant}</span>
            <button
              onClick={() => updateCart(item.id,item.quant+1)}
              className="flex items-center justify-center w-8 h-8 rounded-xl bg-green-500 transition-colors"
            >
              <Plus size={16} color={"#fff"} strokeWidth={"3px"} />
            </button>
          </div>
        </div>
      ))}
      <div className="flex gap-2 mt-5">
          <p>₹ {totalPrice}</p>
          <button onClick={handleSubmitOrder}>Confirm Order</button>
      </div>
    </div>
  );
}
