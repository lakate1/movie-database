// MoviePosterList.js
'use client';

import React, { useState, useEffect } from 'react';
import fetchMovies from './api';

const MoviePosterList = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovies()
      .then((data) => {
        console.log('Data:', data);
        if (data && data.results) {
          console.log('Data results:', data.results);
          console.log('Data results length:', data.results.length);
          setMovies(data.results);
        } else {
          console.error('Error: data.results is undefined');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setError(error);
      });
  }, []);

  if (!movies || movies.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="movie-container">
      {movies.map((movie) => (
        <MoviePoster
          key={movie.id}
          title={movie.title}
          description={movie.overview}
          releaseDate={movie.release_date}
          rating={movie.vote_average}
          posterPath={movie.poster_path}
        />
      ))}
      </div>
    </div>
  );
};

const MoviePoster = ({ title, description, releaseDate, rating, posterPath }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;

  return (
    <div className="movie-cards">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Release Date: {releaseDate}</p>
      <p>Rating: {rating}</p>
    </div>
  );
};

export default MoviePosterList;