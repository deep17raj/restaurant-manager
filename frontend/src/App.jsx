// src/App.jsx
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import FilterComponent from "./component/Filter/FilterComponent";
import FoodItems from "./component/FoodItems/FoodItems";
import Order from "./component/OrderDetails/Order";

function App() {
  const [sort, setSort] = useState("all");
  const handleSort = (type) => setSort(type);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <FilterComponent handleSort={handleSort} />
            <FoodItems sort={sort} />
          </>
        }
      />
      <Route path="/cart" element={<Order />} />
    </Routes>
  );
}

export default App;
