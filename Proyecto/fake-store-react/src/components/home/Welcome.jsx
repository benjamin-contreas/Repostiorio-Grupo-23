import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="h-[500px] bg-cover bg-no-repeat bg-image relative">
      <div className="flex flex-col h-full items-center justify-center text-white">
        <h1 className="text-5xl text-center font-bold mb-4">
          Welcome to My Website
        </h1>
        <Link to="/fake-store-react/shop">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Start Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
