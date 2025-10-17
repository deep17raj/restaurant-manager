import React, { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";

export default function FoodCard({
  id,
  name,
  price,
  img,
  initialQty,
  onUpdateCart,
}) {
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
    <div className="border bg-[#fff] rounded-xl  w-[47.5%] text-center overflow-hidden md:w-[22%] lg:w-[17%]">
      <div className="  w-[100%] text-center overflow-hidden ">
        {/* Image container */}
        <div className="w-full h-[150px]">
          <img
            className="w-full h-full object-cover -t-xl"
            src={img}
            alt={name}
          />
        </div>

        {/* Text */}
        <div className="p-1 flex justify-center text-center  ">
          <p className="font-bold text-center">{name}</p>
        </div>
      </div>

      <div className="flex mb-3 items-center justify-evenly">
        <p
          style={{
            fontWeight: "650",
          }}
          className="text-gray-600 - text-xl "
        >
          {" "}
          ₹{price}
        </p>
        {!isOn ? (
          <button
            className="mt-1 bg-transparent hover:bg-green-500 text-[#1D933C] font-semibold hover:text-white py-2 px-4 border border-[#1D933C] hover:border-transparent rounded-xl"
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
    </div>
  );
}
