import React from "react";

const HomeCard = ({ imageUrl, title, text }) => {
  return (
    <div className="flex-shrink-0 max-w-sm mx-2">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
        <div className="px-4 py-2">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
