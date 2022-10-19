import React, { useState } from "react";

const ErrorApp = () => {
    const [error, setError] = useState("");

    return (
        <div>
            <button onClick={() => setError(!error)}> error 1</button>

            {error && <h1> existe un error con la api</h1>}
        </div>
    );
};

export default ErrorApp;
