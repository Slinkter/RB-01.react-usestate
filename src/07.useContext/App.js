import React, { useState } from "react";
import NavBar from "./components/Navbar.jsx";
import MovieList from "./components/MovieList.jsx";
import UserContext, { UserProvider } from "./Context/UserContext.jsx";
import { MoviesProvider } from "./Context/MovieContext.jsx";

/* const inituser = {
    id: 1,
    name: "Jhonny",
    favoriteMovie: [1, 2, 3],
}; */
const App = () => {
    /*   const [user, setUser] = useState(inituser);

    const login = () => {
        setUser(inituser);
    };
    const logout = () => {
        setUser(null);
    };

    const data = { user, login, logout }; */

    return (
        <div>
            <UserProvider>
                <MoviesProvider>
                    <NavBar />
                    <MovieList />
                </MoviesProvider>
            </UserProvider>
        </div>
    );
};

export default App;
