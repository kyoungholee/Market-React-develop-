import React from 'react'

            //오브젝트 형태로 받아와서 원하는 부분만 빼올수 있다. 
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
