import React, { useRef, useState } from "react";

const FocusApp = () => {
    const [text, setText] = useState("");
    const inputRef = useRef(null);

    return (
        <div>
            <input
                type="text"
                ref={inputRef}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                onClick={() => {
                    const input = inputRef.current;
                    input.focus();
                }}
            >
                focus
            </button>
        </div>
    );
};

export default FocusApp;
