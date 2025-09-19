import { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/Header/Header";
import FoodItems from "./component/FoodItems/FoodItems";
import TableAndName from "./component/OrderDetails/TableAndName";
import FilterComponent from "./component/Filter/FilterComponent";
import Order from "./component/OrderDetails/Order";
import foodMenu from "./helper/menu";
function App() {
  const [sort, setSort] = useState("all");

  const handleSort = (type) => {
    setSort(type);
  };
  const [cart, setCart] = useState({});
  useEffect(() => {
    console.log(cart, sort);
  }, [cart, sort]);
  const updateCart = (id, quant) => {
    setCart((prevCart) => {
      const item = foodMenu.find((f) => f.id === id);
      if (!item) return prevCart;
      if (quant <= 0) {
        const { [id]: _, ...rest } = prevCart;
        return rest;
      }
      return {
        ...prevCart,
        [id]: { ...item, quant },
      };
    });
  };

  return (
    <>
      {/* <Header />
      <FilterComponent handleSort={handleSort} />
      <FoodItems updateCart={updateCart} cart={cart} sort = {sort} />
      <Order cart={cart} updateCart={updateCart} /> */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <FilterComponent handleSort={handleSort} />
                <FoodItems updateCart={updateCart} cart={cart} sort = {sort} />
              </>
            }
          />
          <Route path="/cart" element={<Order cart={cart} updateCart={updateCart} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
