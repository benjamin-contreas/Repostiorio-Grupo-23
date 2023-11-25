import { useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function CartCard({ product }) {
  const { removeFromCart, totalPrice, setTotalPrice, removeFromTotalPrice } =
    useContext(ProductContext);
  const [cantidad, setCantidad] = useState(1);

  const truncatedTitle =
    product.title.length > 22
      ? `${product.title.slice(0, 22)}...`
      : product.title;

  const disminuirCantidad = (id) => {
    const nuevaLista = totalPrice.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    );
    setTotalPrice(nuevaLista);
  };

  const decrementarCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
      disminuirCantidad(product.id);
    }
  };

  const aumentarCantidad = (id) => {
    const nuevaLista = totalPrice.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setTotalPrice(nuevaLista);
  };

  const incrementarCantidad = () => {
    setCantidad(cantidad + 1);
    aumentarCantidad(product.id);
  };

  const ejecutarEliminar = () => {
    removeFromCart(product.id);
    removeFromTotalPrice(product.id);
  };

  return (
    <div className='relative flex items-center h-16 my-2 p-2 border border-stone-300 rounded-md'>
      <div className='flex items-center w-14 h-14'>
        <img
          className='w-full h-full object-contain'
          src={product.image}
          alt=''
        />
      </div>
      <div className='relative flex items-center w-full'>
        <span className='absolute mx-3 text-sm text-stone-500'>
          {truncatedTitle}
        </span>
        <span className='absolute text-sm left-52'>
          Price: ${product.price}
        </span>
      </div>

      <div className='absolute flex items-center top-0 right-0 mt-3 mr-2'>
        <button
          className='w-4 h-4 rounded text-sm flex items-center justify-center bg-sky-200 hover:bg-sky-300 active:bg-sky-400'
          onClick={decrementarCantidad}
        >
          -
        </button>
        <div className='mx-0.5 w-5 h-5 text-sm rounded bg-stone-200 flex justify-center'>
          {cantidad}
        </div>
        <button
          className='w-4 h-4 rounded text-sm flex items-center justify-center bg-sky-200 hover:bg-sky-300 active:bg-sky-400'
          onClick={incrementarCantidad}
        >
          +
        </button>
      </div>
      <div className='absolute flex items-center bottom-0 right-0 mb-1 mr-3'>
        <button
          className='px-1 text-xs rounded text-stone-50 bg-red-500 hover:shadow-md active:shadow-sm'
          onClick={ejecutarEliminar}
        >
          delete
        </button>
      </div>
    </div>
  );
}

export default CartCard;
