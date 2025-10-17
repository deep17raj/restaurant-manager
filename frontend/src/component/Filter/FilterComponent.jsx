import React from "react";
import Filter from "./Filter";

export default function FilterComponent({handleSort}) {
  return (
    <div
      className="overflow-x-auto scrollbar-hide bg-[#EBEBEB]"
      style={{
        scrollbarWidth: "none", // Firefox
        msOverflowStyle: "none", // IE 10+
      }}
    >
      <Filter handleSort = {handleSort} />
    </div>
  );
}
