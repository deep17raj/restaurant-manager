import React, { useEffect } from "react";
import { Plus, Minus } from "lucide-react";
export default function OrderList({
  cart,
  updateCart,
  totalPrice,
  handleSubmitOrder,
}) {
  const cartItems = Object.values(cart);
  useEffect(() => {
    console.log(cartItems);
  }, [cart]);

  if (!cartItems.length) {
    return (
      <div>
        <p>The cart is empty</p>
      </div>
    );
  }
  return (
    <div className="space-y-3 ">
      {cartItems.map((item) => (
        <div className="flex gap-3 rounded-xl bg-[#EBEBEB]" key={item.id}>
          <div className="flex min-w-[65%]">
            <div className="w-[120px] h-[110px] object-cover  ">
              <img
                className="w-[100%] h-[100%] rounded-xl"
                src={item.imageSrc}
                alt="img"
              />
            </div>
            <div className="flex flex-col justify-center text-center w-[60%]">
              <p>{item.name}</p>
              <p>{item.quant} plate</p>
            </div>
          </div>
          <div className="flex flex-col  w-[30%]">
            <div className="flex justify-center items-center flex-1">
              <button
                onClick={() => updateCart(item.id, item.quant - 1)}
                className="flex items-center justify-center w-8 h-8 rounded-xl bg-green-500 transition-colors"
              >
                <Minus size={16} color={"#fff"} strokeWidth={"3px"} />
              </button>
              <span className="font-semibold text-lg mx-3">{item.quant}</span>
              <button
                onClick={() => updateCart(item.id, item.quant + 1)}
                className="flex items-center justify-center w-8 h-8 rounded-xl bg-green-500 transition-colors"
              >
                <Plus size={16} color={"#fff"} strokeWidth={"3px"} />
              </button>
            </div>

            <div className="w-[100%] mb-3 text-xl text-center">
              ₹{item.totalPrice}
            </div>
          </div>
        </div>
      ))}
      
    </div>
  );
}
