import React, { useEffect, useRef, useState } from "react";
import getPost from "../Api/getPost";

const Card = () => {
    const [post, setPost] = useState({ title: "post #2" });
    const [loading, setLoading] = useState(true);
    const isMountedRef = useRef(true);

    useEffect(() => {
        getPostOnline();

        return () => {
            isMountedRef.current = false;
        };
    }, []);

    const getPostOnline = () => {
        getPost().then((data) => {
            setTimeout(() => {
                if (isMountedRef.current) {
                    setPost(data);
                    setLoading(false);
                }
            }, 2000);
        });
    };

    if (loading) return <h1>Loading ....</h1>;

    return (
        <div>
            <h1>{post.title}</h1>
        </div>
    );
};

export default Card;
