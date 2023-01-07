import React, { useState } from "react";
import Card from "./Card";

const LoadingApp = () => {
    const [showButton, setShow] = useState(false);

    return (
        <div>
            <button
                onClick={() => {
                    setShow(!showButton);
                }}
            >
                show
            </button>
            {showButton && <Card />}
        </div>
    );
};

export default LoadingApp;
