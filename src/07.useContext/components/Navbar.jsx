import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

const Navbar = () => {
    const { user, login, logout } = useContext(UserContext);

    const newUser = user;

    return (
        <nav className="navbar navbar-dark bg-dark mb-4">
            <div className="container">
                <span className="navbar-brand">
                    <h2>{newUser ? `Hola ${newUser.name}` : `Bievenid@ `}</h2>
                </span>

                {newUser ? (
                    <button className="btn btn-primary" onClick={logout}>
                        cerrar sesion
                    </button>
                ) : (
                    <button className="btn btn-primary" onClick={login}>
                        Iniciar sesion
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
