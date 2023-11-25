import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import CartCard from "./CartCard";
import TotalPrice from "./TotalPrice";

function Cart({ cartItems }) {
  const { toggleCart } = useContext(ProductContext);

  return (
    <div>
      <button
        className='mb-3 p-1 text-sm rounded-md bg-stone-100 shadow hover:bg-stone-200 hover:shadow-xl active:shadow-md'
        onClick={toggleCart}
      >
        Back
      </button>

      {cartItems.map((product) => (
        <CartCard key={product.id} product={product} />
      ))}

      <TotalPrice />
    </div>
  );
}

export default Cart;
