import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function AddButton({ product }) {
  const { addToCart } = useContext(ProductContext);

  return (
    <div className='flex justify-end'>
      <button
        type='button'
        className='text-sm p-1.5 bg-sky-200 rounded hover:bg-sky-300 active:bg-sky-400'
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default AddButton;
