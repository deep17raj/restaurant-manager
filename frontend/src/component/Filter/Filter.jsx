import React, { useState, useEffect } from "react";
import foodMenu from "../../helper/menu";
export default function Filter({ handleSort }) {
  const forFilter = [
    {
      name: "all",
      type: "all",
      imageSrc:
        "https://i.pinimg.com/736x/28/75/bc/2875bc0f2052a6de162df9e07910db47.jpg",
    },
    ...foodMenu,
  ];

  return (
    <div className="h-[150px] flex gap-[5px] mx-1">
      {forFilter.map((types) => (
        <button
          onClick={() => handleSort(types.type)}
          key={types.id}
          className="justify-center items-center  w-[140px] h-[140px]"
        >
          <img
            className="min-w-[90px] h-[90px]  rounded-full items-center "
            src={types.imageSrc}
            alt=""
          />
          <p className="text-center font-normal">
            {types.type}
          </p>
        </button>
      ))}
    </div>
  );
}
