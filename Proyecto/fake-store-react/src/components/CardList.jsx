import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "./ProductCard";

function CardList() {
  const { filteredData } = useContext(ProductContext);

  return (
    <div className='grid grid-cols-3 gap-10 mx-20 my-10 content-center'>
      {filteredData?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default CardList;
