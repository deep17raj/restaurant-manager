import React, { useState, useEffect } from "react";
import foodMenu from "../../helper/menu";
export default function Filter({ handleSort }) {
  return (
    <div className="h-[150px] flex gap-[5px]">
      {foodMenu.map((types) => (
        <button
          onClick={()=>handleSort(types.type)}
          key={types.id}
          className="justify-center items-center  w-[140px] h-[140px]"
        >
          <img
            className="min-w-[90px] h-[90px]  rounded-full items-center "
            src={types.imageSrc}
            alt=""
          />
          <p className="text-center font-normal">{types.type}</p>
        </button>
      ))}
    </div>
  );
}
