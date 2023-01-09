import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

const Movie = ({ movie }) => {
    const { user, toggleFavoriteMovieToUser } = useContext(UserContext);

    const imgStlye = {
        height: "200px",
        objectFit: "cover",
    };

    const isFavorite = user?.favoriteMovies?.includes(movie.id);

    return (
        <div className="card">
            <img
                src={movie.imageUrl}
                alt={movie.title}
                className="card-img-top"
                style={imgStlye}
            />
            <div className="card-body">
                <h4>{movie.title}</h4>
                {user && (
                    <button
                        className={
                            isFavorite
                                ? "btn btn-success"
                                : "btn btn-outline-primary"
                        }
                        onClick={() => toggleFavoriteMovieToUser(movie.id)}
                    >
                        Favorito
                    </button>
                )}
            </div>
        </div>
    );
};

export default Movie;
