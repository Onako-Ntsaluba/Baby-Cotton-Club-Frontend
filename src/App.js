import img_1 from "./assets/img_1.png"
import img from "./assets/img.png";
import onesie from "./assets/onesie.webp";

import banner1 from "./assets/banner1.webp";
import banner2 from "./assets/banner2.jpg";
import banner3 from "./assets/banner3.webp";

import { FaHeart, FaShoppingCart } from "react-icons/fa";


import React, { useState, useEffect } from "react";
import "./App.css";

// Sample products
const products = [
    {
        id: 1,
        name: "Baby Cotton Onesie",
        brand: "Baby Cotton Club",
        price: "R 199",
        image: onesie,},
    {
        id: 2,
        name: "Soft Cotton Blanket",
        brand: "Baby Cotton Club",
        price: "R 250",
        image: img,},
    {
        id: 3,
        name: "Baby Booties",
        brand: "Baby Cotton Club",
        price: "R 120",
        image: img_1,
    },
];

// Banner images
const bannerImages = [banner1, banner2, banner3];


export default function Home() {
    const [currentBanner, setCurrentBanner] = useState(0);
    const [fade, setFade] = useState(true);

    // Banner auto-slide with fade
    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
                setFade(true);
            }, 500); // fade-out duration
        }, 4000); // change every 4 seconds
        return () => clearInterval(interval);
    }, []);

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
    );
}


