import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {
    const { movies = [] } = props
    return (
        <div className='movies'>
            {movies.length ? (
                movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
            ) : (
                <h4>Not found</h4>
            )}
        </div>
    );
};

export default MovieList;