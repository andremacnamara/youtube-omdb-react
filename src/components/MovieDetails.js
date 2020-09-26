import React from 'react';
import MovieDeatils from './styles/MovieDetails';

const MovieDetails = ({ movie: { Actors, Awards, Plot, Poster, Title } }) => {
    return (
        <MovieDeatils className="movie-details" style={{ display: 'flex' }}>
            <img src={Poster} alt={Title} />
            <div className="contents">
                <h2>{Title}</h2>
                <h4>{Actors}</h4>
                <p>{Plot}</p>
                <p>{Awards}</p>
            </div>
            
            
        </MovieDeatils>
    )
};

export default MovieDetails;