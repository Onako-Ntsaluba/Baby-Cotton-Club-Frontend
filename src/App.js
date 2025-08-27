import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import Orders from "./screens/Orders";
// import Customers from "./screens/Customers";
import OrderLines from "./screens/OrderLines";
import OrderDetails from "./screens/OrderDetails";
import OrderLineDetails from "./screens/OrderLineDetails";

import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Navbar from "./components/Navbar";

function App() {
  // Simple auth state (replace with real auth in production)
  const [user, setUser] = useState(null); // { email: string }
  const isAuthenticated = !!user;
  const login = (email) => setUser({ email });
  const logout = () => setUser(null);

  return (
    <Router>
      <div className="app-container">
        <Navbar isAuthenticated={isAuthenticated} user={user} logout={logout} />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Orders routes moved below to pass user prop */}
          {/* <Route path="/customers" element={<Customers />} /> */}

          <Route path="/login" element={<Login login={login} />} />
          <Route path="/signup" element={<SignUp login={login} />} />
          <Route path="/order-lines" element={<OrderLines isAuthenticated={isAuthenticated} user={user} />} />
          <Route path="/orders" element={<Orders user={user} />} />
          <Route path="/orders/:orderId" element={<OrderDetails user={user} />} />
          <Route path="/orderlines/:orderLineId" element={<OrderLineDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
