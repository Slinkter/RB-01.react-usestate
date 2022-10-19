import React, { useState } from "react";

const CounterApp = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h1> click : {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>incrementar</button>
            <button onClick={() => setCounter(counter - 1)}>decrementar</button>
            <button onClick={() => setCounter(0)}>reset</button>
        </div>
    );
};

export default CounterApp;
