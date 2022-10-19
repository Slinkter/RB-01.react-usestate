import React, { useState } from "react";

const ConditionApp = () => {
    const [condition, setCondition] = useState(true);

    return (
        <div>
            <h1>ConditionApp</h1>
            <button onClick={() => setCondition(!condition)}>Show</button>
            {condition ? <h2> show messsage </h2> : <h2> hide message</h2>}
        </div>
    );
};

export default ConditionApp;
