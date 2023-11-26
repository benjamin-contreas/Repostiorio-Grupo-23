import React from "react";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import ProductCard from "../ProductCard";
import HomeCard from "./HomeCard";

const Featured = () => {
    const { data } = useContext(ProductContext);

    if (!data) {
        return <div>Loading...</div>;
    }

    const product1 = data[5];
    const product2 = data[10];
    const product3 = data[18];

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-3xl font-bold mb-6 text-center">Featured Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Featured Product Cards */}
                <div className="w-full mx-2">
                    <HomeCard product={product1} />
                </div>
                <div className="w-full mx-2">
                    <HomeCard product={product2} />
                </div>
                <div className="w-full mx-2">
                    <HomeCard product={product3} />
                </div>
            </div>
        </div>
    );
};

export default Featured;
