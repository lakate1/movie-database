import React from "react";
import MovieList from "./components/MovieList";

const movies = [
  {
    id: 1,
    title: "Movie 1",
    releaseDate: "2022-01-01",
    rating: 5,
  },
  {
    id: 2,
    title: "Movie 2",
    releaseDate: "2022-02-01",
    rating: 4,
  },
  {
    id: 3,
    title: "Movie 3",
    releaseDate: "2022-03-01",
    rating: 3,
  },
  {
    id: 4,
    title: "Movie 4",
    releaseDate: "2022-04-01",
    rating: 2,
  },
  {
    id: 5,
    title: "Movie 5",
    releaseDate: "2022-05-01",
    rating: 1,
  },
  {
    id: 6,
    title: "Movie 6",
    releaseDate: "2022-06-01",
    rating: 1,
  },
  {
    id: 7,
    title: "Movie 7",
    releaseDate: "2022-07-01",
    rating: 1,
  },
  {
    id: 8,
    title: "Movie 8",
    releaseDate: "2022-08-01",
    rating: 1,
  },
  {
    id: 9,
    title: "Movie 9",
    releaseDate: "2022-09-01",
    rating: 1,
  },
];

const Home = () => {
  return (
    <div>
      <h1>Movie Database</h1>
      <MovieList/>
    </div>
  );
};

export default Home;