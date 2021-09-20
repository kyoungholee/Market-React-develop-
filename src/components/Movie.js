import React from 'react'


function Movie( {movie}) {
    return (
        <div>
            <div className = "movie">
                <div className="">{movie.title}</div>
                <div className="">{movie.src}</div>
            </div>
            
        </div>
    );
}

export default Movie;
