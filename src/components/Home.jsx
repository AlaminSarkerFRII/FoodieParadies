import React from "react";
import Food from "./Food";
import HeadlineCards from "./HeadlineCards";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <HeadlineCards />
      <Food/>
    </div>
  );
};

export default Home;
