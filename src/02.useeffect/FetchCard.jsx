import React, { useCallback, useEffect, useState } from "react";
import getPost from "./Api/getPost";
import getUser from "./Api/getUser";

/* const initUser = {
    name: "sad",
    email: "sad@gamil.com",
};
const initPost = [
    {
        id: 1,
        title: "title 1",
    },
    {
        id: 2,
        title: "title 2",
    },
]; */

const FetchCard = () => {
    const [user, setUser] = useState({});
    const [post, setPost] = useState([]);
    const updateUser = () => {
        getUser()
            .then((data) => setUser(data))
            .catch((err) => console.log(err));
    };

    // depende de useEffect
    // funcion que queresmos memorizar para no renderizar
    // utilizar valor memorizado 
    const updatePost = useCallback(() => {
        getPost(user.id)
            .then((data) => setPost(data))
            .catch((err) => console.log(err));
    }, [user.id]);

    useEffect(() => {
        updateUser();

        return () => {};
    }, []);

    useEffect(() => {
        if (user?.id) {
            updatePost();
        }

        return () => {};
    }, [user, updatePost]);

    return (
        <div>
            <button
                onClick={() => {
                    updateUser();
                }}
            >
                Another User
            </button>

            <h1>{user.name}</h1>
            <h2>{user.email}</h2>
            <br />
            <h3>postS USER {user.id}</h3>
            <ul>
                {post.map((item) => {
                    return <li key={item.id}>{item.title}</li>;
                })}
            </ul>
        </div>
    );
};

export default FetchCard;
