import React from "react";
import MoviePosterList from "./components/MoviePosterList";

const Home = () => {
  return (
    <div>
      <h1>Trending Movies</h1>
      <MoviePosterList/>
    </div>
  );
};

export default Home;