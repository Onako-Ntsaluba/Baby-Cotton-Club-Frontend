import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import Orders from "./screens/Orders";
import Customers from "./screens/Customers";
import OrderLines from "./screens/OrderLines";
import OrderDetails from "./screens/OrderDetails";
import CreateOrder from "./screens/CreateOrder";

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/customers">Customers</Link>
          <Link to="/create-order">Create Order</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:orderId" element={<OrderDetails />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/create-order" element={<CreateOrder />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
