import React from "react";
import { useBackground } from "../hook/useBackground";

const MouseApp = () => {
    const { position, background } = useBackground();
    console.log(position, background);
    return (
        <div style={{ background, height: "100vh" }}>
            <pre>{JSON.stringify(position)}</pre>
        </div>
    );
};

export default MouseApp;
