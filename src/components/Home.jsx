import React from "react";
import Category from "./Category";
import Food from "./Food";
import HeadlineCards from "./HeadlineCards";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <HeadlineCards />
      <Food/>
      <Category/>
    </div>
  );
};

export default Home;
