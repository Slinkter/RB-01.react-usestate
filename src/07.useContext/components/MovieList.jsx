import React, { useContext } from "react";
import MovieContext from "../Context/MovieContext";

import Movie from "./Movie";

const MovieList = () => {
    const { movies } = useContext(MovieContext);

    return (
        <div className="container">
            <div className="row">
                {movies.map((movie) => (
                    <div key={movie.id} className="col-md-4">
                        <Movie movie={movie} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieList;
