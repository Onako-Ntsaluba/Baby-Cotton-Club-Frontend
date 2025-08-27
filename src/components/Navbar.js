import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserCircle2 } from "lucide-react";

function Navbar({ isAuthenticated, logout }) {
	const [profileOpen, setProfileOpen] = useState(false);
	const profileRef = useRef(null);
	const navigate = useNavigate();

	useEffect(() => {
		function handleClick(e) {
			if (profileRef.current && !profileRef.current.contains(e.target)) {
				setProfileOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClick);
		return () => document.removeEventListener("mousedown", handleClick);
	}, []);

	return (
		<header className="bg-white shadow-md px-6 py-3 flex items-center justify-between sticky top-0 z-50">
			<nav className="flex items-center gap-6" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
				<NavLink to="/order-lines" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Shop</NavLink>
				<NavLink to="/orders" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Orders</NavLink>
			</nav>

			<div className="relative nav-profile" ref={profileRef} style={{ marginLeft: 'auto' }}>
				<button
					className="profile-btn flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200"
					onClick={() => setProfileOpen((o) => !o)}
					aria-label="Profile"
					style={{ marginLeft: 'auto' }}
				>
					<UserCircle2 size={28} className="text-gray-700" />
				</button>

				{profileOpen && (
					<div className="profile-dropdown absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50" style={{ display: 'block' }}>
						{!isAuthenticated ? (
							<>
								<button className="dropdown-item block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
										onClick={() => { setProfileOpen(false); navigate("/login"); }}>Login</button>
								<button className="dropdown-item block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
										onClick={() => { setProfileOpen(false); navigate("/signup"); }}>Sign Up</button>
							</>
						) : (
							<>
								<button className="dropdown-item block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
										onClick={() => { setProfileOpen(false); logout(); }}>Logout</button>
								<button className="dropdown-item block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
										onClick={() => { setProfileOpen(false); navigate("/orders"); }}>My Orders</button>
							</>
						)}
					</div>
				)}
			</div>
		</header>
	);
}

export default Navbar;
