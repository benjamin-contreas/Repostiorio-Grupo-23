import React from "react";
import "./Home.css";
import Welcome from "../components/home/Welcome";
import Featured from "../components/home/Featured";

const Home = () => {
  return (
    <div>
        <Welcome />
        <Featured />
    </div>
  );
};

export default Home;
