import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import carrito from "../assets/shopping-cart.svg";
import Cart from "./Cart";
import circle from "../assets/circle.png";
import logo from "../assets/shopping_cart.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cartItems, isCartOpen, toggleCart } = useContext(ProductContext);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 relative">
      <div className="container mx-auto flex items-center justify-between relative z-10">
        {/* Brand Logo and Name */}
        <div className="flex items-center">
          <Link to="/fake-store-react/" className="text-white text-2xl font-bold flex items-center">
            <img src={logo} alt="Logo" className="w-12 h-12 mr-2 sm:mr-10" />
            Fake Store
          </Link>
        </div>

        {/* Navigation Links (for small screens) */}
        <div className="flex items-center sm:hidden">
          <button
            onClick={toggleSidebar}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links (for larger screens) */}
        <div className="hidden sm:flex space-x-4">
          <Link to="/fake-store-react/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/fake-store-react/shop" className="text-white hover:text-gray-300">
            Shop
          </Link>
          <Link to="/fake-store-react/aboutUs" className="text-white hover:text-gray-300">
            About Us
          </Link>
          <Link to="/fake-store-react/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
        </div>

        {/* Shopping Cart */}
        <div className="flex items-center">
          <div className="relative mr-1">
            <img className="w-5" src={circle} alt="" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold">
              {cartItems.length}
            </div>
          </div>
          <div className="mr-1 w-12 rounded-md hover:bg-stone-100 hover:shadow-xl active:shadow-md">
            <img src={carrito} onClick={toggleCart} alt="" />
          </div>
        </div>
      </div>

      {/* Responsive Sidebar */}
      {isSidebarOpen && (
        <>
          <div className="sm:hidden fixed top-0 right-0 bottom-0 left-0 bg-gray-800 bg-opacity-75 z-50" onClick={toggleSidebar}></div>
          <div className={`sm:hidden fixed top-0 right-0 bottom-0 bg-white w-64 overflow-y-auto transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"} transition-transform ease-in-out duration-300 z-50`}>
            <div className="p-4">
              <Link to="/fake-store-react/" className="block text-white bg-gray-800 hover:bg-gray-700 rounded-md px-3 py-2 mb-2">
                Home
              </Link>
              <Link to="/fake-store-react/shop" className="block text-white bg-gray-800 hover:bg-gray-700 rounded-md px-3 py-2 mb-2">
                Shop
              </Link>
              <Link to="/fake-store-react/about" className="block text-white bg-gray-800 hover:bg-gray-700 rounded-md px-3 py-2 mb-2">
                About Us
              </Link>
              <Link to="/fake-store-react/contact" className="block text-white bg-gray-800 hover:bg-gray-700 rounded-md px-3 py-2 mb-2">
                Contact
              </Link>
            </div>
          </div>
        </>
      )}

      {/* Cart Overlay */}
      {isCartOpen && (
        <div className="fixed top-0 right-0 bottom-0 left-2/3 bg-white p-4 shadow-md overflow-y-auto z-50">
          <div className="z-50">
            <Cart cartItems={cartItems} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
