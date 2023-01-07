import React, { useState } from "react";

const useCounter = (initvalue) => {
    const [counter, setCounter] = useState(initvalue);
    const incrementar = () => {
        setCounter(counter + 1);
    };

    const reset = () => {
        setCounter(initvalue);
    };

    return [counter, incrementar, reset];
};

export default useCounter;
