import React from "react";
import useCounter from "../hook/useCounter";

const CounterApp = () => {
    const [counter, incrementar, reset] = useCounter(5);

    return (
        <div>
            <h1>Click {counter}:</h1>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default CounterApp;
