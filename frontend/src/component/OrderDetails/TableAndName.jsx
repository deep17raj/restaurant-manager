import React, { useState } from "react";

export default function TableAndName({
  tableNo,
  custName,
  isError,
  handleCustName,
  handleTableNo,
}) {
  return (
    <div className="h-[190px]">
      <div className="space-y-3">
        <p className="text-2xl text-[#fff] font-medium">Order Details</p>
        <div>
          <input
            type="text"
            name="custName"
            id="custName"
            value={custName}
            onChange={handleCustName}
            className="rounded-md h-[55px] pl-2 text-xl"
            placeholder=" enter your name"
            style={{ width: "100%", backgroundColor: "#fff" }}
          />
        </div>
        <input
          type="number"
          name="tableNo"
          id="tableNo"
          value={tableNo}
          onChange={handleTableNo}
          placeholder=" enter table no"
          min={1}
          max={10}
          className={`${
            isError ? "mb-0" : "mb-[10px]"
          } rounded-md  pl-2 w-[100%] h-[55px] text-xl`}
          style={{
            backgroundColor: "#fff",
          }} // 👈 increase width here
        />
        {isError && (
          <p className="mb-2" style={{ color: "black" }}>
            {isError}
          </p>
        )}
      </div>
    </div>
  );
}
