import React from "react";
import Hero from "../heros/Hero";

const Home = ({ movies }) => {
  return (
    <div>
      <Hero movies={movies}></Hero>
    </div>
  );
};

export default Home;
