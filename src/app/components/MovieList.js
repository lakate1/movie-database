// components/MovieList.js
import React from 'react';
import MoviePoster from './MoviePoster';

const movies = [
  {
    id: 1,
    title: 'Movie 1',
    description: 'This is a movie',
    releaseDate: '2022-01-01',
    posterUrl: 'https://example.com/movie1-poster.jpg',
  },
  {
    id: 2,
    title: 'Movie 2',
    description: 'This is another movie',
    releaseDate: '2022-02-01',
    posterUrl: 'https://example.com/movie2-poster.jpg',
  },
];

const MovieList = () => {
  return (
    <div>
      {movies.map((movie) => (
        <MoviePoster
          key={movie.id}
          title={movie.title}
          description={movie.description}
          releaseDate={movie.releaseDate}
          posterUrl={movie.posterUrl}
        />
      ))}
    </div>
  );
};

export default MovieList;