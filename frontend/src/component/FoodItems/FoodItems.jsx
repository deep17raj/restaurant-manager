import React from "react";
import FoodCard from "./FoodCard";
import foodMenu from "../../helper/menu";

export default function FoodItems({ updateCart, cart, sort }) {
  const filtermenu =
    !sort || sort.toLowerCase() === "all"
      ? foodMenu
      : foodMenu.filter((item) => item.type === sort);
  console.log(filtermenu);
  return (
    <div>
      <p className="text-xl font-bold mb-4">What You Wanna Eat Today 😋</p>
      <div className="flex gap-4 flex-wrap">
        {filtermenu.map((menu) => (
          <FoodCard
            key={menu.id}
            id={menu.id}
            name={menu.name}
            price={menu.price}
            img={menu.imageSrc}
            initialQty={cart[menu.id]?.quant || 0}
            onUpdateCart={updateCart}
          />
        ))}
      </div>
    </div>
  );
}
