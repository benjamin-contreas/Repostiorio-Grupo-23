import React from "react";
import HomeCard from "./HomeCard";

const Featured = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mt-10 text-center">Featured</h1>
            <div className="flex flex-wrap justify-center mt-5">
                <HomeCard
                    imageUrl="https://placekitten.com/300/200"
                    title="Card 1"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
                <HomeCard
                    imageUrl="https://placekitten.com/300/201"
                    title="Card 2"
                    text="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <HomeCard
                    imageUrl="https://placekitten.com/300/202"
                    title="Card 3"
                    text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
                />
            </div>
        </div>
    );
};

export default Featured;
