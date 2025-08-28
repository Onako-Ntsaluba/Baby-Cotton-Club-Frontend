import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import OrderLines from "./screens/OrderLines";
import Orders from "./screens/Orders";
import Customers from "./screens/Customers";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import CreateOrder from "./screens/CreateOrder";
import OrderDetails from "./screens/OrderDetails";
import OrderLineDetails from "./screens/OrderLineDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    return (

        <div className="app">

            {/* Header */}
            <header className="header">
                <div className="header-left">
                    <h1>Baby Cotton Club</h1>
                </div>

                <div className="search-bar">
                    <input type="text" placeholder="Search for products, brands..." />
                    <button>Search</button>
                </div>

                <div className="header-right">
                    <div className="user-links">
                        <button>Login</button>
                        <button>Register</button>
                        <button>Orders</button>
                        <button>Categories</button>
                        <button>My Account</button>
                    </div>
                    <div className="icons">
                        <FaHeart className="icon" size={24} />
                        <FaShoppingCart className="icon" size={24} />
                    </div>
                    <span className="help-center">Help Center</span>
                </div>
            </header>

            {/* Banner */}
            <div className="banner">
                <img
                    src={bannerImages[currentBanner]}
                    alt="Banner"
                    className={fade ? "fade-in" : "fade-out"}
                />
                <div className="banner-text">Want It Now?</div>
            </div>

            {/* Main Layout */}
            <div className="main">
                {/* Sidebar */}
                <aside className="sidebar">
                    <h2>Refine by Category</h2>
                    <ul>
                        <li>All Products</li>
                        <li>Clothes</li>
                        <li>Toys</li>
                        <li>Accessories</li>
                        <li>See More</li>
                    </ul>
                    <div className="filters">
                        <h2>Filters</h2>
                        <label>
                            <input type="checkbox" defaultChecked /> In Stock
                        </label>
                    </div>
                </aside>

                {/* Product Grid */}
                <main className="product-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.name} />
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <p>{product.brand}</p>
                                <p className="price">{product.price}</p>
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </main>
            </div>

            {/* Footer */}
            <footer>© 2025 Baby Cotton Club | All Rights Reserved</footer>
        </div>

        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/order-lines" element={<OrderLines />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/create-order" element={<CreateOrder />} />
                <Route path="/order-details/:id" element={<OrderDetails />} />
                <Route path="/order-line-details/:id" element={<OrderLineDetails />} />
            </Routes>
            <Footer />
        </Router>

    );
}

export default App;
