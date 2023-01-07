import React, { useEffect, useState } from "react";

const Lifecycle = () => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    useEffect(() => {
        console.log(" no dependecy  ");
    });
    useEffect(() => {
        console.log(" useEffect []");
    }, []);
    useEffect(() => {
        console.log(" useEffect [counter1]");
    }, [counter1]);
    useEffect(() => {
        console.log(" useEffect [counter2]");
    }, [counter2]);
    useEffect(() => {
        console.log(" useEffect [counter1] [counter2]");
    }, [counter1, counter2]);

    return (
        <div className="container mt-5">
            <h1>Lifecycle</h1>
            <h3> C1 : {counter1}</h3>
            <h3> C2 : {counter2}</h3>
            <button
                className="btn btn-primary mx-2"
                onClick={() => setCounter1(counter1 + 1)}
            >
                aumentar c1
            </button>
            <button
                className="btn btn-secondary mx-2"
                onClick={() => setCounter2(counter2 + 1)}
            >
                aumentar c2
            </button>
        </div>
    );
};

export default Lifecycle;
