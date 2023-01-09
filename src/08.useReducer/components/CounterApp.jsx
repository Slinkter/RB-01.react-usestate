import React, { useReducer } from "react";

const initState = 0;
const init = (value) => {
    return value;
};

const types = {
    increment: "increment",
    decrement: "decrement",
    reset: "reset",
};

const reducer = (state, action) => {
    switch (action.type) {
        case types.increment:
            return state + 1;
        case types.decrement:
            return state - 1;
        case types.reset:
            return initState;
        default:
            return state;
    }
};

const CounterApp = () => {
    const [state, dispatch] = useReducer(reducer, initState, init);

    return (
        <div>
            <h1>Click : {state}</h1>
            <button onClick={() => dispatch({ type: types.increment })}>
                Incremente
            </button>
            <button onClick={() => dispatch({ type: types.decrement })}>
                decrement
            </button>
            <button onClick={() => dispatch({ type: types.reset })}>
                reset
            </button>
        </div>
    );
};

export default CounterApp;
