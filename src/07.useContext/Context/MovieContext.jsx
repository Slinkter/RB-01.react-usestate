import React, { createContext } from "react";
import initialMovies from "../db/initialMovies";

const MovieContext = createContext();

const MoviesProvider = ({ children }) => {
    const data = { movies: initialMovies };

    return (
        <MovieContext.Provider value={data}>{children}</MovieContext.Provider>
    );
};
export { MoviesProvider };
export default MovieContext;
