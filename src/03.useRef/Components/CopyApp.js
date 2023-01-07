import React, { useRef, useState } from "react";

const CopyApp = () => {
    const [text, setText] = useState("");
    const [isCopied, setIsCopied] = useState(false);
    const inputRef = useRef(null);

    return (
        <div>
            <input
                type="text"
                ref={inputRef}
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    const input = inputRef.current;
                    input.select();
                    document.execCommand("copy");
                    setIsCopied(true);
                    setTimeout(() => {
                        setIsCopied(false);
                    }, 2000);
                }}
            >
                copy
            </button>
            {isCopied && <h1>Copiado</h1>}
        </div>
    );
};

export default CopyApp;
