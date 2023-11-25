import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import logo from "../assets/shopping_cart.png";
import carrito from "../assets/shopping-cart.svg";
import circle from "../assets/circle.png";
import Cart from "./Cart";

function ShopNavbar() {
  const { cartItems, selectCategory, isCartOpen, toggleCart } =
    useContext(ProductContext);

  return (
    <div className="p-4 flex justify-between items-center">
      <div className="flex items-center font-bold border border-neutral-400 px-6 py-3 rounded-md shadow-md">
        <a
          className="hover:shadow-xl rounded-md active:bg-stone-100 active:shadow-md mr-4"
          href="#"
        >
          Nosotros
        </a>
        <hr className="border-r border-stone-500 h-6" />
        <a
          className="hover:shadow-xl rounded-md active:bg-stone-100 active:shadow-md ml-4"
          href="#"
          onClick={() => selectCategory("men's clothing")}
        >
          Men's clothing
        </a>
        <a
          className="hover:shadow-xl rounded-md active:bg-stone-100 active:shadow-md ml-8"
          href="#"
          onClick={() => selectCategory("women's clothing")}
        >
          Women's clothing
        </a>
        <a
          className="hover:shadow-xl rounded-md active:bg-stone-100 active:shadow-md ml-8"
          href="#"
          onClick={() => selectCategory("jewelery")}
        >
          Jewelery
        </a>
        <a
          className="hover:shadow-xl rounded-md active:bg-stone-100 active:shadow-md ml-8"
          href="#"
          onClick={() => selectCategory("electronics")}
        >
          Electronics
        </a>
      </div>

      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search products"
          className="mr-2 px-2 py-1 border border-blue-400 rounded w-[250px]"
        />
        <button
          type="button"
          className="px-4 py-1.5 bg-blue-400 rounded hover:bg-blue-500 active:bg-blue-600"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default ShopNavbar;
