// components/MoviePoster.js
import React from 'react';

const MoviePoster = ({ title, description, releaseDate, rating }) => {
    return (
        <div className="movie-poster">
            <img src="movie-Poster" alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Release Date: {releaseDate}</p>
        <p>Rating: {rating}</p>
        </div>
    );
};

export default MoviePoster;