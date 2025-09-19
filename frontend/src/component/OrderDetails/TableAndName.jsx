import React, { useState } from "react";

export default function TableAndName() {
  const [tableNo, setTableNo] = useState("");
  const [custName, setCustName] = useState("");
  const handleTableNo = (e) => {
    setTableNo(e.target.value);
  };
  const handleCustName = (e) => {
    setCustName(e.target.value);
  };
  return (
    <div>
      <p>Order Details</p>
      <div>
        <input
          type="text"
          name="custName"
          id="custName"
          value={custName}
          onChange={handleCustName}
          placeholder="enter your name"
        />
      </div>
      <input
        type="number"
        name="tableNo"
        id="tableNo"
        value={tableNo}
        onChange={handleTableNo}
        placeholder="enter table no"
        min={1}
        max={10}
      />
    </div>
  );
}
