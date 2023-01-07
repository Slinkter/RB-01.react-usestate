import { useEffect, useState, useMemo } from "react";

import Item from "./Item";
import List from "./List";

const initUser = [
    { id: 1, name: "luis" },
    { id: 2, name: "ana" },
];

function App() {
    const [users, setUsers] = useState(initUser);
    const [text, setText] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        console.log("App render");

        return () => {};
    });

    const filteredUser = useMemo(
        () =>
            users.filter((user) => {
                console.log("filter process");
                return user.name.toLowerCase().includes(search.toLowerCase());
            }),
        [search, users]
    );

    return (
        <div className="App">
            <h1>App</h1>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button
                onClick={() => {
                    console.log("search");
                    setSearch(text);
                }}
            >
                search
            </button>
            <button
                onClick={() => {
                    const newUser = { id: Date.now(), name: text };
                    setUsers([...users, newUser]);
                    setText("");
                }}
            >
                Add
            </button>

            <List users={filteredUser} />
        </div>
    );
}

export default App;
