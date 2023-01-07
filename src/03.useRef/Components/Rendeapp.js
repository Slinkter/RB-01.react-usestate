import React, { useEffect, useRef, useState } from "react";

const Rendeapp = () => {
    const [text, setText] = useState("");
    const renderRef = useRef(1);

    useEffect(() => {
        renderRef.current++;
    });

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                />
                <h1>render -{renderRef.current}</h1>
            </div>
        </div>
    );
};

export default Rendeapp;
