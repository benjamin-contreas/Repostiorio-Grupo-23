import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function ShopNavbar() {
  const { selectCategory } = useContext(ProductContext);

  return (
    <div className="p-4 flex justify-center items-center">
      <div className="flex flex-col sm:flex-row items-center font-bold border border-neutral-400 px-6 py-3 rounded-md shadow-md">
        <a
          className="hover:shadow-xl rounded-md active:bg-stone-100 active:shadow-md mb-4 sm:mb-0 sm:mr-4"
          href="#"
        >
          Nosotros
        </a>
        <hr className="border-r border-stone-500 h-6 sm:hidden" />
        <a
          className="hover:shadow-xl rounded-md active:bg-stone-100 active:shadow-md mb-4 sm:mb-0 sm:ml-4"
          href="#"
          onClick={() => selectCategory("men's clothing")}
        >
          Men's clothing
        </a>
        <a
          className="hover:shadow-xl rounded-md active:bg-stone-100 active:shadow-md mb-4 sm:mb-0 sm:ml-4"
          href="#"
          onClick={() => selectCategory("women's clothing")}
        >
          Women's clothing
        </a>
        <a
          className="hover:shadow-xl rounded-md active:bg-stone-100 active:shadow-md mb-4 sm:mb-0 sm:ml-4"
          href="#"
          onClick={() => selectCategory("jewelry")}
        >
          Jewelry
        </a>
        <a
          className="hover:shadow-xl rounded-md active:bg-stone-100 active:shadow-md sm:ml-4"
          href="#"
          onClick={() => selectCategory("electronics")}
        >
          Electronics
        </a>
      </div>
    </div>
  );
}

export default ShopNavbar;
