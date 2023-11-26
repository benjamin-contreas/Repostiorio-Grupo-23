import React from "react";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import ProductCard from "../ProductCard";

const Featured = () => {
  const { data } = useContext(ProductContext);
  if (!data) {
    return <div>Loading...</div>;
  }

  const product1 = data[5];
  const product2 = data[10];
  const product3 = data[18];

  return (
    <div className="container mx-auto">
        <h2 className="text-2xl text-center font-bold my-10">
            Featured Products
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
        <div>
          <ProductCard product={product1} />
        </div>
        <div>
          <ProductCard product={product2} />
        </div>
        <div>
          <ProductCard product={product3} />
        </div>
      </div>
    </div>
  );
};

export default Featured;
