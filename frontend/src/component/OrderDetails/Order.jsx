import React, { useEffect, useState } from "react";
import TableAndName from "./TableAndName";
import OrderList from "./OrderList";
import { useCart } from "../../context/CartContext";
import plate from "../../assets/plate.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Order() {
  const { cart, updateCart } = useCart();
  const cartItems = Object.values(cart);
  const [tableNo, setTableNo] = useState("");
  const [custName, setCustName] = useState("");
  const [isError, setIsError] = useState("");
  const [isBooked, setIsBooked] = useState(false);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;
  const handleTableNo = async (e) => {
  const value = e.target.value;
  setTableNo(value);

  // Validation first
  if (value === "") {
    setIsError("Table No is required");
    return;
  } else if (value <= 0 || value > 10) {
    setIsError("Table No should be between 1 to 10!");
    return;
  } else {
    setIsError("");
  }

  try {
    const res = await axios.get(
      `${apiUrl}/customer/table/${value}`
    );
    console.log(res.data.tableStatus);
    if (res.data.tableStatus === "Booked" || res.data.tableStatus === "Available") {


      setIsBooked(true);
    }
    else{
      setIsBooked(false)
    }
  } catch (error) {
    console.log(error);
  }
};

  const handleCustName = (e) => {
    setCustName(e.target.value);
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quant,
    0
  );
  const handleSubmitOrder = async () => {
    const cartData = cartItems.map((item) => ({
      item_name: item.name,
      quantity: item.quant,
      price: item.totalPrice,
    }));

    const finalData = {
      customerName: custName,
      tableNumber: tableNo,
      items: cartData,
      totalPrice: totalPrice,
      paymentStatus: "Pending",
      paymentMethod: "cash",
      tableStatus: "Booked",
      tempToken: "234abc",
    };
    console.log(finalData);

    if (tableNo == "" || tableNo > 10 || tableNo < 1) {
      alert("table no should be between 1 to 10");
      return;
    }
    if (custName == "") {
      alert("customer name is required");
      return;
    }
    if(isBooked){
      alert("The table is already booked.")
      setTableNo("")
      return;
    }
    try {
      const res = await axios.patch(
        `${apiUrl}/orders`,
        finalData
      );
      alert("cart sent successfully");
      setTableNo("");
      setCustName("");
    } catch (error) {
      console.log(error);
      alert("Failed to add");
    }
  };
  return (
    <div className="bg-[#fff] min-h-screen ">
      <div className="bg-[#FF8F1F] h-[60px] flex items-center ">
        <p className="ml-5 font-ribeye text-2xl text-[#fff]">
          You Are Almost Done ☺️
        </p>
      </div>
      <div className="bg-[#FF8F1F] ">
        <div className="mx-4">
          <TableAndName
            tableNo={tableNo}
            custName={custName}
            isError={isError}
            handleCustName={handleCustName}
            handleTableNo={handleTableNo}
          />
        </div>
        <div className="  rounded-t-2xl bg-[#fff]">
          <div className="mx-4">
            <div className="flex gap-2 items-center mb-2">
              <img className="" src={plate} alt="" width={60} />
              <p className="text-2xl p-1">Plate list 🤤</p>
            </div>
            <div
              className="border rounded-2xl h-[430px] overflow-y-auto p-1"
              style={{
                scrollbarWidth: "none", // Firefox
                msOverflowStyle: "none", // IE 10+
              }}
            >
              <OrderList
                cart={cart}
                updateCart={updateCart}
                totalPrice={totalPrice}
                handleSubmitOrder={handleSubmitOrder}
              />
            </div>
            <div className="flex justify-center items-center gap-8 mt-5">
              <p className="text-[#000] font-medium text-2xl">₹ {totalPrice}</p>
              <button
                onClick={handleSubmitOrder}
                className="bg-[#FF8F1F] p-2 rounded-2xl text-[#fff]"
              >
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
