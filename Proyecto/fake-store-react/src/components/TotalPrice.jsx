import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function TotalPrice() {
  const { totalPrice } = useContext(ProductContext);

  const precioTotal = totalPrice.reduce(function (acumulador, item) {
    return acumulador + item.price * item.quantity;
  }, 0);

  const roundPrecioTotal = Number(precioTotal.toFixed(2));

  return (
    <div>
      <span className='absolute m-3 bottom-5'>
        Total price: ${roundPrecioTotal}
      </span>
    </div>
  );
}

export default TotalPrice;
