import React, { useEffect, useState } from "react";

const ResizeApp = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const isMobile = windowWidth < 768;

    useEffect(() => {
        const handleChangeResize = () => {
            console.log("useEffect");
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleChangeResize);

        return () => {
            console.log(" des useEffect");
            window.removeEventListener("resize", handleChangeResize);
        };
    }, []);

    return (
        <div>
            <h1>window width</h1>
            <p>{windowWidth}</p>

            {isMobile && <h2> show only mobile device </h2>}
        </div>
    );
};

export default ResizeApp;
