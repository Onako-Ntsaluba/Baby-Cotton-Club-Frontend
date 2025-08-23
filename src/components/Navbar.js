import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ isAuthenticated, logout }) {
	return (
		<header className="navbar">
			<div className="navbar-logo">Baby Cotton Club</div>
			<nav className="navbar-links">
				<NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
				<NavLink to="/order-lines" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Clothes</NavLink>
				<NavLink to="/orders" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Orders</NavLink>
				<NavLink to="/create-order" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Create Order</NavLink>
				{!isAuthenticated && <NavLink to="/login" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Login</NavLink>}
				{!isAuthenticated && <NavLink to="/signup" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Sign Up</NavLink>}
				{isAuthenticated && <button className="nav-link nav-btn" onClick={logout} style={{background:'none',border:'none',cursor:'pointer'}}>Logout</button>}
			</nav>
		</header>
	);
}

export default Navbar;
