import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Navbar() {
    const navigate = useNavigate();
    return (
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
                    <button onClick={() => navigate('/')}>Home</button>
                    <button onClick={() => navigate('/login')}>Login</button>
                    <button onClick={() => navigate('/signup')}>Register</button>
                    <button onClick={() => navigate('/orders')}>Orders</button>
                    <button onClick={() => navigate('/customers')}>My Account</button>
                </div>
                <div className="icons">
                    <FaHeart className="icon" size={24} onClick={() => navigate('/wishlist')} />
                    <FaShoppingCart className="icon" size={24} onClick={() => navigate('/cart')} />
                </div>
                <span className="help-center" onClick={() => navigate('/help')}>Help Center</span>
            </div>
        </header>
    );
}
