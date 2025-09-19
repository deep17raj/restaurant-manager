import React, { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";

export default function FoodCard({ id, name, price, img, initialQty, onUpdateCart}) {
  const [quantity, setQuantity] = useState(initialQty);

  useEffect(() => {
    setQuantity(initialQty); // sync with parent
  }, [initialQty]);

  const handleAdd = () => {
    setQuantity(1);
    onUpdateCart(id, 1);
  };

  const updateQuantity = (add) => {
    const newQty = quantity + add;
    if (newQty >= 0) {
      setQuantity(newQty);
      onUpdateCart(id, newQty);
    }
  };

  const isOn = quantity > 0;

  return (
    <div className="p-3 border rounded-xl w-[200px] text-center">
      <p className="font-bold">{name}</p>
      <p className="text-gray-600">₹{price}</p>
      <img className="w-[165px] h-[110px] object-cover rounded-lg" src={img} alt={name} />

      {!isOn ? (
        <button
          className="mt-2 bg-transparent hover:bg-green-500 text-[#1D933C] font-semibold hover:text-white py-2 px-4 border border-[#1D933C] hover:border-transparent rounded-xl"
          onClick={handleAdd}
        >
          Add
        </button>
      ) : (
        <div className="flex items-center justify-center mt-2">
          <button
            onClick={() => updateQuantity(-1)}
            className="flex items-center justify-center w-8 h-8 rounded-xl bg-green-500 transition-colors"
          >
            <Minus size={16} color={"#fff"} strokeWidth={"3px"} />
          </button>
          <span className="font-semibold text-lg mx-3">{quantity}</span>
          <button
            onClick={() => updateQuantity(1)}
            className="flex items-center justify-center w-8 h-8 rounded-xl bg-green-500 transition-colors"
          >
            <Plus size={16} color={"#fff"} strokeWidth={"3px"} />
          </button>
        </div>
      )}
    </div>
  );
}
