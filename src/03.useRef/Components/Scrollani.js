import React, { useEffect, useRef, useState } from "react";

const Scrollani = () => {
    const [background, setBackground] = useState("blue");

    const divRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const div = divRef.current;
            const { y } = div.getBoundingClientRect();
            const backgroundColor = y <= 0 ? "orange" : "red";
            setBackground(backgroundColor)
            console.log(y);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <div ref={divRef} style={{ background, height: "180vh" }}>
                <h1>adsa</h1>
            </div>
        </div>
    );
};

export default Scrollani;
