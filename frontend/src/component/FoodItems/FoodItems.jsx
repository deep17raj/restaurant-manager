import React, { useEffect } from "react";
import FoodCard from "./FoodCard";
import foodMenu from "../../helper/menu";
import { useCart } from "../../context/CartContext";
import rightArrow from "../../assets/rightArrow.png";
import foodTray from "../../assets/foodTray.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function FoodItems({ sort }) {
  const navigate = useNavigate();
  const { cart, updateCart,showCartPopup,updateShowCart } = useCart();
  const cartItems = Object.values(cart);
  const totalItem = cartItems.reduce((sum, item) => sum + 1 * item.quant, 0);
  console.log(cart);
  
  const filtermenu =
    !sort || sort.toLowerCase() === "all"
      ? foodMenu
      : foodMenu.filter((item) => item.type === sort);
  console.log(filtermenu);
  return (
    <div className="flex-wrap bg-[#EBEBEB] min-h-screen pb-24">
      <p className="text-xl font-bold mb-4 mx-4">What You Wanna Eat Today 😋</p>
      <div className="flex gap-4 flex-wrap mx-4 overflow-x-hidden">
        {filtermenu.map((menu) => (
          <FoodCard
            key={menu.id}
            id={menu.id}
            name={menu.name}
            price={menu.price}
            img={menu.imageSrc}
            initialQty={cart[menu.id]?.quant || 0}
            onUpdateCart={(id, quant) => {
              updateCart(id, quant);
            }}
          />
        ))}
      </div>
      <div className={`fixed bottom-0 left-0 w-full transition-transform duration-300 ${
          showCartPopup ? "translate-y-0" : "translate-y-full"
        }`}>
        
        <div
          onClick={() => {
              navigate("/cart")
          }}
          className="w-[50%] mx-auto bg-[#FF8F1F] flex  gap-4 h-[65px] rounded-[28px] justify-center items-center mb-4 shadow-lg"
        >
          <div className="rounded-full bg-red-500 w-[45px] flex justify-center items-center h-[45px]">
            <img src={foodTray} alt="" width={35} />
          </div>
          <div>
            <div>
              <button className="font-extrabold text-[#fff]">View Cart</button>
            </div>
            <div className="font-light text-[#fff]">{totalItem} items</div>
          </div>
          <div>
            <img width={20} src={rightArrow} alt="" />
          </div>
        </div>
      </div>
    </div>
      
  );
}
